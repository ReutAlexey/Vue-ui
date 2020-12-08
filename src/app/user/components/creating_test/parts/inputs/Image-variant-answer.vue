<template>
  <v-row align="center">
    <v-checkbox
      v-model="answer.status"
      hide-details
      class="shrink mr-1 mt-0"
      @change="writingValue"
    ></v-checkbox>
    <input-image @receiveImage="setImage"></input-image>
    <v-btn
      fab
      x-small
      color="red"
      icon
      @click="deleteInput"
    ><v-icon>mdi-minus</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
import writingValue from '../../../../mixins/valuesAnswer'
import InputImage from './Input-uploading-image'

export default {
  name: 'Image-variant-answer',
  components: {
    InputImage
  },
  mixins: [writingValue],
  data: () => ({
    variant: 'image'
  }),
  methods: {
    setImage (data) {
      this.answer.answer = data.image
      this.writingValue()
    }
  }
}
</script>

<style scoped>

</style>
