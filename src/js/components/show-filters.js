import Swiper, { Navigation, Pagination, Grid } from 'swiper';
Swiper.use([Navigation, Pagination, Grid]);

const filtersBtn = document.querySelector('.catalog__top-btn');
const filtersBtnText = document.querySelector('.catalog__top-btn > span');
const filtersContent = document.querySelector('.catalog__filters');
const catalogContent = document.querySelector('.catalog__content');
const catalogSlider = document.querySelector('.catalog__swiper');

if(filtersBtn, filtersBtnText, filtersContent, catalogContent, catalogSlider) {
  filtersBtn.addEventListener('click', function() {
    setTimeout(() => {
      filtersContent.classList.toggle('no-active');
      catalogContent.classList.toggle('full');
      if (filtersBtnText.innerText === 'Show filters') {
        filtersBtnText.innerText = 'Hide filters';
      }
      else {
        filtersBtnText.innerText = 'Show filters';
      };
      catalogSlider.classList.toggle('full-slider');
      if (catalogSlider.classList.contains('full-slider')) {
        const swiper = new Swiper('.full-slider', {
          slidesPerView: 4,
          grid: {
            rows: 3,
            fill: 'row'
          },
          slidesPerGroup: 4,
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
        const pagingSwiper = new Swiper(".full-slider", {
          slidesPerView: 4,
          grid: {
            rows: 3,
            fill: 'row'
          },
          slidesPerGroup: 4,
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
      } else {
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
      };
    }, '200');
  });
}
