import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import QuizView from '../views/Quiz.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/quiz', name: 'Quiz', component: QuizView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
