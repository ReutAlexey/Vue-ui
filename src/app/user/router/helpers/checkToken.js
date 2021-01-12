import store from '../../../store'

export default async function (to, from, next) {
  if (store.getters.IS_LOGGED) {
    await store.dispatch('A_AUTH_ME')
      .then(() => next())
      .catch(() => next('/login'))
  } else {
    next('/login')
  }
}
