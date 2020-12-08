import Vue from 'vue'
import VueRouter from 'vue-router'
// import authGuard from './auth-guard'
import sharedRoutes from './shared/router'
import userRoutes from './user/router/userRoutes'

Vue.use(VueRouter)
const routes = [
  ...sharedRoutes,
  ...userRoutes
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
