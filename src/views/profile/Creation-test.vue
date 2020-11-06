<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      validation
    >
      <v-card>
        <v-toolbar color="">
          <v-toolbar-title>
            <b>Создание теста</b>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <div class="d-flex flex-row justify-center">
            <v-autocomplete
              label="Категория"
              v-model="formAddTest.categoryTest"
              class="pl-5"
              :items="formCreate"
              item-text="category"
              item-value="id"
              require
              :rules="textRules"
            ></v-autocomplete>
            <v-autocomplete
              label="Тип бодсчета баллов"
              class="pl-10"
              v-model="formAddTest.typeCounting"
              :items="formCreate"
              item-text="type_counting"
              item-value="id"
              require
              :rules="textRules"
            ></v-autocomplete>
            <v-autocomplete
              label="Статус теста"
              class="pl-10"
              v-model="formAddTest.statusTest"
              :items="formCreate"
              item-text="status"
              item-value="id"
              require
              :rules="textRules"
            ></v-autocomplete>
          </div>
          <v-divider></v-divider>
          <div class="d-flex flex-row ma-8">
            <v-text-field
              v-model="formAddTest.time"
              class="pa-5" type="number"
              label="Время прохождения теста"
            ></v-text-field>
            <v-text-field v-model="formAddTest.numberAttempts" class="pa-5" type="number" label="Количество попыток прохождения теста"></v-text-field>
          </div>
          <v-divider></v-divider>
          <div>
            <v-text-field
              required
              :rules="textRules"
              v-model="formAddTest.title"
              class="pa-5"
              type="text"
              label="Название теста"
            ></v-text-field>
            <v-textarea
              v-model="formAddTest.description"
              label="Описание теста"
              rows="3"
              require
              :rules="textRules"
            ></v-textarea>
          </div>
          <div>
            <label>Главная картинка</label>
            <input-image @receiveImage="getImage"></input-image>
          </div>
        </v-card-text>
        <v-card-actions class="flex-row">
          <div class="flex-row">
            <v-btn
              color="primary"
              v-for="(input, index) in formAddTest.quests"
              :key="index"
              @click="showQuest(index)"
            >{{index + 1}}</v-btn>
          </div>
          <div>
            <v-btn
              @click="addQuest"
              color="primary"
            >+</v-btn>
          </div>
        </v-card-actions>
        <v-card-actions>
          <form-quest
            :typeCounting="formAddTest.typeCounting"
            ref="index"
            :class="quest.style"
            v-for="quest in formAddTest.quests"
            :key="quest.id"
            :index="quest.id"
            @sendQuest="acceptQuest"
          ><v-btn color="red" @click="deleteQuest(quest.id)">Удалить</v-btn></form-quest>
        </v-card-actions>
        <v-alert
          @click="clearError"
          v-if="errorInputs"
          border="left"
          color="red"
          dismissible
          elevation="8"
          transition="scroll-y-reverse-transition"
          text
          type="error"
        >{{errorInputs}}</v-alert>
        <v-btn @click="saveTest" color="success" block>Сохранить</v-btn>
      </v-card>
    </v-form>
    {{errorInputs}}
    <p>{{formAddTest}}</p>
  </v-container>
</template>

<script>
import inputImage from '@/components/inputs/Input-image'
import formQuest from '@/components/creation_test/forms/Form-quest'
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Creation-test',
  components: {
    inputImage,
    formQuest
  },
  data () {
    return {
      textRules: [
        v => !!v || 'Заполните поле "Ответ"'
      ],
      formCreate: [],
      valid: false,
      formAddTest: {
        categoryTest: '',
        statusTest: '',
        typeCounting: '',
        time: '',
        numberAttempts: '',
        title: '',
        description: '',
        image: '',
        quests: [{ id: 0, style: 'form-show', quest: Object }]
      },
      count: 0,
      errorInputs: ''
    }
  },
  methods: {
    ...mapActions(['TEST_CREATION_FORM']),
    validate () {
      console.log(this.$refs.form.validate())
      this.$refs.form.validate()
    },
    getImage (data) {
      this.formAddTest.image = data.image
    },
    addQuest () {
      this.validate()
      if (this.valid === true) {
        this.questNone()
        this.formAddTest.quests.push({ id: ++this.count, style: 'form-show', quest: Object })
      }
    },
    showQuest (index) {
      this.questNone()
      this.formAddTest.quests[index].style = 'form-show'
    },
    questNone () {
      for (var quest of this.formAddTest.quests) {
        quest.style = 'form-none'
      }
    },
    acceptQuest (data) {
      this.formAddTest.quests[data.index].quest = data.inputs
    },
    deleteQuest (id) {
      if (this.formAddTest.quests.length > 1) {
        if (confirm('Вы действительно хотите удалить вопрос №' + (id + 1))) {
          this.formAddTest.quests.splice(id, 1)
          this.formAddTest.quests[this.formAddTest.quests.length - 1].style = 'form-show'
        }
      }
    },
    clearError () {
      this.errorInputs = ''
    },
    saveTest () {
      // console.log(JSON.stringify(this.formAddTest))
      this.validateCheckBox()
      if (this.errorInputs === '') {
        this.validate()
        if (this.valid === true) {
          axios({ url: 'http://127.0.0.1:8000/api/test', method: 'POST', data: this.formAddTest })
            .then(res => {
              console.log(JSON.stringify(res.data))
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    },
    validateCheckBox () {
      var iteratorCount = 0
      for (var quests of this.formAddTest.quests) {
        ++iteratorCount
        for (var answers of quests.quest.answers) {
          var flag = false
          for (const answer of answers.answers) {
            if (answer.checkBox === true) {
              flag = true
            }
          }
          if (flag === false) {
            this.errorInputs = 'Выберите правильный ответ в вопросе №' + iteratorCount
            break
          }
        }
      }
    }
  },
  computed: {
  },
  created () {
    this.TEST_CREATION_FORM()
    this.formCreate = this.$store.getters.GET_CREATION_FORM_TEST
  }
}
</script>

<style scoped>
.form-none {
  display: none;
}
.form-show {
}
</style>
