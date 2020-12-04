export default [
  {
    path: '/',
    component: () => import('../views/Home')
  },
  {
    path: '/test/:testId',
    component: () => import('../views/ShowTest')
  }
]
