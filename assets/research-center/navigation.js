(() => {
  'use strict';
  const stateKey = 'researchNavigation';
  const newId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  let current;
  let render;
  let restoring = false;
  let scrollFrame = 0;
  const pageKey = hash => window.researchCenter.detailForHash(hash)?.id || (['', '#home', '#join', '#lab-news', '#core-research'].includes(hash) ? 'home' : hash);
  const pageLabel = hash => window.researchCenter.detailForHash(hash)?.title || ({'#page-research':'研究方向','#page-projects':'研究与作品','#page-team':'研究团队','#page-publications':'学术成果'}[hash] || '首页');
  const readEntry = () => history.state?.[stateKey];
  const writeEntry = entry => history.replaceState({...history.state, [stateKey]:entry}, '', location.href);

  function savePosition(link) {
    if (!current || restoring || current.hash !== location.hash) return;
    const card = link?.closest('.explore-card, .work-card, .direction-card, .focus-spotlight, .lab-news-card');
    const reference = card ? {
      type: ['explore-card','work-card','direction-card','focus-spotlight','lab-news-card'].find(c => card.classList.contains(c)),
      href: card.getAttribute('href'),
      top: card.getBoundingClientRect().top
    } : null;
    current = {...current, scroll:[window.scrollX,window.scrollY], reference};
    writeEntry(current);
  }

  function restorePosition(entry) {
    const entryId = entry.id;
    restoring = true;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (current.id !== entryId) return;
      let top = entry.scroll?.[1] || 0;
      if (entry.reference) {
        const ref = entry.reference;
        const card = [...document.querySelectorAll(`.${ref.type}`)].find(el => el.getAttribute('href') === ref.href);
        if (card) top = window.scrollY + card.getBoundingClientRect().top - ref.top;
      }
      window.scrollTo({left:entry.scroll?.[0] || 0, top:Math.max(0,top), behavior:'instant'});
      restoring = false;
    }));
  }

  function show(restore) {
    restoring = false;
    render({preserveScroll:restore || !location.hash});
    if (restore) restorePosition(current);
  }

  function navigate(hash, returning = false, link) {
    const canonical = window.researchCenter.resolveHash(hash);
    savePosition(link);
    if (canonical === current.hash) {
      render();
      return;
    }
    const source = current;
    const cardEntry = Boolean(link?.closest('.explore-card, .work-card, .direction-card, .focus-spotlight, .lab-news-card'));
    const origin = returning ? null : !cardEntry && pageKey(source.hash) === pageKey(canonical) ? source.origin : {
      id:source.id, index:source.index, hash:source.hash, label:pageLabel(source.hash)
    };
    current = {id:newId(), index:source.index+1, hash:canonical, origin, scroll:[0,0]};
    history.pushState({...history.state, [stateKey]:current}, '', canonical || location.pathname + location.search);
    show(false);
    // Keep the existing home animation and other hash observers in sync.
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }

  function onHistoryChange() {
    const stored = readEntry();
    if (stored?.id === current.id && stored.hash === location.hash) return;
    if (stored?.hash === location.hash) {
      current = stored;
      show(true);
    } else {
      // A fragment edited in the address bar has no app-created history entry.
      current = {id:newId(), index:(current?.index || 0)+1, hash:location.hash, origin:null, scroll:[0,0]};
      writeEntry(current);
      show(false);
    }
  }

  function start(applyRoute) {
    render = applyRoute;
    history.scrollRestoration = 'manual';
    const canonical = window.researchCenter.resolveHash(location.hash);
    if (canonical !== location.hash) history.replaceState(history.state, '', canonical);
    const stored = readEntry();
    const resume = stored?.hash === location.hash;
    current = resume ? stored : {id:newId(), index:0, hash:location.hash, origin:null, scroll:[0,0]};
    writeEntry(current);
    show(resume);
    document.addEventListener('click', event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a[href]');
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
      event.preventDefault();
      const returning = link.hasAttribute('data-research-back');
      if (returning && current.origin && current.origin.index < current.index) {
        savePosition();
        history.go(current.origin.index - current.index);
      } else {
        navigate(url.hash, returning, link);
      }
    });
    window.addEventListener('popstate', onHistoryChange);
    window.addEventListener('hashchange', onHistoryChange);
    window.addEventListener('scroll', () => {
      if (restoring || scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {scrollFrame = 0; savePosition();});
    }, {passive:true});
    window.addEventListener('pagehide', () => savePosition());
  }
  window.researchNavigation = {start, origin:() => current?.origin};
})();
