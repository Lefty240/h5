/*
 * @Author: 粟雄
 * @Date: 2023-09-23 13:34:48
 * @LastEditors: 粟雄
 * @LastEditTime: 2023-09-23 14:30:50
 * @Description:
 */
import { createApp } from "vue";
import router from "@/router/index";
import "./style.css";
import App from "./App.vue";
import "@/assets/fonts/MiSans.css";
import "normalize.css/normalize.css";
import { i18n, vantLocales } from "./lang";
//对vant组件进行初始化语言设置
vantLocales(i18n.locale);

createApp(App).use(router).use(i18n).mount("#app");
