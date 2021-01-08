<template>
      <v-toolbar-items
        class="hidden-sm-and-down"
      >
        <v-btn
          x-small
          color="#2F4F4F"
          v-for="item in GET_AUTH_NAVIGATION"
          :key="item.url"
          :to="item.url"
        >
          <v-icon left>{{item.icon}}</v-icon>
          {{ item.name }}
        </v-btn>
      </v-toolbar-items>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AuthNavigationComponent',
  computed: {
    ...mapGetters(['IS_LOGGED', 'GET_AUTH_NAVIGATION'])
  }
}
</script>

<style scoped>

</style>
