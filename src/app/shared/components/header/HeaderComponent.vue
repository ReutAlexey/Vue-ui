<template>
  <div>
    <system-bar></system-bar>
    <app-bar></app-bar>
  </div>
</template>

<script>
import systemBar from './parts/SystemBarComponent'
import appBar from './parts/AppBarComponent'

export default {
  name: 'HeaderComponent',
  components: {
    systemBar,
    appBar
  }
}
</script>

<style scoped>

</style>
