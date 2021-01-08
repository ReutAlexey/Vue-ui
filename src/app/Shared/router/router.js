import homePage from '../views/home'

export default [
  {
    path: '/',
    component: homePage
  },
  {
    path: '/category/:slug',
    component: () => import('../views/categoryTests')
  },
  {
    path: '/test/:id',
    component: () => import('../views/test'),
    children: [
      {
        path: 'question',
        component: () => import('../components/test/parts/QuestionsComponent')
      }
    ]
  },
  {
    path: '/result',
    component: () => import('../views/result')
  },
  {
    path: '/registration',
    component: () => import('../views/auth/register')
  },
  {
    path: '/login',
    component: () => import('../views/auth/login')
  }
]
