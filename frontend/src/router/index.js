import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import TestsView from "@/views/TestsView.vue";


const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : 
    [
        { path  : '/' , name:'home',component : Dashboard },
        { path  : '/tests' , name:'qview',component : TestsView },


    ]
}); 

export default router; 
