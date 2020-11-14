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
  }
}
</script>

<style lang="sass" scoped>
.profile-menu
  height: 100%
</style>
