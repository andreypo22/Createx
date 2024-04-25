import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.look__swiper', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 30,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.look__swiper-btn--next',
    prevEl: '.look__swiper-btn--prev',
  },
  pagination: {
    el: ".look__pagination",
  },
});
