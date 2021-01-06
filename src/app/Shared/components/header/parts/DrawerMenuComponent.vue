<template>
  <div>
    <v-card
      class="mx-auto"
      width="300"
    >
      <v-list>
        <v-subheader>TestManager</v-subheader>
        <v-list-item
          v-for="item in GET_NAVIGATION"
          :key="item.link"
          link
          :to="item.url"
        >
          <v-icon left v-text="item.icon"></v-icon>
          <v-list-item-title
            v-text="item.name"
          ></v-list-item-title>
        </v-list-item>

        <v-list-group
          :value="false"
          no-action
          prepend-icon="mdi-shape"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Категории</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="category in GET_LIST_CATEGORIES"
            :key="category.id"
            link
            :to="'/category/' + category.slug + '?id='+ category.id"
          >
            <v-list-item-title v-text="category.title"></v-list-item-title>

          </v-list-item>
        </v-list-group>

        <v-divider></v-divider>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DrawerComponent',
  data: () => ({
  }),
  methods: {
  },
  computed: {
    ...mapGetters(['GET_NAVIGATION', 'GET_LIST_CATEGORIES'])
  }
}
</script>

<style scoped>

</style>
