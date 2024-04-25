import Swiper, { Navigation, Pagination, Grid } from 'swiper';
Swiper.use([Navigation, Pagination, Grid]);
const swiper = new Swiper('.catalog__swiper', {
  slidesPerView: 3,
  grid: {
    rows: 4,
    fill: 'row'
  },
  slidesPerGroup: 3,
  spaceBetween: 30,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.catalog-btn-next',
    prevEl: '.catalog-btn-prev',
  },
  pagination: {
    el: ".catalog__pagination",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },
});

const pagingSwiper = new Swiper(".catalog__swiper", {
  slidesPerView: 3,
  grid: {
    rows: 4,
    fill: 'row'
  },
  slidesPerGroup: 3,
  spaceBetween: 30,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.catalog-btn-next',
    prevEl: '.catalog-btn-prev',
  },
	pagination: {
		el: ".catalog__pagination2",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
    dynamicBullets: true,
    dynamicMainBullets: 3,
	},
});

// swiper.controller.control = pagingSwiper;
