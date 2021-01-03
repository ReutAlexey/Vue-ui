<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Profile',
  created () {
    axios({ url: this.$store.getters.GET_BACKEND_URL + '/user/tests', method: 'GET' })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
