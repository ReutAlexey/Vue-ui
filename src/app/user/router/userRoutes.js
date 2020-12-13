import checkAuth from './auth-guard'

export default [
  {
    path: '/profile',
    component: () => import('../views/Profile'),
    beforeEnter: checkAuth
  },
  {
    path: '/create-test',
    component: () => import('../views/ShowCreateTest'),
    beforeEnter: checkAuth
  }
]
