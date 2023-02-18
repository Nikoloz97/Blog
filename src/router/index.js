import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Coding from "../views/Coding.vue";
import Health from "../views/Health.vue";
import Travel from "../views/Travel.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Coding",
    name: "Coding",
    component: Coding,
  },
  {
    path: "/Health",
    name: "Health",
    component: Health,
  },
  {
    path: "/Travel",
    name: "Travel",
    component: Travel,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;