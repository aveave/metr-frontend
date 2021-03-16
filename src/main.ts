import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/validation.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMoment from "vue-moment";
import moment from "moment-timezone";
import { ValidationProvider } from 'vee-validate';
import Pagination from 'vue-pagination-2';
import "./assets/styles/main.css";

Vue.config.productionTip = false;

Vue.use(VueMoment, {
  moment
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('pagination', Pagination);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
