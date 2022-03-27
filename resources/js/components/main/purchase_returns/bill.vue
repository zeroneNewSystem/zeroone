<template>
  <v-form ref="form">
    <div>
      <add-update-supplier
        :dialog="add_update_supplier_dialog"
        :supplier="passed_supplier"
        :operation="operation"
        :cities="cities"
        @AddUpdatePerson="addSupplierToList"
        @changeCountry="loadCities"
      ></add-update-supplier>
      <product-info
        :dialog="product_info_dialog"
        :product="product_info_product"
        :prdct_forms="prdct_forms"
        :prdct_taxes="prdct_taxes"
        :prdct_types="prdct_types"
        
        @dialogFalse="product_info_dialog = false"
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
          <router-link class="btn btn-info m-b-5 m-r-2" to="/bill/1">
            <v-icon class="white--text">mdi-view-module</v-icon>إدارة الفواتير
          </router-link>
          <v-container>
            <v-row>
              <v-col>
                <v-row>
                  <v-col cols="12" class="pa-0">
                    <v-text-field
                      class="bill-info"
                      outlined
                      autocomplete="off"
                      v-model="bill.reference"
                      prefix=" رقم الفاتورة | "
                      :rules="required.concat(isunique)"
                      @blur="checkExicting()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="pa-0" v-if="false">
                    <v-text-field
                      class="bill-info"
                      outlined
                      placeholder="أدخل العام (رقمين) والشهر"
                      autocomplete="off"
                      v-model="bill.test_date"
                      prefix=" تاريخ اختباري | "
                      :rules="is_valid_date"
                      @keydown.enter="changeDateFormat()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="pa-0">
                    <v-text-field
                      autocomplete="off"
                      v-model="bill.description"
                      label="الوصف"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="pa-0">
                    <v-row>
                      <v-col cols="10">
                        <v-autocomplete
                          v-model="bill.supplier_id"
                          :items="suppliers"
                          :item-text="(item) => item.company_name + ' : ' + item.name"
                          
                          item-value="id"
                          :rules="vld_selected"
                          label="المورد"
                        >
                        </v-autocomplete>
                      </v-col>
                      <v-col cols="2">
                        <v-btn elevation="0" dark @click="addSupplier">
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
                          v-model="bill.issue_date"
                          label="تاريخ الاصدار"
                          prepend-icon="mdi-calendar"
                          v-bind="attrs"
                          v-on="on"
                          @keydown.enter="issue_date_is_down = false"
                          @change="getDays"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="bill.issue_date"
                        no-title
                        @input="issue_date_is_down = false"
                        @change="getDays"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" class="pa-0">
                    <v-text-field
                      label="الدفع بعد "
                      v-model="bill.payment_condition_id"
                      suffix="يوم"
                      @change="getMaturityDate"
                    ></v-text-field>
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
                          v-model="bill.maturity_date"
                          label="تاريخ الاستحقاق"
                          prepend-icon="mdi-calendar"
                          v-bind="attrs"
                          v-on="on"
                          @keydown.enter="maturity_date_is_down = false"
                          @change="getDays"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="bill.maturity_date"
                        no-title
                        @input="maturity_date_is_down = false"
                        @change="getDays"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <v-card>
                  <v-card-title style="background: lightgray">
                    معلومات المورد
                  </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" lg="6"> الاسم </v-col>
                      <v-col cols="12" lg="6">
                        {{ supplierInfo() && supplierInfo().name }}
                      </v-col>
                      <v-col cols="12" lg="6"> اسم الشركة </v-col>
                      <v-col cols="12" lg="6">
                        {{ supplierInfo() && supplierInfo().company_name }}
                      </v-col>
                      <v-col cols="12" lg="6"> الهاتف </v-col>
                      <v-col cols="12" lg="6">
                        {{ supplierInfo() && supplierInfo().phone01 }} </v-col
                      ><v-col cols="12" lg="6"> البريد الالكتروني </v-col>
                      <v-col cols="12" lg="6">
                        {{ supplierInfo() && supplierInfo().email }} </v-col
                      ><v-col cols="12" lg="6"> الرقم الضريبي </v-col>
                      <v-col cols="12" lg="6">
                        {{ supplierInfo() && supplierInfo().tax_number }}
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
                :headers="header"
                :items="bill.bill_details"
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
                        @change="addProductToBill"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        autocomplete="off"
                        v-model="searched_barcode"
                        label="الباركود"
                        @keydown.enter="searchAndAddToBill"
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
                    @change="logo(item)"
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
                        @change="logo(item)"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="item.expires_at"
                      no-title
                      @input="item.expires_at_is_down = false"
                      @change="logo(item)"
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
                <template v-slot:item.sold_price="{ item }">
                  <v-text-field
                    v-model="item.sold_price"
                    flat
                    type="number"
                    outlined
                    autocomplete="off"
                    hide-no-data
                    hide-details
                  ></v-text-field>
                </template>
                <template v-slot:item.bought_tax="{ item }">
                  <v-text-field
                    type="number"
                    flat
                    hide-no-data
                    hide-details
                    outlined
                    autocomplete="off"
                    v-model="item.bought_tax"
                  ></v-text-field>
                </template>
                <template v-slot:item.tax_value="{ item }">
                  <v-text-field
                    flat
                    disabled
                    hide-no-data
                    hide-details
                    outlined
                    autocomplete="off"
                    :value="tax_value(item).toFixed(2)"
                  ></v-text-field>
                </template>

                <template v-slot:item.discount="{ item }">
                  <v-row class="justify-center">
                    <v-col cols="6" class="pl-0">
                      <v-text-field
                        flat
                        type="number"
                        hide-no-data
                        hide-details
                        outlined
                        autocomplete="off"
                        v-model="item.discount"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="pr-0">
                      <v-autocomplete
                        v-model="item.discount_type_id"
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
                    v-model="item.unit_id"
                    :items="item.units"
                    item-text="ar_name"
                    item-value="pivot.id"
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
                <template v-slot:item.quantity="{ item }">
                  <v-text-field
                    type="number"
                    hide-no-data
                    hide-details
                    autocomplete="off"
                    single-line
                    outlined
                    v-model="item.quantity"
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
                  <div class="bill-footer">
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
                                v-model="bill.additional_expenses"
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
                                  bill.additional_expenses_from_account_id
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
                                v-model="bill.paid_amount"
                                @change="bill.only_cash == true"
                              >
                              </v-text-field>
                            </div>
                          </v-col>

                          <v-col cols="12" lg="4">
                            <payment-method
                              @payment_methods="paymentMethods"
                              :total="bill.total_amount"
                              :accounts="additional_expenses_from_accounts"
                              :payment_methods="bill.payment_methods"
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
                                class="purchas-extra-expense text-red"
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
  </v-form>
</template>

<script>
import Product from "../../../apis/Product";
import Bill from "../../../apis/Bill";
import ProductInfo from "../products/product-info.vue";
import PaymentMethod from "./payment-methods";
import AddUpdatePerson from "./AddUpdatePerson.vue";
import Country from "../../../apis/Country";
import Supplier from "../../../apis/Supplier";
import Account from "../../../apis/Account";
export default {
  components: {
    ProductInfo,
    PaymentMethod,
    AddUpdatePerson,
  },
  data() {
    return {
      
      title: "فاتورة شراء جديدة",
      is_new_bill: true,
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

      add_update_supplier_dialog: false,
      passed_supplier: "",
      operation: "add",
      cities: [],
      suppliers: [],
      name_search: "",

      loading: false,

      found_products: [],
      selected_product: [],
      header: [
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
          value: "quantity",
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
          text: "خصم الشراء",
          align: "center",
          value: "discount",
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
          value: "tax",
          sortable: false,
        },
        {
          text: "قيمة الضريبة",
          align: "center",
          value: "tax_value",
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
      new_bill: {
        only_cash:true,
        payment_condition_id: 0,
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

        details: [],
        reference: "",
        description: "",
        supplier_id: "",
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
      bill: {
        only_cash:true,
        
        payment_condition_id: 0,
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

        details: [],
        reference: "",
        description: "",
        supplier_id: "",
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
    $route(to, from) {
      console.log("from");
      console.log(to);
      this.createPage(to, "old");
    },
  },
  beforeRouteUpdate(to, from, next) {
  //  alert(1);
    next();
  },
  methods: {
    logo(item) {
      let occurrences = 0;
      let firstIndex = -1;

      for (
        let index = 0;
        index < this.bill.bill_details.length;
        index++
      ) {
        if (
          this.bill.bill_details[index].barcode == item.barcode &&
          this.bill.bill_details[index].expires_at == item.expires_at
        ) {
          if (firstIndex == -1) firstIndex = index;
          occurrences++;
          if (occurrences == 2) {
            this.bill.bill_details[firstIndex].quantity +=
              this.bill.bill_details[index].quantity;
            this.bill.bill_details.splice(index, 1);
            return;
          }
        }
      }

      console.log(item);
    },
    addays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + +days);
      return result;
    },
    getDays() {
      this.bill.payment_condition_id = parseInt(
        (new Date(this.bill.maturity_date) -
          new Date(this.bill.issue_date)) /
          (1000 * 60 * 60 * 24),
        10
      );
    },
    getMaturityDate() {
      this.bill.maturity_date = this.addays(
        this.bill.issue_date,
        this.bill.payment_condition_id
      )
        .toISOString()
        .substr(0, 10);
    },
    supplierInfo() {
      return this.suppliers.find(
        (elem) => elem.id == this.bill.supplier_id
      );
    },
    changeDateFormat() {
      let chunks = this.bill.test_date.match(/.{1,2}/g);
      if (chunks[1].length == 1) chunks[1] = "0" + chunks[1];

      let date = "20" + chunks[0] + "-" + chunks[1] + "-01";

      if (!isNaN(Date.parse(date))) {
        console.log(Date.parse(date));
        this.bill.test_date = date;
        this.is_valid_date = [];
        return;
      }

      this.is_valid_date = ["التاريخ غير صحيح"];
    },
    addSupplierToList(supplier) {
      this.suppliers.push(supplier);
      this.bill.supplier_id = supplier.id;
    },
    loadCities(country_id) {
      this.cities = [];
      Country.loadCities(country_id).then(
        (response) => (this.cities = response.data.cities)
      );
    },

    addSupplier() {
      this.add_update_supplier_dialog = true;
      this.operation = "add";
      this.passed_supplier = {};
    },
    searchAndAddToBill() {
      let params = { barcode: this.searched_barcode };

      Product.billBarcodeSearch(params).then((response) => {
        if (response.data.products.length == 0) {
          this.is_exists = [false || "الصنف غير موجود "];
          return;
        }
        this.is_exists = [true];
        let selected_product = response.data.products[0];

        //CHECK IF PRODUCT HAS EXPIRATION DATE --> ADD QUANTITY

        if (!selected_product.has_expiration_date) {
          let index = this.bill.bill_details.findIndex(
            (elem) => elem.barcode == selected_product.barcode
          );
          if (index != -1) {
            this.bill.bill_details[index].quantity++;
            return;
          }
        }

        //this.found_products = response.data.products;

        //-----add

        selected_product.unit_id =
          selected_product.units[
            selected_product.main_bought_unit_id - 1
          ].pivot.id;

        selected_product.unit_price =
          selected_product.units[
            selected_product.main_bought_unit_id - 1
          ].pivot.bought_price;

        selected_product.quantity = 1;

        //---------
        selected_product["bill_type_id"] = 1; // bill
        selected_product["product_id"] = selected_product["id"]; // bill

        this.bill.bill_details.push(selected_product);
      });
    },
    remaining_amount() {
      return (this.bill.remaining_amount =
        this.bill.total_amount - this.bill.paid_amount);
    },
    payAllCash() {
      this.bill.paid_amount = this.bill.total_amount.toFixed(2);
      this.bill.payment_methods = [
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
    },
    paymentMethods(payments) {
      this.bill.payment_methods = payments.payment_methods;
      this.bill.paid_amount = payments.paid_amount;
      this.bill.only_cash = false;
    },
    show_product_dialog(item) {
      this.product_info_dialog = true;
      console.log(item);
      this.product_info_product = item;
    },
    product_unit_change(item) {
      let unit = item.units.find(
        (elem) => elem.pivot.id == item.unit_id
      );

      item.unit_price = unit.pivot.bought_price;
    },
    total_vat() {
      this.bill.total_vat = this.bill.bill_details.reduce(
        (a, b) => +a + +b.tax_value,
        0
      );
      return this.bill.total_vat;
    },
    total_amount() {
      this.bill.total_amount =
        this.total_without_products_vat() + this.total_vat();

      return this.bill.total_amount;
    },

    total_without_products_vat() {
      return this.bill.bill_details.reduce(
        (a, b) => +a + +b.total_befor_tax,
        0
      );
    },

    total(item) {
      item.total = this.tax_value(item) + this.total_befor_tax(item);
      return item.total;
    },

    tax_value(item) {
      item.tax_value =
        (this.total_befor_tax(item) * item.bought_tax) / 100;
      return item.tax_value;
    },
    total_befor_tax(item) {
      if (item.discount_type_id == 1) {
        item.total_befor_tax =
          item.quantity * item.unit_price -
          (item.quantity * item.unit_price * item.discount) /
            100;

        return item.total_befor_tax;
      }
      item.total_befor_tax =
        item.quantity * item.unit_price - item.discount;

      return item.total_befor_tax;
    },
    quantity_in_minor_unit(item) {
      let unit = item.units.find(
        (elem) => elem.pivot.id == item.unit_id
      );
      item.quantity_in_minor_unit =
        item.quantity * unit.pivot.contains;
      return item.quantity_in_minor_unit;
    },
    deleteItem(item) {
      this.bill.bill_details.splice(
        this.bill.bill_details.indexOf(item),
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

    addProductToBill() {
      console.log(this.bill.bill_details);
      console.log("seles", this.selected_product);
      //set defaultid from main purchsedid
      this.selected_product.unit_id =
        this.selected_product.units[
          this.selected_product.main_bought_unit_id - 1
        ].pivot.id;

      this.selected_product.unit_price =
        this.selected_product.units[
          this.selected_product.main_bought_unit_id - 1
        ].pivot.bought_price;

      this.selected_product.quantity = 1;
      console.log("nnj", this.selected_product.unit_id);
      this.bill.bill_details.push(
        JSON.parse(JSON.stringify(this.selected_product))
      );
      console.log("nib", this.bill.bill_details);
      this.selected_product = [];
    },
    checkExicting() {},
    submit() {
      

      //this.$router.go(0); reload page if needed
      /* remove zero amount or not account methods */
      // this.bill.payment_methods = this.bill.payment_methods.filter(
      //     (elem) => elem.account_id != "" && elem.credit != 0
      // );
      if (this.is_new_bill)
        Bill.store(this.bill).then((response) =>
          console.log(response.data)
        );
      else
        Bill.update(this.bill).then((response) =>
          console.log(response.data)
        );

      console.log(this.bill);
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
    createPage(to, status) {
      let params = to.params;
      console.log();

      if (Object.keys(params).length != 0) {
        this.is_new_bill = false;
        this.title = "تعديل فاتورة رقم " + params.id;
        Bill.get(params.id).then((response) => {
          this.bill = response.data.bill;
          console.log(this.bill);
          this.bill.issue_date = this.bill.issue_date.split(" ")[0];
          this.bill.maturity_date =
            this.bill.maturity_date.split(" ")[0];
          this.bill.bill_details.forEach((elem) => {
            if (elem.expires_at)
              elem.expires_at = elem.expires_at.split(" ")[0];
          });

          if (this.bill.payment_methods.length == 0)
            this.bill.payment_methods = [
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
          this.suppliers = response.data.suppliers;
          this.additional_expenses_from_accounts =
            response.data.accounts.accounts;
          console.log(response.data.accounts.accounts);
        });
      } else {
        if (status == "new") {
          Supplier.get().then((response) => (this.suppliers = response.data));
          Account.cashAndBanks().then(
            (response) =>
              (this.additional_expenses_from_accounts = response.data.accounts)
          );
        } else {
          this.bill = JSON.parse(JSON.stringify(this.new_bill));
          this.$refs.form.reset();
        }
      }
    },
  },
  created() {
    this.createPage(this.$route, "new");
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
.bill-footer {
  min-width: 0;
  overflow: hidden;
}
.purchas-extra-expense :after,
.purchas-extra-expense :before {
  display: none;
}

.purchas-extra-expense .v-text-field__details {
  display: none;
}
.text-red input {
  color: red !important;
}
.bill-info .v-text-field__prefix {
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