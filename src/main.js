import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { BootstrapVue } from "bootstrap-vue";
import vuetify from "./plugins/vuetify";
import Notifications from "vue-notification";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Notifications);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
