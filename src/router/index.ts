import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from '../views/Home.vue';
import CatalogPage from '../views/CatalogPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/catalog/:sectionID',
    // name: 'CatalogPage',
    component: CatalogPage
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '*',
    component: NotFoundPage
  }

  // {
  //   path: "/",
  //   name: "Home",
  //   component:
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
