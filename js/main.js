// main.js — mobile nav toggle and demo form handling
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (!toggle || !nav) return;

  // toggle both button and nav, and set aria-expanded
  function setOpen(open) {
    toggle.classList.toggle('open', open);
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!nav.classList.contains('open'));
  });

  // close when clicking a nav link (mobile)
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });

  // close on outside click
  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('open')) return;
    if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });

  // close on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // demo form behavior
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      // basic validation
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();
      if (!name || !email || !message) {
        alert('Please complete all fields before sending.');
        return;
      }
      alert('Thanks! This demo form does not send messages.');
      form.reset();
    });
  }
});