import Swiper, { Navigation, Pagination, Thumbs, watchSlidesProgress, freeMode } from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs, watchSlidesProgress, freeMode]);
const swiper = new Swiper('.tabs__panel-swiper-bottom', {
  slidesPerView: 5,
  spaceBetween: 20,
  freeMode: true,
  watchSlidesProgress: true,
  clickable: true,
  // breakpoints: {
  //   577: {
  //     slidesPerView: 2,
  //     spaceBetween: 78,
  //   },
  //   969: {
  //     slidesPerView: 3,
  //     spaceBetween: 78,
  //   },
  //   1221: {
  //     slidesPerView: 4,
  //     spaceBetween: 78,
  //   }
  // }
});

const swiper2 = new Swiper('.tabs__panel-swiper-top', {
  clickable: true,
  navigation: {
    nextEl: '.product__swiper-btn--next',
    prevEl: '.product__swiper-btn--prev',
  },
  thumbs: {
    swiper: swiper,
  },
});
