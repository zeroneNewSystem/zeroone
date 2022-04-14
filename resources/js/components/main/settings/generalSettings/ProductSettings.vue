<template>
  <v-row class="mx-3">
    <v-col>
      <v-row>
        <v-toolbar flat color="white">
          <v-toolbar-title style="font-size: 14px; color: crimson"
            >اعدادات المنتجات</v-toolbar-title
          >
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-spacer></v-spacer>
        </v-toolbar>
      </v-row>
      <v-row>
        <v-col cols="12" lg="4"
          ><v-checkbox
            v-model="productSettingsOptions.sold_discount_is_active"
            style="
              white-space: nowrap;
              margin-left: 5px;
              margin-right: 5px;
              margin-top: 0px;
            "
            color="#e91e63"
            label="اعتماد خصم البيع لجميع المنتجات"
          ></v-checkbox
        ></v-col>
        <v-col cols="6" lg="2">
          <v-text-field
            autocomplete="off"
            v-model="productSettingsOptions.sold_discount"
            label="خصم عند البيع"
          ></v-text-field>
        </v-col>
        <v-col cols="6" lg="2">
          <v-autocomplete
            label="طريقة الحساب"
            v-model="productSettingsOptions.sold_discount_type_id"
            :items="discount_types"
            item-text="ar_name"
            item-value="id"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="4"
          ><v-checkbox
            v-model="productSettingsOptions.purchase_discount_is_active"
            style="
              white-space: nowrap;
              margin-left: 5px;
              margin-right: 5px;
              margin-top: 0px;
            "
            color="#e91e63"
            label="اعتماد خصم الشراء لجميع المنتجات"
          ></v-checkbox
        ></v-col>
        <v-col cols="6" lg="2">
          <v-text-field
            autocomplete="off"
            v-model="productSettingsOptions.purchase_discount"
            label="خصم عند الشراء"
          ></v-text-field>
        </v-col>
        <v-col cols="6" lg="2">
          <v-autocomplete
            label="طريقة الحساب"
            v-model="productSettingsOptions.purchase_discount_type_id"
            :items="discount_types"
            item-text="ar_name"
            item-value="id"
          ></v-autocomplete>
        </v-col>
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
import Setting from "../../../../apis/Setting";
export default {
  props: ["productSettingsOptions"],
  data() {
    return {
      discount_types: [
        { id: 1, ar_name: "%", en_name: "%" },
        { id: 2, ar_name: "قيمة", en_name: "amount" },
      ],
    };
  },
  methods: {
    submit() {
      Setting.store({
        product: this.productSettingsOptions,
      }).then((elem) => {
        this.emitProductSettings();
      });
    },
    emitProductSettings() {
      this.$emit("productSettingsMethod", this.productSettingsOptions);
    },
  },
};
</script>




<style>
</style>