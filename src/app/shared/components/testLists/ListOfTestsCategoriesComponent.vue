<template>
  <div>
    list
  </div>
</template>

<script>
export default {
  name: 'ListOfTestsCategoriesComponent',
  data: () => ({
    categoryId: Number
  }),
  watch: {
    $route (toR) {
      this.$store.dispatch('A_SET_CATEGORY_TESTS', toR.query.id)
    }
  },
  computed: {
    category () {
      return this.categoryId
    }
  }
}
</script>

<style scoped>

</style>
