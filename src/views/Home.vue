<template>
  <v-container>
    <h1>Home</h1>
    <h1>{{user}}</h1>
    <v-item-group
      v-model="selected"
      multiple
    >
      <v-row>
        <v-col
          v-for="(item, i) in this.tests"
          :key="i"
          cols="12"
          md="6"
        >
         <v-card>
           <v-card-title>
             {{ item.title}}
           </v-card-title>
           <v-card-text>

           </v-card-text>
         </v-card>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      selected: [],
      tests: []
    }
  },
  components: {
  },
  computed: {
    user () {
      return this.$store.getters.GET_USER
    }
  },
  created () {
    axios({ url: 'http://127.0.0.1:8000/api/test', method: 'GET' })
      .then(response => {
        console.log(response)
        this.tests = response.data
      })
  }
}
</script>
