import { createRouter,createWebHashHistory } from "vue-router";
 
const router = createRouter({
    history : createWebHashHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:"home",
            component:Home
        },
        {
            path:'/about/:member',
            name:'about',
            component: () => import("../about.vue"),
        }
    ]
})

export default router;