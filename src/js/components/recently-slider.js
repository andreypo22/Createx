import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.recently__swiper', {
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 30,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.recently__btn-next',
    prevEl: '.recently__btn-prev',
  },
});
