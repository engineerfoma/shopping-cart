import Swiper, { Navigation, Pagination } from 'swiper';
import './index.scss';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-slide_img-next',
    prevEl: '.swiper-slide_img-prev',
  },
  
  pagination: {
    el: '.slider-pagination',
    type: 'fraction',
  },
  
  slidesPerView: 4,
  
  loop: true,

  watchOverflow: false,

  slidesPerGroup: 1,
});