<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app :right="$vuetify.rtl" dark width=225>
        <v-list dense>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title> {{ currentUser.name }} </v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <drawer-items />

          
        </v-list>
        <v-list-item link @click="logout">
          <v-list-item-action>
            <v-icon color="red">mdi-power</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="red--text">logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>

      <v-app-bar app color="pink" dark height = '50' >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ $t('zerone') }}</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <div fluid style="margin: 0px; padding: 0px; width: 100%">
          <v-row align="center" justify="center">
            <v-col class="text-center">
              <router-view class="main-view" name="mainView" />
            </v-col>
          </v-row>
        </div>
      </v-main>
      <v-footer color="pink" app>
        <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Api from "../../apis/Api";
import User from "../../apis/User";
import DrawerItems from "./components/DrawerItems.vue";
export default {
  props: {
    source: String,
  },
  components: {
    DrawerItems,
  },

  data: () => ({
    drawer: true,
    currentUser: "",
  }),
  methods: {
    getUser() {
      return User.getUser();
    },
    logout() {
      User.getUser()
        .then((response) => {
          localStorage.removeItem("token");
          this.$router.push("login");
          //this.currentUser = response.data;
        })
        .catch((errors) => {
          this.errors = errors.response.data.errors;
          console.log(errors.response.data);
        });
    },
  },
  created() {
    this.getUser()
      .then((response) => {
        this.currentUser = response.data;
      })
      .catch((errors) => {
        this.errors = errors.response.data.errors;
        console.log(errors.response.data);
      });
  },
};
</script>

<style>
</style>