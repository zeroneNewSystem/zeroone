<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>التقارير</v-toolbar-title>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-row>
      <v-col cols="12" lg="4">
        <router-link
          class="btn btn-info m-b-5 m-r-2"
          to="/journal_entries"
        >القيود اليومية</router-link>
      </v-col>
      <v-col cols="12" lg="4">
        <router-link
          class="btn btn-info m-b-5 m-r-2"
          to="/general_ledgers"
        >دفتر الأستاذ</router-link>
      </v-col>
      <v-col cols="12" lg="4">
        <router-link
          class="btn btn-info m-b-5 m-r-2"
          to="/income_statements"
        >قائمة الدخل</router-link>
      </v-col>
      <v-col cols="12" lg="4">
        <router-link
          class="btn btn-info m-b-5 m-r-2"
          to="/bill/1"
        >القيود اليومية</router-link>
      </v-col>
      <v-col cols="12" lg="4">
        <router-link
          class="btn btn-info m-b-5 m-r-2"
          to="/bill/1"
        >القيود اليومية</router-link>
      </v-col>
     
      <v-col cols="12" lg="4">
        <router-link
          class="btn btn-info m-b-5 m-r-2"
          to="/bill/1"
        >القيود اليومية</router-link>
      </v-col>
     
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>