//import Vue from "vue"
import { createApp } from "vue";
import App from "./App.vue"
import "./index.scss";
import remoteRoutes from 'vue2App/routes';
import localRoutes from './routes';
import {createRouter, createWebHistory } from "vue-router"

const routes = [...localRoutes];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount("#app");


