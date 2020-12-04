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
    <v-toolbar-items
      class="hidden-sm-and-down"
      v-for="link in statusUser"
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
  </v-toolbar>
</template>

<script>
export default {
  name: 'ToolbarComponent',
  props: ['links', 'statusUser'],
  data: () => ({
    drawer: false
  })
}
</script>

<style scoped>

</style>
