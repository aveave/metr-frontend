import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/catalog",
    name: "catalogview",
    component: () => import("@/views/CatalogView.vue")
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
    component: () => import("@/views/Orders.vue")
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("@/views/Favorites.vue")
  },
  {
    path: "/order",
    name: "order",
    component: () => import("@/views/OrderItems.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
