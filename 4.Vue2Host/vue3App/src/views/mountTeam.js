import {createApp} from "vue";
import Team from "./Team.vue"

export default (selector) => {
    createApp(Team).mount(selector);
};