<template>
  <div>
    <v-carousel
      class="mainconteiner"
      hide-delimiters
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  <v-container>
    <v-item-group
      multiple
    >
      <v-row>
        <v-col
          cols="12"
          md="4"
          v-for="(test, index) in getTests"
          :key="index"
        >
          <v-hover
            v-slot="{ hover }"
          >
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              max-width="400"
              :to="'/test/' + test.id"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                :src="test.image"
              >
                <v-card-title>{{test.head}}</v-card-title>
              </v-img>
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
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
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
    },
    getTests () {
      return this.$store.getters.GET_TESTS
    }
  },
  created () {
    this.$store.dispatch('SET_TESTS')
  }
}
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000

.mainconteiner
  margin-top: 100px
</style>
