<template>
  <v-row class="mx-3">
    <v-col>
      <v-row>
        <v-toolbar flat color="white">
          <v-toolbar-title style="font-size: 14px; color: crimson"
            >اعدادات الشركة</v-toolbar-title
          >
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-spacer></v-spacer>
        </v-toolbar>
      </v-row>
      <v-row>
        <v-row>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="companySettingsOptions.company_name"
              label="اسم الشركة*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              label="جهة الاتصال *"
              v-model="companySettingsOptions.name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" lg="6">
            <v-autocomplete
              v-model="companySettingsOptions.country_id"
              :items="countries"
              item-text="en_name"
              item-value="id"
              prefix="البلد |"
              autocomplete="off"
              @change="loadCities"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" lg="6">
            <v-autocomplete
              v-model="companySettingsOptions.city_id"
              :items="cities"
              item-text="en_name"
              item-value="id"
              prefix="المدينة |"
              autocomplete="off"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-textarea
              rows="2"
              v-model="companySettingsOptions.address"
              label="العنوان"
              required
            ></v-textarea>
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="companySettingsOptions.phone01"
              label="رقم الاتصال الأساسي"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" lg="6">
            <v-text-field
              v-model="companySettingsOptions.phone02"
              label="رقم الاتصال الثانوي"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="companySettingsOptions.email"
              label="البريد الالكتروني"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="companySettingsOptions.website"
              label="الموقع الالكتروني"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col>
          <v-btn
            class="btn btn-info m-b-5 m-r-2 white--text"
            color="text--white"
            text
            @click="submit()"
          >
            <v-icon class="white--text">mdi-plus-box</v-icon>حفظ
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Country from "../../../../apis/Country";
import Setting from "../../../../apis/Setting";
export default {
  props: ["companySettingsOptions", "cities"],
  data() {
    return {
      countries: [],
    };
  },
  methods: {
    loadCities() {
      this.$emit("changeCountry", this.companySettingsOptions.country_id);
    },
    submit() {
      Setting.store({
        company: this.companySettingsOptions,
      }).then((elem) => {
        this.emitcompanySettings();
      });
    },
    emitcompanySettings() {
      this.$emit("companySettingsMethod", this.companySettingsOptions);
    },
  },
  created() {
    let countries = JSON.parse(localStorage.getItem("countries"));
    console.log('countries');
    console.log(countries);
    if (countries) {
      this.countries = countries;
      return;
    }
    Country.loadCountries().then((response) => {
      localStorage.setItem(
        "countries",
        JSON.stringify(response.data.countries)
      );
      this.countries = response.data.countries;
    });
  },
};
</script>




<style>
</style>