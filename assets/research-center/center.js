(() => {
  'use strict';
  const data = window.RESEARCH_CENTER;
  if (!data) return;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const projects = data.projects;
  const directions = data.directions.map(d => ({...d,isDirection:true}));
  const topics = (data.topics || []).map(p => ({...p,isTopic:true}));
  const all = [...projects,...directions,...topics];
  const byId = new Map(all.map(p => [p.id,p]));
  const badge = p => `<span class="status-pill status-${escape(p.status || 'direction')}">${escape(p.statusText)}</span>`;
  const image = (src,alt,cls='',options={}) => {
    const preview=window.RESEARCH_IMAGES?.[src];
    const size=preview?[preview.width,preview.height]:data.imageSizes?.[src];
    const sizes=options.sizes || '(max-width: 700px) 92vw, (max-width: 1100px) 44vw, 580px';
    return `<img class="${escape(cls)}" src="${escape(preview?.src||src)}" alt="${escape(alt)}" ${preview?`srcset="${escape(preview.srcset)}" sizes="${escape(sizes)}"`:''} ${size?`width="${size[0]}" height="${size[1]}"`:''} loading="${options.eager?'eager':'lazy'}" decoding="async" ${options.eager?'fetchpriority="high"':''} ${options.position?`style="object-position:${escape(options.position)}"`:''} />`;
  };
  window.researchImage=image;
  const credit = p => p.coverCredit ? `<span class="visual-credit">${escape(p.coverCredit)}</span>` : '';
  const link = l => `<a href="${escape(l.url)}" ${l.url.startsWith('http')?'target="_blank" rel="noopener"':''}>${escape(l.label)} <span aria-hidden="true">↗</span></a>`;
  const cards = (items,compact=false) => items.map((p,i) => `<a class="work-card ${compact?'work-card--compact':''} ${!compact&&i===0?'work-card--featured':''}" href="#${escape(p.id)}" data-project-id="${escape(p.id)}" style="--work-accent:${escape(p.color || '#cfcbff')}"><div class="work-card-media">${image(p.cover,p.coverAlt || p.title,'',{sizes:compact?'(max-width: 900px) 92vw, (max-width: 1400px) 30vw, 440px':'(max-width: 620px) 92vw, (max-width: 1400px) 50vw, 700px'})}<span class="work-card-number">${escape(p.code)}</span>${credit(p)}</div><div class="work-card-copy"><div class="work-card-meta"><span>${escape(p.kindLabel)}</span>${badge(p)}</div><h3>${escape(p.title)}</h3><p class="work-card-en">${escape(p.en)}</p>${!compact||p.cardSummary?`<p class="work-card-summary">${escape(compact?p.cardSummary:p.summary)}</p>`:''}<div class="work-card-bottom"><span>${escape(p.period)}</span><span>查看项目 <i aria-hidden="true">↗</i></span></div></div></a>`).join('');
  const focus = directions.find(d=>d.featured);
  const news = (data.news || []).filter(n => byId.has(n.projectId));
  const newsCard = (n, featured = false) => {
    const p = byId.get(n.projectId);
    return `<a class="lab-news-card ${featured?'lab-news-card--featured':''}" href="#${escape(p.id)}">
      ${featured?`<div class="lab-news-media">${image(p.cover,p.coverAlt || p.title)}${credit(p)}</div>`:''}
      <div class="lab-news-copy"><div class="lab-news-meta"><span class="lab-news-category">${escape(n.category)}</span><span>${escape(n.year)}</span>${n.isExample?'<span class="lab-news-example">新闻示例</span>':''}</div>
      <h3>${escape(n.title)}</h3><p>${escape(n.summary)}</p><div class="lab-news-bottom"><span>${escape(n.venue)}</span><span class="lab-news-arrow" aria-hidden="true">↗</span></div></div></a>`;
  };
  document.getElementById('home-collection').innerHTML = `
    <section class="lab-news-section" id="lab-news" aria-labelledby="lab-news-title">
      <header class="section-heading home-module-heading"><div class="section-kicker"><span>02</span> Lab News</div><h2 id="lab-news-title">实验室新闻</h2><p>论文接收、学术发表与研究进展，记录实验室的新动态。</p></header>
      <div class="lab-news-grid">${news.length?newsCard(news[0],true):''}<div class="lab-news-list">${news.slice(1).map(n=>newsCard(n)).join('')}</div></div>
    </section>
    <section class="home-core-section" id="core-research" aria-labelledby="core-research-title">
      <header class="section-heading home-module-heading"><div class="section-kicker"><span>03</span> Core Research</div><h2 id="core-research-title">实验室最新核心研究项目</h2><p>围绕个性化人智交互，探索研究问题、实验发现与设计实践。</p></header>
      <a class="focus-spotlight" href="#${escape(focus.id)}"><div><span class="focus-eyebrow">重点研究方向 · Research Focus</span><h3>${escape(focus.title)}</h3><p>${escape(focus.summary)}</p><strong>了解研究主题与相关成果 ↗</strong></div><div class="focus-spotlight-image">${image(focus.cover,focus.coverAlt)}${credit(focus)}</div></a>
      <div class="home-featured-grid">${cards(['triadic-embodied-feedback','project-01','privacy-in-motion'].map(id=>byId.get(id)),true)}</div><a class="home-all-projects" href="#page-projects">查看全部 ${projects.length} 个研究与作品 ↗</a>
    </section>`;
  document.getElementById('research-index').innerHTML = `<header class="section-heading"><div class="section-kicker"><span>02</span> Research Focus</div><h2 id="research-title">研究方向</h2><p>围绕 ${directions.length} 个方向展开研究与设计，重点探索个性化人智交互的用户体验与信任。每个方向呈现相关工作、已有发现与后续问题。</p></header><div class="direction-list">${directions.map((d,i)=>`<a class="direction-card ${d.featured?'direction-card--featured':''}" href="#${escape(d.id)}"><span class="direction-number">${String(i+1).padStart(2,'0')}</span><div>${d.featured?'<span class="focus-eyebrow">重点研究方向</span>':''}<span class="direction-en">${escape(d.en)}</span><h3>${escape(d.title)}</h3><p>${escape(d.summary)}</p><ul class="keyword-list">${d.keywords.map(k=>`<li>${escape(k)}</li>`).join('')}</ul><span class="direction-link">查看研究内容与相关成果 ↗</span></div><div class="direction-image">${image(d.cover,d.coverAlt || d.title,'',{sizes:'(max-width: 900px) 78vw, (max-width: 1400px) 32vw, 480px'})}${credit(d)}</div></a>`).join('')}</div>`;
  document.getElementById('project-index').innerHTML = `<header class="section-heading"><div class="section-kicker"><span>03</span> Research & Design</div><h2 id="projects-title">研究与作品</h2><p>从理论模型、文献综合和实证研究，到交互原型与设计探索。相近主题汇入系列项目，各项工作呈现研究背景、方法、发现与设计成果。</p></header><div class="project-toolbar"><div class="project-filters" role="group" aria-label="项目类型筛选"><button type="button" data-kind="all" aria-pressed="true">全部项目</button><button type="button" data-kind="research" aria-pressed="false">研究项目</button><button type="button" data-kind="design" aria-pressed="false">设计实践</button></div><label class="project-search"><span class="sr-only">搜索研究与作品</span><input id="project-search" type="search" placeholder="搜索项目、研究主题…" autocomplete="off" /></label></div><p class="project-count" aria-live="polite"></p><div class="work-grid" id="work-grid"></div><div class="work-empty" hidden>没有找到匹配的项目。<button type="button" id="clear-project-search">显示全部项目</button></div>`;
  let selectedKind='all';
  const search=document.getElementById('project-search');
  function filter(){
    const q=search.value.trim().toLocaleLowerCase();
    const visible=projects.filter(p=>(selectedKind==='all'||p.kind===selectedKind)&&`${p.title} ${p.en} ${p.summary} ${(p.tags||[]).join(' ')} ${p.sections.map(s=>s.title+' '+(s.paragraphs||[]).join(' ')).join(' ')}`.toLocaleLowerCase().includes(q));
    document.getElementById('work-grid').innerHTML=cards(visible);
    document.querySelector('.project-count').textContent=`${String(visible.length).padStart(2,'0')} 个项目`;
    document.querySelector('.work-empty').hidden=visible.length>0;
  }
  document.querySelectorAll('[data-kind]').forEach(button=>button.addEventListener('click',()=>{selectedKind=button.dataset.kind;document.querySelectorAll('[data-kind]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));filter();}));
  search.addEventListener('input',filter);
  document.getElementById('clear-project-search').addEventListener('click',()=>{search.value='';document.querySelector('[data-kind="all"]').click();search.focus();});
  filter();
  function resolveHash(hash){
    for(const id of data.removedRoutes||[])if(hash===`#${id}`||hash.startsWith(`#${id}-`))return '#page-projects';
    for(const [from,to] of Object.entries(data.aliases||{}))if(hash===`#${from}`||hash.startsWith(`#${from}-`))return '#'+to;
    return hash;
  }
  let rendered='';
  function detailForHash(hash){const canonical=resolveHash(hash);return all.find(p=>canonical===`#${p.id}`||canonical.startsWith(`#${p.id}-`));}
  function exploreOverview(p){
    if(!p.exploreGroups?.length)return '';
    return `<section class="research-explorer" id="${escape(p.id)}-explore" aria-label="研究主题与项目"><span class="focus-eyebrow">Research & Discoveries</span><h2>研究主题与相关成果</h2><p>选择一项研究，查看背景、方法、发现与设计成果。</p>${p.exploreGroups.map(g=>`<div class="explore-group"><h3>${g.url?link({url:g.url,label:g.title}):escape(g.title)}</h3><div class="explore-grid">${g.items.map((item,i)=>{const q=typeof item==='string'?byId.get(item):item;if(!q)return '';return `<a class="explore-card" href="#${escape(q.id)}"><div class="explore-copy"><span class="explore-index">${String(i+1).padStart(2,'0')}</span><div><strong>${escape(q.title)}</strong><span class="explore-state">${escape(q.statusText)}</span>${q.cardSummary||q.summary?`<p class="explore-summary">${escape(q.cardSummary||q.summary)}</p>`:''}</div><span class="explore-arrow" aria-hidden="true">↗</span></div><div class="explore-reveal">${image(q.cover,q.coverAlt||q.title,'',{sizes:'(max-width: 700px) 92vw, (max-width: 1100px) 34vw, 440px'})}<span class="explore-enter">进入研究详情 ↗</span></div></a>`}).join('')}</div></div>`).join('')}</section>`;
  }
  function figures(items){return (items||[]).map(f=>`<figure class="research-figure"><a href="${escape(f.src)}" target="_blank" rel="noopener" aria-label="查看大图：${escape(f.caption)}">${image(f.src,f.caption,'',{sizes:'(max-width: 620px) 92vw, (max-width: 1100px) 70vw, 900px'})}</a><figcaption><span class="figure-kind">${escape(f.kind||'研究图示')}</span>${escape(f.caption)}<a href="${escape(f.src)}" target="_blank" rel="noopener">查看大图 ↗</a></figcaption></figure>`).join('');}
  function matrix(m){return m?`<div class="evidence-table-wrap" role="region" aria-label="研究数据与要点" tabindex="0"><table class="evidence-table"><thead><tr>${m.headers.map(t=>`<th scope="col">${escape(t)}</th>`).join('')}</tr></thead><tbody>${m.rows.map(row=>`<tr>${row.map((v,i)=>i===0?`<th scope="row">${escape(v)}</th>`:`<td>${escape(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:'';}
  function demos(p){return p.demos?.length?`<section class="project-detail-block demo-section" id="${escape(p.id)}-demo"><span class="focus-eyebrow">Live Prototype</span><h2>网页原型与体验入口</h2>${p.demos.map(d=>`<a class="demo-card" href="${escape(d.url)}" target="_blank" rel="noopener"><div class="demo-browser"><span aria-hidden="true">● ● ●</span><span>${escape(new URL(d.url).hostname)}</span><span aria-hidden="true">↗</span></div>${image(d.image,d.title+' · 实际网页截图','',{sizes:'(max-width: 620px) 92vw, (max-width: 1100px) 70vw, 900px'})}<div class="demo-copy"><h3>${escape(d.title)}</h3><p>${escape(d.description)}</p><strong>打开原型网页 ↗</strong></div></a>`).join('')}</section>`:'';}
  function sectionHTML(p,s){return `<section class="project-detail-block ${p.isDirection?'direction-narrative':''}" id="${escape(p.id)}-${escape(s.id)}">${Object.entries(p.sectionAliases||{}).filter(([,to])=>to===s.id).map(([from])=>`<span id="${escape(p.id)}-${escape(from)}" class="anchor-alias"></span>`).join('')}${s.eyebrow?`<span class="focus-eyebrow">${escape(s.eyebrow)}</span>`:''}<h2>${escape(s.title)}</h2>${(s.paragraphs||[]).map(t=>`<p>${escape(t)}</p>`).join('')}${s.points?`<ul class="detail-points">${s.points.map(t=>`<li>${escape(t)}</li>`).join('')}</ul>`:''}${matrix(s.matrix)}${s.note?`<p class="evidence-note">${escape(s.note)}</p>`:''}${s.flow?`<ol class="research-flow">${s.flow.map(t=>`<li>${escape(t)}</li>`).join('')}</ol>`:''}${figures(s.figures)}${s.takeaway?`<div class="phase-takeaway"><span>研究要点</span><p>${escape(s.takeaway)}</p></div>`:''}${s.links?.length?`<div class="phase-links">${s.links.map(link).join('')}</div>`:''}</section>`;}
  function renderDetail(hash){
    const p=detailForHash(hash);
    if(!p)return;
    document.title=`${p.title} · Trust Personal AI Lab`;
    const origin=window.researchNavigation?.origin();
    const renderKey=p.id+'|'+(origin?.id||'');
    if(rendered===renderKey)return;
    rendered=renderKey;
    const back=origin ? (origin.hash || '#home') : (p.isDirection?'#page-research':p.isTopic?'#direction-embodied-trust':p.topicId?'#'+p.topicId:'#page-projects');
    const backText=origin?.label || (p.isDirection?'研究方向':p.isTopic?'总研究方向':p.topicId?p.topicTitle:'研究与作品');
    const related=(p.related||[]).map(id=>byId.get(id)).filter(Boolean);
    const sections=p.sections||[];
    const detail=document.getElementById('project-detail');
    detail.setAttribute('aria-label',p.title);
    detail.innerHTML=`<div class="project-detail-hero center-detail-hero has-cover" id="${escape(p.id)}" style="--work-accent:${escape(p.color||'#cfcbff')}">${image(p.detailCover||p.cover,p.detailCoverAlt||p.coverAlt||p.title,'detail-cover',{sizes:'100vw',eager:true,position:p.coverPosition||'center'})}<div class="site-shell project-detail-hero-content"><a class="project-back-link" data-research-back href="${escape(back)}">‹ ${backText}</a><p class="project-detail-kicker">${escape(p.code)} · ${escape(p.statusText)}</p><h1>${escape(p.title)}</h1><p class="project-detail-subtitle">${escape(p.en)}<br>${escape(p.kindLabel||'研究方向')}</p></div>${credit(p)}</div><div class="site-shell project-detail-layout"><aside class="project-detail-sidebar" aria-label="项目内容导航"><a data-research-back href="${escape(back)}">‹ 返回${backText}</a><nav aria-label="详情页目录"><a href="#${escape(p.id)}-overview">概述</a>${p.exploreGroups?.length?`<a href="#${escape(p.id)}-explore">研究主题与成果</a>`:''}${p.demos?.length?`<a href="#${escape(p.id)}-demo">网页原型与体验</a>`:''}${sections.map(s=>`<a href="#${escape(p.id)}-${escape(s.id)}">${s.phase?`<span class="sidebar-phase">${escape(s.phase)}</span>`:''}${escape(s.title)}</a>`).join('')}${p.links?.length?`<a href="#${escape(p.id)}-outputs">论文与相关成果</a>`:''}${related.length?`<a href="#${escape(p.id)}-related">相关研究与项目</a>`:''}</nav></aside><article class="project-detail-content"><section class="project-detail-block project-detail-lead" id="${escape(p.id)}-overview"><p>${escape(p.lead||p.summary)}</p></section><div class="research-facts">${(p.meta||[]).map(m=>`<div><span>${escape(m.label)}</span><strong>${escape(m.value)}</strong></div>`).join('')}</div>${p.owner?`<p class="project-attribution">${escape(p.owner)}</p>`:''}${exploreOverview(p)}${demos(p)}${sections.map(s=>sectionHTML(p,s)).join('')}${p.links?.length?`<section class="project-detail-block" id="${escape(p.id)}-outputs"><h2>论文与相关成果</h2><div class="research-links">${p.links.map(link).join('')}</div></section>`:''}${related.length?`<section class="project-detail-block" id="${escape(p.id)}-related"><h2>相关研究与项目</h2><div class="related-grid">${cards(related,true)}</div></section>`:''}${p.topicId?`<a class="direction-return" href="#${escape(p.topicId)}">研究主题：${escape(p.topicTitle)} ↗</a>`:''}${p.directionId?`<a class="direction-return" href="#${escape(p.directionId)}">所属研究方向：${escape(p.direction)} ↗</a>`:''}<a class="detail-back-bottom" data-research-back href="${escape(back)}">← 返回${backText}</a></article></div>`;
    document.title=`${p.title} · Trust Personal AI Lab`;
  }
  window.researchCenter={detailForHash,renderDetail,resolveHash};
})();
