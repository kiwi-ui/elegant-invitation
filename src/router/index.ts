import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'
import Cover from '../components/Cover.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: `/:guestName`,
    name: 'cover',
    component: () => import('../components/Cover.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
