<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Registeration form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Name"
                    name="login"
                    prepend-icon="mdi-account"
                    v-model="form.name"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    name="login"
                    prepend-icon="mdi-email"
                    type="text"
                    v-model="form.email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="form.password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Confirmation Password"
                    name="password"
                     v-model="form.password_confirmation"
                    
                    prepend-icon="mdi-lock-question"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <router-link to="/login" class="ml-3"> Already has account!</router-link>

                <v-spacer></v-spacer>
                <v-btn color="primary">Register</v-btn>
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
export default {
  data() {
    return {
      form: {
        email: "nib@mail.ru",
        name: "nibras",
        password: "password",
        password_confirmation: "password",
      },
    };
  },
  methods: {
    register() {
      User.register(this.form);
      Csrf.getCookie().then((response) => {
        console.log(response);
      });
    },
  },
};
</script>
<style>
</style>