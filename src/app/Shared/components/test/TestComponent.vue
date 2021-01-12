<template>
  <div>
    <v-card
      v-if="hide"
      class="mx-auto mt-2"
      max-width="900"
    >
      <v-img
        v-if="GET_TEST.image"
        max-height="400"
        :src="GET_TEST.image"
      >
      </v-img>
      <v-card-title
        v-text="GET_TEST.head"
      ></v-card-title>
      <v-card-text
        v-text="GET_TEST.description"
      ></v-card-text>
      <div class="d-flex">
        <v-card-subtitle>
          Категория: <b>{{GET_TEST.category}}</b><br>
          Средний результат: <b>{{GET_TEST.avgResult}}</b><br>
          Автор: <b>{{GET_TEST.author}}</b><br>
          Дата: <b>{{GET_TEST.date}}</b>
        </v-card-subtitle>
      </div>
      <v-card-actions>
        <v-btn
          block
          color="success"
          @click="showeQuestion"
          :to="'/test/' + GET_TEST.id + '/question'"
        >Начать</v-btn>
      </v-card-actions>
    </v-card>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TestComponent',
  components: {
  },
  data: () => ({
    hide: true
  }),
  methods: {
    ...mapActions(['A_TEST']),
    showeQuestion () {
      this.hide = false
    }
  },
  computed: {
    ...mapGetters(['GET_TEST'])
  },
  created () {
    this.hide = true
    this.A_TEST(this.$route.params.id)
  }
}
</script>
