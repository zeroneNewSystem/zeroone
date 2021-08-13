"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_products_product_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Product */ "./resources/js/apis/Product.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["editedproduct"],
  components: {},
  data: function data() {
    return {
      /*-----------------------taxes---------------------------*/
      taxes: [],

      /*-----------------------extra units---------------------------*/
      extra_units_headers: [{
        text: " الأساسية",
        align: "center",
        sortable: false,
        value: "main_unit"
      }, {
        text: " الوحدة",
        align: "center",
        sortable: false,
        value: "ar_name"
      }, {
        text: "تساوي",
        align: "center",
        sortable: false,
        value: "equals"
      }, {
        text: "عدد",
        align: "center",
        sortable: false,
        value: "contains"
      }, {
        text: "من الوحدة",
        align: "center",
        sortable: false,
        value: "from_unit"
      }, {
        text: "سعر الشراء",
        align: "center",
        sortable: false,
        value: "purchase_price"
      }, {
        text: "سعر البيع",
        align: "center",
        sortable: false,
        value: "sale_price"
      }, {
        text: "الباركود",
        align: "center",
        sortable: false,
        value: "barcode"
      }, {
        text: "actions ",
        align: "center",
        value: "actions"
      }],

      /*-----------------------units---------------------------*/
      prdct_units: [{
        main_unit: "2",
        ar_name: "salam",
        en_name: "kk",
        contains: 1,
        from_unit: "salam",
        purchase_price: "20",
        sale_price: "25",
        barcode: "129101101"
      }],

      /*-----------------------groups---------------------------*/
      prdct_groups: [],

      /*-----------------------forms---------------------------*/
      prdct_forms: [],

      /*-----------------------types---------------------------*/
      prdct_types: [],

      /*-------------------validators---------------------------*/
      vld_minlingth_one: [function (v) {
        return v.length >= 1 || "أدخل قيمة";
      }],
      required: [function (value) {
        return !!value || "الحقل مطلوب.";
      }],
      isunique: [],
      vld_numbering: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],

      /*-----------------------product---------------------------*/
      product: {
        company_id: "",
        serial_number: "",
        ar_name: "",
        en_name: "",
        prdct_units: [{
          main_unit: "main_unit",
          ar_name: "",
          en_name: "",
          contains: 1,
          from_unit: "",
          purchase_price: "",
          sale_price: "",
          barcode: ""
        }],
        prdct_form_id: "",
        prdct_type_id: "",
        main_sales_unit_id: "",
        main_purchase_unit_id: "",
        product_cogs_account_id: "",
        product_sales_account_id: "",
        sales_discount: "",
        sales_discount_type_id: "",
        purchase_discount: "",
        purchase_tax_id: "",
        sales_tax_id: "",
        min_alert: "",
        max_alert: "",
        stagnation_period: "",
        opening_balance_quantity: "",
        opening_balance_cost: "",
        profit_ratio: "",
        side_effect: "",
        description: "",
        inventory_id: "",
        imgae: "",
        distribution_policy_id: "",
        is_free: false,
        is_bonus: false,
        is_active: true,
        is_avilable_in_POS: true,
        is_sellable: true,
        is_purchasable: true,
        is_returnable: true,
        is_storable: true,
        has_expiration_date: true
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
      selectedGroups: []
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "إضافة صنف جديد" : "تعديل البيانات";
    }
  },
  mounted: function mounted() {},
  created: function created() {
    var _this = this;

    _apis_Product__WEBPACK_IMPORTED_MODULE_1__.default.getCreate().then(function (response) {
      _this.prdct_forms = response.data.prdct_forms;
      _this.prdct_groups = response.data.prdct_groups;
      _this.prdct_units = response.data.prdct_units;
      _this.prdct_types = response.data.prdct_types;
      _this.taxes = response.data.taxes;
    })["catch"](function (errors) {
      _this.errors = errors.response.data.errors;
      console.log(errors.response.data);
    })["finally"]();
  },
  methods: {
    deleteItem: function deleteItem(item) {
      var index = this.product.prdct_units.indexOf(item);
      this.product.prdct_units.splice(index, 1);
      if (this.product.prdct_units.length == 0) this.product.prdct_units.push({
        main_unit: "main_unit",
        ar_name: "",
        en_name: "",
        contains: 1,
        from_unit: "",
        purchase_price: "",
        sale_price: "",
        barcode: ""
      });

      if (item.main_unit == "main_unit") {
        this.product.prdct_units[0].main_unit = "main_unit";
      }
    },
    uncheckAnotherRadioButtons: function uncheckAnotherRadioButtons(item) {
      //alert('sdsdsd')
      this.product.prdct_units.forEach(function (element) {
        console.log(element);
        element.main_unit = "";
      });
      item.main_unit = "main_unit";
    },
    printUnitObjects: function printUnitObjects() {
      console.log(this.product.prdct_units);
    },
    add_extra_unit: function add_extra_unit() {},
    addUnit: function addUnit() {
      this.product.prdct_units.push({
        main_unit: "2",
        ar_name: "salam",
        en_name: "kk",
        contains: 1,
        from_unit: "salam",
        purchase_price: "12",
        sale_price: "25",
        barcode: "129101101"
      });
    },
    toggleMarker: function toggleMarker(length, type) {
      if (type == "serial number") this.product.serial_number = this.generate(12); //this.marker = !this.marker;

      if (type == "barcode") this.product.barcode = this.generate(12);
    },
    printDiv: function printDiv() {
      var printContents = document.getElementById("printableArea").innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    },
    printing: function printing() {
      JsBarcode("#barcode", this.product.barcode, {
        //format: "pharmacode",
        //lineColor: "#0aa",
        //width: 2,
        //height: 50,
        displayValue: true
      });
      window.print();
    },
    generate: function generate(n) {
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
    setdrugname: function setdrugname(item) {
      console.log(item);
      this.product.name = item;
    },
    querySelections: function querySelections(v) {
      var _this2 = this;

      if (v.length > 2) {
        this.product.name = v;
        this.loading = true; // Simulated ajax query ajax

        axios__WEBPACK_IMPORTED_MODULE_0___default().post("router.php", {
          name: v,
          flag: "checkproducts",
          filename: "products"
        }).then(function (response) {
          console.log(response.data);
          if (response.data.length !== 0) _this2.items = response.data;
          _this2.loading = false;
        });
      }
    },
    additemtoinvoices: function additemtoinvoices() {
      console.log("local = ", this.found_drug);
    },
    itemtext: function itemtext(item) {
      return item.name + "-" + item.id;
    },
    addForm: function addForm() {
      console.log(this.product.categories);
    },
    testadded: function testadded() {
      console.log(this.product.categories);
    },
    unitsetting: function unitsetting(items) {},
    checknameExecting: function checknameExecting(item) {
      var _this3 = this;

      console.log("hi"); // Find if the array contains an object by comparing the property value

      if (item.length > 2) {
        this.loading = true; // Simulated ajax query ajax

        axios__WEBPACK_IMPORTED_MODULE_0___default().post("router.php", {
          name: item,
          flag: "checkproducts",
          filename: "products"
        }).then(function (response) {
          console.log(response.data);
          if (response.data.length !== 0) _this3.isunique = [ false || "الصنف موجود مسبقا"];else _this3.isunique = [true];
          _this3.loading = false;
        });
      }
    },
    checkExecting: function checkExecting(item) {
      var _this4 = this;

      console.log(this.product); // Find if the array contains an object by comparing the property value

      if (Object.keys(item)[0].length > 2) {
        this.loading = true;
        item.filename = "products"; // Simulated ajax query ajax

        axios__WEBPACK_IMPORTED_MODULE_0___default().post("router.php", item).then(function (response) {
          console.log(response.data);
          if (response.data !== 0) _this4.isunique = [ false || "الصنف موجود مسبقا"];else _this4.isunique = [true];
          _this4.loading = false;
        });
      }
    },
    mathopertion: function mathopertion() {
      this.product.currentQuan = eval(this.product.currentQuan);
    },
    initializeformproduct: function initializeformproduct() {
      var _JSON$stringify;

      this.selectedGroups = [];
      this.product = this.product = JSON.parse(JSON.stringify((_JSON$stringify = {
        returnable: "1",
        selectedForms: [],
        selectedGroups: []
      }, _defineProperty(_JSON$stringify, "selectedGroups", []), _defineProperty(_JSON$stringify, "name", ""), _defineProperty(_JSON$stringify, "barcode", ""), _defineProperty(_JSON$stringify, "brand_name", ""), _defineProperty(_JSON$stringify, "arabic_name", ""), _defineProperty(_JSON$stringify, "selling_discount", 0), _defineProperty(_JSON$stringify, "img_link", ""), _defineProperty(_JSON$stringify, "country", ""), _defineProperty(_JSON$stringify, "tax", "0"), _defineProperty(_JSON$stringify, "side_effect", ""), _defineProperty(_JSON$stringify, "description", ""), _defineProperty(_JSON$stringify, "alert_quantity", 0), _defineProperty(_JSON$stringify, "selling_price", 0), _defineProperty(_JSON$stringify, "purchasingprice", 0), _defineProperty(_JSON$stringify, "store_id", ""), _defineProperty(_JSON$stringify, "company", ""), _defineProperty(_JSON$stringify, "alternative", ""), _defineProperty(_JSON$stringify, "profitRatio", 0), _defineProperty(_JSON$stringify, "user_id", ""), _JSON$stringify)));
    },
    unitsadded: function unitsadded(item) {
      console.log(item);
      this.product.selectedGroups.push({
        name: this.selectedGroups[this.selectedGroups.length - 1],
        ordering_number: this.selectedGroups.length - 1,
        contains: "1",
        cost: "0"
      });
      console.log(this.product.selectedGroups);
    },
    setproduction_date: function setproduction_date() {
      this.product.production_date = this.date;
    },
    setexpired_date: function setexpired_date() {
      this.product.expired = this.date;
    },
    saveunits: function saveunits() {
      this.dialog = false;
    },
    savenewdrug: function savenewdrug() {
      this.add_products(this.product);
    },
    update_drug: function update_drug() {},
    close: function close() {
      var _this5 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this5.editedItem = Object.assign({}, _this5.defaultItem);
        _this5.editedIndex = -1;
      });
    },
    save: function save(item) {
      var _this6 = this;

      item.flag = "addproducts";
      item.filename = "products";

      if (this.$refs.form.validate()) {
        axios__WEBPACK_IMPORTED_MODULE_0___default().post("router.php", item).then(function (response) {
          _this6.snackbar = true;
          console.log(response.data);
          _this6.loading = false;

          _this6.initializeformproduct();

          console.log(_this6.initializeformproduct());
          console.log("nibtsas");

          _this6.$refs.form.resetValidation();
        });
      }
    },
    update: function update(item) {
      console.log(item);
      item.flag = "updateproducts";
      item.filename = "products";
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("router.php", item).then(function (response) {
        console.log(response.data);
      }); //this.update_products(item);
    }
  },
  watch: {
    search: function search(val) {
      val && val !== this.found_drug && this.querySelections(val);
    },
    date: function date(val) {
      this.dateFormatted = this.date;
    },
    isUpdating: function isUpdating(val) {
      var _this7 = this;

      if (val) {
        setTimeout(function () {
          return _this7.isUpdating = false;
        }, 3000);
      }
    }
  },
  destroyed: function destroyed() {
    this.selectedGroups = [];
  }
});

/***/ }),

/***/ "./resources/js/apis/Api.js":
/*!**********************************!*\
  !*** ./resources/js/apis/Api.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var getUrl = window.location;
var Api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: getUrl.protocol + "//" + getUrl.host + "/api",
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': localStorage.getItem('token') || 'ar'
  }
});
Api.interceptors.request.use(function (config) {
  var token = localStorage.getItem('token');
  config.headers.Authorization = token ? "Bearer ".concat(token) : '';
  return config;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

/***/ "./resources/js/apis/Product.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Product.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getCreate: function getCreate() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/products/create");
  },
  postCreate: function postCreate(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/products/create", product);
  }
});

/***/ }),

/***/ "./resources/js/components/main/products/product.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/main/products/product.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _product_vue_vue_type_template_id_f4c542c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=f4c542c2& */ "./resources/js/components/main/products/product.vue?vue&type=template&id=f4c542c2&");
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ "./resources/js/components/main/products/product.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _product_vue_vue_type_template_id_f4c542c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _product_vue_vue_type_template_id_f4c542c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/products/product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/products/product.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/main/products/product.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/products/product.vue?vue&type=template&id=f4c542c2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/main/products/product.vue?vue&type=template&id=f4c542c2& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_f4c542c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_f4c542c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_f4c542c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product.vue?vue&type=template&id=f4c542c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=template&id=f4c542c2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=template&id=f4c542c2&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=template&id=f4c542c2& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._l(_vm.barcodeQuan, function(elem) {
        return _c("svg", {
          key: elem,
          staticClass: "printclass",
          attrs: { id: "barcode" }
        })
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "noPrint" },
        [
          _c(
            "v-snackbar",
            {
              attrs: {
                timeout: _vm.snackbarTimeout,
                color: "#e91e63",
                centered: "",
                transition: "scale-transition",
                vertical: ""
              },
              model: {
                value: _vm.snackbar,
                callback: function($$v) {
                  _vm.snackbar = $$v
                },
                expression: "snackbar"
              }
            },
            [_vm._v(_vm._s(_vm.snakebarText))]
          ),
          _vm._v(" "),
          _c("v-container", [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12 fatura" }, [
                _c(
                  "div",
                  { staticClass: "column" },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-info m-b-5 m-r-2",
                        attrs: { href: "#" }
                      },
                      [
                        _c(
                          "v-icon",
                          {
                            staticClass: "white--text",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.getid.apply(null, arguments)
                              }
                            }
                          },
                          [_vm._v("mdi-plus-box")]
                        ),
                        _vm._v("إدارة الأدوية\n            ")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-info m-b-5 m-r-2",
                        attrs: { to: "/invoicemanagement" }
                      },
                      [
                        _c("v-icon", { staticClass: "white--text" }, [
                          _vm._v("mdi-view-module")
                        ]),
                        _vm._v("إدارة\n              المشتريات\n            ")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-info m-b-5 m-r-2",
                        on: { click: function($event) {} }
                      },
                      [
                        _c("v-icon", { staticClass: "white--text" }, [
                          _vm._v("mdi-floppy")
                        ]),
                        _vm._v("إدارة الحسابات\n            ")
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-form",
            {
              ref: "form",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                }
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    [
                      _c("span", [_vm._v(_vm._s(_vm.formTitle))]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "6" } },
                        [
                          _c("v-checkbox", {
                            staticStyle: {
                              "white-space": "nowrap",
                              "margin-left": "5px",
                              "margin-right": "5px"
                            },
                            attrs: {
                              color: "#e91e63",
                              label: "إيقاف التعامل بالمنتج"
                            },
                            on: {
                              change: function($event) {
                                return _vm.selling_priceaccount(_vm.item)
                              }
                            },
                            model: {
                              value: _vm.product.is_active,
                              callback: function($$v) {
                                _vm.$set(_vm.product, "is_active", $$v)
                              },
                              expression: "product.is_active"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      label: "الاسم العربي",
                                      rules: _vm.required.concat(_vm.isunique)
                                    },
                                    on: {
                                      blur: function($event) {
                                        return _vm.checkExecting({
                                          ar_name: _vm.product.ar_name,
                                          flag: "checkproducts"
                                        })
                                      }
                                    },
                                    model: {
                                      value: _vm.product.ar_name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.product, "ar_name", $$v)
                                      },
                                      expression: "product.ar_name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      label: "الاسم الانجليزي",
                                      rules: _vm.required.concat(_vm.isunique)
                                    },
                                    on: {
                                      blur: function($event) {
                                        return _vm.checkExecting({
                                          en_name: _vm.product.en_name,
                                          flag: "checkproducts"
                                        })
                                      }
                                    },
                                    model: {
                                      value: _vm.product.en_name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.product, "en_name", $$v)
                                      },
                                      expression: "product.en_name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      "append-icon": "mdi-alpha-g-circle",
                                      label:
                                        " الرقم التسلسلي (اضغط على G لتوليد رقم عشوائي)",
                                      rules: _vm.required.concat(_vm.isunique)
                                    },
                                    on: {
                                      "click:append": function($event) {
                                        return _vm.toggleMarker(
                                          12,
                                          "serial number"
                                        )
                                      },
                                      blur: function($event) {
                                        return _vm.checkExecting({
                                          barcode: _vm.product.barcode,
                                          flag: "checkproducts"
                                        })
                                      }
                                    },
                                    model: {
                                      value: _vm.product.serial_number,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.product,
                                          "serial_number",
                                          $$v
                                        )
                                      },
                                      expression: "product.serial_number"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      disabled: _vm.isUpdating,
                                      items: _vm.prdct_groups,
                                      "item-text": "ar_name",
                                      "item-value": "id",
                                      rules: _vm.vld_minlingth_one,
                                      label: "مجموعات الصنف",
                                      multiple: ""
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.unitsadded()
                                      }
                                    },
                                    model: {
                                      value: _vm.product.groupIDs,
                                      callback: function($$v) {
                                        _vm.$set(_vm.product, "groupIDs", $$v)
                                      },
                                      expression: "product.groupIDs"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      label: "نوع الصنف",
                                      items: _vm.prdct_types,
                                      "item-text": "ar_name",
                                      "item-value": "id",
                                      rules: _vm.required
                                    },
                                    model: {
                                      value: _vm.product.prdct_type_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.product,
                                          "prdct_type_id",
                                          $$v
                                        )
                                      },
                                      expression: "product.prdct_type_id"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      disabled: _vm.isUpdating,
                                      items: _vm.prdct_forms,
                                      "item-text": "ar_name",
                                      "item-value": "id",
                                      rules: _vm.vld_minlingth_one,
                                      label:
                                        " الشكل الدوائي الدواء اختيار متعدد  "
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.addForm()
                                      }
                                    },
                                    model: {
                                      value: _vm.product.prdct_form_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.product,
                                          "prdct_form_id",
                                          $$v
                                        )
                                      },
                                      expression: "product.prdct_form_id"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      label: "الضريبة",
                                      items: _vm.taxes,
                                      "item-text": function(item) {
                                        return (
                                          item.ar_name +
                                          " " +
                                          item.percentage +
                                          "%"
                                        )
                                      },
                                      "item-value": "id",
                                      rules: _vm.required
                                    },
                                    model: {
                                      value: _vm.product.taxID,
                                      callback: function($$v) {
                                        _vm.$set(_vm.product, "taxID", $$v)
                                      },
                                      expression: "product.taxID"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", align: "right" } },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v(
                                      " وحدات الصنف مرتبة من الأصغر للأعلى"
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", align: "right" } },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-data-table", {
                                        staticStyle: { width: "95%" },
                                        attrs: {
                                          "hide-default-footer": "",
                                          headers: _vm.extra_units_headers,
                                          items: _vm.product.prdct_units
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "item.main_unit",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return [
                                                _c(
                                                  "v-radio-group",
                                                  {
                                                    on: {
                                                      change: function($event) {
                                                        return _vm.uncheckAnotherRadioButtons(
                                                          item
                                                        )
                                                      }
                                                    },
                                                    model: {
                                                      value: item.main_unit,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          item,
                                                          "main_unit",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "item.main_unit"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticStyle: {
                                                          "font-size": "18px",
                                                          "padding-right":
                                                            "20px",
                                                          "padding-bottom":
                                                            "23px"
                                                        }
                                                      },
                                                      [
                                                        _c("v-radio", {
                                                          attrs: {
                                                            value: "main_unit"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                )
                                              ]
                                            }
                                          },
                                          {
                                            key: "item.equals",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return [
                                                _c(
                                                  "div",
                                                  {
                                                    staticStyle: {
                                                      "font-size": "18px",
                                                      "padding-bottom": "23px"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                        =\n                      "
                                                    )
                                                  ]
                                                )
                                              ]
                                            }
                                          },
                                          {
                                            key: "item.ar_name",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return [
                                                _c("v-autocomplete", {
                                                  attrs: {
                                                    outlined: "",
                                                    items: _vm.prdct_units,
                                                    "item-text": "ar_name",
                                                    "return-object": "",
                                                    "append-icon": "",
                                                    rules: _vm.required
                                                  },
                                                  on: {
                                                    change: _vm.printUnitObjects
                                                  },
                                                  model: {
                                                    value: item.ar_name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "ar_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "item.ar_name"
                                                  }
                                                })
                                              ]
                                            }
                                          },
                                          {
                                            key: "item.from_unit",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    disabled: "",
                                                    outlined: "",
                                                    rules: _vm.required
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.product.prdct_units[0]
                                                        .ar_name.ar_name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.product
                                                          .prdct_units[0]
                                                          .ar_name,
                                                        "ar_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "product.prdct_units[0].ar_name.ar_name"
                                                  }
                                                })
                                              ]
                                            }
                                          },
                                          {
                                            key: "item.contains",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    outlined: "",
                                                    disabled:
                                                      _vm.product.prdct_units.indexOf(
                                                        item
                                                      ) == 0,
                                                    rules: _vm.required
                                                  },
                                                  model: {
                                                    value: item.contains,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "contains",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "item.contains"
                                                  }
                                                })
                                              ]
                                            }
                                          },
                                          {
                                            key: "item.purchase_price",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    outlined: "",
                                                    rules: _vm.required
                                                  },
                                                  model: {
                                                    value: item.purchase_price,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "purchase_price",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "item.purchase_price"
                                                  }
                                                })
                                              ]
                                            }
                                          },
                                          {
                                            key: "item.sale_price",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    outlined: "",
                                                    rules: _vm.required
                                                  },
                                                  model: {
                                                    value: item.sale_price,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "sale_price",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "item.sale_price"
                                                  }
                                                })
                                              ]
                                            }
                                          },
                                          {
                                            key: "item.barcode",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    outlined: "",
                                                    rules: _vm.required
                                                  },
                                                  model: {
                                                    value: item.barcode,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "barcode",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "item.barcode"
                                                  }
                                                })
                                              ]
                                            }
                                          },
                                          {
                                            key: "item.actions",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    staticStyle: {
                                                      "margin-bottom": "20px"
                                                    },
                                                    attrs: {
                                                      color: "red",
                                                      small: ""
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.deleteItem(
                                                          item
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("mdi-delete")]
                                                )
                                              ]
                                            }
                                          },
                                          {
                                            key: "footer",
                                            fn: function() {
                                              return [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass: "mb-2",
                                                    attrs: {
                                                      color: "pink",
                                                      dark: ""
                                                    },
                                                    on: { click: _vm.addUnit }
                                                  },
                                                  [_vm._v("إضافة وحدة")]
                                                )
                                              ]
                                            },
                                            proxy: true
                                          }
                                        ])
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _c("v-textarea", {
                                            attrs: {
                                              autocomplete: "off",
                                              label: "الوصف"
                                            },
                                            model: {
                                              value: _vm.product.description,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.product,
                                                  "description",
                                                  $$v
                                                )
                                              },
                                              expression: "product.description"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              staticClass:
                                                "d-flex flex-column align-center justify-center",
                                              attrs: { cols: "5" }
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticStyle: {
                                                    position: "relative",
                                                    width: "200px",
                                                    height: "150px"
                                                  }
                                                },
                                                [
                                                  _c("img", {
                                                    staticStyle: {
                                                      position: "absolute",
                                                      top: "0",
                                                      left: "0",
                                                      "max-width": "200px",
                                                      "max-height": "150px",
                                                      "border-radius": "10px",
                                                      border: "1px solid #eee"
                                                    },
                                                    attrs: {
                                                      src: _vm.product.imageURL,
                                                      alt: "NO Image"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticStyle: {
                                                        position: "absolute",
                                                        width: "24px",
                                                        height: "27px",
                                                        background: "white",
                                                        bottom: "0",
                                                        right: "0"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "show",
                                                              rawName: "v-show",
                                                              value:
                                                                _vm.item
                                                                  .imageURL !=
                                                                  "" &&
                                                                _vm.item
                                                                  .imageURL !=
                                                                  "no-image.png",
                                                              expression:
                                                                "\n                              item.imageURL != '' &&\n                              item.imageURL != 'no-image.png'\n                            "
                                                            }
                                                          ],
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.removeImage(
                                                                _vm.item,
                                                                _vm.index
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                            mdi-close\n                          "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticStyle: {
                                                    margin: "10px auto"
                                                  }
                                                },
                                                [
                                                  _c("input", {
                                                    ref: "imageRef",
                                                    attrs: {
                                                      type: "file",
                                                      name: "",
                                                      id: _vm.index,
                                                      accept:
                                                        "image/png, image/jpeg"
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        return _vm.fileinfo(
                                                          $event,
                                                          _vm.item
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      label: "حد التنبيه الأدني",
                                      rules: _vm.vld_numbering,
                                      value: "0"
                                    },
                                    model: {
                                      value: _vm.product.min_alert,
                                      callback: function($$v) {
                                        _vm.$set(_vm.product, "min_alert", $$v)
                                      },
                                      expression: "product.min_alert"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      label: "حد التنبيه الأعلى",
                                      rules: _vm.vld_numbering,
                                      value: "0"
                                    },
                                    model: {
                                      value: _vm.product.max_alert,
                                      callback: function($$v) {
                                        _vm.$set(_vm.product, "max_alert", $$v)
                                      },
                                      expression: "product.max_alert"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      label: "فترة الركود بالأيام",
                                      rules: _vm.vld_numbering,
                                      value: "0"
                                    },
                                    model: {
                                      value: _vm.product.stagnation_period,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.product,
                                          "stagnation_period",
                                          $$v
                                        )
                                      },
                                      expression: "product.stagnation_period"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "12" } },
                                [_c("v-divider")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "12" } },
                                [
                                  _c("v-checkbox", {
                                    staticStyle: {
                                      "white-space": "nowrap",
                                      "margin-left": "5px",
                                      "margin-right": "5px"
                                    },
                                    attrs: {
                                      color: "#e91e63",
                                      label: "المنتج مخزون"
                                    },
                                    on: {
                                      change: function($event) {
                                        _vm.product.is_sellable = _vm.product.is_purchasable = true
                                      }
                                    },
                                    model: {
                                      value: _vm.product.is_storable,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.product,
                                          "is_storable",
                                          $$v
                                        )
                                      },
                                      expression: "product.is_storable"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-checkbox", {
                                    staticStyle: {
                                      "white-space": "nowrap",
                                      "margin-left": "5px",
                                      "margin-right": "5px"
                                    },
                                    attrs: {
                                      disabled: _vm.product.is_storable,
                                      color: "#e91e63",
                                      label: "قابل للبيع"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.selling_priceaccount(
                                          _vm.item
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.product.is_sellable,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.product,
                                          "is_sellable",
                                          $$v
                                        )
                                      },
                                      expression: "product.is_sellable"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-checkbox", {
                                    staticStyle: {
                                      "white-space": "nowrap",
                                      "margin-left": "5px",
                                      "margin-right": "5px"
                                    },
                                    attrs: {
                                      disabled: _vm.product.is_storable,
                                      color: "#e91e63",
                                      label: "قابل للشراء"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.selling_priceaccount(
                                          _vm.item
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.product.is_purchasable,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.product,
                                          "is_purchasable",
                                          $$v
                                        )
                                      },
                                      expression: "product.is_purchasable"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "12" } },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        [
                                          _vm.product.is_sellable
                                            ? _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          autocomplete: "off",
                                                          label: "سعر البيع"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.product.country,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.product,
                                                              "country",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "product.country"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          autocomplete: "off",
                                                          label: "حساب المبيعات"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.product.country,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.product,
                                                              "country",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "product.country"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        [
                                          _vm.product.is_purchasable
                                            ? _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          autocomplete: "off",
                                                          label: "سعر الشراء"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.product.country,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.product,
                                                              "country",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "product.country"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          autocomplete: "off",
                                                          label:
                                                            "حساب تكلفة المبيعات"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.product.country,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.product,
                                                              "country",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "product.country"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "12" } },
                                [_c("v-divider")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-checkbox", {
                                    staticStyle: {
                                      "white-space": "nowrap",
                                      "margin-left": "5px",
                                      "margin-right": "5px"
                                    },
                                    attrs: {
                                      color: "#e91e63",
                                      label: "قابل للاسترجاع بعد البيع"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.selling_priceaccount(
                                          _vm.item
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.product.is_returnable,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.product,
                                          "is_returnable",
                                          $$v
                                        )
                                      },
                                      expression: "product.is_returnable"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-checkbox", {
                                    staticStyle: {
                                      "white-space": "nowrap",
                                      "margin-left": "5px",
                                      "margin-right": "5px"
                                    },
                                    attrs: {
                                      color: "#e91e63",
                                      label: "هذا الصنف مجاني"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.selling_priceaccount(
                                          _vm.item
                                        )
                                      }
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-checkbox", {
                                    staticStyle: {
                                      "white-space": "nowrap",
                                      "margin-left": "5px",
                                      "margin-right": "5px"
                                    },
                                    attrs: {
                                      color: "#e91e63",
                                      label: "لديه بونص"
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.selling_priceaccount(
                                          _vm.item
                                        )
                                      }
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-checkbox", {
                                    staticStyle: {
                                      "white-space": "nowrap",
                                      "margin-left": "5px",
                                      "margin-right": "5px"
                                    },
                                    attrs: {
                                      color: "#e91e63",
                                      label: "لديه تاريخ انتهاء"
                                    },
                                    model: {
                                      value: _vm.product.has_expiration_date,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.product,
                                          "has_expiration_date",
                                          $$v
                                        )
                                      },
                                      expression: "product.has_expiration_date"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      label: "بلد الصنع"
                                    },
                                    model: {
                                      value: _vm.product.country,
                                      callback: function($$v) {
                                        _vm.$set(_vm.product, "country", $$v)
                                      },
                                      expression: "product.country"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      label: "الاسم العلمي"
                                    },
                                    model: {
                                      value: _vm.product.brand_name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.product, "brand_name", $$v)
                                      },
                                      expression: "product.brand_name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      label: "التأثيرات الجانبية"
                                    },
                                    model: {
                                      value: _vm.product.side_effect,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.product,
                                          "side_effect",
                                          $$v
                                        )
                                      },
                                      expression: "product.side_effect"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      label: "البديل"
                                    },
                                    model: {
                                      value: _vm.product.alternative,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.product,
                                          "alternative",
                                          $$v
                                        )
                                      },
                                      expression: "product.alternative"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _vm.editedIndex === -1
                        ? _c(
                            "v-btn",
                            {
                              staticClass:
                                "btn btn-info m-b-5 m-r-2 white--text",
                              attrs: {
                                type: "submit",
                                color: "text--white",
                                text: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.save(_vm.product)
                                }
                              }
                            },
                            [
                              _c("v-icon", { staticClass: "white--text" }, [
                                _vm._v("mdi-plus-box")
                              ]),
                              _vm._v(
                                "حفظ وإضافة صنف\n            جديد\n          "
                              )
                            ],
                            1
                          )
                        : _c(
                            "v-btn",
                            {
                              staticClass:
                                "btn btn-info m-b-5 m-r-2 white--text",
                              attrs: {
                                type: "submit",
                                color: "blue darken-1",
                                text: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.update(_vm.product)
                                }
                              }
                            },
                            [
                              _c("v-icon", { staticClass: "white--text" }, [
                                _vm._v("mdi-view-module")
                              ]),
                              _vm._v("تعديل\n          ")
                            ],
                            1
                          )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);