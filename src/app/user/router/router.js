import store from '@/app/store'
import checkToken from '@/app/user/router/helpers/checkToken'

export default [
  {
    path: '/exit',
    beforeEnter: (toR, fromR, next) => {
      store.dispatch('A_LOGOUT')
        .then(() => next('/'))
        .catch(() => next('/'))
    }
  },
  {
    path: '/create-test',
    component: () => import('../views/create-test'),
    beforeEnter: checkToken
  },
  {
    path: '/my-tests',
    component: () => import('../views/myTest'),
    beforeEnter: checkToken
  }
]
