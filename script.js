(function () {
  var header = document.querySelector('.header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!header || !toggle || !nav) return;

  function setOpen(open) {
    header.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    var label = toggle.querySelector('span');
    if (label) label.textContent = open ? 'Закрити' : 'Меню';
  }

  toggle.addEventListener('click', function () {
    setOpen(!header.classList.contains('is-open'));
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  document.addEventListener('click', function (e) {
    if (header.classList.contains('is-open') && !header.contains(e.target)) setOpen(false);
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1180) setOpen(false);
  });
})();
