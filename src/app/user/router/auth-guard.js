import store from '@/app/store'

export default function (to, from, next) {
  store.dispatch('A_REFRESH_TOKEN')
  if (store.getters.IS_LOGGED) {
    console.log(store.getters.IS_LOGGED)
    next()
  } else {
    next('/login')
  }
}
