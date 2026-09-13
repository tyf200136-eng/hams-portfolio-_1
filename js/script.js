// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu after clicking a link (mobile)
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Works page filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length && projectCards.length) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.hidden = !match;
      });
    });
  });
}


// Pre-select a filter on works.html when arriving from a link like works.html?filter=profiles
const urlParams = new URLSearchParams(window.location.search);
const initialFilter = urlParams.get('filter');
if (initialFilter) {
  const matchBtn = document.querySelector(`.filter-btn[data-filter="${initialFilter}"]`);
  if (matchBtn) matchBtn.click();
}
// Preloader: show once per browser session, or again on manual refresh
(function(){
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const navEntries = performance.getEntriesByType('navigation');
  const isReload = navEntries.length > 0 && navEntries[0].type === 'reload';
  const alreadyShown = sessionStorage.getItem('preloaderShown') === '1';

  // إذا سبق وظهرت هذي الجلسة، وما كان تحديث (F5)، نشيلها فورًا بدون أنيميشن
  if (alreadyShown && !isReload) {
    preloader.remove();
    return;
  }

  sessionStorage.setItem('preloaderShown', '1');
  document.body.style.overflow = 'hidden';

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hide');
      document.body.style.overflow = '';
      setTimeout(() => preloader.remove(), 700);
    }, 2600);
  });
})();