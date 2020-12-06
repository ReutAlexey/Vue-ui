export default [
  {
    path: '/',
    component: () => import('../views/Home')
  },
  {
    path: '/test/:testId',
    component: () => import('../views/ShowTest')
  },
  {
    path: '/category/:categoryName',
    component: () => import('../views/ShowCategory')
  },
  {
    path: '/registration',
    component: () => import('../views/auth/Register')
  }
]
