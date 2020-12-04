<template>
    <v-container>
      <v-item-group
        multiple
      >
        <v-row>
          <v-col
            cols="12"
            md="4"
            v-for="test in GET_TESTS"
            :key="test.id"
          >
            <v-hover
              v-slot="{ hover }"
            >
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto"
                max-width="400"
                :to="'test/' + test.id"
              >
                <v-img
                  v-show="test.image"
                  class="white--text align-end"
                  height="200px"
                  :src="test.image"
                >
                </v-img>
                <v-card-title>Title</v-card-title>
                <div class="row mr-2 ml-2">
                  <v-card-subtitle class="pb-0">
                    Категория: {{test.category.category}}
                  </v-card-subtitle>
                  <v-spacer></v-spacer>
                  <v-card-subtitle>
                    Автор: {{test.user.name}}
                  </v-card-subtitle>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ListOfTestsComponent',
  methods: {
    ...mapActions(['A_SET_TESTS'])
  },
  computed: {
    ...mapGetters(['GET_TESTS'])
  },
  created () {
    this.A_SET_TESTS()
  }
}
</script>

<style scoped>

</style>
