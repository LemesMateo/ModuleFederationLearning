import Home from "./views/Home.vue";
import VistaEjemplo from "./views/VistaEjemplo.vue"
import Doc from "./views/Doc.vue"
export default [
    {
        path: "/",
        component: Home,
        name: 'home'
      },
      {
        path: "/vistaejemplo",
        component: VistaEjemplo,
      },
      {
        path: '/doc/:casoDeUso',
        component: Doc,
        props: true,
      },
];