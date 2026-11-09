(() => {
  'use strict';
  const data = window.RESEARCH_CENTER;
  if (!data) return;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const projects = data.projects;
  const directions = data.directions.map(d => ({...d,isDirection:true}));
  const all = [...projects,...directions];
  const byId = new Map(all.map(p => [p.id,p]));
  const badge = p => `<span class="status-pill status-${escape(p.status || 'direction')}">${escape(p.statusText)}</span>`;
  const image = (src,alt,cls='') => `<img class="${cls}" src="${escape(src)}" alt="${escape(alt)}" loading="lazy" decoding="async" />`;
  const credit = p => p.coverCredit ? `<span class="visual-credit">${escape(p.coverCredit)}</span>` : '';
  const link = l => `<a href="${escape(l.url)}" ${l.url.startsWith('http')?'target="_blank" rel="noopener"':''}>${escape(l.label)} <span aria-hidden="true">↗</span></a>`;
  const cards = (items,compact=false) => items.map((p,i) => `<a class="work-card ${compact?'work-card--compact':''} ${!compact&&i===0?'work-card--featured':''}" href="#${escape(p.id)}" data-project-id="${escape(p.id)}" style="--work-accent:${escape(p.color || '#cfcbff')}"><div class="work-card-media">${image(p.cover,p.coverAlt || p.title)}<span class="work-card-number">${escape(p.code)}</span>${credit(p)}</div><div class="work-card-copy"><div class="work-card-meta"><span>${escape(p.kindLabel)}</span>${badge(p)}</div><h3>${escape(p.title)}</h3><p class="work-card-en">${escape(p.en)}</p>${compact?'':`<p class="work-card-summary">${escape(p.summary)}</p>`}<div class="work-card-bottom"><span>${escape(p.period)}</span><span>查看项目 <i aria-hidden="true">↗</i></span></div></div></a>`).join('');
  const focus = directions.find(d=>d.featured);
  document.getElementById('home-collection').innerHTML = `<a class="focus-spotlight" href="#${escape(focus.id)}"><div><span class="focus-eyebrow">重点研究方向 · Research Focus</span><h2>${escape(focus.title)}</h2><p>${escape(focus.summary)}</p><strong>了解已有研究与阶段进展 ↗</strong></div><div class="focus-spotlight-image">${image(focus.cover,focus.coverAlt)}${credit(focus)}</div></a><header class="section-heading"><div class="section-kicker"><span>Explore</span> Research into Practice</div><h2>从研究问题到设计实践</h2><p>探索 ${projects.length} 个项目，了解具体的研究内容、方法、发现与阶段进展。</p></header><div class="home-featured-grid">${cards(['triadic-embodied-feedback','project-01','privacy-in-motion'].map(id=>byId.get(id)),true)}</div><a class="home-all-projects" href="#page-projects">查看全部研究与作品 ↗</a>`;
  document.getElementById('research-index').innerHTML = `<header class="section-heading"><div class="section-kicker"><span>02</span> Research Focus</div><h2 id="research-title">研究方向</h2><p>围绕 ${directions.length} 个方向展开研究与设计，重点探索结构化具身反馈如何建立用户对虚拟智能体的信任。每个方向呈现相关工作、已有发现与后续问题。</p></header><div class="direction-list">${directions.map((d,i)=>`<a class="direction-card ${d.featured?'direction-card--featured':''}" href="#${escape(d.id)}"><span class="direction-number">${String(i+1).padStart(2,'0')}</span><div>${d.featured?'<span class="focus-eyebrow">重点研究方向</span>':''}<span class="direction-en">${escape(d.en)}</span><h3>${escape(d.title)}</h3><p>${escape(d.summary)}</p><ul class="keyword-list">${d.keywords.map(k=>`<li>${escape(k)}</li>`).join('')}</ul><span class="direction-link">查看研究内容与阶段进展 ↗</span></div><div class="direction-image">${image(d.cover,d.coverAlt || d.title)}${credit(d)}</div></a>`).join('')}</div>`;
  document.getElementById('project-index').innerHTML = `<header class="section-heading"><div class="section-kicker"><span>03</span> Research & Design</div><h2 id="projects-title">研究与作品</h2><p>从理论模型、文献综合和实证研究，到交互原型与设计探索。相近主题汇入系列项目，各项工作在详情页按阶段展开。</p></header><div class="project-toolbar"><div class="project-filters" role="group" aria-label="项目类型筛选"><button type="button" data-kind="all" aria-pressed="true">全部项目</button><button type="button" data-kind="research" aria-pressed="false">研究项目</button><button type="button" data-kind="design" aria-pressed="false">设计实践</button></div><label class="project-search"><span class="sr-only">搜索研究与作品</span><input id="project-search" type="search" placeholder="搜索项目、研究主题…" autocomplete="off" /></label></div><p class="project-count" aria-live="polite"></p><div class="work-grid" id="work-grid"></div><div class="work-empty" hidden>没有找到匹配的项目。<button type="button" id="clear-project-search">显示全部项目</button></div>`;
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
  function phaseOverview(p,sections){
    const phases=sections.filter(s=>s.phase);
    if(!phases.length)return '';
    return `<section class="phase-overview" aria-label="阶段总览"><span class="focus-eyebrow">Research Journey</span><h2>${escape(p.phaseHeading||'研究阶段')}</h2>${p.phaseIntro?`<p>${escape(p.phaseIntro)}</p>`:''}<ol class="phase-overview-grid">${phases.map(s=>`<li><a href="#${escape(p.id)}-${escape(s.id)}"><span class="phase-step">${escape(s.phase)}</span><div><strong>${escape(s.title)}</strong><span class="phase-state">${escape(s.phaseStatus)}</span></div><span aria-hidden="true">↘</span></a></li>`).join('')}</ol></section>`;
  }
  function sectionHTML(p,s){return `<section class="project-detail-block ${s.phase?'phase-section':''}" id="${escape(p.id)}-${escape(s.id)}">${s.phase?`<div class="phase-label"><span>阶段 ${escape(s.phase)}</span><span>${escape(s.phaseStatus)}</span></div>`:''}<h2>${escape(s.title)}</h2>${(s.paragraphs||[]).map(t=>`<p>${escape(t)}</p>`).join('')}${s.points?`<ul class="detail-points">${s.points.map(t=>`<li>${escape(t)}</li>`).join('')}</ul>`:''}${s.takeaway?`<div class="phase-takeaway"><span>阶段要点</span><p>${escape(s.takeaway)}</p></div>`:''}${s.links?.length?`<div class="phase-links">${s.links.map(link).join('')}</div>`:''}</section>`;}
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
    detail.innerHTML=`<div class="project-detail-hero center-detail-hero has-cover" id="${escape(p.id)}" style="--work-accent:${escape(p.color||'#cfcbff')}"><img class="detail-cover" src="${escape(p.cover)}" alt="${escape(p.coverAlt||p.title)}" style="object-position:${escape(p.coverPosition||'center')}" fetchpriority="high" /><div class="site-shell project-detail-hero-content"><a class="project-back-link" href="${back}">‹ ${backText}</a><p class="project-detail-kicker">${escape(p.code)} · ${escape(p.statusText)}</p><h1>${escape(p.title)}</h1><p class="project-detail-subtitle">${escape(p.en)}<br>${escape(p.kindLabel||'研究方向')}</p></div>${credit(p)}</div><div class="site-shell project-detail-layout"><aside class="project-detail-sidebar" aria-label="项目内容导航"><a href="${back}">‹ 返回${backText}</a><nav aria-label="详情页目录"><a href="#${escape(p.id)}-overview">概述</a>${sections.map(s=>`<a href="#${escape(p.id)}-${escape(s.id)}">${s.phase?`<span class="sidebar-phase">${escape(s.phase)}</span>`:''}${escape(s.title)}</a>`).join('')}${p.links?.length?`<a href="#${escape(p.id)}-outputs">论文与相关成果</a>`:''}${related.length?`<a href="#${escape(p.id)}-related">相关研究与项目</a>`:''}</nav></aside><article class="project-detail-content"><section class="project-detail-block project-detail-lead" id="${escape(p.id)}-overview"><p>${escape(p.lead||p.summary)}</p></section><div class="research-facts">${(p.meta||[]).map(m=>`<div><span>${escape(m.label)}</span><strong>${escape(m.value)}</strong></div>`).join('')}</div>${p.owner?`<p class="project-attribution">${escape(p.owner)}</p>`:''}${phaseOverview(p,sections)}${sections.map(s=>sectionHTML(p,s)).join('')}${p.links?.length?`<section class="project-detail-block" id="${escape(p.id)}-outputs"><h2>论文与相关成果</h2><div class="research-links">${p.links.map(link).join('')}</div></section>`:''}${related.length?`<section class="project-detail-block" id="${escape(p.id)}-related"><h2>相关研究与项目</h2><div class="related-grid">${cards(related,true)}</div></section>`:''}${p.directionId?`<a class="direction-return" href="#${escape(p.directionId)}">所属研究方向：${escape(p.direction)} ↗</a>`:''}<a class="detail-back-bottom" href="${back}">← 返回${backText}</a></article></div>`;
    document.title=`${p.title} · Trust Personal AI Lab`;
  }
  window.researchCenter={detailForHash,renderDetail,resolveHash};
})();
