export default [
  {
    path: '/',
    component: () => import('../views/Home')
  },
  {
    path: '/login',
    component: () => import('@/app/shared/views/auth/login')
  },
  {
    path: '/register',
    component: () => import('@/app/shared/views/auth/register')
  },
  {
    path: '/category/:slug/:categoryId',
    component: () => import('@/app/shared/views/Category')
  },
  {
    path: '/test/:testId',
    component: () => import('@/app/shared/views/ShowTest'),
    children: [
      {
        path: 'question',
        component: () => import('@/app/shared/components/test/Questions')
      }
    ]
  }
]
