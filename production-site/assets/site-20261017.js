(() => {
  const links = document.querySelector('.nav-links');
  const menu = document.querySelector('.menu-toggle');

  if (links && menu) {
    links.id ||= 'main-navigation';
    menu.setAttribute('aria-controls', links.id);
    const setMenuOpen = open => {
      links.classList.toggle('open', open);
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    };
    menu.addEventListener('click', () => setMenuOpen(!links.classList.contains('open')));
    links.addEventListener('click', event => {
      if (event.target.closest('a')) setMenuOpen(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && links.classList.contains('open')) {
        setMenuOpen(false);
        menu.focus();
      }
    });
    window.matchMedia('(min-width: 981px)').addEventListener('change', event => {
      if (event.matches) setMenuOpen(false);
    });
  }

  const gallery = document.querySelector('.gallery');
  const box = document.querySelector('dialog.lightbox');
  if (gallery && box) {
    const fullImage = box.querySelector('img');
    const closeButton = box.querySelector('.lightbox-close');
    let previousOverflow = '';
    let opener = null;

    const closeGallery = () => {
      if (!box.open) return;
      box.close();
    };
    gallery.addEventListener('click', event => {
      const item = event.target.closest('.gallery-item[data-full]');
      if (!item) return;
      const thumbnail = item.querySelector('img');
      opener = item;
      fullImage.src = item.dataset.full || thumbnail.currentSrc || thumbnail.src;
      fullImage.alt = thumbnail.alt;
      box.setAttribute('aria-label', thumbnail.alt || 'Project image');
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      box.showModal();
      closeButton.focus({ preventScroll: true });
    });
    closeButton.addEventListener('click', closeGallery);
    box.addEventListener('click', event => {
      if (event.target === box) closeGallery();
    });
    box.addEventListener('close', () => {
      document.body.style.overflow = previousOverflow;
      opener?.focus({ preventScroll: true });
    });
  }

  // Contact intent only: a click does not confirm an enquiry or an answered call.
  document.addEventListener('click', event => {
    const anchor = event.target.closest?.('a[href]');
    if (!anchor || typeof window.gtag !== 'function') return;
    const href = anchor.getAttribute('href');
    const method = href.startsWith('tel:') ? 'phone' : href.startsWith('mailto:') ? 'email' : href.startsWith('https://wa.me/') ? 'whatsapp' : null;
    if (!method) return;
    const recipient = href.includes('27829217299') ? 'werner' : href.includes('27645120021') ? 'joe' : 'general';
    const placement = anchor.dataset.contactPlacement || (anchor.closest('.hero-actions') ? 'hero' : anchor.closest('.cta') ? 'page-end' : anchor.closest('.contact-panel') ? 'contact-card' : anchor.classList.contains('whatsapp') ? 'floating' : anchor.closest('.footer') ? 'footer' : 'content');
    const slug = location.pathname.split('/')[2];
    const services = ['gate-automation', 'garage-doors', 'cctv', 'access-control', 'smart-home-automation'];
    const service = location.pathname === '/' ? 'home' : location.pathname === '/services/' ? 'all-services' : location.pathname.startsWith('/services/') && services.includes(slug) ? slug : 'other';
    window.gtag('event', 'contact_click', { contact_method: method, contact_recipient: recipient, contact_placement: placement, service_page: service });
  });
})();
