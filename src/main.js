import Vue from "vue";
import App from "./App.vue";

import mailgo from "mailgo";

const mailgoConfig = {
  dark: true,
};

Vue.config.productionTip = false;

mailgo(mailgoConfig);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
