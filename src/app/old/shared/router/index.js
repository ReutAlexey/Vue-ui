export default [
  {
    path: '/',
    component: () => import('../views/Home')
  },
  {
    path: '/login',
    component: () => import('@/app/old/shared/views/auth/login')
  },
  {
    path: '/register',
    component: () => import('@/app/old/shared/views/auth/register')
  },
  {
    path: '/category/:slug/:categoryId',
    component: () => import('@/app/old/shared/views/Category')
  },
  {
    path: '/test/:testId',
    component: () => import('@/app/old/shared/views/ShowTest'),
    children: [
      {
        path: 'question',
        component: () => import('@/app/old/shared/components/test/Questions')
      }
    ]
  }
]
