import checkToken from './checkToken'

export default [
  {
    path: '/',
    component: () => import('./views/home')
  },
  {
    path: '/category/:slug',
    component: () => import('./views/categoryTests'),
    beforeEnter: checkToken
  },
  {
    path: '/test/:id',
    component: () => import('./views/test'),
    children: [
      {
        path: 'question',
        component: () => import('./components/test/parts/QuestionsComponent')
      }
    ]
  },
  {
    path: '/result',
    component: () => import('./views/result')
  },
  {
    path: '/registration',
    component: () => import('./views/auth/register')
  }
]
