<template>
    <div>
      <drawer
        :drawer="drawer"
        :links="links"
        :categories="categories"
        @click="onDrawer"
        changeDrawer="changeDrawer"
      ></drawer>
      <toolbar
        :links="links"
      >

      </toolbar>
    </div>
</template>

<script>
import toolbar from './parts/ToolbarComponent'
import drawer from './parts/DrawerComponent'
import axios from 'axios'
import { mapGetters } from 'vuex'

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
    categoriesLinks: []
  }),
  methods: {
    onDrawer () {
      this.drawer = !this.drawer
    },
    changeDrawer (data) {
      this.drawer = data.drawer
    }
  },
  computed: {
    ...mapGetters(['IS_LOGGED']),
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
