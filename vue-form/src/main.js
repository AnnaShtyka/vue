import Vue from "vue";
import App from "./App.vue";

import Antd, { Form } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(Form);

new Vue({
  render: h => h(App),
}).$mount("#app");
