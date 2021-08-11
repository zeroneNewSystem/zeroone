<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12" :loading="isloading">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>{{
                  $t("Registeration form")
                }}</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form">
                  <v-text-field
                    label="Name"
                    name="name"
                    :error-messages="errors.name"
                    prepend-icon="mdi-account"
                    v-model="form.name"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    name="email"
                    :error-messages="errors.email"
                    prepend-icon="mdi-email"
                    type="text"
                    v-model="form.email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    :error-messages="errors.password"
                    v-model="form.password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Confirmation Password"
                    :error-messages="errors.password_confirmation"
                    name="Confirmation_Password"
                    v-model="form.password_confirmation"
                    prepend-icon="mdi-lock-question"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <router-link to="/login" class="ml-3">
                  {{ $t("Already has an account") }}</router-link
                >

                <v-spacer></v-spacer>
                <v-btn color="primary" @click="register"> {{ $t('Register') }} </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-snackbar v-model="snackbar" top color="success" timeout="-1">
      تم التسجيل بنجاح

      <template v-slot:action="{ attrs }">
        <v-btn color="primary" text v-bind="attrs" @click="login">
          تسجيل الدخول.
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import User from "../../apis/User";
import Csrf from "../../apis/Csrf";
import Api from "../../apis/Api";
export default {
  data() {
    return {
      form: {
        email: "nib@mail.ru",
        name: "nibras",
        password: "password",
        password_confirmation: "password",
      },
      errors: "",
      snackbar: false,
      isloading: false,
    };
  },
  methods: {
    register() {
      this.isloading = "red";
      User.register(this.form)
        .then((response) => {
          this.isloading = false;

          this.errors = "";
          this.$refs.form.reset();
          this.$refs.form.resetValidation();
        })
        .catch((errors) => {
          this.errors = errors.response.data.errors;

          console.log(errors.response.data);
        })
        .finally(() => {
          this.isloading = false;
        });
    },
    login() {
      this.snackbar = false;
      setTimeout(() => {
        this.$router.push("/login");
      }, 300);
    },
  },
};
</script>
<style>
</style>