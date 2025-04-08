import Swiper from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import { initRouter } from './js/router';

import 'normalize.css';
import './style.scss';
import 'swiper/css';

const thumbnailsSlider = new Swiper(".slider-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const productSlider = new Swiper(".slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".slider__arrow-next",
    prevEl: ".slider__arrow-prev",
  },
  modules: [Navigation, Thumbs],
  thumbs: {
    swiper: thumbnailsSlider,
  },
});

const init = () => {
  initRouter();
}

init();
