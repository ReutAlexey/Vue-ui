export default [
  {
    path: '/',
    component: () => import('../views/Home')
  },
  {
    path: '/test/:testId',
    component: () => import('../views/ShowTest'),
    children: [
      {
        path: 'question',
        component: () => import('../components/test/parts/Quests')
      }
    ]
  },
  {
    path: '/category/:categoryName',
    component: () => import('../views/ShowCategory')
  },
  {
    path: '/registration',
    component: () => import('../views/auth/Register')
  },
  {
    path: '/login',
    component: () => import('../views/auth/Login')
  }
]
