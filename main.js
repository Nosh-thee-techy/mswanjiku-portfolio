/* =========================================================
   MAIN.JS — shared logic across every page
   - Active nav link
   - Mobile nav toggle
   - Scroll reveal
   - Sticky scroll-icon morphs per section
   - Process step highlight on scroll
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });

  const root = document.documentElement;
  const themeBtn = document.querySelector('.theme-toggle');
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    if (themeBtn) {
      themeBtn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
      themeBtn.title = theme === 'light' ? 'Dark mode' : 'Light mode';
    }
  }
  const stored = (() => {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  })();
  applyTheme(stored === 'light' || stored === 'dark' ? stored : (root.getAttribute('data-theme') || 'dark'));
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(next);
    });
  }

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('mobile-open');
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => observer.observe(el));
  }

  /* Sticky icon changes when you enter the next section */
  const scrollIcon = document.getElementById('scroll-icon');
  const scrollLabel = document.getElementById('scroll-icon-label');
  const sections = document.querySelectorAll('[data-section]');

  if (scrollIcon && sections.length) {
    const icons = scrollIcon.querySelectorAll('svg[data-for]');

    function setActiveSection(id, label) {
      icons.forEach(svg => {
        svg.classList.toggle('is-active', svg.getAttribute('data-for') === id);
      });
      if (scrollLabel) scrollLabel.textContent = label || id;
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('data-section');
        const label = entry.target.getAttribute('data-icon-label') || id;
        setActiveSection(id, label);
      });
    }, {
      rootMargin: '-35% 0px -45% 0px',
      threshold: 0
    });

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  /* Process steps + lens icon morph on scroll / hover */
  const steps = document.querySelectorAll('.process-step');
  const lensIcons = document.querySelectorAll('.process-lens-icon');
  let hoverLocked = false;

  function activateStep(stepEl, open) {
    if (!stepEl) return;
    steps.forEach(s => {
      s.classList.remove('is-active');
      if (!open) s.classList.remove('is-open');
    });
    stepEl.classList.add('is-active');
    if (open) stepEl.classList.add('is-open');
    const id = stepEl.getAttribute('data-step');
    lensIcons.forEach(icon => {
      icon.classList.toggle('is-active', icon.getAttribute('data-step-icon') === id);
    });
  }

  if (steps.length) {
    const stepObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || hoverLocked) return;
        activateStep(entry.target, false);
      });
    }, { rootMargin: '-40% 0px -40% 0px', threshold: 0.2 });
    steps.forEach(s => {
      stepObserver.observe(s);
      s.addEventListener('mouseenter', () => {
        hoverLocked = true;
        activateStep(s, true);
      });
      s.addEventListener('mouseleave', () => {
        hoverLocked = false;
        s.classList.remove('is-open');
      });
      s.addEventListener('focusin', () => activateStep(s, true));
      s.setAttribute('tabindex', '0');
    });
  }

  /* Zigzag traveler: 1 left → 2 right → 3 mid-left → 4 left */
  const route = document.getElementById('process-route');
  const traveler = document.getElementById('process-traveler');
  const mapEl = document.getElementById('process-list');
  if (route && traveler && mapEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const length = route.getTotalLength();
    const stops = [0, 0.34, 0.66, 1];
    let progress = 0;
    let pausedUntil = 0;
    const duration = 14000;

    function nearestStep(t) {
      let best = 0;
      let bestDist = Infinity;
      stops.forEach((s, i) => {
        const d = Math.abs(t - s);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      return best;
    }

    function tick(now) {
      if (!hoverLocked) {
        progress = (now % duration) / duration;
        const pt = route.getPointAtLength(progress * length);
        traveler.setAttribute('cx', pt.x);
        traveler.setAttribute('cy', pt.y);
        if (now > pausedUntil && steps.length) {
          const idx = nearestStep(progress);
          const step = steps[idx];
          if (step && !step.classList.contains('is-active')) activateStep(step, false);
          pausedUntil = now + 420;
        }
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
});
