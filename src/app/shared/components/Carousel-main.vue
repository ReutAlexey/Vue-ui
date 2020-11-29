<template>
  <div>
    <v-carousel
      hide-delimiters
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel-main',
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

<style scoped>

</style>
