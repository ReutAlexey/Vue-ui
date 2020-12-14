<template>
  <v-container
  >
    <v-row
      cols="12"
      md="4"
      v-for="test in categoryList"
      :key="test.id"
    >
      <v-col
        cols="12"
        md="6"
        :key="test.id"
      >
        <v-hover
          v-slot="{ hover }"
        >
          <v-card
            class="grid-list-md"
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
                <v-card-text v-text="'Дата: ' + test.data"></v-card-text>
              </div>
              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img
                  v-show="test.image"
                  :src="test.image"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'ListOfTestsCategoriesComponent',
  data: () => ({
  }),
  watch: {
    $route (toR) {
      this.$store.dispatch('A_SET_CATEGORY_TESTS', toR.query.id)
    }
  },
  computed: {
    categoryList () {
      return this.$store.getters.GET_CATEGORY_LIST
    }
  },
  created () {
    this.$store.dispatch('A_SET_CATEGORY_TESTS', this.$route.query.id)
  }
}
</script>

<style scoped>

</style>
