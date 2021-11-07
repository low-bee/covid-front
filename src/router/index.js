import VueRouter from "vue-router";

import World from "../components/country/World";

const router = new VueRouter({
    routes: [
        // 默认路由
        {
            path: '/',
            component: World
        }
    ]
})

export default router;
