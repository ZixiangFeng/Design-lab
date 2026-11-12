'use strict';
// Browser-free behavioral regression for the research site's navigation module.
// Usage: node tests/navigation.test.cjs [path/to/navigation.js]
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const sourcePath = process.argv[2] || require('node:path').join(__dirname, '../assets/research-center/navigation.js');
const source = fs.readFileSync(sourcePath, 'utf8');

function harness(initialHash = '#page-research', options = {}) {
  let currentURL = new URL('https://www.hustdesign.top/' + initialHash);
  let index = 0, seq = 0, frameId = 0;
  const stack = [{url:currentURL.href, state:options.initialState || null}];
  const windows = new Map(), docs = new Map(), frames = new Map(), tasks = [];
  const errors = [], renders = [], cards = [];
  const counters = {replace:0, push:0, attempts:0, native:0};
  const limits = {quota:options.quota ?? Infinity, failReplace:options.failReplace ?? false, failPush:false, ignorePush:false, failGo:false};
  const clone = value => value == null ? value : structuredClone(value);
  function listen(map, name, handler) { if (!map.has(name)) map.set(name, []); map.get(name).push(handler); }
  function fire(map, name, event = {}) {
    for (const handler of map.get(name) || []) {
      try { handler({type:name,...event}); } catch (error) { errors.push(error); }
    }
  }
  function quota(kind) {
    counters.attempts++;
    if (limits[kind === 'replace' ? 'failReplace' : 'failPush'] || counters.replace + counters.push >= limits.quota) {
      const error = new Error('History state write quota exceeded'); error.name = 'SecurityError'; throw error;
    }
    counters[kind]++;
  }
  function setURL(value) { currentURL = new URL(value, currentURL); }
  function nativeNavigate(value) {
    const target = new URL(value, currentURL);
    if (target.href === currentURL.href) return;
    counters.native++;
    const oldURL = currentURL.href;
    stack.splice(index + 1); stack.push({url:target.href,state:null}); index++;
    setURL(target.href);
    tasks.push(() => fire(windows, 'hashchange', {oldURL,newURL:currentURL.href}));
  }
  const location = {
    get href(){return currentURL.href}, set href(v){nativeNavigate(v)},
    get hash(){return currentURL.hash}, set hash(v){nativeNavigate(v.startsWith('#')?v:'#'+v)},
    get origin(){return currentURL.origin}, get pathname(){return currentURL.pathname}, get search(){return currentURL.search},
    assign:nativeNavigate, replace(value){setURL(value);stack[index].url=currentURL.href;tasks.push(()=>fire(windows,'hashchange'))}
  };
  const history = {
    get state(){return clone(stack[index].state)},
    replaceState(state, title, url){quota('replace');stack[index].state=clone(state);if(url){setURL(url);stack[index].url=currentURL.href}},
    pushState(state,title,url){if(limits.ignorePush)return;quota('push');setURL(url);stack.splice(index+1);stack.push({url:currentURL.href,state:clone(state)});index++},
    go(delta){if(limits.failGo)throw new Error('History traversal failed');tasks.push(()=>{const next=Math.max(0,Math.min(index+delta,stack.length-1));if(next===index)return;const oldURL=currentURL.href;index=next;setURL(stack[index].url);fire(windows,'popstate',{state:history.state});if(oldURL!==currentURL.href)fire(windows,'hashchange',{oldURL,newURL:currentURL.href})})},
    back(){this.go(-1)}, forward(){this.go(1)}, scrollRestoration:'auto'
  };
  const session = new Map();
  const sessionStorage = {getItem:k=>session.get(k)||null,setItem:(k,v)=>session.set(k,String(v)),removeItem:k=>session.delete(k)};
  const raf = handler => { const id=++frameId;frames.set(id,handler);return id; };
  const window = {
    scrollX:0, scrollY:0, location, history, sessionStorage,
    researchCenter:{
      resolveHash:hash=>hash.startsWith('#old-trust')?'#direction-embodied-trust':hash,
      detailForHash:hash=>{
        for(const [id,title] of [['direction-embodied-trust','个性化人智交互用户体验与信任研究'],['project-01','Project One'],['project-02','Project Two']]){
          if(hash==='#'+id||hash.startsWith('#'+id+'-'))return {id,title,isDirection:id.startsWith('direction-')};
        }
        return null;
      }
    },
    addEventListener:(name,handler)=>listen(windows,name,handler),
    removeEventListener:(name,handler)=>windows.set(name,(windows.get(name)||[]).filter(h=>h!==handler)),
    dispatchEvent:event=>fire(windows,event.type,event),
    requestAnimationFrame:raf,cancelAnimationFrame:id=>frames.delete(id),
    scrollTo({left=0,top=0}){const changed=this.scrollX!==left||this.scrollY!==top;this.scrollX=left;this.scrollY=top;if(changed)tasks.push(()=>fire(windows,'scroll'))},
    setTimeout:handler=>{const id=++seq;tasks.push(handler);return id},clearTimeout(){},
  };
  const document = {
    hidden:false,visibilityState:'visible',
    addEventListener:(name,handler)=>listen(docs,name,handler),
    querySelectorAll:selector=>cards.filter(card=>selector.startsWith('.')&&card.classList.contains(selector.slice(1))),
  };
  function flushTasks() { while(tasks.length){try{tasks.shift()()}catch(error){errors.push(error)}} }
  function flush() {
    for(let count=0;tasks.length||frames.size;count++){
      if(count>1000)throw new Error('Mock event loop did not settle');
      while(tasks.length){try{tasks.shift()()}catch(error){errors.push(error)}}
      const pending=[...frames];frames.clear();for(const [,handler] of pending){try{handler(0)}catch(error){errors.push(error)}}
    }
  }
  const context={window,document,history,location,sessionStorage,URL,Map,Set,Date,Math,console,requestAnimationFrame:raf,cancelAnimationFrame:id=>frames.delete(id),setTimeout:window.setTimeout,clearTimeout:window.clearTimeout,
    HashChangeEvent:class{constructor(type,properties={}){this.type=type;Object.assign(this,properties)}},DOMException};
  vm.runInNewContext(source,context,{filename:sourcePath});
  try {
    window.researchNavigation.start((opts={})=>{
      renders.push({hash:location.hash,preserveScroll:!!opts.preserveScroll});
      if(!opts.preserveScroll){window.scrollX=0;window.scrollY=location.hash.endsWith('-findings')?900:0;}
    });
  } catch(error) { errors.push(error); }
  flush();
  function createLink(hash,{card=false,returning=false,absoluteTop=1600,kind='explore-card'}={}) {
    const classes=new Set(card?[kind]:[]);
    const link={
      href:new URL(hash,location.href).href,target:'',absoluteTop,
      classList:{contains:value=>classes.has(value)},
      getAttribute:name=>name==='href'?hash:null,
      hasAttribute:name=>name==='data-research-back'&&returning,
      getBoundingClientRect:()=>({top:link.absoluteTop-window.scrollY}),
      closest:selector=>selector==='a[href]'?link:card&&selector.split(',').some(s=>classes.has(s.trim().slice(1)))?link:null,
    };
    if(card)cards.push(link);
    return link;
  }
  function clickLink(link,settle=true){
    let prevented=false;
    const event={type:'click',button:0,metaKey:false,ctrlKey:false,shiftKey:false,altKey:false,get defaultPrevented(){return prevented},target:link,preventDefault(){prevented=true}};
    for(const handler of docs.get('click')||[]){try{handler(event)}catch(error){errors.push(error)}}
    if(!prevented)nativeNavigate(link.href);
    if(settle)flush();
    return {prevented};
  }
  function scroll(top,settle=true){window.scrollY=top;fire(windows,'scroll');if(settle)flush()}
  return {window,history,location,errors,renders,counters,limits,stack,flush,flushTasks,scroll,createLink,click:clickLink,nativeNavigate,fire:(name,event)=>fire(windows,name,event),get index(){return index}};
}

const tests=[];
function test(name,run){tests.push({name,run})}
function noErrors(app){assert.equal(app.errors.length,0,[...new Set(app.errors.map(e=>e.name+': '+e.message))].join('; '))}
function displayed(app,hash){assert.equal(app.location.hash,hash);assert.equal(app.renders.at(-1)?.hash,hash)}

test('Sustained scroll stays below history quota and first menu click navigates',()=>{
  const app=harness('#project-01',{quota:100});
  for(let n=1;n<=240;n++)app.scroll(n*8);
  app.click(app.createLink('#page-research'));
  noErrors(app);displayed(app,'#page-research');
  assert.ok(app.counters.replace<20,`Scrolling wrote history ${app.counters.replace} times`);
});
test('A failed replaceState does not block successful menu pushState',()=>{
  const app=harness();app.limits.failReplace=true;
  const clicked=app.click(app.createLink('#page-team'));
  noErrors(app);displayed(app,'#page-team');assert.equal(clicked.prevented,true);
});
test('A failed pushState preserves native link fallback',()=>{
  const app=harness();app.limits.failPush=true;
  const clicked=app.click(app.createLink('#page-projects'));
  noErrors(app);assert.equal(clicked.prevented,false);assert.equal(app.counters.native,1);displayed(app,'#page-projects');
});
test('A silently ignored pushState preserves native link fallback',()=>{
  const app=harness();app.limits.ignorePush=true;const clicked=app.click(app.createLink('#page-team'));
  noErrors(app);assert.equal(clicked.prevented,false);assert.equal(app.counters.native,1);displayed(app,'#page-team');
});
test('Initial history write failure still renders and binds working menu links',()=>{
  const app=harness('#page-research',{failReplace:true});
  noErrors(app);displayed(app,'#page-research');app.limits.failPush=true;
  const clicked=app.click(app.createLink('#page-publications'));
  noErrors(app);assert.equal(clicked.prevented,false);displayed(app,'#page-publications');
});
test('Native fragment changes render even when persistence is unavailable',()=>{
  const app=harness();app.limits.failReplace=true;app.nativeNavigate('#page-team');app.flush();
  noErrors(app);displayed(app,'#page-team');
});
test('Back and forward restore the latest per-entry scroll position',()=>{
  const app=harness();app.scroll(600);app.click(app.createLink('#project-01',{card:true}));app.scroll(400);
  app.history.back();app.flush();noErrors(app);displayed(app,'#page-research');assert.equal(app.window.scrollY,600);
  app.scroll(900);app.history.forward();app.flush();noErrors(app);displayed(app,'#project-01');assert.equal(app.window.scrollY,400);
  app.history.back();app.flush();noErrors(app);displayed(app,'#page-research');assert.equal(app.window.scrollY,900);
});
test('Section anchors retain project origin; return restores card position after layout shift',()=>{
  const app=harness('#direction-embodied-trust-explore');
  const card=app.createLink('#project-01',{card:true,absoluteTop:1600});app.scroll(1400);app.click(card);
  app.click(app.createLink('#project-01-findings'));noErrors(app);displayed(app,'#project-01-findings');
  card.absoluteTop=1800;
  app.click(app.createLink('#direction-embodied-trust-explore',{returning:true}));
  noErrors(app);displayed(app,'#direction-embodied-trust-explore');assert.equal(card.getBoundingClientRect().top,200);
});
test('A failed history traversal falls back to the return link',()=>{
  const app=harness();app.click(app.createLink('#project-01',{card:true}));app.limits.failGo=true;
  const clicked=app.click(app.createLink('#page-research',{returning:true}));
  noErrors(app);assert.equal(clicked.prevented,false);displayed(app,'#page-research');
});
test('Clicking the current menu renders its page top without a duplicate history entry',()=>{
  const app=harness();app.scroll(800);const length=app.stack.length;app.click(app.createLink('#page-research'));
  noErrors(app);displayed(app,'#page-research');assert.equal(app.stack.length,length);assert.equal(app.window.scrollY,0);
});
test('Queued restore cannot overwrite a newer menu navigation',()=>{
  const app=harness();app.scroll(650);app.click(app.createLink('#project-01',{card:true}));app.scroll(300);
  // A history traversal may queue two restoration frames. Navigate before they run.
  app.history.back();
  // Process history event but leave its RAF restoration outstanding.
  app.flushTasks();
  app.click(app.createLink('#page-team'),false);app.click(app.createLink('#page-publications'),false);app.flush();
  noErrors(app);displayed(app,'#page-publications');assert.equal(app.window.scrollY,0);
});

let failed=0;
for(const item of tests){try{item.run();console.log('PASS '+item.name)}catch(error){failed++;console.log('FAIL '+item.name+'\n  '+error.message)}}
console.log(JSON.stringify({source:sourcePath,total:tests.length,passed:tests.length-failed,failed}));
process.exitCode=failed?1:0;
