/* =============================================
   CAFE DEL SOL – SCRIPTS
   Vanilla JS, no dependencies
   ============================================= */

(function () {
  'use strict';

  /* ------------------------------------------
     Mobile Navigation Toggle
     ------------------------------------------ */
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('open');
    });

    // Close nav when a link is clicked (mobile)
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('open');
      });
    });
  }

  /* ------------------------------------------
     Facebook Reviews Gallery
     ------------------------------------------
     Edit this array to add your real screenshot paths.
     Example: '/assets/reviews/fb-1.jpg'
  */
  var fbReviewImages = [
    '/assets/reviews/fb-1.jpg',
    '/assets/reviews/fb-2.jpg',
    '/assets/reviews/fb-3.jpg',
    '/assets/reviews/fb-4.jpg',
    '/assets/reviews/fb-5.jpg',
    '/assets/reviews/fb-6.jpg'
  ];

  var gallery = document.getElementById('fb-gallery');

  if (gallery) {
    fbReviewImages.forEach(function (src, index) {
      var img = document.createElement('img');
      img.src = src;
      img.alt = 'Facebook review screenshot ' + (index + 1);
      img.loading = 'lazy';
      img.addEventListener('click', function () {
        openLightbox(src, img.alt);
      });
      gallery.appendChild(img);
    });
  }

  /* ------------------------------------------
     Lightbox
     ------------------------------------------ */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxClose = document.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Review screenshot';
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus the close button for keyboard users
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    // Close on backdrop click
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

})();
