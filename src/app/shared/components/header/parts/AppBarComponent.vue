<template>
  <div>
    <v-app-bar
      color="#A9A9A9"
      max-height="55"
      class="mt-10"
      fixed
    >
      <v-tabs
        centered
      >
        <v-tab
        ></v-tab>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-tab
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Категории
            </v-tab>
          </template>
          <v-list>
            <v-list-item
            >
              <v-list-item-title>
                <router-link
                  :to="'/category/'"
                >
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppBarComponent'
}
</script>

<style scoped>

</style>
