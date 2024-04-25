import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.interesting__swiper', {
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 30,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.interesting__btn-next',
    prevEl: '.interesting__btn-prev',
  },
});
