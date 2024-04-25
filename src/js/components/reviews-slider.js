import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.review-swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.catalog-btn-next',
    prevEl: '.catalog-btn-prev',
  },
  pagination: {
    el: ".product__review-pagination",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
