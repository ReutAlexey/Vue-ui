<template>
  <div>
    <p class="ma-3">user:
    <v-btn
      text
      link
      small
      @click="logout"
    >Выход</v-btn></p>
  </div>
</template>

<script>
export default {
  name: 'Button-logout',
  methods: {
    logout () {
      this.$store.dispatch('LOGOUT')
    }
  }
}
</script>

<style scoped>

</style>
