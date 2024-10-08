const routes = [
    {
        path:"/",
        name:"Home",
        component:()=>import("@/views/Home.vue")
    },
    {
        path:"/signin",
        name:"Signin",
        component:()=>import("@/views/Signin.vue")
    }
]

export default routes;