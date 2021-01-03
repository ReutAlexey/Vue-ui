<template>
  <div>
    <h1>Home</h1>
    <list-test-cards></list-test-cards>
  </div>
</template>

<script>
import listTestCards from '../components/testLists/ListOfTestsComponent'

export default {
  name: 'Home',
  components: {
    listTestCards
  }
}
</script>

<style scoped>

</style>
