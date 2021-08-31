<template>
  <div id="app">
    <v-app>
      <div fluid>
        <router-view />
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  created() {
    this.$vuetify.rtl = true;
  },
};
</script>



<style lang="scss">
//@import "App.css";
@import "style.css";
@import "font-awesome.min.css";
</style>