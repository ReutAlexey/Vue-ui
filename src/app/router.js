import Vue from 'vue'
import VueRouter from 'vue-router'
import Shared from './Shared/router/router'
import User from './user/router/router'

Vue.use(VueRouter)
const routes = [
  ...Shared,
  ...User
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
