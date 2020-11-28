import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home-old.vue'
import authGuard from './auth-guard'
import sharedRoute from '../app/shared/router'

Vue.use(VueRouter)

const routes = [
  sharedRoute,
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
      },
      {
        path: 'my-tests',
        component: () => import('@/components/profile/my_tests/My-tests')
      }
      /* {
        path: 'edit/:idTest',
        component: () => import('@/components/profile/update_test/UpdateTestComponent')
      } */
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
