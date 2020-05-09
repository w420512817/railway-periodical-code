import Vue from "vue";
import "./plugins/element.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./plugins/api";

Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
