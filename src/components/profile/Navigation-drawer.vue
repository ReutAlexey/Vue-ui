<template>
  <v-navigation-drawer permanent width="200">
    <v-list
      dense
      nav
    >
      <v-list-item :to="'/profile/' + getUser.id" link class="ma-2">
        <v-list-item-content>
          <v-list-item-title class="title">
            {{getUser.name}}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        class="ml-4"
        v-for="(item, index) in profileMenu"
        :key="index"
        link
        :disabled="!item.type"
      >
        <v-list-item-content>
          <v-list-item-title>
            <router-link
              tag="div"
              :to="item.link"
            >
              {{item.name}}
            </router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navigation-drawer',
  data () {
    return {
      profileMenu: [
        { link: '/profile/' + this.$store.getters.GET_USER_ID + '/create-test', name: 'Создать тест', type: true },
        { link: '/profile/' + this.$store.getters.GET_USER_ID + '/my-tests', name: 'Мои тесты', type: true },
        { link: '/profile/create-test', name: 'Мои классы', type: false },
        { link: '/profile/create-test', name: 'Создать класс', type: false }
      ]
    }
  },
  computed: {
    getUser () {
      return this.$store.getters.GET_USER
    }
  }
}
</script>

<style scoped>

</style>
