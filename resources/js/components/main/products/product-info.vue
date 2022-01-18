<template>
  <v-dialog scrollable v-model="dialog" max-width="1000px" persistent>
    <v-card>
      <v-card-title class="my-3 pa-0">
        <v-row style="font-size: 14px">
          <v-col
            cols="12"
            lg="3"
            class="align-self-center"
            style="border-left: 1px solid"
          >
            <slot name="title"> new product </slot></v-col
          >
          <v-col cols="12" class="align-self-center" lg="5">
            <v-row>
              <v-col>
                {{ product.ar_name }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                {{ product.en_name }}
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="4" v-if="windowHeight >= 0">
            <v-row class="justify-center">
              <v-col>
                <v-barcode
                  :value="product.barcode"
                  width="1"
                  height="50"
                  style="direction: ltr"
                >
                </v-barcode>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text style="height: 400px">
        <v-row>
          <v-col cols="6" lg="3">
            <v-checkbox
              disabled
              v-model="product.is_active"
              style="white-space: nowrap; margin-left: 5px; margin-right: 5px"
              color="#e91e63"
              label="المنتج نشط"
              class="nib"
            ></v-checkbox>
          </v-col>
          <v-col cols="6" lg="2">
            <v-checkbox
              disabled
              v-model="product.is_returnable"
              style="white-space: nowrap; margin-left: 5px; margin-right: 5px"
              color="#e91e63"
              label="قابل للاسترجاع"
            ></v-checkbox>
          </v-col>
          <v-col cols="6" lg="3">
            <v-checkbox
              disabled
              v-model="product.is_free"
              style="white-space: nowrap; margin-left: 5px; margin-right: 5px"
              color="#e91e63"
              label="الصنف مجاني"
            ></v-checkbox>
          </v-col>
          <v-col cols="6" lg="2">
            <v-checkbox
              disabled
              v-model="product.is_bonus"
              style="white-space: nowrap; margin-left: 5px; margin-right: 5px"
              color="#e91e63"
              label="السماح بالبونص"
            ></v-checkbox>
          </v-col>
          <v-col cols="6" lg="2">
            <v-checkbox
              disabled
              v-model="product.has_expiration_date"
              style="white-space: nowrap; margin-left: 5px; margin-right: 5px"
              color="#e91e63"
              label="لديه تاريخ انتهاء"
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="basil"
          gv-row
        >
          <v-tab v-for="item in items" :key="item.id">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-row>
              <v-col cols="12" lg="6">
                <v-row>
                  <v-col
                    style="border-left: 1px solid; margin: 2px"
                    cols="6"
                    lg="3"
                  >
                    الرقم التسلسلي
                  </v-col>
                  <v-col> {{ product.serial_number }} </v-col>
                </v-row>
                <v-row>
                  <v-col
                    style="border-left: 1px solid; margin: 2px"
                    cols="6"
                    lg="3"
                  >
                    نوع الصنف
                  </v-col>
                  <v-col>
                    {{
                      prdct_types.find(
                        (elem) => elem.id == product.prdct_type_id
                      )
                        ? prdct_types.find(
                            (elem) => elem.id == product.prdct_type_id
                          )["ar_name"]
                        : ""
                    }}
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    style="border-left: 1px solid; margin: 2px"
                    cols="6"
                    lg="3"
                  >
                    مجموعات الصنف
                  </v-col>
                  <v-col>
                    <span v-for="item in product.groups" :key="item.id">
                      {{ item.ar_name }}،
                    </span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" lg="6">
                <v-row>
                  <v-col
                    style="border-left: 1px solid; margin: 2px"
                    cols="6"
                    lg="3"
                  >
                    حد التنبيه الأدني
                  </v-col>
                  <v-col> {{ product.min_alert }} </v-col>
                </v-row>
                <v-row>
                  <v-col
                    style="border-left: 1px solid; margin: 2px"
                    cols="6"
                    lg="3"
                  >
                    حد التنبيه الأعلى
                  </v-col>
                  <v-col> {{ product.max_alert }} </v-col>
                </v-row>
                <v-row>
                  <v-col
                    style="border-left: 1px solid; margin: 2px"
                    cols="6"
                    lg="3"
                  >
                    فترة الركود
                  </v-col>
                  <v-col> {{ product.stagnation_period }} </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <div style="height: 60px"></div>
            <v-data-table
              :headers="product_units_headers"
              :items="product.units"
              hide-default-footer
            >
              <template v-slot:item.main_invoiced_unit_id="{ item }">
                <v-icon
                  v-if="
                    product.units.indexOf(item) + 1 ==
                    product.main_invoiced_unit_id
                  "
                  small
                  >mdi-check</v-icon
                >
              </template>
              <template v-slot:item.main_purchase_unit_id="{ item }">
                <v-icon
                  v-if="
                    product.units.indexOf(item) + 1 ==
                    product.main_purchase_unit_id
                  "
                  small
                  >mdi-check</v-icon
                >
              </template>
              <template v-slot:item.contains="{ item }">
                {{ item.pivot.contains }}
              </template>
              <template v-slot:item.equals="{ item }"> = </template>
              <template v-slot:item.from_unit="{ item }">
                {{ product.units[0] && product.units[0].ar_name }}
              </template>
              <template v-slot:item.purchase_price="{ item }">
                {{ item.pivot.purchase_price }}
              </template>
              <template v-slot:item.sales_price="{ item }">
                {{ item.pivot.sales_price }}
              </template>
              <template v-slot:item.barcode="{ item }">
                {{ item.pivot.barcode }}
              </template>
            </v-data-table>
          </v-tab-item>
        </v-tabs-items>
        <v-container v-show="false">
          <v-row>
            <v-col cols="6" sm="6" md="4">
              <div style="display: flex"></div>

              <div style="font-size: 14px; float: left">
                {{ product }}
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">الغاء</v-btn>
        
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["product", "prdct_forms", "prdct_taxes", "prdct_types", "dialog"],

  mounted() {
    window.addEventListener("resize", () => {
      this.windowHeight = window.innerHeight;
      console.log(this.windowHeight);
    });
  },
  data: () => ({
    windowHeight: 0,
    product_units_headers: [
      {
        text: " افتراضية البيع ",
        align: "center",
        sortable: false,
        value: "main_invoiced_unit_id",
      },
      {
        text: " افتراضية الشراء ",
        align: "center",
        sortable: false,
        value: "main_purchase_unit_id",
      },
      {
        text: " الوحدة",
        align: "center",
        sortable: false,
        value: "ar_name",
      },
      {
        text: "تساوي",
        align: "center",
        sortable: false,
        value: "equals",
      },
      {
        text: "عدد",
        align: "center",
        sortable: false,
        value: "contains",
      },
      {
        text: "من الوحدة",
        align: "center",
        sortable: false,
        value: "from_unit",
      },
      {
        text: "سعر الشراء",
        align: "center",
        sortable: false,
        value: "purchase_price",
      },
      {
        text: "سعر البيع",
        align: "center",
        sortable: false,
        value: "sales_price",
      },
      {
        text: "الباركود",
        align: "center",
        sortable: false,
        value: "barcode",
        width: "150",
      },
    ],

    tab: null,
    items: ["بيانات أساسية", "الوحدات", "المجموعات", "التصنيف", "الموردين"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    editedIndex: -1,
    emailRules: [
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "ادخل البريد بشكل صحيح",
    ],
    vld_minlingth: [(v) => !v || v?.length >= 2 || "أدخل أكثر من حرفين"],
    vld_minlingth_noEmpty: [(v) => v?.length >= 2 || "أدخل أكثر من حرفين"],
    vld_numbering: [(v) => !v || /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],
    vld_numbering_noEmpty: [
      (v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية",
    ],
    formTitle: "",

    new_product: {
      name: "",
      mobile: "",
      tel: "",
      email: "",
      company: "",
      notes: "",
    },
    edited_product: {
      name: "",
      mobile: "",
      tel: "",
      email: "",
      company: "",
      notes: "",
    },
  }),
  methods: {
    close() {
      this.$parent.$data.product_info_dialog = false;
    },
    emit_product() {},
    save(item) {
      if (this.$refs.form.validate()) {
        let product = Object.assign({}, item);
        item.flag = "addproducts";
        item.filename = "products";

        axios.post("router.php", item).then((response) => {
          this.$emit("product", product);
          console.log(response.data);
        });
        this.$refs.form.reset();
        this.close();
      }
    },
    update(item) {
      if (this.$refs.form.validate()) {
        let product = Object.assign({}, item);
        console.log("item");
        item.flag = "updateproducts";
        item.filename = "products";

        axios.post("router.php", item).then((response) => {
          this.$emit("product", product);
          console.log(response.data);
        });
        this.$refs.form.reset();
        this.close();
      }
    },
  },
};
</script>

<style>
.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate)
  .v-icon {
  color: rgb(111, 98, 228) !important;
}
.row {
  margin: 0 !important;
}
</style>