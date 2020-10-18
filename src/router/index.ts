import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "@/views/Home.vue";
import CatalogPage from "@/views/CatalogPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/catalog/:sectionID",
    // name: 'CatalogPage',
    component: CatalogPage
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/Cart.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("@/views/Checkout.vue")
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("@/views/Personal.vue")
  },
  {
    path: "*",
    component: NotFoundPage
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
