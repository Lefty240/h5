/*
 * @Author: 粟雄
 * @Date: 2023-09-23 14:25:54
 * @LastEditors: 粟雄
 * @LastEditTime: 2023-09-23 14:26:47
 * @Description:
 */
// vue-i18n所需要引入的
import { createI18n } from "vue-i18n";
// 本地的文件夹
import enLocale from "./en";
import zhLocale from "./zh";
// vant所需要引入的
import { Locale } from "vant";
//vant中的文件夹  需要的语言和本地的语言保持一致
import enUS from "vant/lib/locale/lang/en-US";
import zhCN from "vant/lib/locale/lang/zh-CN";
const messages = {
    en: {
        ...enUS,
        ...enLocale,
    },
    zh: {
        ...zhCN,
        ...zhLocale,
    },
};
// 更新vant组件库本身的语言变化，支持国际化
function vantLocales(lang) {
    if (lang === "en") {
        Locale.use(lang, enUS);
    } else if (lang === "zh") {
        Locale.use(lang, zhCN);
    }
}
// 获取浏览器的语言
const lang = (navigator.language || "en").toLocaleLowerCase();
const language = localStorage.getItem("language") || lang.split("-")[0] || "zh";
localStorage.setItem("language", language);
const i18n = createI18n({
    //Not available in legacy mode 解决报错问题的配置项！！！
    legacy: false,
    // 全局注册 $t方法
    globalInjection: true,
    //设置初始化语言
    locale: language,
    // 设置备用语言
    fallbackLocale: "en",
    messages,
});
export { i18n, vantLocales };
