<template>
  <v-container
  >
    <div
      v-for="test in GET_CATEGORY_TESTS"
      :key="test.id"
    >
      <div
        class="pa-2"
      >
        <v-hover
          v-slot="{ hover }"
        >
          <v-card
            :elevation="hover ? 16 : 2"
            color="#FFFFFF"
            :to="'/test/' + test.id"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="test.head"
                ></v-card-title>
                <v-card-subtitle v-text="test.description"></v-card-subtitle>
                <v-card-text v-text="'Автор: ' + test.user.name"></v-card-text>
                <v-card-text v-text="'Дата: ' + test.created_at"></v-card-text>
              </div>
              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img
                  v-show="test.image.length > 1"
                  :src="test.image"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-hover>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Tests-category',
  data () {
    return {
      categoryId: Number
    }
  },
  watch: {
    $route (toR, fromR) {
      this.$store.dispatch('A_SET_CATEGORY_TESTS', toR.params.categoryId)
    }
  },
  computed: {
    ...mapGetters(['GET_CATEGORY_TESTS']),
    category () {
      return this.categoryId
    }
  },
  created () {
    this.$store.dispatch('A_SET_CATEGORY_TESTS', this.$route.params.categoryId)
  }
}
</script>

<style scoped>

</style>
