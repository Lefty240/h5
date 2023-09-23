/*
 * @Author: 粟雄
 * @Date: 2023-09-23 13:47:17
 * @LastEditors: 粟雄
 * @LastEditTime: 2023-09-23 13:48:37
 * @Description:
 */
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [];
const router = createRouter({
    history: createWebHashHistory,
    routes,
});
router.beforeEach((to, from, next) => {
    next();
});
export default router;
