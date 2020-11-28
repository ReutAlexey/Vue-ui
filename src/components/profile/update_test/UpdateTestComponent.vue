<template>
  <v-form
    ref="form"
    v-model="valid"
    validation
  >
    page update
    <v-card>
      <v-toolbar color="#FFFF00">
        <v-toolbar-title>
          <b>Создание теста</b>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-divider></v-divider>
        <div>
          <v-text-field
            required
            :rules="textRules"
            v-model="test.head"
            class="pa-5"
            type="text"
            label="Название теста"
          >
            {{formTest.head}}
          </v-text-field>
          <v-textarea
            v-model="test.description"
            label="Описание теста"
            rows="3"
            require
            :rules="textRules"
          >
            {{formTest.description}}
          </v-textarea>
        </div>
        <!--<div>
          <label>Главная картинка</label>
          <input-image @receiveImage="getImage"></input-image>
        </div>-->
      </v-card-text>
      <!--<v-card-actions class="flex-row">
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
          :typeCounting="formAddTest.calculation"
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
      <v-btn
        @click="updateTest"
        color="success"
        block
        :loading="loading"
      >Сохранить</v-btn>-->
    </v-card>
    {{test}}
  </v-form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UpdateTestComponent',
  data () {
    return {
      textRules: [
        v => !!v || 'Заполните поле "Ответ"'
      ],
      valid: false,
      test: {}
    }
  },
  methods: {
    updateTest () {
    }
  },
  computed: {
    formTest () {
      return this.test
    }
  },
  created () {
    axios({ url: this.$store.state.backendUrl + '/user/tests/' + this.$route.params.idTest + '/edit', method: 'GET' })
      .then(res => {
        console.log(res.data)
        this.test = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
