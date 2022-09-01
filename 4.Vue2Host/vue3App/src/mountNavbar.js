import {createApp} from "vue";
import Navbar from "reactApp/Navbar"

export default (selector) => {
    createApp(Navbar).mount(selector);
};