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
        :timeout="timeout"
        color="#e91e63"
        centered
        transition="scale-transition"
        vertical
        >{{ text }}</v-snackbar
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
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" lg="6">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.ar_name"
                    label="الاسم العربي"
                    :rules="vld_minlingth.concat(isunique)"
                    @blur="
                      checkExicting({
                        ar_name: product.ar_name,
                        flag: 'checkproducts',
                      })
                    "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.en_name"
                    label="الاسم الانجليزي"
                    :rules="vld_minlingth.concat(isunique)"
                    @blur="
                      checkExicting({
                        en_name: product.en_name,
                        flag: 'checkproducts',
                      })
                    "
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    autocomplete="off"
                    append-icon="mdi-alpha-g-circle"
                    @click:append="toggleMarker(12, 'serial number')"
                    v-model="product.serial_number"
                    label=" الرقم التسلسلي (اضغط على G لتوليد رقم عشوائي)"
                    :rules="vld_minlingth.concat(isunique)"
                    @blur="
                      checkExicting({
                        barcode: product.barcode,
                        flag: 'checkproducts',
                      })
                    "
                  ></v-text-field>
                </v-col>

                <v-col cols="12" lg="6">
                  <v-autocomplete
                    v-model="selectedGroups"
                    :disabled="isUpdating"
                    :items="units"
                    item-text="name"
                    item-value="name"
                    :rules="vld_minlingth_one"
                    label="مجموعات الصنف"
                    multiple
                    @change="unitsadded()"
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        close
                        @click="data.select"
                        @click:close="
                          removeSelectedItem(selectedGroups, data.item.name)
                        "
                        >{{ data.item.name }}</v-chip
                      >
                    </template>
                    <template v-slot:item="data">
                      <template v-if="typeof data.item !== 'object'">
                        <v-list-item-content
                          v-text="data.item"
                        ></v-list-item-content>
                      </template>
                      <template v-else>
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="data.item.name"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </template>
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-autocomplete
                    v-model="product.selectedGroups"
                    :disabled="isUpdating"
                    :items="groups"
                    item-text="name"
                    item-value="name"
                    :rules="vld_minlingth_one"
                    label=" مجموعات الدواء اختيار متعدد  "
                    multiple
                    @change="testadded()"
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        close
                        @click="data.select"
                        @click:close="
                          removeSelectedItem(
                            product.selectedGroups,
                            data.item.name
                          )
                        "
                        >{{ data.item.name }}</v-chip
                      >
                    </template>
                    <template v-slot:item="data">
                      <template v-if="typeof data.item !== 'object'">
                        <v-list-item-content
                          v-text="data.item"
                        ></v-list-item-content>
                      </template>
                      <template v-else>
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="data.item.name"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </template>
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-autocomplete
                    v-model="product.selectedForms"
                    :disabled="isUpdating"
                    :items="forms"
                    item-text="name"
                    item-value="name"
                    :rules="vld_minlingth_one"
                    label=" الشكل الدوائي الدواء اختيار متعدد  "
                    multiple
                    @change="addForm()"
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        close
                        @click="data.select"
                        @click:close="
                          removeSelectedItem(
                            product.selectedForms,
                            data.item.name
                          )
                        "
                        >{{ data.item.name }}</v-chip
                      >
                    </template>
                    <template v-slot:item="data">
                      <template v-if="typeof data.item !== 'object'">
                        <v-list-item-content
                          v-text="data.item"
                        ></v-list-item-content>
                      </template>
                      <template v-else>
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="data.item.name"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </template>
                  </v-autocomplete>
                </v-col>

                <v-col cols="12" lg="6">
                  <v-autocomplete
                    label="الضريبة"
                    v-model="product.taxID"
                    :items="taxs"
                    item-text="name"
                    item-value="id"
                    :rules="vld_minlingth"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12">
                  <v-row>
                    <v-col>
                      <v-autocomplete
                        :rules="vld_minlingth"
                        label=" الوحدة الأساسية"
                        v-model="product.unitID"
                        :items="taxs"
                        item-text="name"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>
                    <v-col>
                      <v-text-field
                        autocomplete="off"
                        append-icon="mdi-alpha-g-circle"
                        @click:append="toggleMarker(12, 'barcode')"
                        v-model="product.barcode"
                        label="الباركود"
                        :rules="vld_minlingth.concat(isunique)"
                        @blur="
                          checkExicting({
                            barcode: product.barcode,
                            flag: 'checkproducts',
                          })
                        "
                      ></v-text-field>
                      <v-dialog v-model="printing_dialog" max-width="50%">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="pink"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                            >طباعة الباركود</v-btn
                          >
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="red--text">طباعة الباركود </span>
                          </v-card-title>
                          <v-card-text id>
                            <div id="printableArea">
                              حدد عدد الباركودات التي تريد طباعتها
                              <v-text-field
                                autocomplete="off"
                                v-model.number="barcodeQuan"
                                :rules="vld_numbering"
                                outlined
                                value="1"
                              ></v-text-field>
                            </div>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                              color=" darken-1"
                              text
                              @click="printing_dialog = false"
                              >إغلاق</v-btn
                            >

                            <v-btn color="primary" @click="printing">
                              <v-icon class="white--text">mdi-printer</v-icon>
                              طباعة</v-btn
                            >
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" align="right">
                  <label for="">الوحدات الإضافية</label>
                </v-col>
                <v-col cols="12" align="right">
                  <v-row>
                    <v-data-table
                      hide-default-footer
                      :headers="extra_units_headers"
                      :items="product.extra_units"
                      style="width: 95%"
                    >
                    </v-data-table>
                  </v-row>
                  <v-btn color="pink" dark class="mb-2" v-bind="attrs" v-on="on"
                    >إضافة وحدة</v-btn
                  >
                </v-col>

                <v-col cols="12">
                  <v-row>
                    <v-col cols="12" lg="6">
                      <v-textarea
                        autocomplete="off"
                        v-model="product.description"
                        label="الوصف"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <v-col
                        class="d-flex flex-column align-center justify-center"
                        cols="5"
                      >
                        <div
                          style="
                            position: relative;
                            width: 200px;
                            height: 150px;
                          "
                        >
                          <img
                            style="
                              position: absolute;
                              top: 0;
                              left: 0;
                              max-width: 200px;
                              max-height: 150px;
                              border-radius: 10px;
                              border: 1px solid #eee;
                            "
                            src="images/no-image.png"
                            alt="NO Image"
                          />
                          <div
                            style="
                              position: absolute;
                              width: 24px;
                              height: 27px;
                              background: white;
                              bottom: 0;
                              right: 0;
                            "
                          >
                            <v-icon> mdi-close </v-icon>
                          </div>
                        </div>

                        <div style="margin: 10px auto">
                          <input
                            type="file"
                            name=""
                            :id="index"
                            accept="image/png, image/jpeg"
                            ref="imageRef"
                            @change="fileinfo($event, item)"
                          />
                        </div>
                      </v-col>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" lg="4">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.min_alert"
                    label="حد التنبيه الأدني"
                    :rules="vld_numbering"
                    value="0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="4">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.min_alert"
                    label="حد التنبيه الأعلى"
                    :rules="vld_numbering"
                    value="0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="4">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.min_alert"
                    label="فترة الركود بالأيام"
                    :rules="vld_numbering"
                    value="0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="12">
                  <v-divider></v-divider>
                </v-col>

                <v-col cols="12" lg="12">
                  <v-checkbox
                    class
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="المنتج مخزون"
                    @change="selling_priceaccount(item)"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-checkbox
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="قابل للبيع"
                    @change="selling_priceaccount(item)"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-checkbox
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="قابل للشراء"
                    @change="selling_priceaccount(item)"
                  ></v-checkbox>
                </v-col>

                <v-col cols="12" lg="12">
                  <v-row>
                    <v-col>
                      <v-row>
                        <v-col>
                          <v-text-field
                            autocomplete="off"
                            v-model="product.country"
                            label="سعر البيع"
                          ></v-text-field>
                        </v-col>

                        <v-col>
                          <v-text-field
                            autocomplete="off"
                            v-model="product.country"
                            label="حساب المبيعات"
                          ></v-text-field
                        ></v-col>
                      </v-row>
                    </v-col>
                    <v-col>
                      <v-row>
                        <v-col>
                          <v-text-field
                            autocomplete="off"
                            v-model="product.country"
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
                <v-col cols="12" lg="6">
                  <v-checkbox
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="قابل للاسترجاع بعد البيع"
                    @change="selling_priceaccount(item)"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-checkbox
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="هذا الصنف مجاني"
                    @change="selling_priceaccount(item)"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-checkbox
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="لديه بونص"
                    @change="selling_priceaccount(item)"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-checkbox
                    style="
                      white-space: nowrap;
                      margin-left: 5px;
                      margin-right: 5px;
                    "
                    color="#e91e63"
                    label="لديه تاريخ انتهاء"
                    @change="selling_priceaccount(item)"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.country"
                    label="بلد الصنع"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" lg="6">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.brand_name"
                    label="الاسم العلمي"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" lg="6">
                  <v-text-field
                    autocomplete="off"
                    v-model="product.side_effect"
                    label="التأثيرات الجانبية"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
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
              type="submit"
              color="text--white"
              text
              @click="save(product)"
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
import { mapActions } from "vuex";

export default {
  props: ["editedproduct"],
  components: {},
  data() {
    return {
      /*-----------------------TAXs---------------------------*/
      taxs: [],

      /*-----------------------extra units---------------------------*/
      extra_units_headers: [
        {
          text: "اسم الوحدة",
          align: "center",
          sortable: false,
          value: "unit_ar_name",
        },
        {
          text: "",
          align: "center",
          sortable: false,
          value: "unit_en_name",
        },
        {
          text: "عدد",
          align: "center",
          sortable: false,
          value: "unit_quantity",
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
          value: "unit_bought_price",
        },
        {
          text: "سعر البيع",
          align: "center",
          sortable: false,
          value: "unit_sold_price",
        },
        {
          text: "الباركود",
          align: "center",
          sortable: false,
          value: "unit_barcode",
        },
        { text: "actions ", align: "center", value: "actions" },
      ],

      /*-----------------------units---------------------------*/
      units: [],

      /*-----------------------groups---------------------------*/
      groups: [],

      /*-----------------------groups---------------------------*/
      forms: [],

      /*-------------------validators---------------------------*/
      vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
      vld_minlingth: [(v) => v.length >= 2 || "أدخل قيمة"],
      isunique: [],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],

      /*-----------------------product---------------------------*/
      product: {
        serial_number: "",
        returnable: "1",
        selectedForms: [],
        groups: [],
        selectedGroups: [],
        name: "",
        barcode: "",
        brand_name: "",
        arabic_name: "",
        selling_discount: 0,
        extra_units: [{}],

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
      text: "تم إضافة الصنف بنجاح",
      timeout: 2000,
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
    formTitle() {
      return this.editedIndex === -1 ? "إضافة صنف جديد" : "تعديل البيانات";
    },
  },
  mounted() {},
  created() {
    this.getGroups();
    this.getUnits();
    this.getForms();

    if (this.$route.params.id) {
      console.log("mmmmkkmkmkmkkm");
      console.log(this.editedproduct);
      delete this.editedproduct.printing_dialog;
      this.product = this.editedproduct;
      for (var i = 0; i < this.product.selectedGroups.length; i++) {
        this.selectedGroups.push(this.product.selectedGroups[i]["name"]);
        // this.selectedGroups.push(
        //   this.this.product.selectedGroups.filter(
        //     (p) => p.id == this.product.selectedGroups[i]["unit_id"]
        //   )[0]["name"]
        // );
      }

      this.title = "تعديل بيانات الصنف";
      this.editedIndex = 1;

      console.log(this.title);
      console.log(this.product);
    }
  },
  createdl() {
    if (this.$route.params.id) {
      this.title = "تعديل بيانات الصنف";
      this.editedIndex = 1;

      this.product = this.product = JSON.parse(JSON.stringify(med_rug));
      for (var i = 0; i < this.product.selectedGroups.length; i++) {
        this.selectedGroups.push(
          this.selectedGroups.filter(
            (p) => p.id == this.product.selectedGroups[i]["unit_id"]
          )[0]["name"]
        );
      }
      console.log(this.selectedGroups);

      console.log(this.product.selectedGroups);
      console.log(this.selectedGroups);
    }
  },

  methods: {
    add_extra_unit() {},

    toggleMarker(length, type) {
      if (type == "serial number")
        this.product.serial_number = this.generate(12);
      //this.marker = !this.marker;
      if (type == "barcode") this.product.barcode = this.generate(12);
    },
    printDiv() {
      var printContents = bill.getElementById("printableArea").innerHTML;
      var originalContents = bill.body.innerHTML;

      bill.body.innerHTML = printContents;

      window.print();

      bill.body.innerHTML = originalContents;
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
    getGroups() {
      axios
        .post("router.php", {
          flag: "getdruggroups",
          filename: "product-groups",
        })
        .then((response) => {
          this.groups = response.data;
          console.log(this.groups);
        });
    },
    getForms() {
      axios
        .post("router.php", {
          flag: "getdrugforms",
          filename: "product-forms",
        })
        .then((response) => {
          this.forms = response.data;
          console.log(this.groups);
        });
    },
    getUnits() {
      axios
        .post("router.php", {
          flag: "getdrugunits",
          filename: "product-units",
        })
        .then((response) => {
          this.units = response.data;
        });
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
    checkExicting(item) {
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

    removeSelectedItem(ArrayOfItems, item) {
      const index = ArrayOfItems.indexOf(item);
      ArrayOfItems.splice(index, 1);
      if (this.selectedGroups == ArrayOfItems) {
        this.product.selectedGroups.splice(index, 1);
      }
    },

    removeuni(item) {
      const index = this.selectedGroups.indexOf(item.name);

      if (index >= 0) {
        this.selectedGroups.splice(index, 1);
        this.product.selectedGroups.splice(index, 1);
      }
      if (index == 0) {
        this.product.selectedGroups.push({
          unit_id: "empty",
          ordering_number: "0",
          contains: "1",
          cost: "0",
        });
      }
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
    save(item) {
      item.flag = "addproducts";
      item.filename = "products";

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
</style>
