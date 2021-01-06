<template>
  <div>
    <v-navigation-drawer
      app
      temporary
      v-model="valueDrawer"
      width="300"
    >
      <h1>Леша Хаян</h1>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'DrawerComponent',
  data: () => ({
    drawer: false
  }),
  props: ['valueDrawer'],
  methods: {
  },
  watch: {
    dra () {
      this.drawer = this.valueDrawer
    }
  }
}
</script>

<style scoped>

</style>
