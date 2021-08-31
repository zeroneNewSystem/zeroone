<template>
  <div>
    <v-card max-width="100%">
      <v-card-title>
        <v-row class="justify-space-between" justify="center" align="center">
          <v-col cols="12"> فاتورة شراء جديدة </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" lg="6">
              <v-text-field
                autocomplete="off"
                v-model="purchase.purchase_reference"
                label="رقم المرجع"
                :rules="required.concat(isunique)"
                @blur="checkExecting()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                autocomplete="off"
                v-model="purchase.description"
                label="الوصف"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-autocomplete
                v-model="purchase.suplier_id"
                :items="supliers"
                item-text="ar_name"
                item-value="id"
                :rules="vld_minlingth_one"
                label="المورد"
                multiple
              >
              </v-autocomplete>
            </v-col>

            <v-col cols="12" lg="6">
              <v-menu
                ref="issue_date"
                v-model="issue_date_is_down"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="purchase.issue_date"
                    label="تاريخ الاصدار"
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    @keydown.enter="issue_date_is_down = false"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="purchase.issue_date"
                  no-title
                  @input="issue_date_is_down = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" lg="6">
              <v-menu
                ref="maturity_date"
                v-model="maturity_date_is_down"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="purchase.maturity_date"
                    label="تاريخ الاصدار"
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    @keydown.enter="maturity_date_is_down = false"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="purchase.maturity_date"
                  no-title
                  @input="maturity_date_is_down = false"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="12" lg="6">
              <v-autocomplete
                label="شروط الدفع"
                v-model="purchase.payment_condition_id"
                :items="payment_conditions"
                item-text="ar_name"
                item-value="id"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-divider inset></v-divider>
          <v-row>
            <v-data-table
              disable-pagination
              :headers="purchase_header"
              :items="purchase.purchase_details"
              class="elevation-1"
              :hide-default-footer="true"
              :item-key="toString(Math.floor(Math.random(1, 100) * 100))"
            >
              <template v-slot:top>
                <v-toolbar flat color="white">
                  <v-toolbar-title>قائمة الأصناف</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-col cols="12" sm="6" md="4">
                    <v-autocomplete
                      v-model="selected_product"
                      :loading="loading"
                      :items="found_products"
                      item-text="ar_name"
                      return-object
                      :search-input.sync="name_search"
                      flat
                      hide-no-data
                      label="اسم الصنف"
                      @change="addProductToPurchase"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-autocomplete
                      v-model="selected_product"
                      :items="found_products"
                      item-text="barcode"
                      label="الباركود"
                      autocomplete="off"
                      return-object
                      :search-input.sync="barcode_search"
                      @change="addProductToPurchase"
                    ></v-autocomplete>
                  </v-col>

                  <v-spacer></v-spacer>
                </v-toolbar>
              </template>
              <template v-slot:item.expires_at="{ item }">
                <v-menu
                  :disabled="!!item.has_expiration_date"
                  ref="maturity_date"
                  v-model="item.expires_at_is_down"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="item.expires_at"
                      flat
                      outlined
                      autocomplete="off"
                      hide-no-data
                      hide-details
                      v-bind="attrs"
                      v-on="on"
                      @keydown.enter="item.expires_at_is_down = false"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="item.expires_at"
                    no-title
                    @input="item.expires_at_is_down = false"
                  ></v-date-picker>
                </v-menu>
              </template>
              <template v-slot:item.unit_price="{ item }">
                <v-text-field
                  v-model="item.unit_price"
                  flat
                  outlined
                  autocomplete="off"
                  hide-no-data
                  hide-details
                ></v-text-field>
              </template>
              <template v-slot:item.sales_price="{ item }">
                <v-text-field
                  v-model="item.sales_price"
                  flat
                  outlined
                  autocomplete="off"
                  hide-no-data
                  hide-details
                ></v-text-field>
              </template>
              <template v-slot:item.purchase_tax="{ item }">
                <v-text-field
                  flat
                  hide-no-data
                  hide-details
                  outlined
                  autocomplete="off"
                  v-model="item.purchase_tax"
                ></v-text-field>
              </template>
              <template v-slot:item.purchase_tax_value="{ item }">
                <v-text-field
                  flat
                  hide-no-data
                  hide-details
                  outlined
                  autocomplete="off"
                  v-model="item.purchase_tax_value"
                ></v-text-field>
              </template>

              <template v-slot:item.purchase_discount="{ item }">
                <v-row class="justify-center">
                  <v-col cols="6" class="pl-0">
                    <v-text-field
                      flat
                      hide-no-data
                      hide-details
                      outlined
                      autocomplete="off"
                      v-model="item.purchase_discount"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="pr-0">
                    <v-autocomplete
                      v-model="item.purchase_discount_type_id"
                      :items="discount_types"
                      item-text="ar_name"
                      item-value="id"
                      cache-items
                      append-icon=""
                      flat
                      hide-no-data
                      hide-details
                      solo-inverted
                      outlined
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </template>
              <template v-slot:item.action="{ item }">
                <v-icon color="red" small @click="deleteItem(item)"
                  >mdi-delete</v-icon
                >
              </template>

              <template v-slot:item.product_unit_id="{ item }">
                <v-autocomplete
                  v-model="item.purchased_unit_id"
                  :items="item.units"
                  item-text="ar_name"
                  item-value="pivot.id"
                  cache-items
                  flat
                  hide-no-data
                  hide-details
                  solo-inverted
                  outlined
                >
                </v-autocomplete>
              </template>
              <template v-slot:item.purchased_quantity="{ item }">
                <v-text-field
                  hide-no-data
                  hide-details
                  autocomplete="off"
                  single-line
                  outlined
                  v-model="item.purchased_quantity"
                ></v-text-field>
              </template>
              <template v-slot:item.quan_in_mininmal_unit="{ item }">
                <v-text-field
                  autocomplete="off"
                  disabled
                  single-line
                  flat
                  hide-no-data
                  hide-details
                  solo-inverted
                  outlined
                  :value="quan_in_mininmal_unit(item)"
                ></v-text-field>
              </template>
              <template v-slot:item.total_befor_tax="{ item }">
                <v-text-field
                  hide-no-data
                  hide-details
                  autocomplete="off"
                  single-line
                  outlined
                  v-model="item.total_befor_tax"
                ></v-text-field>
              </template>
              <template v-slot:item.total="{ item }">
                <v-text-field
                  hide-no-data
                  hide-details
                  autocomplete="off"
                  single-line
                  outlined
                  v-model="item.total"
                ></v-text-field>
              </template>
            </v-data-table>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          class="btn btn-info m-b-5 m-r-2 white--text"
          color="text--white"
          text
          @click="submit()"
        >
          <v-icon class="white--text">mdi-plus-box</v-icon>حفظ وإضافة صنف جديد
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Product from "../../../apis/Product";
export default {
  data() {
    return {
      /*-----------------------taxes---------------------------*/
      taxes: [],
      /*----------------discount_types--------------------*/
      discount_types: [
        { id: 1, ar_name: "%", en_name: "%" },
        { id: 2, ar_name: "قيمة", en_name: "amount" },
      ],

      supliers: [],
      name_search: "",
      barcode_search: "",
      loading: false,
      barcode_search: "",
      found_products: [],
      selected_product: [],
      purchase_header: [
        {
          text: "اسم الصنف",
          align: "center",
          value: "ar_name",
          width: 300,
          sortable: false,
        },
        {
          text: "الصلاحية",
          align: "center",
          value: "expires_at",
          sortable: false,
          width: 100,
        },
        {
          text: "الكمية",
          align: "center",
          value: "purchased_quantity",
          sortable: false,
        },
        {
          text: "الوحدة",
          align: "center",
          value: "product_unit_id",
          sortable: false,
        },

        {
          text: "سعر الوحدة",
          align: "center",
          value: "unit_price",
          sortable: false,
        },

        {
          text: "الكمية و.ص",
          align: "center",
          value: "quan_in_mininmal_unit",
          sortable: false,
        },
        {
          text: "خصم الشراء",
          align: "center",
          value: "purchase_discount",
          sortable: false,
          width: 100,
        },

        {
          text: "الاجمالي قبل الضريبة",
          align: "center",
          value: "total_befor_tax",
          sortable: false,
        },
        {
          text: "الضريبة % ",
          align: "center",
          value: "purchase_tax",
          sortable: false,
        },
        {
          text: "قيمة الضريبة",
          align: "center",
          value: "purchase_tax_value",
          sortable: false,
        },
        {
          text: "القيمة",
          align: "center",
          value: "total",
          sortable: false,
        },

        { text: "تحكم ", align: "center", value: "action" },
      ],

      payment_conditions: [],
      purchase: {
        patch_number: Math.random(10000, 99999),
        purchase_details: [],
        purchase_reference: "",
        description: "",
        suplier_id: "",
        issue_date: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10),
        maturity_date: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10),
      },

      /*------------------dateTime----------------------*/
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      issue_date_is_down: false,
      maturity_date_is_down: false,
      formatted_issue_date: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),

      /*-------------------validators---------------------------*/
      vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
      required: [(value) => !!value || "الحقل مطلوب."],
      isunique: [],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],
    };
  },
  watch: {
    name_search(val) {
      val &&
        val !== this.selected_product.ar_name &&
        this.getProductsByBarcode(val, "name");
    },

    barcode_search(val) {
      val &&
        val !== this.selected_product.barcode &&
        this.getProductsByBarcode(val, "barcode");
    },
  },
  methods: {
    quan_in_mininmal_unit(item) {
      let purchased_unit = item.units.find(
        (elem) => elem.pivot.id == item.purchased_unit_id
      );

      return item.purchased_quantity * purchased_unit.pivot.contains;
    },
    deleteItem(item) {
      this.purchase.purchase_details.splice(
        this.purchase.purchase_details.indexOf(item),
        1
      );
    },
    getProductsByBarcode(val, type) {
      if (val.length > 2) {
        this.loading = true;
        let params = "";
        if (type == "barcode") params = { barcode: val };
        else params = { name: val };

        // Simulated ajax query ajax
        Product.search(params).then((response) => {
          this.loading = false;
          console.log("hi", response.data);
          if (response.data.length !== 0) {
            this.found_products = JSON.parse(
              JSON.stringify(response.data.products)
            );
          }
        });
      }
    },

    addProductToPurchase() {
      console.log(this.purchase.purchase_details);
      console.log("seles", this.selected_product);
      //set defaultpurchase_id from main purchsedid
      this.selected_product.purchased_unit_id =
        this.selected_product.units[
          this.selected_product.main_purchase_unit_id - 1
        ].pivot.id;

      this.selected_product.purchased_quantity = 1;
      console.log("nnj", this.selected_product.purchased_unit_id);
      this.purchase.purchase_details.push(
        JSON.parse(JSON.stringify(this.selected_product))
      );
      console.log("nib", this.purchase.purchase_details);
      this.selected_product = [];
    },
    checkExecting() {},

    /*------------------dateTime----------------------*/
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>

<style>
.v-application--wrap > .container {
  margin: 0;
}
.v-text-field.v-text-field--enclosed .v-text-field__details,
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot {
  padding: 0px;
}
</style>