<template>
  <div><h1>create test page</h1></div>
</template>

<script>
import axios from 'axios'

export default {
  async created () {
    await axios({ url: this.$store.getters.GET_BACKEND_URL + '/auth/me', method: 'POST' })
      .then(r => { console.log(r.data) })
      .catch(e => { console.log(e.response) })
  }
}
</script>

<style scoped>

</style>
