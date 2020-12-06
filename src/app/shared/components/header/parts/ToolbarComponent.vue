<template>
  <v-toolbar dark color="#2F4F4F">
    <slot></slot>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items
      class="hidden-sm-and-down"
      v-for="link in links"
      :key="link.title"
    >
      <v-btn
        small
        color="#2F4F4F"
        :to="link.url"
      >
        {{link.title}}
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <btn-toolbar
      class="hidden-sm-and-down"
    ></btn-toolbar>
  </v-toolbar>
</template>

<script>
import BtnToolbar from './buttonAuthComponent'

export default {
  name: 'ToolbarComponent',
  components: {
    BtnToolbar
  },
  props: ['links'],
  data: () => ({
  }),
  methods: {
  }
}
</script>

<style scoped>

</style>
