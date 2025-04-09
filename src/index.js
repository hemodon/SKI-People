import { initRouter } from './js/router';

import 'normalize.css';
import './style.scss';
import 'swiper/css';
import { slider } from './js/slider';

const init = () => {
  initRouter();
}

init();
slider();