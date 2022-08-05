import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (Project.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      // route level code-splitting
      // this generates a separate chunk (Tools.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Tools.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (AboutMe.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutMe.vue')
    }
  ]
})

export default router
