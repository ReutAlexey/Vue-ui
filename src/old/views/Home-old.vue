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
    <test-cards></test-cards>
  </div>
</template>

<script>
import testCards from '@/components/parts/TestCardsComponent'
export default {
  name: 'Home',
  components: {
    testCards
  },
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
          src: 'https://yt3.ggpht.com/a/AATXAJxUzR5HSM9Y9YSQD-eK33C7EgnbLMGlEgEx4otQ=s900-c-k-c0xffffffff-no-rj-mo'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
