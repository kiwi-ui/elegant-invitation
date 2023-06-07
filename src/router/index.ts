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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/Cover.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
