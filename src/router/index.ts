import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Tools from '../views/Tools.vue'
import About from '../views/AboutMe.vue'

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
      component: Projects
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
