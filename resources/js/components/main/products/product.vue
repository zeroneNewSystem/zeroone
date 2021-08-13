<template>
  <div>
    <svg
      class="printclass"
      id="barcode"
      v-for="elem in barcodeQuan"
      :key="elem"
    ></svg>

    <div class="noPrint">
      <v-snackbar
        v-model="snackbar"
        :timeout="snackbarTimeout"
        color="#e91e63"
        centered
        transition="scale-transition"
        vertical
        >{{ snakebarText }}</v-snackbar
      >

      <v-container>
        <div class="row">
          <div class="col-sm-12 fatura">
            <div class="column">
              <a href="#" class="btn btn-info m-b-5 m-r-2">
                <v-icon class="white--text" @click.prevent="getid"
                  >mdi-plus-box</v-icon
                >إدارة الأدوية
              </a>
              <router-link
                class="btn btn-info m-b-5 m-r-2"
                to="/invoicemanagement"
              >
                <v-icon class="white--text">mdi-view-module</v-icon>إدارة
                المشتريات
              </router-link>
              <a class="btn btn-info m-b-5 m-r-2" @click>
                <v-icon class="white--text">mdi-floppy</v-icon>إدارة الحسابات
              </a>
            </div>
          </div>
        </div>
      </v-container>

      <v-form @submit.prevent ref="form">
        <v-card>
          <v-card-title>
            <span>{{ formTitle }}</span>
            <v-col cols="12" lg="4">
              <v-checkbox
                v-model="product.is_active"
                style="white-space: nowrap; margin-left: 5px; margin-right: 5px"
                color="#e91e63"
                label="إيقاف التعامل بالمنتج"
              ></v-checkbox>
            </v-col>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" lg="4">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.ar_name"
                    label="الاسم العربي"
                    :rules="required.concat(isunique)"
                    @blur="
                      checkExecting({
                        ar_name: product.ar_name,
                        flag: 'checkproducts',
                      })
                    "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="4">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.en_name"
                    label="الاسم الانجليزي"
                    :rules="required.concat(isunique)"
                    @blur="
                      checkExecting({
                        en_name: product.en_name,
                        flag: 'checkproducts',
                      })
                    "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="4">
                  <v-text-field
                    autocomplete="off"
                    append-icon="mdi-alpha-g-circle"
                    @click:append="toggleMarker(12, 'serial number')"
                    v-model="product.serial_number"
                    label=" الرقم التسلسلي (اضغط على G لتوليد رقم عشوائي)"
                    :rules="required.concat(isunique)"
                    @blur="
                      checkExecting({
                        barcode: product.barcode,
                        flag: 'checkproducts',
                      })
                    "
                  ></v-text-field>
                </v-col>

                <v-col cols="12" lg="4">
                  <v-autocomplete
                    v-model="product.groupIDs"
                    :disabled="isUpdating"
                    :items="prdct_groups"
                    item-text="ar_name"
                    item-value="id"
                    :rules="vld_minlingth_one"
                    label="مجموعات الصنف"
                    multiple
                    @change="unitsadded()"
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" lg="4">
                  <v-autocomplete
                    label="نوع الصنف"
                    v-model="product.prdct_type_id"
                    :items="prdct_types"
                    item-text="ar_name"
                    item-value="id"
                    :rules="required"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" lg="4">
                  <v-autocomplete
                    v-model="product.prdct_form_id"
                    :disabled="isUpdating"
                    :items="prdct_forms"
                    item-text="ar_name"
                    item-value="id"
                    :rules="vld_minlingth_one"
                    label=" الشكل الدوائي الدواء اختيار متعدد  "
                    @change="addForm()"
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" lg="3">
                  <v-autocomplete
                    label="الضريبة"
                    v-model="product.sales_tax_id"
                    :items="taxes"
                    :item-text="
                      (item) => item.ar_name + ' ' + item.percentage + '%'
                    "
                    item-value="id"
                    :rules="required"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12" lg="3">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.min_alert"
                    label="حد التنبيه الأدني"
                    :rules="vld_numbering"
                    value="0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="3">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.max_alert"
                    label="حد التنبيه الأعلى"
                    :rules="vld_numbering"
                    value="0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="3">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.stagnation_period"
                    label="فترة الركود بالأيام"
                    :rules="vld_numbering"
                    value="0"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" align="right">
                  <label for=""> وحدات الصنف مرتبة من الأصغر للأعلى</label>
                </v-col>
                <v-col cols="12" align="right">
                  <v-row>
                    <v-data-table
                      hide-default-footer
                      :headers="extra_units_headers"
                      :items="product.prdct_units"
                      style="width: 95%"
                      :item-key="
                        toString(Math.floor(Math.random(1, 100) * 100))
                      "
                    >
                      <template v-slot:item.sale_main_unit="{ item }">
                        <v-radio-group
                          class="product-radio"
                          v-model="item.sale_main_unit"
                          @change="uncheckAnotherRadioButtons(item, 'sale')"
                        >
                          <div
                            style="
                              font-size: 18px;
                              padding-right: 20px;
                              padding-bottom: 23px;
                            "
                          >
                            <v-radio value="sale_main_unit"></v-radio>
                          </div>
                        </v-radio-group>
                      </template>
                      <template v-slot:item.purchase_main_unit="{ item }">
                        <v-radio-group
                          class="product-radio"
                          v-model="item.purchase_main_unit"
                          @change="uncheckAnotherRadioButtons(item, 'purchase')"
                        >
                          <div
                            style="
                              font-size: 18px;
                              padding-right: 20px;
                              padding-bottom: 23px;
                            "
                          >
                            <v-radio value="purchase_main_unit"></v-radio>
                          </div>
                        </v-radio-group>
                      </template>
                      <template v-slot:item.equals="{ item }">
                        <div style="font-size: 18px; padding-bottom: 23px">
                          =
                        </div>
                      </template>

                      <template v-slot:item.id="{ item }">
                        <v-autocomplete
                          placeholder="اختر وحدة"
                          outlined
                          v-model="item.id"
                          :items="prdct_units"
                          item-value="id"
                          item-text="ar_name"
                          append-icon=""
                          :rules="required"
                          @change="printUnitObjects"
                        ></v-autocomplete>
                      </template>
                      <template v-slot:item.from_unit="{ item }">
                        <div style="margin-bottom: 20px">
                          {{ fromUnit }}
                        </div>
                      </template>
                      <template v-slot:item.contains="{ item }">
                        <v-text-field
                          outlined
                          :disabled="product.prdct_units.indexOf(item) == 0"
                          v-model="item.contains"
                          :rules="required"
                        ></v-text-field>
                      </template>
                      <template v-slot:item.purchase_price="{ item }">
                        <v-text-field
                          outlined
                          v-model="item.purchase_price"
                          :rules="required"
                        ></v-text-field>
                      </template>
                      <template v-slot:item.sale_price="{ item }">
                        <v-text-field
                          outlined
                          v-model="item.sale_price"
                          :rules="required"
                        ></v-text-field>
                      </template>
                      <template v-slot:item.barcode="{ item }">
                        <v-text-field
                          outlined
                          v-model="item.barcode"
                          :rules="required"
                        ></v-text-field>
                      </template>
                      <template v-slot:item.actions="{ item }">
                        <v-icon
                          color="red"
                          small
                          @click="deleteItem(item)"
                          style="margin-bottom: 20px"
                          >mdi-delete</v-icon
                        >
                      </template>
                      <template v-slot:footer>
                        <v-btn color="pink" dark class="mb-2" @click="addUnit"
                          >إضافة وحدة</v-btn
                        >
                      </template>
                    </v-data-table>
                  </v-row>
                </v-col>

                <v-col cols="12">
                  <v-row>
                    <v-col cols="12" lg="4">
                      <v-textarea
                        autocomplete="off"
                        v-model="product.description"
                        label="الوصف"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-row justify="center" align="center">
                        <v-col cols="12" sm="4" style="position: relative">
                          <img
                            @click="pickFile"
                            class="product_image"
                            :src="product.image"
                            alt="NO Image"
                          />
                          <div
                            style="
                              position: absolute;
                              width: 24px;
                              height: 27px;

                              bottom: 0;
                              right: 0;
                            "
                          >
                            <v-icon
                              style="background: "
                              color="red"
                              v-show="
                                product.image != '' &&
                                product.image != 'no-image.png'
                              "
                              @click="removeImage()"
                            >
                              mdi-close
                            </v-icon>
                          </div>
                          <input
                            style="display: none"
                            type="file"
                            name=""
                            id="image-upload"
                            accept="image/png, image/jpeg"
                            ref="imageRef"
                            @change="fileinfo($event, item)"
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" lg="12">
                  <v-divider></v-divider>
                </v-col>

                <v-col cols="12" lg="12">
                  <v-checkbox
                    v-model="product.is_storable"
                    class
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="المنتج مخزون"
                    @change="
                      product.is_sellable = product.is_purchasable = true
                    "
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-checkbox
                    :disabled="product.is_storable"
                    v-model="product.is_sellable"
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="قابل للبيع"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-checkbox
                    :disabled="product.is_storable"
                    v-model="product.is_purchasable"
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="قابل للشراء"
                  ></v-checkbox>
                </v-col>

                <v-col cols="12" lg="12">
                  <v-row>
                    <v-col>
                      <v-row v-if="product.is_sellable">
                        <v-col>
                          <v-text-field
                            autocomplete="off"
                            v-model="
                              product.prdct_units[indexOfSaleMainUnit]
                                .sale_price
                            "
                            label="سعر البيع"
                          ></v-text-field>
                        </v-col>
                        <v-col>
                          <v-text-fielde
                            autocomplete="off"
                            v-model="product.country"
                            label="حساب المبيعات"
                          ></v-text-fielde
                        ></v-col>
                      </v-row>
                    </v-col>
                    <v-col>
                      <v-row v-if="product.is_purchasable">
                        <v-col>
                          <v-text-field
                            autocomplete="off"
                            v-model="
                              product.prdct_units[indexOfPurchaseMainUnit]
                                .purchase_price
                            "
                            label="سعر الشراء"
                          ></v-text-field>
                        </v-col>

                        <v-col>
                          <v-text-field
                            autocomplete="off"
                            v-model="product.country"
                            label="حساب تكلفة المبيعات"
                          ></v-text-field
                        ></v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" lg="12">
                  <v-divider></v-divider>
                </v-col>

                <v-col cols="12" lg="3">
                  <v-checkbox
                    v-model="product.is_returnable"
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="قابل للاسترجاع بعد البيع"
                  ></v-checkbox>
                </v-col>

                <v-col cols="12" lg="3">
                  <v-checkbox
                    v-model="product.is_free"
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="هذا الصنف مجاني"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" lg="3">
                  <v-checkbox
                    v-model="product.is_bonus"
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="لديه بونص"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" lg="3">
                  <v-checkbox
                    v-model="product.has_expiration_date"
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="لديه تاريخ انتهاء"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" lg="4">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.country"
                    label="بلد الصنع"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" lg="4">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.brand_name"
                    label="الاسم العلمي"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" lg="4">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.side_effect"
                    label="التأثيرات الجانبية"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="4">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.alternative"
                    label="البديل"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              v-if="editedIndex === -1"
              class="btn btn-info m-b-5 m-r-2 white--text"
              color="text--white"
              text
              @click="submit()"
            >
              <v-icon class="white--text">mdi-plus-box</v-icon>حفظ وإضافة صنف
              جديد
            </v-btn>
            <v-btn
              v-else
              class="btn btn-info m-b-5 m-r-2 white--text"
              type="submit"
              color="blue darken-1"
              text
              @click="update(product)"
            >
              <v-icon class="white--text">mdi-view-module</v-icon>تعديل
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";
import Product from "../../../apis/Product";
import Api from "../../../apis/Api";

export default {
  props: ["editedproduct"],
  components: {},
  data() {
    return {
      /*-----------------------taxes---------------------------*/
      taxes: [],

      /*-----------------------extra units---------------------------*/
      extra_units_headers: [
        {
          text: " افتراضية البيع ",
          align: "center",
          sortable: false,
          value: "sale_main_unit",
        },
        {
          text: " افتراضية الشراء ",
          align: "center",
          sortable: false,
          value: "purchase_main_unit",
        },
        {
          text: " الوحدة",
          align: "center",
          sortable: false,
          value: "id",
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
          value: "sale_price",
        },
        {
          text: "الباركود",
          align: "center",
          sortable: false,
          value: "barcode",
        },
        { text: "actions ", align: "center", value: "actions" },
      ],

      /*-----------------------units---------------------------*/
      prdct_units: [
        {
          sale_main_unit: "2",
          purchase_main_unit: "2",

          ar_name: "salam",
          en_name: "kk",
          contains: 1,
          from_unit: "salam",
          purchase_price: "20",
          sale_price: "25",
          barcode: "129101101",
        },
      ],

      /*-----------------------groups---------------------------*/
      prdct_groups: [],

      /*-----------------------forms---------------------------*/
      prdct_forms: [],

      /*-----------------------types---------------------------*/
      prdct_types: [],

      /*-------------------validators---------------------------*/
      vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
      required: [(value) => !!value || "الحقل مطلوب."],
      isunique: [],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],

      /*-----------------------product---------------------------*/
      product: {
        company_id: "1",

        serial_number: "serial_number",
        ar_name: "ar_name",
        en_name: "en_name",
        prdct_units: [
          {
            sale_main_unit: "sale_main_unit",
            purchase_main_unit: "purchase_main_unit",
            id: "",
            en_name: "",
            contains: 1,
            from_unit: "",
            purchase_price: "9",
            sale_price: "8",
            barcode: "",
          },
        ],

        groupIDs: [1, 2],
        prdct_form_id: 1,
        prdct_type_id: 1,
        main_sales_unit_id: "main_sales_unit_id",
        main_purchase_unit_id: "main_purchase_unit_id",

        product_cogs_account_id: "product_cogs_account_id",
        product_sales_account_id: "product_sales_account_id",

        sales_discount: "sales_discount",
        sales_discount_type_id: "sales_discount_type_id",
        purchase_discount: "purchase_discount",
        purchase_tax_id: "purchase_tax_id",
        sales_tax_id: 1,
        min_alert: 1,
        max_alert: 10,
        stagnation_period: 100,
        opening_balance_quantity: "opening_balance_quantity",
        opening_balance_cost: "opening_balance_cost",
        profit_ratio: "profit_ratio",
        side_effect: "side_effect",
        description: "description",
        inventory_id: "inventory_id",
        image: "no-image.png",

        distribution_policy_id: "distribution_policy_id",
        is_free: true,
        is_bonus: false,
        is_active: true,
        is_avilable_in_POS: true,
        is_sellable: true,
        is_purchasable: true,
        is_returnable: true,
        is_storable: true,
        has_expiration_date: true,
      },

      barcodeValue: 123,
      barcodeQuan: 2,
      marker: true,

      found_drug: "",
      loading: false,
      items: [],
      search: null,

      date: new Date().toISOString().substr(0, 10),
      selectedradio: 1,
      menu1: false,
      menu2: false,
      //suucccmessage
      snackbar: false,
      snakebarText: "تم إضافة الصنف بنجاح",
      snackbarTimeout: 2000,
      //-ssuucccmessage
      dialog: false,
      printing_dialog: false,

      isUpdating: false,

      editedIndex: -1,
      title: "إضافة صنف",
      selectedGroups: [],
    };
  },

  computed: {
    indexOfPurchaseMainUnit() {
      return this.product.prdct_units.indexOf(
        this.product.prdct_units.find((elem) => {
          return elem.purchase_main_unit == "purchase_main_unit";
        })
      );
    },
    indexOfSaleMainUnit() {
      return this.product.prdct_units.indexOf(
        this.product.prdct_units.find((elem) => {
          return elem.sale_main_unit == "sale_main_unit";
        })
      );
    },
    fromUnit() {
      if (this.product.prdct_units[0].id == "") return "-";

      return this.prdct_units[this.product.prdct_units[0].id - 1].ar_name;
    },
    formTitle() {
      return this.editedIndex === -1 ? "إضافة صنف جديد" : "تعديل البيانات";
    },
  },
  mounted() {},
  created() {
    Product.getCreate()
      .then((response) => {
        this.prdct_forms = response.data.prdct_forms;
        this.prdct_groups = response.data.prdct_groups;
        this.prdct_units = response.data.prdct_units;
        this.prdct_types = response.data.prdct_types;
        this.taxes = response.data.taxes;
      })
      .catch((errors) => {
        this.errors = errors.response.data.errors;
        console.log(errors.response.data);
      })
      .finally();
  },

  methods: {
    pickFile() {
      this.$refs.imageRef.click();
    },
    removeImage() {
      this.product.image = "no-image.png";

      this.product.image_name = "no-image.png";
      document.getElementById("image-upload").value = null;
    },
    saveImage() {
      Api.post("/save-image", {
        image: this.product.image,
        image_name: this.product.image_name,
      }).then((response) => {
        console.log(response.data);
        if (response.data.length !== 0) this.items = response.data;
        this.loading = false;
      });
    },
    fileinfo(event) {
      let files = event.target.files;
      let filename = files[0]?.name;
      if (filename?.lastIndexOf(".") <= 0) {
        return alert("add a valid file");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.product.image = fileReader?.result;
      });
      fileReader?.readAsDataURL(files[0]);

      this.product.image_name = filename;
    },
    deleteItem(item) {
      let index = this.product.prdct_units.indexOf(item);
      this.product.prdct_units.splice(index, 1);

      if (index == 0) {
        this.product.prdct_units[0].contains = 1;
      }
      if (this.product.prdct_units.length == 0)
        this.product.prdct_units.push({
          sale_main_unit: "sale_main_unit",
          purchase_main_unit: "purchase_main_unit",
          id: "",
          en_name: "",
          contains: 1,
          from_unit: "",
          purchase_price: "",
          sale_price: "",
          barcode: "",
        });
      if (item.sale_main_unit == "sale_main_unit") {
        this.product.prdct_units[0].sale_main_unit = "sale_main_unit";
      }
      if (item.purchase_main_unit == "purchase_main_unit") {
        this.product.prdct_units[0].purchase_main_unit = "purchase_main_unit";
      }
    },
    uncheckAnotherRadioButtons(item, type) {
      //alert('sdsdsd')
      if (type == "sale") {
        this.product.prdct_units.forEach((element) => {
          console.log(element);
          element.sale_main_unit = "";
        });
        item.sale_main_unit = "sale_main_unit";
      }
      if (type == "purchase") {
        this.product.prdct_units.forEach((element) => {
          console.log(element);
          element.purchase_main_unit = "";
        });
        item.purchase_main_unit = "purchase_main_unit";
      }
    },
    printUnitObjects() {
      console.log(this.product.prdct_units);
    },
    add_extra_unit() {},
    addUnit() {
      this.product.prdct_units.push({
        sale_main_unit: "2",
        purchase_main_unit: "2",
        id: "",
        en_name: "",
        contains: 1,
        from_unit: "salam",
        purchase_price: "12",
        sale_price: "25",
        barcode: "129101101",
      });
    },

    toggleMarker(length, type) {
      if (type == "serial number")
        this.product.serial_number = this.generate(12);
      //this.marker = !this.marker;
      if (type == "barcode") this.product.barcode = this.generate(12);
    },
    printDiv() {
      var printContents = document.getElementById("printableArea").innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;
    },
    printing() {
      JsBarcode("#barcode", this.product.barcode, {
        //format: "pharmacode",
        //lineColor: "#0aa",
        //width: 2,
        //height: 50,
        displayValue: true,
      });
      window.print();
    },
    generate(n) {
      var add = 1,
        max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

      if (n > max) {
        return this.generate(max) + this.generate(n - max);
      }

      max = Math.pow(10, n + add);
      var min = max / 10; // Math.pow(10, n) basically
      var number = Math.floor(Math.random() * (max - min + 1)) + min;

      return ("" + number).substring(add);
    },

    setdrugname(item) {
      console.log(item);
      this.product.name = item;
    },
    querySelections(v) {
      if (v.length > 2) {
        this.product.name = v;
        this.loading = true;

        // Simulated ajax query ajax
        axios
          .post("router.php", {
            name: v,
            flag: "checkproducts",
            filename: "products",
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.length !== 0) this.items = response.data;
            this.loading = false;
          });
      }
    },
    additemtoinvoices() {
      console.log("local = ", this.found_drug);
    },
    itemtext(item) {
      return item.name + "-" + item.id;
    },

    addForm() {
      console.log(this.product.categories);
    },
    testadded() {
      console.log(this.product.categories);
    },
    unitsetting(items) {},

    checknameExecting(item) {
      console.log("hi");
      // Find if the array contains an object by comparing the property value
      if (item.length > 2) {
        this.loading = true;

        // Simulated ajax query ajax
        axios
          .post("router.php", {
            name: item,
            flag: "checkproducts",
            filename: "products",
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.length !== 0)
              this.isunique = [false || "الصنف موجود مسبقا"];
            else this.isunique = [true];
            this.loading = false;
          });
      }
    },
    checkExecting(item) {
      console.log(this.product);

      // Find if the array contains an object by comparing the property value
      if (Object.keys(item)[0].length > 2) {
        this.loading = true;
        item.filename = "products";
        // Simulated ajax query ajax
        axios.post("router.php", item).then((response) => {
          console.log(response.data);

          if (response.data !== 0)
            this.isunique = [false || "الصنف موجود مسبقا"];
          else this.isunique = [true];
          this.loading = false;
        });
      }
    },
    mathopertion() {
      this.product.currentQuan = eval(this.product.currentQuan);
    },
    initializeformproduct() {
      this.selectedGroups = [];
      this.product = this.product = JSON.parse(
        JSON.stringify({
          returnable: "1",
          selectedForms: [],
          selectedGroups: [],
          selectedGroups: [],
          name: "",
          barcode: "",
          brand_name: "",
          arabic_name: "",
          selling_discount: 0,

          img_link: "",
          country: "",
          tax: "0",
          side_effect: "",
          description: "",
          alert_quantity: 0,
          selling_price: 0,
          purchasingprice: 0,
          store_id: "",
          company: "",
          alternative: "",
          profitRatio: 0,
          user_id: "",
        })
      );
    },

    unitsadded(item) {
      console.log(item);
      this.product.selectedGroups.push({
        name: this.selectedGroups[this.selectedGroups.length - 1],
        ordering_number: this.selectedGroups.length - 1,
        contains: "1",
        cost: "0",
      });
      console.log(this.product.selectedGroups);
    },

    setproduction_date() {
      this.product.production_date = this.date;
    },
    setexpired_date() {
      this.product.expired = this.date;
    },
    saveunits() {
      this.dialog = false;
    },
    savenewdrug() {
      this.add_products(this.product);
    },
    update_drug() {},

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    submit() {
      console.log(this.product);

      return;
      if (this.$refs.form.validate()) {
        axios.post("router.php", item).then((response) => {
          this.snackbar = true;
          console.log(response.data);
          this.loading = false;
          this.initializeformproduct();
          console.log(this.initializeformproduct());
          console.log("nibtsas");
          this.$refs.form.resetValidation();
        });
      }
    },
    update(item) {
      console.log(item);
      item.flag = "updateproducts";
      item.filename = "products";

      axios.post("router.php", item).then((response) => {
        console.log(response.data);
      });
      //this.update_products(item);
    },
  },
  watch: {
    search(val) {
      val && val !== this.found_drug && this.querySelections(val);
    },

    date(val) {
      this.dateFormatted = this.date;
    },
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },
  destroyed() {
    this.selectedGroups = [];
  },
};
</script>
<style>
.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate)
  .v-icon {
  color: rgb(111, 98, 228) !important;
}
.product_image {
  position: relative;
  top: 0;
  left: 0;
  max-width: 200px;
  max-height: 150px;
  border-radius: 10px;
  border: 1px solid #eee;
  cursor: pointer;
}
</style>
