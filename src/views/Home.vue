<template>
  <v-container>
    <h1>Home</h1>
    <h1>{{user}}</h1>
    <v-item-group>

    </v-item-group>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  computed: {
    user () {
      return this.$store.getters.GET_USER
    }
  }
}
</script>
