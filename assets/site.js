(function () {
  var PHONE = '0431 185 183', TEL = '0431185183';
  var IG = 'https://www.instagram.com/frank_windscreens_tint/';
  var FB = 'https://www.facebook.com/share/1Qfio9tNFG/';
  var MAPS = 'https://www.google.com/maps/search/?api=1&query=209+Bunda+Street+Parramatta+Park+QLD+4870';
  var here = location.pathname.split('/').pop() || 'index.html';
  var links = [
    ['windscreen-replacement.html', 'Windscreens'],
    ['chip-repair.html', 'Chip repair'],
    ['window-tinting.html', 'Tinting'],
    ['side-rear-windows.html', 'Side windows'],
    ['contact.html', 'Contact']
  ];
  var cur = function (h) { return h === here ? ' aria-current="page"' : ''; };
  var icon = '<svg viewBox="0 0 42 34" aria-hidden="true"><path d="M5 2h32l3 26q-19 6-38 0z" fill="none" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/><path d="M12 9l-3 9M18 8l-2 6" stroke="#e3262b" stroke-width="1.8" stroke-linecap="round"/></svg>';
  var igSvg = '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.7a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.3-9.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/></svg>';
  var fbSvg = '<svg viewBox="0 0 24 24"><path d="M14 8.5V6.8c0-.8.5-1 1-1h2.3V2.2L14.1 2.2C10.6 2.2 10 4.8 10 6.5v2H7.7v3.7H10V22h4v-9.8h3l.4-3.7z"/></svg>';

  var nav = document.querySelector('[data-nav]');
  if (nav) {
    var isHome = document.body.classList.contains('home');
    nav.innerHTML =
      '<div class="nav-left"><button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks"><span></span></button>' +
      '<nav class="nav-links" id="navLinks" aria-label="Main">' + links.map(function (l) { return '<a href="' + l[0] + '"' + cur(l[0]) + '>' + l[1] + '</a>'; }).join('') + '</nav></div>' +
      '<a class="logo" href="index.html" aria-label="Frank Windscreens & Tint home">' + icon + '<b>FRANK<span>.</span></b></a>' +
      '<div class="nav-right"><a class="nav-phone" href="tel:' + TEL + '">Call ' + PHONE + '</a></div>';

    var burger = nav.querySelector('.burger'), menu = nav.querySelector('.nav-links');
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); } });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); } });

    var tog = nav.querySelector('.toggle');
    if (tog) tog.addEventListener('click', function () {
      var on = tog.getAttribute('aria-pressed') !== 'true';
      tog.setAttribute('aria-pressed', String(on));
      if (window.__studioLights) window.__studioLights(on);
    });
    var onScroll = function () { nav.classList.toggle('scrolled', scrollY > 40); };
    addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  /* floating quote button: text a photo, call, or the quote page */
  var BODY = encodeURIComponent("Hi Frank, I'd like a quote. Car (make/model/year): \nWhat needs doing: \n(photo attached)");
  var fab = document.createElement('div');
  fab.className = 'fab';
  fab.innerHTML =
    '<div class="fab-menu" id="fabMenu" role="menu" aria-label="Get a quote">' +
      '<p>Quick quote</p>' +
      '<a role="menuitem" href="sms:' + TEL + '?&body=' + BODY + '"><i><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="12" cy="12.5" r="3.2"/><path d="M8 6l1.5-2h5L16 6"/></svg></i><span><b>Text a photo</b><small>Snap the damage, send it to Frank</small></span></a>' +
      '<a role="menuitem" href="tel:' + TEL + '"><i><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg></i><span><b>Call ' + PHONE + '</b><small>Talk to Frank directly</small></span></a>' +
      '<a role="menuitem" href="contact.html"><i><svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg></i><span><b>Visit the workshop</b><small>209 Bunda Street, Cairns</small></span></a>' +
    '</div>' +
    '<button class="fab-btn" type="button" aria-expanded="false" aria-controls="fabMenu">' +
      '<span class="fab-ic" aria-hidden="true"><svg class="fab-w" viewBox="0 0 24 20"><path d="M2.5 3h19l1.4 12.5Q12 19.5 1.1 15.5z" fill="#0a0b0d"/><path class="wiper" d="M12 17L12 6" stroke="#e3262b" stroke-width="1.8" stroke-linecap="round"/></svg>' +
      '<svg class="fab-x" viewBox="0 0 24 24" width="18" height="18"><path d="M6 6l12 12M18 6L6 18" stroke="#0a0b0d" stroke-width="2.2" stroke-linecap="round"/></svg></span>' +
      '<span>Get a quote</span>' +
    '</button>';
  document.body.appendChild(fab);
  var fbtn = fab.querySelector('.fab-btn');
  var setOpen = function (o) { fab.classList.toggle('open', o); fbtn.setAttribute('aria-expanded', String(o)); };
  fbtn.addEventListener('click', function (e) { e.stopPropagation(); setOpen(!fab.classList.contains('open')); });
  document.addEventListener('click', function (e) { if (!fab.contains(e.target)) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  // visible on every page; on the home page it slides in once the opening has finished
  setTimeout(function () { fab.classList.add('on'); }, document.body.classList.contains('home') ? 2600 : 300);

  var foot = document.querySelector('[data-foot]');
  if (foot) {
    foot.innerHTML =
      '<div class="foot-grid">' +
        '<div class="foot-brand"><a class="logo" href="index.html" aria-label="Frank Windscreens & Tint home" style="justify-content:start">' + icon + '<b>FRANK<span>.</span></b></a>' +
          '<p>Windscreens, stone chip repairs, side windows and window tinting in Cairns. All makes and models.</p>' +
          '<a class="foot-phone" href="tel:' + TEL + '">' + PHONE + '</a></div>' +
        '<div><h4>Services</h4><ul>' + links.slice(0, 4).map(function (l) { return '<li><a href="' + l[0] + '">' + l[1] + '</a></li>'; }).join('') + '</ul></div>' +
        '<div><h4>Workshop</h4><ul><li><a href="' + MAPS + '" target="_blank" rel="noopener">209 Bunda Street<br>Parramatta Park QLD 4870</a></li><li>Next to Lifeline, opposite Cairns Central</li></ul></div>' +
        '<div><h4>Follow</h4><ul><li><a href="' + IG + '" target="_blank" rel="noopener">Instagram</a></li><li><a href="' + FB + '" target="_blank" rel="noopener">Facebook</a></li><li><a href="contact.html">Get a quote</a></li></ul></div>' +
      '</div>' +
      '<div class="foot-base"><span>© 2026 Frank Windscreens &amp; Tint · Cairns, Queensland</span><span>Windscreens · Chip repairs · Tinting</span></div>';
  }
})();
