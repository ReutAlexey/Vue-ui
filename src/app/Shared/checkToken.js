import store from '../user/store/modules/user/user'

export default function (to, from, next) {
  if (store.getters.IS_LOGGED) {
    store.actions.A_REFRESH_TOKEN
  } else {
    next('/')
  }
}
