import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue'
import AboutPage from '../views/AboutView.vue'
import Program from '@/views/ListProgramView.vue'
import Faq from '../views/FaqView.vue'
import Daftar from '../views/DaftarView.vue'
import AboutMe from '../views/AboutMeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/program', component: Program },
  {
    path: '/program/:id',
    name: 'programDetail',
    component: () => import('@/views/DetailProgramView.vue'),
  },

  { path: '/faq', component: Faq },
  { path: '/daftar', component: Daftar },
  { path: '/me', component: AboutMe },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
