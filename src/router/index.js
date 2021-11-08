import VueRouter from "vue-router";

import World from "../components/country/World";
import US from "../components/country/US"
import French from "@/components/country/French";
import China from "@/components/country/China";
const router = new VueRouter({
    routes: [
        // 默认路由
        {
            name: 'default router',
            path: '/',
            component: World
        },
        {
            name: 'us router',
            path: '/US',
            component: US
        },
        {
            name: 'French router',
            path: '/French',
            component: French
        },
        {
            name: 'China router',
            path: '/China',
            component: China
        },
    ]
})

export default router;
