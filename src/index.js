import Swiper, { Navigation } from 'swiper';
import './index.scss';

Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', {
    loop: true,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});