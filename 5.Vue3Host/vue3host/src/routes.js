import Laravel from "./Laravel.vue"

export default [
    {
        path: "/laravel",
        component: Laravel,
    },
    {
        path: "/about",
        component: () => import('vue2App/AboutPage'),
    }
];