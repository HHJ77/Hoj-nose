import { createApp } from "vue";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import router from "./router";
import "@/plugins/axios";
import "@/access";
import store from "@/store";
// 额外引入图标库
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import "bytemd/dist/index.css";

createApp(App)
  .use(ArcoVue)
  .use(store)
  .use(router)
  .use(ArcoVueIcon)
  .mount("#app");
