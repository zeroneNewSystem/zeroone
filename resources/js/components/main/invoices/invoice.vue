<template>
  <div>
    <add-update-customer
      :dialog="add_update_customer_dialog"
      :customer="passed_customer"
      :operation="operation"
      :cities="cities"
      @addUpdateCustomer="addCustomerToList"
      @changeCountry="loadCities"
    ></add-update-customer>
    <product-info
      :dialog="product_info_dialog"
      :product="product_info_product"
      :prdct_forms="prdct_forms"
      :prdct_taxes="prdct_taxes"
      :prdct_types="prdct_types"
    >
      <span slot="title"> معلومات الصنف</span>
    </product-info>
    <v-card max-width="100%">
      <v-card-title>
        <v-row class="justify-space-between" justify="center" align="center">
          <v-col cols="12"> {{ title }} </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <router-link class="btn btn-info m-b-5 m-r-2" to="/invoice/1">
          <v-icon class="white--text">mdi-view-module</v-icon>إدارة الفواتير
        </router-link>
        <v-container>
          <v-row>
            <v-col>
              <v-row>
                <v-col cols="12" class="pa-0">
                  <v-text-field
                    autocomplete="off"
                    v-model="invoice.description"
                    label="الوصف"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="pa-0">
                  <v-row>
                    <v-col cols="10">
                      <v-autocomplete
                        v-model="invoice.customer_id"
                        :items="customers"
                        item-text="name"
                        item-value="id"
                        :rules="vld_selected"
                        label="العميل"
                      >
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="2">
                      <v-btn elevation="0" dark @click="addCustomer">
                        <v-icon> mdi-plus </v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" class="pa-0">
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
                        v-model="invoice.issue_date"
                        label="تاريخ الاصدار"
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        v-on="on"
                        @keydown.enter="issue_date_is_down = false"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="invoice.issue_date"
                      no-title
                      @input="issue_date_is_down = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" class="pa-0">
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
                        v-model="invoice.maturity_date"
                        label="تاريخ الاصدار"
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        v-on="on"
                        @keydown.enter="maturity_date_is_down = false"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="invoice.maturity_date"
                      no-title
                      @input="maturity_date_is_down = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12" class="pa-0">
                  <v-autocomplete
                    label="شروط الدفع"
                    v-model="invoice.payment_condition_id"
                    :items="payment_conditions"
                    item-text="ar_name"
                    item-value="id"
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <v-card>
                <v-card-title style="background: lightgray">
                  معلومات العميل
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" lg="6"> الاسم </v-col>
                    <v-col cols="12" lg="6">
                      {{ customerInfo() && customerInfo().name }}
                    </v-col>
                    <v-col cols="12" lg="6"> الهاتف </v-col>
                    <v-col cols="12" lg="6">
                      {{ customerInfo() && customerInfo().phone01 }} </v-col
                    ><v-col cols="12" lg="6"> البريد الالكتروني </v-col>
                    <v-col cols="12" lg="6">
                      {{ customerInfo() && customerInfo().email }} </v-col
                    ><v-col cols="12" lg="6"> الرقم الضريبي </v-col>
                    <v-col cols="12" lg="6">
                      {{ customerInfo() && customerInfo().tax_number }}
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-divider inset></v-divider>
          <v-row>
            <v-data-table
              disable-pagination
              :headers="sales_header"
              :items="invoice.sales_details"
              class="elevation-1"
              :hide-default-footer="true"
              :item-key="toString(Math.floor(Math.random(1, 100) * 100))"
            >
              <template slot="no-data"> يرجى اختيار الأصناف </template>
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
                      @change="addProductToInvoice"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      autocomplete="off"
                      v-model="searched_barcode"
                      label="الباركود"
                      @keydown.enter="searchAndAddToInvoice"
                      :rules="is_exists"
                    ></v-text-field>
                  </v-col>

                  <v-spacer></v-spacer>
                </v-toolbar>
              </template>
              <template v-slot:item.ar_name="{ item }">
                <div>{{ item.ar_name }}</div>

                <a @click="show_product_dialog(item)">
                  <v-icon> mdi-information </v-icon>
                </a>
              </template>
              <template v-slot:item.expires_at="{ item }">
                <v-menu
                  :disabled="!item.has_expiration_date"
                  ref="maturity_date"
                  v-model="item.expires_at_is_down"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      :disabled="!item.has_expiration_date"
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
                  type="number"
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
                  type="number"
                  outlined
                  autocomplete="off"
                  hide-no-data
                  hide-details
                ></v-text-field>
              </template>
              <template v-slot:item.sales_tax="{ item }">
                <v-text-field
                  type="number"
                  flat
                  hide-no-data
                  hide-details
                  outlined
                  autocomplete="off"
                  v-model="item.sales_tax"
                ></v-text-field>
              </template>
              <template v-slot:item.sales_tax_value="{ item }">
                <v-text-field
                  flat
                  disabled
                  hide-no-data
                  hide-details
                  outlined
                  autocomplete="off"
                  :value="sales_tax_value(item).toFixed(2)"
                ></v-text-field>
              </template>

              <template v-slot:item.sales_discount="{ item }">
                <v-row class="justify-center">
                  <v-col cols="6" class="pl-0">
                    <v-text-field
                      flat
                      type="number"
                      hide-no-data
                      hide-details
                      outlined
                      autocomplete="off"
                      v-model="item.sales_discount"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="pr-0">
                    <v-autocomplete
                      v-model="item.sales_discount_type_id"
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
                      @change="llll(item)"
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
                  v-model="item.sold_unit_id"
                  :items="item.units"
                  item-text="ar_name"
                  item-value="id"
                  cache-items
                  flat
                  hide-no-data
                  hide-details
                  solo-inverted
                  outlined
                  @change="product_unit_change(item)"
                >
                </v-autocomplete>
              </template>
              <template v-slot:item.sold_quantity="{ item }">
                <v-text-field
                  type="number"
                  hide-no-data
                  hide-details
                  autocomplete="off"
                  single-line
                  outlined
                  v-model="item.sold_quantity"
                ></v-text-field>
              </template>
              <template v-slot:item.quantity_in_minor_unit="{ item }">
                <v-text-field
                  autocomplete="off"
                  disabled
                  single-line
                  flat
                  hide-no-data
                  hide-details
                  solo-inverted
                  outlined
                  :value="quantity_in_minor_unit(item)"
                ></v-text-field>
              </template>
              <template v-slot:item.total_befor_tax="{ item }">
                <v-text-field
                  disabled
                  hide-no-data
                  hide-details
                  autocomplete="off"
                  single-line
                  outlined
                  :value="total_befor_tax(item).toFixed(2)"
                ></v-text-field>
              </template>
              <template v-slot:item.total="{ item }">
                <v-text-field
                  disabled
                  hide-no-data
                  hide-details
                  autocomplete="off"
                  single-line
                  outlined
                  :value="total(item).toFixed(2)"
                ></v-text-field>
              </template>

              <template v-slot:footer>
                <v-divider class="mx-4" inset></v-divider>
                <v-toolbar flat color="white">
                  <v-toolbar-title>الإجمالي</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <div class="invoice-footer">
                  <v-row>
                    <v-col cols="12" lg="6">
                      <v-row justify="start">
                        <v-col
                          cols="12"
                          lg="5"
                          style="
                            text-align: end;
                            border-bottom: 1px solid lightgray;
                          "
                        >
                          الاجمالي قبل الضريبة:
                        </v-col>
                        <v-col
                          cols="12"
                          lg="5"
                          style="
                            text-align: start;
                            border-bottom: 1px solid lightgray;
                          "
                        >
                          <div
                            v-html="total_without_products_vat().toFixed(2)"
                          ></div>
                        </v-col>
                      </v-row>
                      <v-row justify="start">
                        <v-col
                          cols="12"
                          lg="5"
                          style="
                            text-align: end;
                            border-bottom: 1px solid lightgray;
                          "
                        >
                          قيمة الضريبة:
                        </v-col>
                        <v-col
                          cols="12"
                          lg="5"
                          style="
                            text-align: start;
                            border-bottom: 1px solid lightgray;
                          "
                        >
                          <div v-html="total_vat().toFixed(2)"></div>
                        </v-col>
                      </v-row>
                      <v-row justify="start">
                        <v-col
                          cols="12"
                          lg="5"
                          style="text-align: end; color: red"
                        >
                          <div style="margin-top: 10px">مصاريف إضافية:</div>
                        </v-col>
                        <v-col cols="12" lg="5" style="text-align: start">
                          <div>
                            <v-text-field
                              flat
                              outlined
                              no-data
                              no-data-text
                              non-linear
                              v-model="invoice.additional_expenses"
                            >
                            </v-text-field>
                          </div>
                        </v-col>
                      </v-row>
                      <v-row justify="start">
                        <v-col
                          cols="12"
                          lg="5"
                          style="
                            text-align: end;
                            border-bottom: 1px solid lightgray;
                            color: red;
                          "
                        >
                          <div style="margin-top: 10px">من حساب:</div>
                        </v-col>
                        <v-col
                          cols="12"
                          lg="5"
                          style="
                            text-align: start;
                            border-bottom: 1px solid lightgray;
                          "
                        >
                          <div>
                            <v-autocomplete
                              flat
                              outlined
                              no-data
                              no-data-text
                              non-linear
                              v-model="
                                invoice.additional_expenses_from_account_id
                              "
                              :items="additional_expenses_from_accounts"
                              item-text="ar_name"
                              item-value="id"
                            >
                            </v-autocomplete>
                          </div>
                        </v-col>
                      </v-row>
                      <v-row justify="start">
                        <v-col
                          cols="12"
                          lg="5"
                          style="text-align: end; font-size: 1.5rem"
                        >
                          المجموع:
                        </v-col>
                        <v-col
                          cols="6"
                          style="text-align: start; font-size: 1.5rem"
                        >
                          <div v-html="total_amount().toFixed(2)"></div
                        ></v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" lg="5">
                      <v-row justify="start">
                        <v-col
                          cols="12"
                          lg="4"
                          style="
                            text-align: end;
                            border-bottom: 1px solid lightgray;
                            color: green;
                          "
                        >
                          <div style="margin-top: 10px">المدفوع:</div>
                        </v-col>
                        <v-col
                          cols="12"
                          lg="4"
                          style="
                            text-align: start;
                            border-bottom: 1px solid lightgray;
                          "
                        >
                          <div>
                            <v-text-field
                              outlined
                              flat
                              no-data
                              no-data-text
                              non-linear
                              v-model="invoice.paid_amount"
                            >
                            </v-text-field>
                          </div>
                        </v-col>

                        <v-col cols="12" lg="4">
                          <payment-method
                            @payment_methods="paymentMethods"
                            :invoice_total="invoice.total_amount"
                            :accounts="additional_expenses_from_accounts"
                            :payment_methods="invoice.payment_methods"
                          ></payment-method>
                        </v-col>
                      </v-row>
                      <v-row justify="start">
                        <v-col
                          cols="12"
                          lg="4"
                          style="
                            text-align: end;
                            border-bottom: 1px solid lightgray;
                            color: green;
                          "
                        >
                          <div style="margin-top: 10px">الباقي :</div>
                        </v-col>
                        <v-col
                          cols="12"
                          lg="4"
                          style="
                            text-align: start;
                            border-bottom: 1px solid lightgray;
                          "
                        >
                          <div>
                            <v-text-field
                              class="invoice-extra-expense text-red"
                              flat
                              disabled
                              no-data
                              no-data-text
                              non-linear
                              :value="remaining_amount().toFixed(2)"
                            >
                            </v-text-field>
                          </div>
                        </v-col>
                        <v-col cols="12" lg="4">
                          <v-btn elevation="0" dark @click="payAllCash">
                            دفع الكل نقدا!
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>

                  <div style="height: 30px"></div>
                </div>
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
import Invoice from "../../../apis/Invoice";
import ProductInfo from "../products/product-info.vue";
import PaymentMethod from "./payment-methods";
import AddUpdateCustomer from "../invoices/AddUpdateCustomer.vue";
import Country from "../../../apis/Country";
import Customer from "../../../apis/Customer";
import Account from "../../../apis/Account";
export default {
  components: {
    ProductInfo,
    PaymentMethod,
    AddUpdateCustomer,
  },
  data() {
    return {
      title: "فاتورة بيع جديدة",
      is_new_invoice: true,
      additional_expenses_from_accounts: [],
      additional_expenses_from_account_id: "",
      searched_barcode: "",
      /*----------------info----------------- */
      payment_method_dialog: false,
      product_info_product: "",
      product_info_dialog: false,
      prdct_forms: [],
      prdct_taxes: [],
      prdct_types: [],

      /*-----------------------taxes---------------------------*/
      taxes: [],
      /*----------------discount_types--------------------*/
      discount_types: [
        { id: 1, ar_name: "%", en_name: "%" },
        { id: 2, ar_name: "قيمة", en_name: "amount" },
      ],

      add_update_customer_dialog: false,
      passed_customer: "",
      operation: "add",
      cities: [],
      customers: [],
      name_search: "",

      loading: false,

      found_products: [],
      selected_product: [],
      sales_header: [
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
          value: "sold_quantity",
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
          value: "quantity_in_minor_unit",
          sortable: false,
        },
        {
          text: "خصم البيع",
          align: "center",
          value: "sales_discount",
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
          value: "sales_tax",
          sortable: false,
        },
        {
          text: "قيمة الضريبة",
          align: "center",
          value: "sales_tax_value",
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
      invoice: {
        payment_methods: [
          {
            account_id: "",
            credit: 0,
            description: "",
          },
          {
            account_id: "",
            credit: 0,
            description: "",
          },
          {
            account_id: "",
            credit: 0,
            description: "",
          },
        ],
        paid_amount: 0,
        remaining_amount: 0,

        additional_expenses: 100,
        total_without_products_vat: 0,
        total_vat: 0,
        total_amount: 0,

        patch_number: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),

        sales_details: [],
        sales_reference: "",
        description: "",
        customer_id: "",
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
      vld_selected: [(v) => v > 0 || "أدخل قيمة"],
      required: [(value) => !!value || "الحقل مطلوب."],
      isunique: [],
      is_exists: [],
      is_valid_date: [],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],
    };
  },
  watch: {
    name_search(val) {
      val &&
        val !== this.selected_product.ar_name &&
        this.getProducts(val, "name");
    },
  },
  methods: {
    customerInfo() {
      return this.customers.find((elem) => elem.id == this.invoice.customer_id);
    },
    changeDateFormat() {
      let chunks = this.invoice.test_date.match(/.{1,2}/g);
      if (chunks[1].length == 1) chunks[1] = "0" + chunks[1];

      let date = "20" + chunks[0] + "-" + chunks[1] + "-01";

      if (!isNaN(Date.parse(date))) {
        console.log(Date.parse(date));
        this.invoice.test_date = date;
        this.is_valid_date = [];
        return;
      }

      this.is_valid_date = ["التاريخ غير صحيح"];
    },
    addCustomerToList(customer) {
      this.customers.push(customer);
      this.invoice.customer_id = customer.id;
    },
    loadCities(country_id) {
      this.cities = [];
      Country.loadCities(country_id).then(
        (response) => (this.cities = response.data.cities)
      );
    },

    addCustomer() {
      this.add_update_customer_dialog = true;
      this.operation = "add";
      this.passed_customer = {};
    },
    searchAndAddToInvoice() {
      let params = { barcode: this.searched_barcode };

      Product.invoiceBarcodeSearch(params).then((response) => {
        if (!response.data.product) {
          this.is_exists = [false || "الصنف غير موجود "];
          return;
        }
        console.log(response.data.product);

        this.is_exists = [true];

        //this.found_products = response.data.products;

        let selected_product = response.data.product.purchase_details[0];
        selected_product.ar_name = response.data.product.ar_name;
        selected_product.barcode = response.data.product.barcode;
        selected_product.units = response.data.product.units;
        selected_product.expires_at = selected_product.expires_at.split(" ")[0];
        selected_product.sold_quantity = 1;
        selected_product.sold_unit_id =
          selected_product.units[
            response.data.product.main_sales_unit_id - 1
          ].id;

        console.log(selected_product);

        //-----add
        selected_product.sales_discount_type_id = 1;
        selected_product.sales_tax = response.data.product.sales_tax;

        this.invoice.sales_details.unshift(selected_product);
      });
    },
    remaining_amount() {
      return (this.invoice.remaining_amount =
        this.invoice.total_amount - this.invoice.paid_amount);
    },
    payAllCash() {
      this.invoice.paid_amount = this.invoice.total_amount.toFixed(2);
      this.invoice.payment_methods = "";
    },
    paymentMethods(payments) {
      this.invoice.payment_methods = payments.payment_methods;
      this.invoice.paid_amount = payments.paid_amount;
    },
    show_product_dialog(item) {
      this.product_info_dialog = true;
      console.log(item);
      this.product_info_product = item;
    },
    product_unit_change(item) {
      let sold_unit = item.units.find(
        (elem) => elem.pivot.id == item.sold_unit_id
      );

      item.unit_price = sold_unit.pivot.sales_price;
    },
    total_vat() {
      this.invoice.total_vat = this.invoice.sales_details.reduce(
        (a, b) => +a + +b.sales_tax_value,
        0
      );
      return this.invoice.total_vat;
    },
    total_amount() {
      this.invoice.total_amount =
        this.total_without_products_vat() +
        this.total_vat() +
        this.invoice.additional_expenses;
      return this.invoice.total_amount;
    },

    total_without_products_vat() {
      return this.invoice.sales_details.reduce(
        (a, b) => +a + +b.total_befor_tax,
        0
      );
    },

    total(item) {
      item.total = this.sales_tax_value(item) + this.total_befor_tax(item);
      return item.total;
    },

    sales_tax_value(item) {
      item.sales_tax_value =
        (this.total_befor_tax(item) * item.sales_tax) / 100;
      return item.sales_tax_value;
    },
    total_befor_tax(item) {
      if (item.sales_discount_type_id == 1) {
        item.total_befor_tax =
          item.sold_quantity * item.unit_price -
          (item.sold_quantity * item.unit_price * item.sales_discount) / 100;

        return item.total_befor_tax;
      }
      item.total_befor_tax =
        item.sold_quantity * item.unit_price - item.sales_discount;

      return item.total_befor_tax;
    },
    quantity_in_minor_unit(item) {
      let sold_unit = item.units.find((elem) => elem.id == item.sold_unit_id);
      item.quantity_in_minor_unit = item.sold_quantity * sold_unit.contains;
      return item.quantity_in_minor_unit;
    },
    deleteItem(item) {
      this.invoice.sales_details.splice(
        this.invoice.sales_details.indexOf(item),
        1
      );
    },
    getProducts(val, type) {
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

    addProductToInvoice() {
      console.log(this.invoice.sales_details);
      console.log("seles", this.selected_product);
      //set defaultsales_id from main soldid
      this.selected_product.sold_unit_id =
        this.selected_product.units[
          this.selected_product.main_sales_unit_id - 1
        ].pivot.id;

      this.selected_product.unit_price =
        this.selected_product.units[
          this.selected_product.main_sales_unit_id - 1
        ].pivot.sales_price;

      this.selected_product.sold_quantity = 1;
      console.log("nnj", this.selected_product.sold_unit_id);
      this.invoice.sales_details.unshift(
        JSON.parse(JSON.stringify(this.selected_product))
      );
      console.log("nib", this.invoice.sales_details);
      this.selected_product = [];
    },
    checkExicting() {},
    submit() {
      if (this.is_new_invoice)
        Invoice.store(this.invoice).then((response) =>
          console.log(response.data)
        );
      else
        Invoice.update(this.invoice).then((response) =>
          console.log(response.data)
        );

      console.log(this.invoice);
    },

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
  created() {
    if (this.$route.params.id) {
      this.is_new_invoice = false;
      this.title = "تعديل فاتورة رقم " + this.$route.params.id;
      Invoice.get(this.$route.params.id).then((response) => {
        this.invoice = response.data.invoice;
        console.log(this.invoice);
        this.invoice.issue_date = this.invoice.issue_date.split(" ")[0];
        this.invoice.maturity_date = this.invoice.maturity_date.split(" ")[0];
        this.invoice.sales_details.forEach((elem) => {
          if (elem.expires_at) elem.expires_at = elem.expires_at.split(" ")[0];
        });

        if (this.invoice.payment_methods.length == 0)
          this.invoice.payment_methods = [
            {
              account_id: "",
              credit: 0,
              description: "",
            },
            {
              account_id: "",
              credit: 0,
              description: "",
            },
            {
              account_id: "",
              credit: 0,
              description: "",
            },
          ];
        this.customers = response.data.customers;
        this.additional_expenses_from_accounts =
          response.data.accounts.accounts;
        console.log(response.data.accounts.accounts);
      });
    } else {
      Customer.get().then((response) => (this.customers = response.data));
      Account.cashAndBanks().then(
        (response) =>
          (this.additional_expenses_from_accounts = response.data.accounts)
      );
    }
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
.invoice-footer {
  min-width: 0;
  overflow: hidden;
}
.invoice-extra-expense :after,
.invoice-extra-expense :before {
  display: none;
}

.invoice-extra-expense .v-text-field__details {
  display: none;
}
.text-red input {
  color: red !important;
}
.invoice-info .v-text-field__prefix {
  margin-right: 10px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>