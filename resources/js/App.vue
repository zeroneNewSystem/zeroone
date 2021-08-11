<template>
  <div id="app">
    <v-app>
      <v-container>
        
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
@import "style.css";
@import "font-awesome.min.css";
</style>