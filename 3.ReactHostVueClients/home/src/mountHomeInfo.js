import { createApp } from "vue";
import HomeInfo from "./HomeInfo.vue";

export default (selector) => {
  createApp(HomeInfo).mount(selector);
};
