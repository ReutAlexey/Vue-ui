<template>
  <div class="home">
    <h1>Home</h1>
    <h1>{{user}}</h1>
  </div>
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
