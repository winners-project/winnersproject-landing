(() => {
  const trackedLinks = document.querySelectorAll('[data-track]');
  trackedLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const eventName = link.dataset.track;
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'form_cta_click', { placement: eventName });
      }
      if (typeof window.fbq === 'function') {
        window.fbq('trackCustom', 'FormCtaClick', { placement: eventName });
      }
    });
  });
})();
