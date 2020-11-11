import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import authGuard from './auth-guard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    component: () => import('../views/auth/Registration.vue')
  },
  {
    path: '/login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/create-test',
    beforeEnter: authGuard,
    component: () => import('../views/profile/Creation-test')
  },
  {
    path: '/profile',
    beforeEnter: authGuard,
    component: () => import('../views/profile/Show-profile')
  },
  {
    path: '/test/:id',
    component: () => import('../views/Show-test'),
    children: [
      {
        path: 'quest',
        component: () => import('../components/quest/Show-quest')
      }
    ]
  },
  {
    path: '/result',
    component: () => import('../views/test_pages/Show-test-result')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
