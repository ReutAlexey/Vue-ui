<template>
  <v-container class="mainconteiner">
    <v-card
      v-if="hide"
    >
      <v-img
        :src="'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'"
      ></v-img>
      <v-card-title><b>Title</b></v-card-title>
      <v-card-subtitle class="description">
        <p>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
        </p>
      </v-card-subtitle>
      <v-card-text>
        <p>Кол-во попыток:</p>
        <p>Время прохождения:</p>
        <p>Категория:</p>
        <p>Автор:</p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          block
          color="#2cd42d"
          :to="'/test/' + 1 + '/quest'"
          @click="hideCard"
        >Начать</v-btn>
      </v-card-actions>
    </v-card>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: 'Test-page',
  data () {
    return {
      hide: true
    }
  },
  methods: {
    hideCard () {
      this.hide = false
    }
  }
}
</script>
