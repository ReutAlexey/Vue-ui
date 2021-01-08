import store from '../../../store'

export default async function (to, from, next) {
  if (store.getters.IS_LOGGED) {
    await store.dispatch('A_REFRESH_TOKEN')
      .then(() => next())
      .catch(() => next('/'))
  } else {
    next('/login')
  }
}
