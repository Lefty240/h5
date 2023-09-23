/*
 * @Author: 粟雄
 * @Date: 2023-09-23 13:34:48
 * @LastEditors: 粟雄
 * @LastEditTime: 2023-09-23 14:36:38
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import path from "path";
import pxtovw from "postcss-px-to-viewport-8-plugin";
const loder_pxtovw = pxtovw({
    viewportWidth: 390,
    viewportUnit: "vw",
    exclude: [/node_modules\/vant/i],
    unitToConvert: "px", // 要转化的单位
    unitPrecision: 6, // 转换后的精度，即小数点位数
    propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
    fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
    minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
    replace: true, // 是否转换后直接更换属性值
    landscape: false, // 是否处理横屏情况
});
const vant_pxtovw = pxtovw({
    viewportWidth: 375,
    viewportUnit: "vw",
    exclude: [/^(?!.*node_modules\/vant)/], //忽略除vant之外的
    unitToConvert: "px", // 要转化的单位
    unitPrecision: 6, // 转换后的精度，即小数点位数
    propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
    fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
    minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
    replace: true, // 是否转换后直接更换属性值
    landscape: false, // 是否处理横屏情况
});
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [VantResolver()],
        }),
    ],
    css: {
        postcss: {
            plugins: [loder_pxtovw, vant_pxtovw],
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    server: {
        host: "0.0.0.0",
        port: 5173,
        hmr: true,
    },
});
