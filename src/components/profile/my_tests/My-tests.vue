<template>
  <div>
    <h1>my tests page</h1>
    <v-simple-table
      fixed-header
      height="auto"
    >
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Head
          </th>
          <th class="text-left">
            Статус
          </th>
          <th class="text-left">
            Категория
          </th>
          <th class="text-left">
            Тип подсчета баллов
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="test in myTest"
          :key="test.id"
        >
          <td>{{ test.head }}</td>
          <td>{{ test.access.type }}</td>
          <td>{{ test.category.category}}</td>
          <td>{{ test.calculation.type}}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'My-tests',
  data () {
    return {
      myTest: []
    }
  },
  created () {
    axios({ url: 'http://127.0.0.1:8000/api/users/tests', method: 'GET' })
      .then(response => {
        this.myTest = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
