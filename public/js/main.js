(function () {
  'use strict';

  var EMAIL = 'jinwoo.kim@example.com';

  var header = document.getElementById('siteHeader');
  var nav = document.getElementById('mainNav');
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.querySelectorAll('.nav-link');
  var sections = document.querySelectorAll('main section[id]');

  /* ---------- 모바일 메뉴 토글 ---------- */
  function setMenu(open) {
    nav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    menuToggle.querySelector('.material-symbols-outlined').textContent = open ? 'close' : 'menu';
  }

  menuToggle.addEventListener('click', function () {
    setMenu(!nav.classList.contains('open'));
  });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !header.contains(e.target)) setMenu(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) setMenu(false);
  });

  /* ---------- 1. 메뉴 클릭 시 해당 영역으로 부드럽게 이동 ---------- */
  document.querySelectorAll('a[data-nav][href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href').slice(1);
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      setMenu(false);

      var top = id === 'home' ? 0 : target.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
      history.replaceState(null, '', '#' + id);
      setActive(id);
    });
  });

  /* ---------- 스크롤 위치에 따라 현재 메뉴 강조 ---------- */
  function setActive(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute('href') === '#' + id;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function updateActiveOnScroll() {
    var marker = window.pageYOffset + header.offsetHeight + window.innerHeight * 0.3;
    var current = sections[0].id;
    sections.forEach(function (section) {
      if (section.offsetTop <= marker) current = section.id;
    });
    // 페이지 맨 아래에 도달하면 마지막 섹션을 활성화
    if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1].id;
    }
    setActive(current);
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateActiveOnScroll();
      ticking = false;
    });
  }, { passive: true });
  updateActiveOnScroll();

  /* ---------- 원격 이미지 로드 실패 시 이니셜로 대체 ---------- */
  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    function replace() {
      var box = document.createElement('div');
      box.className = 'img-fallback ' + img.className;
      box.textContent = img.dataset.fallback;
      box.setAttribute('role', 'img');
      box.setAttribute('aria-label', img.alt);
      img.replaceWith(box);
    }
    if (img.complete && img.naturalWidth === 0) replace();
    else img.addEventListener('error', replace);
  });

  /* ---------- 스크롤 등장 애니메이션 & 진행 바 ---------- */
  var revealTargets = document.querySelectorAll('.stats, .bento > *, .section-head, .about-grid > *, .project-card, .contact-grid > *');
  var progressBars = document.querySelectorAll('.progress-bar');

  if ('IntersectionObserver' in window) {
    revealTargets.forEach(function (el) {
      el.classList.add('reveal');
      // 등장 후 클래스를 제거해 카드 hover 효과(transform)가 정상 동작하도록 함
      el.addEventListener('transitionend', function cleanup(e) {
        if (e.target !== el || !el.classList.contains('is-visible')) return;
        el.classList.remove('reveal', 'is-visible');
        el.removeEventListener('transitionend', cleanup);
      });
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(entry.target.classList.contains('progress-bar') ? 'is-filled' : 'is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { observer.observe(el); });
    progressBars.forEach(function (el) { observer.observe(el); });
  } else {
    progressBars.forEach(function (el) { el.classList.add('is-filled'); });
  }

  /* ---------- 3. 연락 폼 → 내용이 채워진 메일 작성창 열기 ---------- */
  var form = document.getElementById('contactForm');
  var formError = document.getElementById('formError');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.elements.name;
    var subject = form.elements.subject;
    var message = form.elements.message;

    [name, message].forEach(function (field) {
      field.classList.toggle('is-invalid', !field.value.trim());
    });
    if (!name.value.trim() || !message.value.trim()) {
      formError.textContent = '이름과 내용을 입력해 주세요.';
      return;
    }
    formError.textContent = '';

    var mailSubject = subject.value.trim() || '[Portfolio] ' + name.value.trim() + '님의 문의';
    var body = message.value.trim() + '\n\n— ' + name.value.trim();
    window.location.href = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent(mailSubject) +
      '&body=' + encodeURIComponent(body);
  });

  form.addEventListener('input', function (e) {
    if (e.target.value.trim()) e.target.classList.remove('is-invalid');
  });

  /* ---------- 푸터 연도 ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
