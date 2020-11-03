<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-10">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Регистрация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="formRegister"
              v-model="valid"
              validation
            >
              <v-text-field
                prepend-icon="mdi-account-box"
                v-model="form.login" name="login"
                label="Имя"
                type="text"
                require
                :rules="textRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-at"
                v-model="form.email"
                label="E-mail"
                type="text"
                require
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                v-model="form.password"
                label="Пароль"
                type="password"
                require
                :rules="textRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                v-model="form.password_confirm"
                label="Повторите пароль"
                type="password"
                require
                :rules="textRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <router-link class="ml-5" to="/login">Уже есть аккаунт?</router-link>
            <v-spacer></v-spacer>
            <v-btn
              class="mr-10 mb-5"
              color="primary"
              @click="register"
              :loading="loading"
            ><v-icon left>mdi-account-plus</v-icon>Регистрация</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
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
        login: '',
        email: '',
        password: '',
        password_confirm: ''
      }
    }
  },
  methods: {
    ...mapActions(['REGISTER']),
    validate () {
      this.$refs.formRegister.validate()
    },
    register () {
      this.validate()
      if (this.valid) {
        this.REGISTER(this.form)
          .then(() => {
            this.$router.push('/')
          })
          .catch()
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
