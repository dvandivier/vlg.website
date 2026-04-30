// VLG — minimal nav interactivity
(function () {
  'use strict';

  const toggle = document.querySelector('.menu-toggle');
  const list = document.querySelector('.nav-list');

  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Mobile: tap a parent menu item to expand its submenu instead of navigating.
  document.querySelectorAll('.has-dropdown > a').forEach((a) => {
    a.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        a.parentElement.classList.toggle('is-open');
      }
    });
  });
})();
