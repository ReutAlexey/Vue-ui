import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import authGuard from './auth-guard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  // Route group for user authorization
  {
    path: '/register',
    component: () => import('../views/auth/Registration.vue')
  },
  {
    path: '/login',
    component: () => import('../views/auth/Login.vue')
  },
  // Group of routes for your personal account
  {
    path: '/profile/:idUser',
    component: () => import('../views/profile/Show-profile'),
    beforeEnter: authGuard,
    children: [
      {
        path: 'create-test',
        component: () => import('@/components/profile/create_test/Form-create-test')
      }
    ]
  },
  // Route test
  {
    path: '/test/:id',
    component: () => import('@/views/Show-test'),
    children: [
      {
        path: 'question',
        component: () => import('@/components/test/Questions')
      }
    ]
  },
  {
    path: '/category/:category/:id',
    component: () => import('@/components/test_category/Category')
  },
  // Page 404
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
