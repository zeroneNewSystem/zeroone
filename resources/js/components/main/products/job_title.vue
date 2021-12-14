<template>
  <div>
    <v-text-field
    rounded
      v-model="job_search"
      outlined
      prepend-icon="md-search"
      placeholder="Search..."
      @input="filteredDepartments"
    ></v-text-field>

    <v-row>
      <v-col>
        <div v-for="item in filteredDepartments" :key="item.name">
          
          {{ item.name }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job_search: "",

      departments: [
        {
          job_titles: ["HR Supervisor", "HR manager"],
          name: "HR Department1",
          sections: ["section11"],
        },
        {
          job_titles: ["HR seller", "HR employee"],
          name: "HR Department1",
          sections: ["section21"],
        },
      ],
    };
  },
  
  methods: {
    filteredDepartments() {
      if (v == "") return this.departments;
      else {
          this.departments.filter( elem => elem.name.)
      }
        
    },
  },
};
</script>

<style>

</style>