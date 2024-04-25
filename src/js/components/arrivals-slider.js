import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.arrivals__swiper', {
  slidesPerView: 6,
  slidesPerGroup: 1,
  spaceBetween: 30,
  effect: 'fade',
  speed: 500,
  pagination: {
    el: '.arrivals__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
