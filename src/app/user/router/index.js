
const userRoutes = [
  {
    path: '/',
    component: () => import('../views/Home')
  },
  {
    path: '/login',
    component: () => import('@/app/shared/views/auth/login')
  }
]

export default userRoutes
