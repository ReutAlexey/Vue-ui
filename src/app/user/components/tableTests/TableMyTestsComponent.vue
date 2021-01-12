<template>
  <div
    class="d-flex justify-center"
  >
    <v-simple-table class="col-lg-10">
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Название
          </th>
          <th class="text-left">
            Категория
          </th>
          <th class="text-left">
            Ср.рез
          </th>
          <th class="text-left">
            Действия
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(item, index) in tests"
          :key="index"
        >
          <td>
            <router-link :to="`/test/` + item.id">{{ item.head }}
            </router-link>
          </td>
          <td>{{ item.categories.title }}</td>
          <td>{{item.results_avg_result}}</td>
          <td>
            <v-btn
              color="red"
              x-small
            >
            Удалить
          </v-btn>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TableMyTestsComponent',
  data: () => ({
    tests: []
  }),
  created () {
    axios({ url: this.$store.getters.GET_BACKEND_URL + '/user/tests', method: 'GET' })
      .then(r => {
        console.log(r.data)
        this.tests = r.data
      })
      .catch(e => console.log(e))
  }
}
</script>

<style scoped>

</style>
