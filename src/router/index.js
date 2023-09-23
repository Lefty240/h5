/*
 * @Author: 粟雄
 * @Date: 2023-09-23 13:47:17
 * @LastEditors: 粟雄
 * @LastEditTime: 2023-09-23 14:00:39
 * @Description:
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/page/Home/index.vue";
const routes = [
    {
        path: "/",
        component: Home,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    console.log(to.path);
    next();
});
export default router;
