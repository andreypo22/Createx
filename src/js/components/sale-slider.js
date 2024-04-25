import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.sale__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.sale__btn-next',
    prevEl: '.sale__btn-prev',
  },
});
