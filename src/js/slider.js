import Swiper from "swiper";
import { Navigation, Thumbs } from "swiper/modules";

export const slider = () => {
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
};
