/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/parrains",
            name: "parrains",
            component: () => import("@/views/Parrain/index.vue"),
            children: [
                {
                    path: "",
                    name: "parrains-list",
                    component: () => import("@/views/Parrain/List.vue")
                },{
                    path: "new",
                    name: "parrains-new",
                    component: () => import("@/views/Parrain/New.vue")
                },{
                    path: ":id",
                    name: "parrain",
                    component: () => import("@/views/[id].vue")
                },
            ]
        },
        {
            path: "/filleuls",
            name: "filleuls",
            component: () => import("@/views/Filleul/index.vue"),
            children: [
                {
                    path: "",
                    name: "filleuls-list",
                    component: () => import("@/views/Filleul/List.vue")
                },{
                    path: "new",
                    name: "filleuls-new",
                    component: () => import("@/views/Filleul/New.vue")
                },{
                    path: ":id",
                    name: "filleul",
                    component: () => import("@/views/[id].vue")
                },
            ]
        }
    ]    
})

export default router