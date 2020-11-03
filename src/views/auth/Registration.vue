<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-10">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Вход</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              validation
            >
              <v-text-field
                v-model="form.email"
                prepend-icon="mdi-account-box"
                name="email"
                label="E-mail"
                type="text"
                require
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                v-model="form.password"
                prepend-icon="mdi-lock"
                name="password"
                label="Password"
                id="password"
                type="password"
                require
                :rules="textRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <router-link class="ml-5" to="/register">Зарегистрироваться</router-link>
            <v-spacer></v-spacer>
            <v-btn
              class="mr-10 mb-5"
              color="primary"
              @click="login"
              :loading="loading"
            ><v-icon left>mdi-exit-to-app</v-icon>Войти</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      textRules: [
        v => !!v || 'Заполните поле'
      ],
      emailRules: [
        v => !!v || 'Заполните поле E-mail',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      valid: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['LOGIN']),
    validate () {
      this.$refs.form.validate()
    },
    login () {
      this.validate()
      if (this.valid) {
        this.LOGIN(this.form)
          .then(() => {
            this.$router.push('/')
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  },
  computed: {
    loading () {
      return this.$store.getters.GET_LOADING
    }
  }
}
</script>
