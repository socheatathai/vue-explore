import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import { createPinia } from "pinia";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    children: [],
  },
  {
    path: "/about",
    component: About,
    name: "About", // Updated name to "About"
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
