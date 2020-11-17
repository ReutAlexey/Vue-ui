<template>
    <v-container
      class="mainconteiner"
    >
      <p>Page category {{category }}</p>
      <v-hover
        v-slot="{ hover }"
      >
        <v-card
          :elevation="hover ? 16 : 2"
          color="#FFFFFF"
          v-for="test in tests"
          :key="test.id"
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
              <v-img :src="test.image"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-hover>
    </v-container>
</template>

<script>
export default {
  name: 'Category',
  computed: {
    category () {
      return this.$route.params.category
    },
    tests () {
      return this.$store.getters.GET_TESTS_CATEGORY
    }
  },
  watch: {
    $route (toR, fromR) {
      this.$store.dispatch('A_TESTS_CATEGORY', toR.params.id)
    }
  },
  created () {
    this.$store.dispatch('A_TESTS_CATEGORY', this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
