import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.product__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.product__swiper-btn--next',
    prevEl: '.product__swiper-btn--prev',
  },
});
