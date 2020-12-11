import checkAuth from './auth-guard'

export default [
  {
    path: '/profile',
    component: () => import('../views/Profile'),
    beforeEnter: checkAuth
  }
]
