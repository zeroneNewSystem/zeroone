<template>
  <div id="app">
    <v-app>
      <v-container>
        <div></div>
        <v-btn color="pink" class="btsidebar">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
        <router-link to="/">#</router-link>
        <router-link to="/register">register</router-link>
        <router-link to="/login">register</router-link>
        <div>skjhskjhs</div>
        <router-view />
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  created(){
    this.$vuetify.rtl = true
  }
}
</script>



<style lang="scss">
//@import "App.css";
@import "font-awesome.min.css";
</style>