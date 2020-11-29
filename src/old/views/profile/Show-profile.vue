<template>
    <div class="mainconteiner profile-menu row">
    <navigation-drawer></navigation-drawer>
      <v-container style="width: 60%">
        <router-view></router-view>
      </v-container>
    </div>
</template>

<script>
import NavigationDrawer from '../../components/profile/Navigation-drawer'

export default {
  name: 'Show-profile',
  components: {
    NavigationDrawer
  },
  created () {
    if (`${this.$route.params.idUser}` !== `${this.$store.getters.GET_USER_ID}`) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass" scoped>
.profile-menu
  height: 100%
</style>
