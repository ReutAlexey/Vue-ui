import store from '@/app/store'

export default function (to, from, next) {
  if (store.getters.IS_LOGGED) {
    next()
  } else {
    next('/login')
  }
}
