<template>
  <v-row align="center">
    <v-checkbox
      v-model="answer.status"
      hide-details
      class="shrink mr-1 mt-0"
      @change="writingValue"
    ></v-checkbox>
    <v-text-field
      style="width: 50%"
      label="Ответ:"
      v-model="answer.answer"
      :rules="rules.required"
      @input="writingValue"
      counter
      maxlength="200"
    ></v-text-field>
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
import validate from '../../../../mixins/validate'

export default {
  name: 'Text-variant-answer',
  mixins: [writingValue, validate],
  data: () => ({
    variant: 'text'
  })
}
</script>
