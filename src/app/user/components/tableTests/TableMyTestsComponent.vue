<template>
  <div
    class="d-flex justify-center"
  >
    <v-data-table
      :headers="headers"
      class="elevation-1"
    >
      <template>
        <v-chip
          dark
        >
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TableMyTestsComponent',
  data: () => ({
    headers: [
      { text: 'Название' },
      { text: 'Категория' },
      { text: 'Ср.балл' }

    ]
  }),
  created () {
    axios({ url: this.$store.getters.GET_BACKEND_URL + '/user/tests', method: 'GET' })
      .then(r => console.log(r.data))
      .catch(e => console.log(e))
  }
}
</script>

<style scoped>

</style>
