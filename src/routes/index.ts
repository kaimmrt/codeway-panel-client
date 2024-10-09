import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import store from "../store";
import { IS_AUTHENTICATE_GETTER } from "@/store/constants";

const router=createRouter({
    history: createWebHistory(), 
    routes
})

router.beforeEach((to, from, next)=>{
   if(to.meta.requiresAuth && !store.getters[`auth/${IS_AUTHENTICATE_GETTER}`]){
        next('/signin')
    } else if(!to.meta.requiresAuth && store.getters[`auth/${IS_AUTHENTICATE_GETTER}`]){
        next('/');
    } else{
        next()
    }
})

export default router;