(() => {
  const header = document.querySelector('.header');
  const wa = document.querySelector('.wa-float');
  const toggle = document.querySelector('.menu-toggle');

  // Header ao rolar + botão flutuante do WhatsApp
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 30);
    wa.classList.toggle('show', y > 500);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu mobile
  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  // Revelação ao rolar
  const targets = document.querySelectorAll('.reveal, .reveal-img, .steps, .quote');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => io.observe(el));
  } else {
    targets.forEach(el => el.classList.add('in-view'));
  }

  // FAQ
  document.querySelectorAll('.faq-item button').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const open = !item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open'); i.querySelector('button').setAttribute('aria-expanded', 'false');
      });
      item.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  // Parallax suave na foto do hero
  const heroImg = document.querySelector('.hero-visual');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroImg && !reduce) {
    window.addEventListener('scroll', () => {
      const y = Math.min(window.scrollY, 800);
      heroImg.style.transform = `translateY(${y * 0.08}px)`;
    }, { passive: true });
  }

  document.getElementById('ano').textContent = new Date().getFullYear();
})();
