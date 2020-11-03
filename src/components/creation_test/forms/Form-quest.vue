<template>
  <v-container class="form-show">
    <v-card
      @input="sendQuest"
      @change="sendQuest"
    >
      <v-toolbar color="rgb(255, 166, 0)">
        <v-toolbar-title>
          <b>Вопрос {{getIndex + 1}}</b>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <slot></slot>
      </v-toolbar>
      <v-card-text>
        <v-textarea
          v-model="quest.quest"
          label="Вопрос..."
          rows="3"
          name="quest"
          :rules="textRules"
          required
        ></v-textarea>
        <div>
          <label>Картинка к вопросу</label>
          <input-image @receiveImage="acceptImage"></input-image>
        </div>
      </v-card-text>
      <v-card-text>
        <answer-form
          :typeCounting="getTypeCounting"
          :index="index"
          v-for="(component, index) in quest.answers"
          :key="index"
          @sendAnswers="acceptAnswers"
        ></answer-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import inputImage from '@/components/inputs/Input-image'
import answerForm from './Form-answers'

export default {
  name: 'Form-quest',
  components: {
    inputImage,
    answerForm
  },
  props: {
    index: {
      default () {
        return Number
      }
    },
    typeCounting: {
      default () {
        return String
      }
    }
  },
  data () {
    return {
      valid: false,
      textRules: [
        v => !!v || 'Заполните поле "Ответ"'
      ],
      quest: {
        imageQuest: '',
        quest: '',
        countBall: 0,
        answers: [{ id: 0, answers: Object }]
      }
    }
  },
  methods: {
    sendQuest () {
      this.$emit('sendQuest', {
        inputs: this.quest,
        index: this.getIndex
      })
    },
    acceptImage (data) {
      this.quest.imageQuest = data.image
    },
    acceptAnswers (data) {
      this.quest.countBall = data.countBall
      this.quest.answers[data.index].answers = data.answers
    }
  },
  computed: {
    getIndex () {
      return this.$props.index
    },
    getTypeCounting () {
      return this.$props.typeCounting
    }
  }
}
</script>

<style scoped>

</style>
