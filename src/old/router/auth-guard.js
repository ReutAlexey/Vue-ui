import store from '../store_old'

export default function (to, from, next) {
  if (store.getters.IS_LOGGED_IN) {
    next()
  } else {
    next('/login')
  }
}
