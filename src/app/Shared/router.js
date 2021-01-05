export default [
  {
    path: '/',
    component: () => import('./views/home')
  },
  {
    path: '/category/:slug',
    component: () => import('./views/categoryTests')
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
  }
]
