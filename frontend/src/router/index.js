import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import TestsView from "@/views/TestsView.vue";
import UserProfile from "@/views/UserProfile.vue";


const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : 
    [
        { path  : '/' , name:'home',component : Dashboard },
        { path  : '/tests' , name:'qview',component : TestsView },
        { path: '/profile', name: 'profile', component: UserProfile }


    ]
}); 

export default router; 
