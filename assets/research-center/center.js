(() => {
  'use strict';
  const data = window.RESEARCH_CENTER;
  if (!data) return;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const projects = data.projects;
  const directions = data.directions.map(d => ({...d,isDirection:true}));
  const all = [...projects,...directions];
  const byId = new Map(all.map(p => [p.id,p]));
  const badge = p => `<span class="status-pill status-${escape(p.status)}">${escape(p.statusText)}</span>`;
  const image = (src,alt,cls='') => `<img class="${cls}" src="${escape(src)}" alt="${escape(alt)}" loading="lazy" decoding="async" />`;
  const figure = f => `<figure class="research-figure">${image(f.src,f.alt || f.caption)}<figcaption>${escape(f.caption)} <a href="${escape(f.src)}" target="_blank" rel="noopener" aria-label="查看原尺寸图片：${escape(f.caption)}">查看大图 ↗</a></figcaption></figure>`;
  const cards = (items,compact=false) => items.map((p,i) => `<a class="work-card ${compact?'work-card--compact':''} ${!compact&&i===0?'work-card--featured':''}" href="#${escape(p.id)}" data-project-id="${escape(p.id)}" style="--work-accent:${escape(p.color || '#cfcbff')}"><div class="work-card-media">${p.cover?image(p.cover,p.coverAlt || p.title):`<div class="work-card-symbol" aria-hidden="true">${escape(p.symbol || 'AI')}</div>`}<span class="work-card-number">${escape(p.code)}</span></div><div class="work-card-copy"><div class="work-card-meta"><span>${escape(p.kindLabel)}</span>${badge(p)}</div><h3>${escape(p.title)}</h3><p class="work-card-en">${escape(p.en)}</p>${compact?'':`<p class="work-card-summary">${escape(p.summary)}</p>`}<div class="work-card-bottom"><span>${escape(p.period)}</span><span>查看项目 <i aria-hidden="true">↗</i></span></div></div></a>`).join('');
  document.getElementById('home-collection').innerHTML = `<header class="section-heading"><div class="section-kicker"><span>Explore</span> Research into Practice</div><h2>从研究问题到设计实践</h2><p>探索 ${projects.length} 个项目，了解我们如何研究人与技术的关系，并将发现转化为交互、产品与服务。</p></header><div class="home-featured-grid">${cards(['project-01','privacy-in-motion','safesync'].map(id=>byId.get(id)),true)}</div><a class="home-all-projects" href="#page-projects">查看全部研究与作品 ↗</a>`;
  document.getElementById('research-index').innerHTML = `<header class="section-heading"><div class="section-kicker"><span>02</span> Research Focus</div><h2 id="research-title">研究方向</h2><p>从人与 AI 的信任关系出发，连接支持性沟通、驾驶人因、家庭隐私与服务设计。每个方向汇集相关研究、方法与设计实践。</p></header><div class="direction-list">${directions.map((d,i)=>`<a class="direction-card" href="#${escape(d.id)}"><span class="direction-number">0${i+1}</span><div><span class="direction-en">${escape(d.en)}</span><h3>${escape(d.title)}</h3><p>${escape(d.summary)}</p><ul class="keyword-list">${d.keywords.map(k=>`<li>${escape(k)}</li>`).join('')}</ul><span class="direction-link">探索方向与相关项目 ↗</span></div><div class="direction-image">${d.cover?image(d.cover,d.title):`<span>${escape(d.symbol)}</span>`}</div></a>`).join('')}</div>`;
  document.getElementById('project-index').innerHTML = `<header class="section-heading"><div class="section-kicker"><span>03</span> Research & Design</div><h2 id="projects-title">研究与作品</h2><p>汇集研究中心课题与成员的研究、设计实践。了解每个项目的问题、过程与产出，从论文发现走向可体验的设计。</p></header><div class="project-toolbar"><div class="project-filters" role="group" aria-label="项目类型筛选"><button type="button" data-kind="all" aria-pressed="true">全部项目</button><button type="button" data-kind="research" aria-pressed="false">研究项目</button><button type="button" data-kind="design" aria-pressed="false">设计实践</button></div><label class="project-search"><span class="sr-only">搜索研究与作品</span><input id="project-search" type="search" placeholder="搜索项目、研究主题…" autocomplete="off" /></label></div><p class="project-count" aria-live="polite"></p><div class="work-grid" id="work-grid"></div><div class="work-empty" hidden>没有找到匹配的项目。<button type="button" id="clear-project-search">显示全部项目</button></div>`;
  let selectedKind='all';
  const search=document.getElementById('project-search');
  function filter(){
    const q=search.value.trim().toLocaleLowerCase();
    const visible=projects.filter(p=>(selectedKind==='all'||p.kind===selectedKind)&&`${p.title} ${p.en} ${p.summary} ${(p.tags||[]).join(' ')}`.toLocaleLowerCase().includes(q));
    document.getElementById('work-grid').innerHTML=cards(visible);
    document.querySelector('.project-count').textContent=`${String(visible.length).padStart(2,'0')} 个项目`;
    document.querySelector('.work-empty').hidden=visible.length>0;
  }
  document.querySelectorAll('[data-kind]').forEach(button=>button.addEventListener('click',()=>{selectedKind=button.dataset.kind;document.querySelectorAll('[data-kind]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));filter();}));
  search.addEventListener('input',filter);
  document.getElementById('clear-project-search').addEventListener('click',()=>{search.value='';document.querySelector('[data-kind="all"]').click();search.focus();});
  filter();
  let rendered='';
  function detailForHash(hash){return all.find(p=>hash===`#${p.id}`||hash.startsWith(`#${p.id}-`));}
  function renderDetail(hash){
    const p=detailForHash(hash);
    if(!p||rendered===p.id)return;
    rendered=p.id;
    const back=p.isDirection?'#page-research':'#page-projects';
    const backText=p.isDirection?'研究方向':'研究与作品';
    const related=(p.related||[]).map(id=>byId.get(id)).filter(Boolean);
    const sections=p.sections||[];
    const detail=document.getElementById('project-detail');
    detail.setAttribute('aria-label',p.title);
    detail.innerHTML=`<div class="project-detail-hero center-detail-hero ${p.cover?'has-cover':'abstract-cover'}" id="${escape(p.id)}" style="--work-accent:${escape(p.color||'#cfcbff')}">${p.cover?`<img class="detail-cover" src="${escape(p.cover)}" alt="${escape(p.coverAlt||p.title)}" style="object-position:${escape(p.coverPosition||'center')}" fetchpriority="high" />`:`<span class="detail-symbol" aria-hidden="true">${escape(p.symbol||'AI')}</span>`}<div class="site-shell project-detail-hero-content"><a class="project-back-link" href="${back}">‹ ${backText}</a><p class="project-detail-kicker">${escape(p.code)} · ${escape(p.statusText)}</p><h1>${escape(p.title)}</h1><p class="project-detail-subtitle">${escape(p.en)}<br>${escape(p.kindLabel||'研究方向')}</p></div></div><div class="site-shell project-detail-layout"><aside class="project-detail-sidebar" aria-label="项目内容导航"><a href="${back}">‹ 返回${backText}</a><nav aria-label="详情页目录"><a href="#${escape(p.id)}-overview">概述</a>${sections.map(s=>`<a href="#${escape(p.id)}-${escape(s.id)}">${escape(s.title)}</a>`).join('')}${p.links?.length?`<a href="#${escape(p.id)}-outputs">相关成果</a>`:''}${related.length?`<a href="#${escape(p.id)}-related">相关项目</a>`:''}</nav></aside><article class="project-detail-content"><section class="project-detail-block project-detail-lead" id="${escape(p.id)}-overview"><p>${escape(p.lead||p.summary)}</p></section><div class="research-facts">${(p.meta||[]).map(m=>`<div><span>${escape(m.label)}</span><strong>${escape(m.value)}</strong></div>`).join('')}</div>${p.owner?`<p class="project-attribution">${escape(p.owner)}</p>`:''}${sections.map(s=>`<section class="project-detail-block" id="${escape(p.id)}-${escape(s.id)}"><h2>${escape(s.title)}</h2>${(s.paragraphs||[]).map(t=>`<p>${escape(t)}</p>`).join('')}${s.points?`<ul class="detail-points">${s.points.map(t=>`<li>${escape(t)}</li>`).join('')}</ul>`:''}${s.figure?figure(s.figure):''}${(s.figures||[]).map(figure).join('')}</section>`).join('')}${p.links?.length?`<section class="project-detail-block" id="${escape(p.id)}-outputs"><h2>相关成果</h2><div class="research-links">${p.links.map(l=>`<a href="${escape(l.url)}" ${l.url.startsWith('http')?'target="_blank" rel="noopener"':''}>${escape(l.label)} <span aria-hidden="true">↗</span></a>`).join('')}</div></section>`:''}${related.length?`<section class="project-detail-block" id="${escape(p.id)}-related"><h2>相关项目</h2><div class="related-grid">${cards(related,true)}</div></section>`:''}<a class="detail-back-bottom" href="${back}">← 返回${backText}</a></article></div>`;
    document.title=`${p.title} · Trust Personal AI Lab`;
  }
  window.researchCenter={detailForHash,renderDetail};
})();
