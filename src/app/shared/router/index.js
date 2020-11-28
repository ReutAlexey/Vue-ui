export default [
  {
    path: '/',
    component: () => import('../views/Home')
  },
  {
    path: '/login',
    component: () => import('@/app/shared/views/auth/login')
  }
]
