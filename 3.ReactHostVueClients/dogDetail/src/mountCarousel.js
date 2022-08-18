import { createApp } from "vue";
import Carousel from "./Carousel.vue";

export default (selector) => {
  createApp(Carousel).mount(selector);
};
