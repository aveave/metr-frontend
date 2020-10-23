import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "@/views/Home.vue";
import CatalogView from "@/views/CatalogView.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/catalog",
    name: "catalogview",
    component: CatalogView
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
    path: "/orderlist",
    name: "orderlist",
    component: () => import("@/views/OrderList.vue")
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
