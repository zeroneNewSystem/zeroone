<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12" :loading="isloading" flat>
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form">
                  <v-text-field
                    v-model="form.email"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="form.password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <router-link to="/register" class="ml-3">
                  Sign up !</router-link
                >
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
        password: "password",
        device_name: "browser",
      },
      errors: "",
      snackbar: false,
      isloading: false,
    };
  },
  mounted() {
    setTimeout(() => {
      M.updateTextFields();
    });
  },
  methods: {
    login() {
      this.isloading = "red";
      User.login(this.form)
        .then((response) => {
          localStorage.setItem("token", response.data);
          this.$router.push("/dashboard");
        })
        .catch((errors) => {
          this.errors = errors.response.data.errors;
          console.log(errors.response.data);
        });
    },
  },
};
</script>

<style>
</style>


