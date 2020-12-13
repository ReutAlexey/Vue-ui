<template>
    <v-container>
      <v-form
        ref="form"
        v-model="valid"
        validation
      >
           <v-card class="pa-3">
             <v-toolbar
              color="yellow"
             >
               <v-toolbar-title>Создайте свой тест</v-toolbar-title>
             </v-toolbar>
             <v-card-text>
             <v-row>
             <v-flex
               class="d-flex"
               cols="12"
               sm="4"
             >
               <v-select
                 class="ma-2"
                 label="Категория"
                 :rules="rules.requiredSelect"
                 :items="formCreate['categories']"
                 item-text="category"
                 item-value="id"
                 v-model="testForm.category_id"
               ></v-select>
               <v-select
                 class="ma-2"
                 label="Тип подсчёта"
                 :rules="rules.requiredSelect"
                 :items="formCreate['typeCalculation']"
                 item-text="type"
                 item-value="id"
                 v-model="testForm.calculation_id"
               ></v-select>
               <v-select
                 class="ma-2"
                 label="Видимость"
                 :rules="rules.requiredSelect"
                 :items="formCreate['typeAccess']"
                 item-text="type"
                 item-value="id"
                 v-model="testForm.access_id"
               ></v-select>
             </v-flex>
               <v-flex
                 class="d-flex justify-space-around"
                 cols="12"
                 sm="6"
                 flat
               >
                 <v-text-field
                   class="ma-2"
                   type="number"
                   label="Время прохождения теста"
                   :rules="rules.int"
                   v-model="testForm.time"
                 ></v-text-field>
                 <v-text-field
                   class="ma-2"
                   type="number"
                   label="Кол-во попыток"
                   hide-details="auto"
                   :rules="rules.int"
                   v-model="testForm.attempts"
                 ></v-text-field>
               </v-flex>
             </v-row>
             </v-card-text>
             <v-card-text>
               <v-divider class="pa-3" />
               <label>Картинка к тесту</label>
               <input-image
                 class="ml-3"
                 @receiveImage="acceptImage"
               ></input-image>
             </v-card-text>
             <v-card-text>
               <v-divider />
               <v-text-field
                 class="ma-3"
                 label="Название теста"
                 outlined
                 hide-details="auto"
                 v-model="testForm.head"
                 :rules="rules.required"
               ></v-text-field>
               <v-col
                 cols="12"
                 md="6"
               >
                 <v-textarea
                   outlined
                   name="input-7-4"
                   label="Описание теста"
                   counter
                   maxlength="500"
                   v-model="testForm.description"
                   :rules="rules.required"
                 ></v-textarea>
               </v-col>
             </v-card-text>
             <v-flex
               class="pa-2"
             >
               <v-btn
                 color="primary"
                 small
                 class="ma-1"
                 v-for="(item, index) in testForm.quests"
                 :key="item.id"
                 @click="showQuest(item.id)"
               >
                 {{(index + 1)}}
               </v-btn>
               <v-btn
                 color="primary"
                 fab
                 x-small
                 @click="addQuest"
               >+</v-btn>
             </v-flex>
             <quest-form
               :typeCounting="testForm.calculation_id"
               class="col-12"
               @writingQuest="acceptDataQuest"
               v-for="quest in testForm.quests"
               :key="quest.id"
               :questId="quest.id"
               :calculation="testForm.calculation_id"
               :class="quest.style"
             >
               <v-btn
                 color="red"
                 @click="deleteQuest(quest.id)"
               >Удалить
               </v-btn></quest-form>
             <v-alert
               @click="clearError"
               v-if="errorCheckbox"
               border="left"
               color="red"
               dismissible
               elevation="8"
               transition="scroll-y-reverse-transition"
               text
               type="error"
             >{{errorCheckbox}}</v-alert>
             <v-card-actions>
               <v-btn
                 block
                 color="success"
                 class="mt-4"
                 @click="saveTest"
               >Сохранить</v-btn>
             </v-card-actions>
           </v-card>
      </v-form>
    </v-container>
</template>

<script>
import inputImage from './parts/inputs/Input-uploading-image'
import questForm from './parts/forms/QuestFormComponent'
import validate from '../../mixins/validate'
import axios from 'axios'

export default {
  name: 'Form-creating-test',
  components: {
    inputImage,
    questForm
  },
  mixins: [validate],
  data: () => ({
    errorCheckbox: '',
    formCreate: [],
    countQuest: 0,
    testForm: {
      category_id: 0,
      access_id: 0,
      calculation_id: 0,
      attempts: 0,
      time: 0,
      image: '',
      head: '',
      description: '',
      quests: [
        {
          style: 'show-form',
          id: 0,
          image: '',
          quest: '',
          score: '',
          answers: Array
        }
      ]
    }
  }),
  methods: {
    acceptDataQuest (data) {
      this.testForm.quests[data.id].quest = data.quest.quest
      this.testForm.quests[data.id].image = data.quest.image
      this.testForm.quests[data.id].score = data.quest.score
      this.testForm.quests[data.id].answers = data.quest.answers
    },
    acceptImage (data) {
      this.testForm.image = data.image
    },
    addQuest () {
      this.testForm.quests.push({ style: 'show-form', id: ++this.countQuest, image: '', quest: '', score: '', answers: Array })
      this.showQuest(this.countQuest)
    },
    showQuest (id) {
      for (const quest of this.testForm.quests) {
        if (quest.id === id) {
          quest.style = 'form-show'
        } else {
          quest.style = 'form-none'
        }
      }
    },
    deleteQuest (id) {
      if (this.testForm.quests.length > 1) {
        if (confirm('Вы действительно хотите удалить вопрос №' + (id + 1))) {
          this.testForm.quests.splice(id, 1)
          this.testForm.quests[this.testForm.quests.length - 1].style = 'form-show'
        }
      }
    },
    validateCheckBox () {
      this.errorCheckbox = ''
      var iteratorCount = 0
      for (var quest of this.testForm.quests) {
        var flag = false
        ++iteratorCount
        for (var answer of quest.answers) {
          if (answer.status) {
            flag = true
          }
        }
        if (!flag) {
          this.errorCheckbox = 'Выберите правильный ответ в вопросе №' + iteratorCount
          break
        }
      }
    },
    clearError () {
      this.errorCheckbox = ''
    },
    saveTest () {
      this.validate()
      if (this.valid) {
        this.validateCheckBox()
        if (this.errorCheckbox === '') {
          axios({ url: this.$store.getters.GET_BACKEND_URL + '/user/tests', data: this.testForm, method: 'POST' })
            .then(response => console.log(response))
            .catch(error => {
              console.log(error.response)
            })
        }
      }
    }
  },
  beforeCreate () {
    axios({ url: this.$store.getters.GET_BACKEND_URL + '/user/tests/create', method: 'GET' })
      .then(response => {
        this.formCreate = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.form-show {
}
.form-none {
  display: none;
}
</style>
