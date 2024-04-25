import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.hero__swiper-btn--next',
    prevEl: '.hero__swiper-btn--prev',
  },
  pagination: {
    el: '.hero__swiper-pagination',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
    },
  },
});
