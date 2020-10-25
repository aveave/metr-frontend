import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMoment from "vue-moment";
import moment from "moment-timezone";
import "./assets/styles/main.css";

Vue.config.productionTip = false;

Vue.use(VueMoment, {
  moment
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
