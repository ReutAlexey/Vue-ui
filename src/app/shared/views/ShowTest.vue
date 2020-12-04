<template>
    <v-container>
      <h1>Test page</h1>
      <card-test></card-test>
    </v-container>
</template>

<script>
import cardTest from '../components/test/CardTest'

export default {
  name: 'ShowTest',
  components: {
    cardTest
  }
}
</script>

<style scoped>

</style>
