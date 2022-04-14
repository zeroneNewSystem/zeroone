<template>
  <div>
    <v-row>
      <v-toolbar flat color="white">
        <v-toolbar-title>الاعدادات العامة</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <v-spacer></v-spacer>
      </v-toolbar>
    </v-row>

    <v-card>
      <v-tabs v-model="tab" centered icons-and-text>
        <v-tabs-slider></v-tabs-slider>

        <v-tab>
          إعدادات الشركة
          <v-icon>mdi-phone</v-icon>
        </v-tab>
        <v-tab>
          المنتجات
          <v-icon>mdi-phone</v-icon>
        </v-tab>

        <v-tab>
          فواتير المشتريات
          <v-icon>mdi-heart</v-icon>
        </v-tab>

        <v-tab>
          فواتير المبيعات
          <v-icon>mdi-account-box</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat min-height="500">
            <company-settings
              :cities="cities"
              :companySettingsOptions="companySettingsOptions"
              @changeCountry="loadCities"
              @companySettingsMethod="companySettingsMethod"
            ></company-settings>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat min-height="500">
            <product-settings
              :productSettingsOptions="productSettingsOptions"
              @productSettingsMethod="productSettingsMethod"
            ></product-settings>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat min-height="500">
            <purchase-settings />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat min-height="500">
            <product-settings />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <!-- --------------------------------------------------------------------------->
  </div>
</template>

<script>
import Setting from "../../../apis/Setting";
import ProductSettings from "./generalSettings/ProductSettings";
import PurchaseSettings from "./generalSettings/PurchaseSettings";
import CompanySettings from "./generalSettings/CompanySettings";
import Country from "../../../apis/Country";
export default {
  components: {
    ProductSettings,
    PurchaseSettings,
    CompanySettings,
  },
  data() {
    return {
      cities: [],
      companySettingsOptions: {
        country_id: "",
      },
      productSettingsOptions: {
        sold_discount_is_active: false,
        sold_discount: 5,
        sold_discount_type_id: 1,
      },
      /* tabs ----------------------------*/
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      /* tabs ----------------------------*/
    };
  },
  methods: {
    loadCities(country_id) {
      this.cities = [];
      Country.loadCities(country_id).then((response) => {
        this.cities = response.data.cities;
        ("cities", JSON.stringify(this.cities));
      });
    },
    productSettingsMethod(item) {
      this.productSettingsOptions = item;
    },
    companySettingsMethod(item) {
      this.companySettingsOptions = item;
      let data = {
        product_settings: this.productSettingsOptions,
        company_settings: this.companySettingsOptions,
      };

      ("general_response", JSON.stringify(data));
    },
  },
  created() {
    let general_response = JSON.parse(localStorage.getItem("general_response"));
    console.log(general_response);
    if (general_response) {
      this.productSettingsOptions = general_response.product_settings;
      this.companySettingsOptions = general_response.company_settings;
      this.cities = JSON.parse(localStorage.getItem("cities"));
      return;
    }

    Setting.get().then((response) => {
      ("general_response", JSON.stringify(response.data));
      this.productSettingsOptions = response.data.product_settings;
      this.companySettingsOptions = response.data.company_settings;
      this.loadCities(this.companySettingsOptions.country_id);

      console.log(response);
    });
  },
};
</script>

<style>
.v-tab {
  letter-spacing: 0 !important;
}
</style>