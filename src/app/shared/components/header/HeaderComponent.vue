<template>
    <div>
      <drawer
        :drawer="drawerValue"
        :links="links"
        :statusUser="statusUser"
        :categories="categories"
      ></drawer>
      <toolbar
        :links="links"
        :statusUser="statusUser"
      >
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click="onDrawer"
        ></v-app-bar-nav-icon>
      </toolbar>
    </div>
</template>

<script>
import toolbar from './parts/ToolbarComponent'
import drawer from './parts/DrawerComponent'
import axios from 'axios'

export default {
  name: 'HeaderComponent',
  components: {
    toolbar,
    drawer
  },
  data: () => ({
    drawer: false,
    links: [
      { title: 'На главную', icon: 'mdi-home', url: '/' }
    ],
    authorizationLinks: {
      guest: [
        { title: 'Войти', icon: '', url: '', statusButton: 'disabled' },
        { title: 'Регистрация', icon: '', url: '', statusButton: 'disabled' }
      ],
      user: [
        { title: 'Выйти', icon: '', url: '' },
        { title: 'Личный кабинет', icon: '', url: '' }
      ]
    },
    categoriesLinks: [],
    access: false
  }),
  methods: {
    onDrawer () {
      this.drawer = !this.drawer
    }
  },
  computed: {
    drawerValue () {
      return this.drawer
    },
    statusUser () {
      return this.access ? this.authorizationLinks.user : this.authorizationLinks.guest
    },
    categories () {
      return this.categoriesLinks
    }
  },
  created () {
    axios({ url: this.$store.getters.GET_BACKEND_URL + '/front/categories', method: 'GET' })
      .then(response => {
        this.categoriesLinks = response.data
      })
  }
}
</script>

<style scoped>

</style>
