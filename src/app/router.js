import Vue from 'vue'
import VueRouter from 'vue-router'
import Shared from './Shared/router'

Vue.use(VueRouter)
const routes = [
  ...Shared
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
