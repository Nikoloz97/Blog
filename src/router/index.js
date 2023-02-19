import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Coding from "../views/Coding.vue";
import Health from "../views/Health.vue";
import Travel from "../views/Travel.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

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
  {
    path: "/Travel",
    name: "Travel",
    component: Travel,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;