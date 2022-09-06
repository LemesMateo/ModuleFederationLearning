import Home from "./views/Home.vue";
import Team from "vue3App/Team";
export default [
    {
        path: "/",
        component: Home,
        name: 'home'
      },
      {
        path: "/team",
        component: Team,
        name: 'team'
      }
];