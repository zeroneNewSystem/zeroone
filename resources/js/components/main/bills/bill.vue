<template>
  <v-form ref="form">
    <div>
      <v-snackbar
        v-model="snackbar"
        :timeout="snackbarTimeout"
        color="#e91e63"
        centered
        transition="scale-transition"
        vertical
        >{{ snackbarText }}</v-snackbar
      >

      <v-dialog v-model="no_product_dialog" max-width="290">
        <v-card>
          <v-card-title> الصنف غير موجود </v-card-title>

          <v-card-text>
            الصنف لم يتم شراؤه من قبل أو أن المخزون قد نفد
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              text
              @click="no_product_dialog = false"
            >
              اغلق
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog" max-width="600px" persistent>
        <v-card>
          <p style="margin: 0 10px; font-size: 14px; padding: 10px">
            قم باختيار الصنف المناسب واضغط موافق
          </p>

          <v-card-text>
            <ul>
              <div
                v-for="set in sets"
                tabIndex="-1"
                :key="set.id + 'd'"
                @blur="selected_elem_fromSet = set.id"
              >
                <v-row>
                  <v-col>
                    {{ set.id }}
                  </v-col>
                  <v-col>
                    {{ selected_product.ar_name }}
                  </v-col>
                  <v-col>
                    {{ set.sum_quantity_in_minor_unit }}
                  </v-col>
                  <v-col>
                    {{ set.expires_at && set.expires_at.split(" ")[0] }}
                  </v-col>
                </v-row>
              </div>
            </ul>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="disagree">
              Disagree
            </v-btn>
            <v-btn color="green darken-1" text @click="agreeToAdd">
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <add-update-person
        :route="person_type"
        :dialog="add_update_person_dialog"
        :person="passed_person"
        :operation="operation"
        :cities="cities"
        @addUpdatePerson="addPersonToList"
        @changeCountry="loadCities"
        @close_person_dialog="close_person_dialog"
      ></add-update-person>
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
          <v-toolbar flat color="white">
            <v-toolbar-title>{{
              !$route.params.id
                ? title[bill.type_id][0]
                : title[bill.type_id][1]
            }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-radio-group v-model="return_source">
              <v-row v-if="return_bill">
                <v-col cols="1" class="pa-0 mt-7">
                  <v-radio value="1"></v-radio>
                </v-col>
                <v-col cols="7" class="pa-0 mt-6">
                  <v-text-field
                    class="bill-info"
                    placeholder="رقم الفاتورة"
                    outlined
                    @click="return_source = '1'"
                    autocomplete="off"
                    v-model="bill_number_to_search"
                    prefix=" برقم فاتورة الشراء | "
                    :rules="bill_exists"
                    @keydown.enter="getBillByHittingBillNumber()"
                  ></v-text-field>
                </v-col>
                <v-col cols="4" class="pa-0 pr-1 mt-7">
                  <v-radio value="2" label="اختيار حر للمنتجات"></v-radio>
                </v-col>
              </v-row>
            </v-radio-group>
          </v-toolbar>
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
                      <v-col :cols="cols">
                        <v-autocomplete
                          v-model="bill.person_id"
                          :items="people"
                          :item-text="
                            (item) => {
                              if (this.route == 'purchase')
                                return item.company_name + ' : ' + item.name;
                              else return item.name;
                            }
                          "
                          item-value="id"
                          :rules="vld_selected"
                          :label="persona"
                        >
                          <!--        <template v-slot:append-item>
          <div v-intersect="endIntersect" />
        </template>
      -->
                        </v-autocomplete>
                      </v-col>
                      <v-col cols="2" v-if="main_bill">
                        <v-btn elevation="0" dark @click="addPerson">
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
                      type="number"
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
                    {{ person_info }}
                  </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" lg="6"> الاسم </v-col>
                      <v-col cols="12" lg="6">
                        {{ personInfo() && personInfo().name }}
                      </v-col>
                      <v-col cols="12" lg="6"> اسم الشركة </v-col>
                      <v-col cols="12" lg="6">
                        {{ personInfo() && personInfo().company_name }}
                      </v-col>
                      <v-col cols="12" lg="6"> الهاتف </v-col>
                      <v-col cols="12" lg="6">
                        {{ personInfo() && personInfo().phone01 }} </v-col
                      ><v-col cols="12" lg="6"> البريد الالكتروني </v-col>
                      <v-col cols="12" lg="6">
                        {{ personInfo() && personInfo().email }} </v-col
                      ><v-col cols="12" lg="6"> الرقم الضريبي </v-col>
                      <v-col cols="12" lg="6">
                        {{ personInfo() && personInfo().tax_number }}
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
                <template slot="no-data">
                  <div style="color: red">قم باختيار الأصناف</div>
                </template>
                <template
                  v-slot:top
                  v-if="!return_bill || return_source != '1'"
                >
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
                        @change="addProductToBill(true)"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        type="barcode"
                        id="barcode"
                        autocomplete="off"
                        v-model="searched_barcode"
                        label="الباركود"
                        @keydown.enter="searchProductByBarcode('barcode')"
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
                    :disabled="act != 'input' || !item.has_expiration_date"
                    ref="maturity_date"
                    v-model="item.expires_at_is_down"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        @click="expires_date(item)"
                        :disabled="act != 'input' || !item.has_expiration_date"
                        v-model="item.expires_at.split(' ')[0]"
                        flat
                        outlined
                        autocomplete="off"
                        hide-no-data
                        :hide-details="item.expires_at_message"
                        v-bind="attrs"
                        v-on="on"
                        @keydown.enter="item.expires_at_is_down = false"
                        :rules="item.expires_at_valid"
                        @change="changeExpirationDate(item)"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="item.expires_at"
                      no-title
                      @input="item.expires_at_is_down = false"
                      @change="changeExpirationDate(item)"
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
                    autocomplete="off"
                    single-line
                    outlined
                    v-model="item.quantity"
                    :hide-details="item.hide_quantity_valid_message"
                    :rules="item.quantity_valid"
                    @click="quantity_clicked(item)"
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
import Person from "../../../apis/Person";
import Account from "../../../apis/Account";

export default {
  components: {
    ProductInfo,
    PaymentMethod,
    AddUpdatePerson,
  },
  data() {
    return {
      return_source: "1",

      act: "input",
      bill_number_to_search: "",
      return_bill: false,
      cols: 10,
      main_bill: true,
      //-------------
      snackbar: false,
      snackbarText: "تأكد من تعبئة الحقول",
      snackbarTimeout: 2000,
      //-------------
      no_product_dialog: false,
      agree: false,
      functionToAddProduct: "",
      someVariableUnderYourControl: 1,
      sets: [],
      dialog: false,
      route: window.location.pathname.replace(/^\/([^\/]*).*$/, "$1"),
      title: [
        [,],
        ["فاتورة مشتريات جديدة", "تعديل فاتورة مشتريات"],
        ["فاتورة مبيعات جديدة", "تعديل فاتورة مبيعات"],
        ["مرودوات مشتريات جديدة", "تعديل مرودوات مشتريات"],
        ["مرودوات مبيعات جديدة", "تعديل مرودوات مبيعات"],
      ],

      //----
      person_info: "معلومات المورد",
      person_type: "suppliers",
      persona: "المورد",
      //----

      is_new_bill: true,
      additional_expenses_from_accounts: [],
      additional_expenses_from_account_id: 0,
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

      add_update_person_dialog: false,
      passed_person: "",
      operation: "add",
      cities: [],
      people: [],
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
          text: "الخصم",
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
          value: "bought_tax",
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
        is_input: 1,
        type_id: "",
        only_cash: true,
        payment_condition_id: 0,
        payment_methods: [
          {
            account_id: "",
            amount: 0,
            description: "",
          },
          {
            account_id: "",
            amount: 0,
            description: "",
          },
          {
            account_id: "",
            amount: 0,
            description: "",
          },
        ],
        paid_amount: 0,
        remaining_amount: 0,

        additional_expenses: 0,
        total_without_products_vat: 0,
        total_vat: 0,
        total_amount: 0,

        patch_number: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),

        bill_details: [],
        reference: "",
        description: "",
        person_id: "",
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
        is_input: 1,
        type_id: 1,
        only_cash: true,

        payment_condition_id: 0,
        payment_methods: [
          {
            account_id: "",
            amount: 0,
            description: "",
          },
          {
            account_id: "",
            amount: 0,
            description: "",
          },
          {
            account_id: "",
            amount: 0,
            description: "",
          },
        ],
        paid_amount: 0,
        remaining_amount: 0,

        additional_expenses: 0,
        additional_expenses_from_account_id: 4,
        total_without_products_vat: 0,
        total_vat: 0,
        total_amount: 0,

        patch_number: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),

        bill_details: [],
        reference: "",
        description: "",
        person_id: "",
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
      bill_exists: [],
      expires_at_valid: [
        (v) => (v.has_expiration_date && v != "*******") || "قم بتغيير التاريخ",
      ],
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
    // alert(1);
    next();
  },
  methods: {
    disagree() {
      this.dialog = false;
      this.selected_product = "";
    },
    quantity_clicked(item) {
      item.hide_quantity_valid_message = true;
      item.quantity_valid = [true];
    },
    endIntersect(entries, observer, isIntersecting) {},
    getBillByHittingBillNumber() {
      //this.title = "تعديل فاتورة رقم " + this.$route.params.id;
      Bill.get(
        this.bill_number_to_search,
        this.bill.type_id - 2 // بحسب الترتيب
        /*
        1 - purchase
        2 - invoice
        3 - purchase return 
        4 - invoice  return 
        */
      ).then((response) => {
        if (Array.isArray(response.data)) {
          this.bill_exists = [false || "الفاتورة غير موجود "];

          return 0;
        }
        this.bill_exists = [true];
        this.bill = response.data.bill;
        if (this.route == "purchase_return") this.bill.type_id = 3; //purcase return
        if (this.route == "invoice_return") this.bill.type_id = 4; //purcase return
        console.log(this.bill);
        this.bill.issue_date = this.bill.issue_date.split(" ")[0];
        this.bill.maturity_date = this.bill.maturity_date.split(" ")[0];
        this.bill.bill_details.forEach((elem) => {
          if (elem.expires_at) elem.expires_at = elem.expires_at.split(" ")[0];
        });

        if (this.bill.payment_methods.length != 0) {
        } else
          this.bill.payment_methods = [
            {
              account_id: "",
              amount: 0,
              description: "",
            },
            {
              account_id: "",
              amount: 0,
              description: "",
            },
            {
              account_id: "",
              amount: 0,
              description: "",
            },
          ];

        this.people = response.data.people;
        this.additional_expenses_from_accounts =
          response.data.accounts.accounts;
        console.log(response.data.accounts.accounts);
      });
    },
    expires_date(item) {
      item.expires_at_message = true;
      item.expires_at_valid = [true];
      if (item.expires_at == "*******")
        item.expires_at = new Date().toISOString().substr(0, 10);
    },
    agreeToAdd() {
      // this.agree = true;

      this.index_of_selected_product = this.sets.findIndex(
        (elem) => elem.id == this.selected_elem_fromSet
      );

      console.log(this.index_of_selected_product);

      let selected_product = JSON.parse(JSON.stringify(this.selected_product));

      console.log(selected_product);
      selected_product["bill_details"][0] =
        selected_product["bill_details"][this.index_of_selected_product];

      this.showThisProduct(selected_product);
      console.log("index");

      console.log("index");

      window.removeEventListener("keydown", this.functionToAddProduct);

      let input_barcode = document.getElementById("barcode");
      this.$nextTick(() => {
        input_barcode.focus();
      });

      this.dialog = false;
      this.agree = false;
      return;

      //e.preventDefault();

      console.log(selectedElm);
      selectedElm = selectedElm[action[e.key] + "ElementSibling"];

      // loop if top/bottom edges reached or "home"/"end" keys clicked
      if (!selectedElm || e.key == "Home" || e.key == "End") {
        goToStart = action[e.key] == "next" || e.key == "Home";
        selectedElm =
          listElm.children[goToStart ? 0 : listElm.children.length - 1];
      }

      selectedElm.focus();

      return;

      // Mark first list item
      this.$nextTick(() => {
        listElm.firstElementChild.focus();
        var selectedElm = document.activeElement,
          goToStart,
          // map actions to event's key
          action = {
            ArrowUp: "previous",
            Up: "previous",
            ArrowDown: "next",
            Down: "next",
          };

        this.functionToAddProduct = (e) => {};
        window.addEventListener("keydown", this.functionToAddProduct);
      });

      // Event listener
    },
    showThisProduct(selected_product) {
      this.selected_product = "";
      this.searched_barcode = "";
      let gg;
      if (this.route != "purchase")
        if (
          (gg = this.bill.bill_details.findIndex(
            (elem) =>
              elem.id == selected_product.id &&
              elem.expires_at.split(" ")[0] ==
                selected_product["bill_details"][0].expires_at.split(" ")[0]
          )) >= 0
        ) {
          this.bill.bill_details[gg].quantity++;

          return;
        }

      selected_product.expires_at_message = true;
      selected_product.hide_quantity_valid_message = true;
      selected_product.quantity_valid = [true];

      console.log("selected_product");
      console.log(selected_product);
      //this.dialog = true;

      selected_product["document_type_id"] = this.bill.type_id;
      selected_product.unit_id =
        selected_product.units[selected_product.main_unit_id - 1].pivot.id;

      selected_product.unit_price =
        selected_product.units[
          selected_product.main_unit_id - 1
        ].pivot.bought_price;

      selected_product.quantity = 1;

      selected_product["product_id"] = selected_product["id"]; // bill

      if (this.act == "input") {
        selected_product.expires_at = "*******";
        selected_product.expires_at_valid = [false || "قم بتغيير التاريخ"];
      } else {
        selected_product.expires_at =
          selected_product.bill_details[0].expires_at;
        selected_product.current_quantity =
          selected_product.bill_details[0].quantity_in_minor_unit /
          selected_product.units[selected_product.main_unit_id - 1].pivot
            .contains;

        selected_product.actual_quantity = selected_product.current_quantity;
        selected_product.actual_quantity_in_minor_unit = parseInt(
          selected_product.actual_quantity *
            selected_product.units[selected_product.main_unit_id - 1].pivot
              .contains
        );
      }

      selected_product = JSON.parse(JSON.stringify(selected_product));
      this.bill.bill_details.push(selected_product);
      return;
    },
    close_person_dialog() {
      this.add_update_person_dialog = false;
    },
    changeExpirationDate(item) {
      console.log(item.expires_at);
      let occurrences = 0;
      let firstIndex = -1;

      for (let index = 0; index < this.bill.bill_details.length; index++) {
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
        (new Date(this.bill.maturity_date) - new Date(this.bill.issue_date)) /
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
    personInfo() {
      return this.people.find((elem) => elem.id == this.bill.person_id);
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
    addPersonToList(person) {
      this.add_update_person_dialog = false;
      this.people.push(person);
      this.bill.person_id = person.id;
    },
    loadCities(country_id) {
      this.cities = [];
      Country.loadCities(country_id).then(
        (response) => (this.cities = response.data.cities)
      );
    },

    addPerson() {
      this.add_update_person_dialog = true;
      this.operation = "add";
      this.passed_person = {};
    },

    addProductToBill(name) {
      //-----processing  for output document
      if (this.act == "input") {
        this.selected_product.expires_at = "*******";
        this.showThisProduct(this.selected_product);
        return;
      }
      //-----processing  for output document
      if (this.selected_product.bill_details.length == 0) {
        this.no_product_dialog = true;
        return;
      }
      if (this.selected_product.bill_details.length == 1) {
        this.showThisProduct(this.selected_product);
        return;
      }
      let products_grouped = false;
      if (products_grouped) {
        this.selected_product.bill_details[0].quantity_in_minor_unit =
          this.selected_product.quantity_in_minor_unit;

        // this.selected_product.bill_details[0].quantity_in_minor_unit =
        //   this.selected_product.bill_details.reduce(
        //     (a, b) => +a + +b.quantity_in_minor_unit,
        //     0
        //   );
        console.log("this.selected_product");
        console.log(this.selected_product);
        this.showThisProduct(this.selected_product);
        return;
      }
      let first = false;
      if (name) first = true;

      this.sets = this.selected_product.bill_details;
      this.dialog = true;
      this.$nextTick().then(() => {
        var listElm = document.querySelector("ul");

        // Mark first list item
        this.$nextTick(() => {
          listElm.firstElementChild.focus();
          var selectedElm = document.activeElement,
            goToStart,
            // map actions to event's key
            action = {
              ArrowUp: "previous",
              Up: "previous",
              ArrowDown: "next",
              Down: "next",
            };

          this.functionToAddProduct = (e) => {
            if (e.key === "Enter" && this.dialog && !first) {
              var parent = selectedElm.parentNode;
              console.log(parent);
              console.log(selectedElm);

              this.index_of_selected_product = Array.prototype.indexOf.call(
                listElm.children,
                selectedElm
              );

              let selected_product = JSON.parse(
                JSON.stringify(this.selected_product)
              );

              console.log(selected_product);
              selected_product["bill_details"][0] =
                selected_product["bill_details"][
                  this.index_of_selected_product
                ];

              this.showThisProduct(selected_product);
              console.log("index");

              console.log("index");

              window.removeEventListener("keydown", this.functionToAddProduct);

              console.log("input_barcode");
              console.log(input_barcode);
              console.log("input_barcode");
              let input_barcode = document.getElementById("barcode");
              // this.$nextTick(() => {
              //   input_barcode.focus();
              // });

              console.log("selectedElm");
              console.log(selectedElm);
              console.log("selectedElm");
              this.dialog = false;
              this.agree = false;
              return;
            }
            //e.preventDefault();

            if (e.key !== "Enter") {
              console.log(selectedElm);
              selectedElm = selectedElm[action[e.key] + "ElementSibling"];

              // loop if top/bottom edges reached or "home"/"end" keys clicked
              if (!selectedElm || e.key == "Home" || e.key == "End") {
                goToStart = action[e.key] == "next" || e.key == "Home";
                selectedElm =
                  listElm.children[goToStart ? 0 : listElm.children.length - 1];
              }

              selectedElm.focus();
              first = false;
            }
          };

          window.addEventListener("keydown", this.functionToAddProduct);
        });

        // Event listener
      });

      //CHECK IF PRODUCT HAS EXPIRATION DATE --> ADD QUANTITY

      // if (!selected_product.has_expiration_date) {
      //   let index = this.bill.bill_details.findIndex(
      //     (elem) => elem.barcode == selected_product.barcode
      //   );
      //   if (index != -1) {
      //     this.bill.bill_details[index].quantity++;
      //     return;
      //   }
      // }

      // //this.found_products = response.data.products;

      // //-----add

      // selected_product.unit_id =
      //   selected_product.units[selected_product.main_unit_id - 1].pivot.id;

      // selected_product.unit_price =
      //   selected_product.units[
      //     selected_product.main_unit_id - 1
      //   ].pivot.bought_price;

      // selected_product.quantity = 1;

      // //---------
      // selected_product["document_type_id"] = 1; // bill
      // selected_product["product_id"] = selected_product["id"]; // bill

      // this.bill.bill_details.push(selected_product);
    },
    searchProductByBarcode() {
      let params = { barcode: this.searched_barcode };
      let extra_route = this.act;
      Product.billBarcodeSearch(params, extra_route).then((response) => {
        if (response.data.products.length == 0) {
          this.is_exists = [false || "الصنف غير موجود "];
          return;
        }
        this.is_exists = [true];
        this.selected_product = JSON.parse(
          JSON.stringify(response.data.products[0])
        );

        this.addProductToBill();
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
          amount: 0,
          description: "",
        },
        {
          account_id: "",
          amount: 0,
          description: "",
        },
        {
          account_id: "",
          amount: 0,
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
      item.hide_quantity_valid_message = true;
      item.quantity_valid = [true];

      let unit = item.units.find((elem) => elem.pivot.id == item.unit_id);

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
      item.tax_value = (this.total_befor_tax(item) * item.bought_tax) / 100;
      return item.tax_value;
    },
    total_befor_tax(item) {
      if (item.discount_type_id == 1) {
        item.total_befor_tax =
          item.quantity * item.unit_price -
          (item.quantity * item.unit_price * item.discount) / 100;

        return item.total_befor_tax;
      }
      item.total_befor_tax = item.quantity * item.unit_price - item.discount;

      return item.total_befor_tax;
    },
    quantity_in_minor_unit(item) {
      let unit = item.units.find((elem) => elem.pivot.id == item.unit_id);
      item.quantity_in_minor_unit = item.quantity * unit.pivot.contains;
      return item.quantity_in_minor_unit;
    },
    deleteItem(item) {
      this.bill.bill_details.splice(this.bill.bill_details.indexOf(item), 1);
    },
    getProducts(val, type) {
      if (val.length > 2) {
        this.loading = true;
        let params = { name: val };
        let extra_route = this.act;
        Product.billNameSearch(params, extra_route).then((response) => {
          if (response.data.products.length == 0) {
            this.is_exists = [false || "الصنف غير موجود "];
            return;
          }

          this.loading = false;
          console.log("hi", response.data);

          this.found_products = JSON.parse(
            JSON.stringify(response.data.products)
          );

          this.is_exists = [true];
        });
      }
    },

    // addProductToBill() {
    //   console.log("this.selected_product");
    //   console.log(this.selected_product);
    //   console.log("this.selected_product");
    //   this.selected_product.main_unit_id =
    //     this.selected_product.main_bought_unit_id;
    //   this.showThisProduct(this.selected_product);
    // },
    checkExicting() {},
    submit() {
      console.log(this.is_new_bill);
      this.bill.bill_details.forEach((item) => {
        if (item.expires_at == "*******") {
          item.expires_at_message = false;
        }
      });

      if (!this.$refs.form.validate()) {
        console.log("this.bill.bill_details");
        console.log(this.bill.bill_details);
        console.log(this.$refs.form.rules);
        return;
      }

      // this.expires_at_message = false;
      //this.$router.go(0); reload page if needed

      /* remove zero amount or not account methods */
      // this.bill.payment_methods = this.bill.payment_methods.filter(
      //     (elem) => elem.account_id != "" && elem.credit != 0
      // );

      if (this.bill.bill_details.length == 0) {
        this.snackbar = true;
        return;
      }
      if (this.is_new_bill)
        Bill.store(this.bill).then((response) => {
          if (!response.data.valid) {
            response.data.message.forEach((element) => {
              this.bill.bill_details[
                element
              ].hide_quantity_valid_message = false;

              this.bill.bill_details[element].quantity_valid = [
                false || "غير متوفرة",
              ];
            });
            return;
          }

          this.snackbar = true;
          this.snackbarText = "تم حفظ الفاتورة";
        });
      else
        Bill.update(this.bill).then((response) => console.log(response.data));

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
      this.route = to.fullPath.replace(/^\/([^\/]*).*$/, "$1");
      console.log("patho");
      console.log(this.route.split("/"));

      if (this.route == "invoice") {
        this.act = "output";
        this.person_type = "customers";
        this.person_info = "معلومات العميل";
        this.persona = "العميل";
        this.bill.type_id = 2;
        this.bill.is_input = 0;
        this.new_bill.type_id = 2;
      }
      if (this.route == "purchase") {
        this.act = "input";
        console.log("sss");
        this.person_type = "suppliers";
        this.person_info = "معلومات المورد";
        this.persona = "المورد";
        this.bill.type_id = 1;
        this.bill.is_input = 1;
        this.new_bill.type_id = 1;
      }
      if (this.route == "invoice_return") {
        this.act = "input";
        this.return_bill = true;
        this.person_type = "customers";
        this.person_info = "معلومات العميل";
        this.persona = "العميل";
        this.bill.is_input = 1;
        this.bill.type_id = 4;
        this.new_bill.type_id = 4;
      }
      if (this.route == "purchase_return") {
        this.act = "output";
        this.return_bill = true;
        this.cols = 12;
        this.main_bill = false;
        this.person_type = "customers";
        this.person_info = "معلومات المورد";
        this.persona = "المورد";
        this.bill.type_id = 3;
        this.bill.is_input = 0;
        this.new_bill.type_id = 3;
      }
      // if (route == "nibra")
      //   Person = (await import("../../../apis/Person")).default;

      if (this.$route.params.id) {
        this.is_new_bill = false;
        //this.title = "تعديل فاتورة رقم " + this.$route.params.id;
        Bill.get(this.$route.params.id, this.bill.type_id).then((response) => {
          this.bill = response.data.bill;
          console.log(this.bill);
          this.bill.issue_date = this.bill.issue_date.split(" ")[0];
          this.bill.maturity_date = this.bill.maturity_date.split(" ")[0];
          this.bill.bill_details.forEach((elem) => {
            if (elem.expires_at)
              elem.expires_at = elem.expires_at.split(" ")[0];
          });

          if (this.bill.payment_methods.length != 0) {
          } else
            this.bill.payment_methods = [
              {
                account_id: "",
                amount: 0,
                description: "",
              },
              {
                account_id: "",
                amount: 0,
                description: "",
              },
              {
                account_id: "",
                amount: 0,
                description: "",
              },
            ];

          this.people = response.data.people;
          this.additional_expenses_from_accounts =
            response.data.accounts.accounts;
          console.log(response.data.accounts.accounts);
        });
      } else {
        Person.get({}, this.person_type).then(
          (response) => (this.people = response.data)
        );
        // Bill.getNewReference({ document_type_id: this.bill.type_id }).then(
        //   (response) => (this.bill.reference = response.data)
        // );
      }

      // if (route == "nibras")
      //   Person = (await import("../../../apis/Person")).default;

      // console.log(this.$route);
      //this.createPage(this.$route, "new");
    },
  },
  async created() {
    Account.cashAndBanks().then(
      (response) =>
        (this.additional_expenses_from_accounts = response.data.accounts)
    );
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

.v-application ol,
.v-application ul {
  padding-left: 0;
}
ul {
  list-style: none;
  border: 1px solid silver;
  max-height: 170px;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth; /* nice smooth movement */
  overflow: hidden; /* set to hidden by OP's request */
}

ul > div {
  padding: 0.5em;
  margin: 0;
}
ul > div:focus {
  background: #e91e63;
  outline: none;
}

.theme--light.v-subheader {
  background: rgb(255, 231, 243);
  justify-content: center;
}
.first-level {
  background: rgb(103, 133, 196);
  justify-content: center;
}
</style>