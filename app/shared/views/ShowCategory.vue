<template>
    <div>
      <h1>Category page {{$route.query.id}}</h1>
      <category-lists />
    </div>
</template>

<script>
import categoryLists from '../components/testLists/ListOfTestsCategoriesComponent'

export default {
  name: 'ShowCategory',
  components: {
    categoryLists
  }
}
</script>

<style scoped>

</style>
