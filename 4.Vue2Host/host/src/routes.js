import Feature from "host/Feature";
import VistaEjemplo from "./views/VistaEjemplo.vue"
import Doc from "./views/Doc.vue"
export default [
    {
        path: "/",
        component: Feature,
        name: 'feature'
      },
      {
        path: '/doc/:casoDeUso',
        component: Doc,
        props: true,
      },
];