<template>
    <v-card
      elevation="3"
    >
      <v-toolbar
        color="orange"
      >
        <v-toolbar-title
          v-text="'Вопрос:' + (questId + 1)"
        ></v-toolbar-title>
        <v-spacer />
        <slot></slot> <!-- Delete question button -->
      </v-toolbar>
      <v-card-text>
        <input-image
          class="ml-3"
          @receiveImage="acceptImage"
          :text="'Выберите картинку к вопросу'"
        ></input-image>
        <v-col
          cols="12"
          md="6"
        >
          <v-textarea
            outlined
            name="input-7-4"
            label="Вопрос"
            maxlength="500"
            counter
            :rules="rules.required"
            v-model="quest.quest"
            @input="writingQuest"
          ></v-textarea>
        </v-col>
        <v-text-field
          v-if="calculation === 1"
          label="Укажите кол-во баллов за правильный ответ"
          type="number"
          prepend-icon="mdi-counter"
          v-model="quest.score"
          :rules="rules.intScope"
          @input="writingQuest"
        ></v-text-field>
      </v-card-text>
      <answers-form @writingAnswers="acceptDataAnswers" />
    </v-card>
</template>

<script>
import answersForm from './AnswersFormComponent'
import inputImage from '../inputs/Input-uploading-image'
import validate from '../../../../../../../app/user/mixins/validate'

export default {
  name: 'QuestFormComponent',
  components: {
    answersForm,
    inputImage
  },
  mixins: [validate],
  props: {
    questId: Number,
    calculation: Number
  },
  data: () => ({
    quest: {
      score: 0,
      quest: '',
      image: '',
      answers: []
    }
  }),
  methods: {
    acceptDataAnswers (data) {
      this.quest.answers = data.answers
      this.writingQuest()
    },
    acceptImage (data) {
      this.quest.image = data.image
      this.writingQuest()
    },
    writingQuest () {
      this.$emit('writingQuest', {
        id: this.questId,
        quest: this.quest
      })
    }
  }
}
</script>
