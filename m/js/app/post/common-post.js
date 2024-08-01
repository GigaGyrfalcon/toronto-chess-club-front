svg4everybody();

(function () {
  const heroSwiper = new Swiper('.hero .swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: false,
    navigation: {
      nextEl: '.hero .swiper__button--next',
      prevEl: '.hero .swiper__button--prev',
    },
    autoplay: {
      delay: 5000,
    },
  });

  const testimonialsSwiper = new Swiper('.testimonials .swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: false,
    navigation: {
      nextEl: '.testimonials .swiper__button--next',
      prevEl: '.testimonials .swiper__button--prev',
    },
  });

  const burger = document.querySelector('.burger');
  burger.addEventListener('click', function (event) {
    event.preventDefault();
    this.classList.toggle('open');
    const header = this.closest('.header');
    if (header) {
      const responsiveMenu = header.nextElementSibling;
      if (
        responsiveMenu &&
        responsiveMenu.classList.contains('responsive-menu')
      ) {
        responsiveMenu.classList.toggle('open');
      }
    }
    document.body.classList.toggle('noscroll');
  });
})();
