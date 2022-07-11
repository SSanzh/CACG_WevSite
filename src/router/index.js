import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import AboutPage from '../views/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/vacancy',
    name: 'vacancy',
    component: () => import('../views/VacancyPage.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesWeb.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
