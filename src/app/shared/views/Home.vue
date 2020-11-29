<template>
<div>
  <carousel></carousel>
  <tests-list></tests-list>
</div>
</template>

<script>
import Carousel from '../components/Carousel-main'
import testsList from '../components/Cards-list-tests'

export default {
  name: 'Home',
  components: {
    Carousel,
    testsList
  }
}
</script>

<style scoped>

</style>
