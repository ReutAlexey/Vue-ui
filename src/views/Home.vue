<template>
  <v-container>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-item-group
      v-model="selected"
      multiple
    >
      <v-row>
        <v-col
          v-for="(item, i) in this.tests"
          :key="i"
          cols="12"
          md="4"
        >
          <v-hover
            v-slot="{ hover }"
          >
         <v-card
           :elevation="hover ? 16 : 2"
           :class="{ 'on-hover': hover }"
           class="mx-auto"
           height="auto"
           max-width="350"
           :to="'/test/' + item.id">
           <v-card-title>
             {{ item.title }}
           </v-card-title>
           <v-img
           :src="item.image_link"
           height="150"
           class="text-right pa-2"
           >
           <v-btn
             icon
             dark
           >
             <v-icon>
               mdi-heart-outline
             </v-icon>
           </v-btn>
           </v-img>
           <v-card-text>
             <v-col>
               <p>Количество попыток: <b>{{ item.number_attempts > 0 ? item.number_attempts : 'не ограничено' }}</b></p>
               <p>Время на прохождение: <b>{{ item.time_test > 0 ?  item.time_test + 'сек' : 'не ограничено' }}</b></p>
               <p>Катекория: <b>{{item.category.category}}</b></p>
               <p>Автор: <b>{{item.user.name}}</b></p>
             </v-col>
           </v-card-text>
         </v-card>
          </v-hover>
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
      tests: [],
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
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
        this.tests = response.data
      })
  }
}
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
