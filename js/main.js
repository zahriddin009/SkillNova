// ============================================================
// SkillNova — main.js
// Theme toggle, mobile nav, feature accordion, course tabs,
// animated stat counters. Vanilla JS, no dependencies.
// ============================================================

(function () {
  'use strict';

  /* ---------------- PRELOADER / INTRO ---------------- */
  const preloader = document.querySelector('[data-preloader]');
  const preloaderFill = document.querySelector('[data-preloader-fill]');
  const heroRevealRoot = document.querySelector('[data-reveal]');
  const heroVisualRoot = document.querySelector('[data-reveal-visual]');

  function startEntrance() {
    if (heroRevealRoot) heroRevealRoot.classList.add('is-in');
    if (heroVisualRoot) heroVisualRoot.classList.add('is-in');
  }

  if (preloader) {
    // Skip the intro on internal navigations within the same session,
    // but always show it on a fresh visit / hard reload.
    const seenIntro = sessionStorage.getItem('skillnova-intro-seen');

    if (seenIntro) {
      preloader.remove();
      startEntrance();
    } else {
      if (preloaderFill) requestAnimationFrame(() => { preloaderFill.style.width = '100%'; });

      window.setTimeout(() => {
        preloader.classList.add('preloader-out');
        startEntrance();
        window.setTimeout(() => {
          preloader.remove();
        }, 700);
        sessionStorage.setItem('skillnova-intro-seen', '1');
      }, 1300);
    }
  } else {
    startEntrance();
  }

  /* ---------------- THEME (Dark / Light) ---------------- */
  const root = document.documentElement;
  const THEME_KEY = 'skillnova-theme';

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  // On load: use saved theme, else system preference
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });

  /* ---------------- MOBILE NAV ---------------- */
  const burger = document.querySelector('[data-burger]');
  const mobilePanel = document.querySelector('[data-mobile-panel]');

  if (burger && mobilePanel) {
    burger.addEventListener('click', () => {
      const isOpen = mobilePanel.classList.toggle('open');
      burger.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobilePanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobilePanel.classList.remove('open');
        burger.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------------- COURSE TABS (filter) ---------------- */
  const tabButtons = document.querySelectorAll('[data-tab]');
  const courseCards = document.querySelectorAll('[data-course-category]');

  tabButtons.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabButtons.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-tab');

      courseCards.forEach((card) => {
        const match = category === 'all' || card.getAttribute('data-course-category') === category;
        card.style.display = match ? '' : 'none';
      });
    });
  });

  /* ---------------- FEATURE ACCORDION ---------------- */
  const featureItems = document.querySelectorAll('[data-feature-item]');
  const featureVisual = document.querySelector('[data-feature-visual]');

  function renderFeatureVisual(item) {
    if (!featureVisual || !item) return;
    const key = item.getAttribute('data-key');
    const lang = (window.SkillNovaI18n && window.SkillNovaI18n.getSavedLang()) || 'uz';
    const title = window.SkillNovaI18n ? window.SkillNovaI18n.t(key + '_title', lang) : item.querySelector('h3').textContent;
    const desc = window.SkillNovaI18n ? window.SkillNovaI18n.t(key + '_desc', lang) : '';
    const iconHTML = item.querySelector('.feature-icon').innerHTML;

    featureVisual.querySelector('.fv-icon').innerHTML = iconHTML;
    featureVisual.querySelector('[data-fv-title]').textContent = title;
    featureVisual.querySelector('[data-fv-desc]').textContent = desc;
  }

  featureItems.forEach((item) => {
    item.addEventListener('click', () => {
      const alreadyActive = item.classList.contains('active');
      featureItems.forEach((f) => f.classList.remove('active'));

      if (!alreadyActive) {
        item.classList.add('active');
        renderFeatureVisual(item);
      }
    });
  });

  // Activate first feature by default
  if (featureItems.length) {
    featureItems[0].classList.add('active');
    renderFeatureVisual(featureItems[0]);
  }

  // Keep the open feature panel in sync when the language changes
  document.addEventListener('skillnova:languagechange', () => {
    const active = document.querySelector('[data-feature-item].active');
    if (active) renderFeatureVisual(active);
  });

  /* ---------------- ANIMATED STAT COUNTERS ---------------- */
  const statEls = document.querySelectorAll('[data-count]');

  function animateCount(el) {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      const current = target * eased;
      el.textContent = (target % 1 === 0 ? Math.floor(current) : current.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statEls.forEach((el) => statObserver.observe(el));

  /* ---------------- PROGRESS RING (hero mock) ---------------- */
  const ring = document.querySelector('[data-ring-value]');
  if (ring) {
    const value = parseFloat(ring.getAttribute('data-ring-value'));
    const circle = ring.querySelector('.value');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    requestAnimationFrame(() => {
      circle.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(.22,1,.36,1)';
      circle.style.strokeDashoffset = `${circumference - (value / 100) * circumference}`;
    });
  }

  /* ---------------- COURSE DETAIL — TABS ---------------- */
  const cdTabButtons = document.querySelectorAll('[data-cd-tab]');
  const cdPanels = document.querySelectorAll('[data-cd-panel]');

  cdTabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-cd-tab');
      cdTabButtons.forEach((b) => b.classList.remove('active'));
      cdPanels.forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.querySelector(`[data-cd-panel="${target}"]`);
      if (panel) panel.classList.add('active');
    });
  });

  /* ---------------- NAVBAR SHADOW ON SCROLL ---------------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 8 ? 'var(--shadow-sm)' : 'none';
    });
  }
})();



