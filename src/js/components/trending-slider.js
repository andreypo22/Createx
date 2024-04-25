import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.trending__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.trending__btn-next',
    prevEl: '.trending__btn-prev',
  },
});
