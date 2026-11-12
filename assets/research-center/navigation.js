(() => {
  'use strict';
  const stateKey = 'researchNavigation';
  const newId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  const positions = new Map();
  let current;
  let render;
  let restoring = false;
  let restoreVersion = 0;
  const pageKey = hash => window.researchCenter.detailForHash(hash)?.id || (['', '#home', '#join', '#lab-news', '#core-research'].includes(hash) ? 'home' : hash);
  const pageLabel = hash => window.researchCenter.detailForHash(hash)?.title || ({'#page-research':'研究方向','#page-projects':'研究与作品','#page-team':'研究团队','#page-publications':'学术成果'}[hash] || '首页');
  const readEntry = () => history.state?.[stateKey];
  // Scroll snapshots live in memory. Persist only when leaving an entry, never per frame.
  const remember = entry => positions.set(entry.id, entry);
  function writeEntry(entry) {
    remember(entry);
    try {
      history.replaceState({...history.state, [stateKey]:entry}, '', location.href);
      return true;
    } catch {
      // Saving a scroll position must not prevent a visitor from following a link.
      return false;
    }
  }

  function savePosition(link, persist = false) {
    if (!current || restoring || current.hash !== location.hash) return;
    const card = link?.closest('.explore-card, .work-card, .direction-card, .focus-spotlight, .lab-news-card');
    const reference = card ? {
      type: ['explore-card','work-card','direction-card','focus-spotlight','lab-news-card'].find(c => card.classList.contains(c)),
      href: card.getAttribute('href'),
      top: card.getBoundingClientRect().top
    } : null;
    current = {...current, scroll:[window.scrollX,window.scrollY], reference};
    remember(current);
    if (persist) writeEntry(current);
  }

  function restorePosition(entry, version) {
    restoring = true;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (current.id !== entry.id || version !== restoreVersion) return;
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
    const version = ++restoreVersion;
    restoring = false;
    render({preserveScroll:restore || !location.hash});
    if (restore) restorePosition(current, version);
  }

  function navigate(hash, returning = false, link) {
    const canonical = window.researchCenter.resolveHash(hash);
    savePosition(link);
    if (canonical === current.hash) {
      show(false);
      return true;
    }
    const source = current;
    const cardEntry = Boolean(link?.closest('.explore-card, .work-card, .direction-card, .focus-spotlight, .lab-news-card'));
    const origin = returning ? null : !cardEntry && pageKey(source.hash) === pageKey(canonical) ? source.origin : {
      id:source.id, index:source.index, hash:source.hash, label:pageLabel(source.hash)
    };
    const next = {id:newId(), index:source.index+1, hash:canonical, origin, scroll:[0,0]};
    writeEntry(source);
    try {
      history.pushState({...history.state, [stateKey]:next}, '', canonical || location.pathname + location.search);
    } catch {
      return false;
    }
    // Some browsers ignore excess history calls instead of throwing.
    if (location.hash !== canonical) return false;
    current = next;
    remember(current);
    show(false);
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    return true;
  }

  function normalizeHash() {
    const canonical = window.researchCenter.resolveHash(location.hash);
    if (canonical !== location.hash) {
      try { history.replaceState(history.state, '', canonical); } catch { /* Render the alias even if history is unavailable. */ }
    }
  }

  function onHistoryChange() {
    normalizeHash();
    const stored = readEntry();
    if (stored?.id === current.id && stored.hash === location.hash) return;
    if (stored?.hash === location.hash) {
      current = positions.get(stored.id) || stored;
      show(true);
    } else {
      // Native link fallback and address-bar fragments still render without History API writes.
      current = {id:newId(), index:(current?.index || 0)+1, hash:location.hash, origin:null, scroll:[0,0]};
      writeEntry(current);
      show(false);
    }
  }

  function start(applyRoute) {
    render = applyRoute;
    history.scrollRestoration = 'manual';
    normalizeHash();
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
      const returning = link.hasAttribute('data-research-back');
      if (returning && current.origin && current.origin.index < current.index) {
        savePosition(undefined, true);
        try {
          history.go(current.origin.index - current.index);
          event.preventDefault();
        } catch { /* Let the original return link navigate normally. */ }
      } else if (navigate(url.hash, returning, link)) {
        // Intercept only after a successful transition; failures retain native anchor navigation.
        event.preventDefault();
      }
    });
    window.addEventListener('popstate', onHistoryChange);
    window.addEventListener('hashchange', onHistoryChange);
    window.addEventListener('scroll', () => savePosition(), {passive:true});
    window.addEventListener('pagehide', () => savePosition(undefined, true));
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) savePosition(undefined, true);
    });
  }
  window.researchNavigation = {start, origin:() => current?.origin};
})();
