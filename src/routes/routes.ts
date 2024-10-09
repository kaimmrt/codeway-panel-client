import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path:"/",
        name:"Home",
        component:()=>import("@/views/Home.vue"),
        meta: { requiresAuth: true }
    },
    {
        path:"/signin",
        name:"Signin",
        component:()=>import("@/views/Signin.vue"),
        meta: { requiresAuth: false }
    },
    {
        path: '/:catchAll(.*)',
        component:()=>import("@/views/NotFound.vue")
    },
]

export default routes;