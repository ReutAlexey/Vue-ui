<template>
    <div class="mainconteiner profile-menu row">
      <v-navigation-drawer permanent width="200">
        <v-list
          dense
          nav
        >
          <v-list-item
            class="ml-4"
            v-for="(item, index) in profileMenu"
            :key="index"
            link
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
      <v-container style="width: 60%">
        <router-view></router-view>
      </v-container>
    </div>
</template>

<script>
export default {
  name: 'Show-profile',
  components: {
  },
  data () {
    return {
      profileMenu: [
        { link: '/profile/create-test', name: 'Создать тест' },
        { link: '/profile/create-test', name: 'Мои тесты' },
        { link: '/profile/create-test', name: 'Мои классы' },
        { link: '/profile/create-test', name: 'Создать класс' }
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.profile-menu
  height: 100%
</style>
