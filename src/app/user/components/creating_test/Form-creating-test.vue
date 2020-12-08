<template>
    <v-container>
      <v-form>
           <v-card class="pa-3">
             <v-toolbar
              color="yellow"
             >
               <v-toolbar-title>Создайте свой тест</v-toolbar-title>
             </v-toolbar>
             <v-card-text>
             <v-row>
             <v-col
               v-for="item in 3"
               :key="item"
               class="d-flex"
               cols="12"
               sm="4"
             >
               <v-select
                 class="ma-2"
                 solo
                 label="Filled style"
               ></v-select>
             </v-col>
               <v-col
                 v-for="item in 2"
                 :key="item + 5"
                 class="d-flex"
                 cols="12"
                 sm="6"
               >
                 <v-text-field
                   class="ma-2"
                   solo
                   type="number"
                   label="Main input"
                   hide-details="auto"
                 ></v-text-field>
               </v-col>
             </v-row>
             </v-card-text>
             <v-card-text>
               <v-divider class="pa-3" />
               <label>Картинка к тесту</label>
               <input-image></input-image>
             </v-card-text>
             <v-card-text>
               <v-divider />
               <v-col
                 cols="12"
                 md="6"
               >
                 <v-textarea
                   outlined
                   name="input-7-4"
                   label="Описание теста"
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
                 v-for="(item, index) in quests"
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
               :typeCounting="calculation_id"
               class="col-12"
               @writingQuest="acceptDataQuest"
               v-for="quest in quests"
               :key="quest.id"
               :questId="quest.id"
               :class="quest.style"
             >
               <v-btn
                 color="red"
                 @click="deleteQuest(quest.id)"
               >Удалить
               </v-btn></quest-form>
             <v-card-actions>
               <v-btn
                 block
                 color="success"
                 class="mt-4"
               >Сохранить</v-btn>
             </v-card-actions>
           </v-card>
      </v-form>
    </v-container>
</template>

<script>
import inputImage from './parts/inputs/Input-uploading-image'
import questForm from './parts/forms/QuestFormComponent'

export default {
  name: 'Form-creating-test',
  components: {
    inputImage,
    questForm
  },
  data: () => ({
    countQuest: 0,
    category_id: Number,
    access_id: Number,
    calculation_id: null,
    attempts: Number,
    time: Number,
    image: '',
    head: '',
    description: '',
    quests: [{ style: 'show-form', id: 0, image: '', quest: '', score: Number, answers: Array }]
  }),
  methods: {
    acceptDataQuest (data) {
      console.log(data)
      console.log(this.quests[data.id])
      this.quests[data.id].quest = data.quest.quest
      this.quests[data.id].image = data.quest.image
      this.quests[data.id].score = data.quest.score
      this.quests[data.id].answers = data.quest.answers
    },
    addQuest () {
      this.quests.push({ style: 'show-form', id: ++this.countQuest, image: '', quest: '', score: Number, answers: Array })
      this.showQuest(this.countQuest)
    },
    showQuest (id) {
      console.log(id)
      for (const quest of this.quests) {
        if (quest.id === id) {
          quest.style = 'form-show'
        } else {
          quest.style = 'form-none'
        }
      }
    },
    deleteQuest (id) {
      if (this.quests.length > 1) {
        if (confirm('Вы действительно хотите удалить вопрос №' + (id + 1))) {
          this.quests.splice(id, 1)
          this.quests[this.quests.length - 1].style = 'form-show'
        }
      }
    }
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
