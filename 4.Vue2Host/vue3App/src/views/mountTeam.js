import {createApp} from "vue";
import team from "./team.vue"

export default (selector) => {
    createApp(team).mount(selector);
};