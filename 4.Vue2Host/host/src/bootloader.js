import Vue from "vue";
import VueRouter from "vue-router"
import "./index.scss";

import App from "./App.vue";
import routes from "./routes"

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})


new Vue({
  router,
  el: "#app",
  template: "<App/>",
  components: { App },
});
