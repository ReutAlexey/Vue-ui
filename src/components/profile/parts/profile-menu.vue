<template>
  <v-card
    class="mx-auto"
  >
    <v-list>
      <v-list-item-group class="d-flex flex-row">
        <v-list-item
          link
          :to="item.link"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'profile-menu',
  data () {
    return {
      items: [
        {
          icon: 'mdi-wrench',
          text: 'Создать тест',
          link: '/create-test'
        },
        {
          icon: 'mdi-star',
          text: 'Star',
          link: '/create-test'
        },
        {
          icon: 'mdi-send',
          text: 'Send',
          link: '/create-test'
        },
        {
          icon: 'mdi-email-open',
          text: 'Drafts',
          link: '/create-test'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
