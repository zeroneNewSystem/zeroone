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

        <v-tab >
          المنتجات
          <v-icon>mdi-phone</v-icon>
        </v-tab>

        <v-tab >
          فواتير المشتريات
          <v-icon>mdi-heart</v-icon>
        </v-tab>

        <v-tab >
          فواتير المبيعات
          <v-icon>mdi-account-box</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat min-height="100">
            <product-settings />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat min-height="100">
            <product-settings />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat min-height="100">
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
export default {
  components: {
    ProductSettings,
    PurchaseSettings,
  },
  data() {
    return {
      /* tabs ----------------------------*/
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      /* tabs ----------------------------*/
    };
  },
  created() {
    Setting.get().then((response) => {
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