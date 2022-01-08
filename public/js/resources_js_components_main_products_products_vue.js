"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_products_products_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["product", "prdct_forms", "prdct_taxes", "prdct_types", "dialog"],
  mounted: function mounted() {
    var _this = this;

    window.addEventListener("resize", function () {
      _this.windowHeight = window.innerHeight;
      console.log(_this.windowHeight);
    });
  },
  data: function data() {
    return {
      windowHeight: 0,
      product_units_headers: [{
        text: " افتراضية البيع ",
        align: "center",
        sortable: false,
        value: "main_sales_unit_id"
      }, {
        text: " افتراضية الشراء ",
        align: "center",
        sortable: false,
        value: "main_purchase_unit_id"
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
        value: "sales_price"
      }, {
        text: "الباركود",
        align: "center",
        sortable: false,
        value: "barcode",
        width: "150"
      }],
      tab: null,
      items: ["بيانات أساسية", "الوحدات", "المجموعات", "التصنيف", "الموردين"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      editedIndex: -1,
      emailRules: [function (v) {
        return !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "ادخل البريد بشكل صحيح";
      }],
      vld_minlingth: [function (v) {
        return !v || (v === null || v === void 0 ? void 0 : v.length) >= 2 || "أدخل أكثر من حرفين";
      }],
      vld_minlingth_noEmpty: [function (v) {
        return (v === null || v === void 0 ? void 0 : v.length) >= 2 || "أدخل أكثر من حرفين";
      }],
      vld_numbering: [function (v) {
        return !v || /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],
      vld_numbering_noEmpty: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],
      formTitle: "",
      new_product: {
        name: "",
        mobile: "",
        tel: "",
        email: "",
        company: "",
        notes: ""
      },
      edited_product: {
        name: "",
        mobile: "",
        tel: "",
        email: "",
        company: "",
        notes: ""
      }
    };
  },
  methods: {
    close: function close() {
      this.$parent.$data.product_info_dialog = false;
    },
    emit_product: function emit_product() {},
    save: function save(item) {
      var _this2 = this;

      if (this.$refs.form.validate()) {
        var product = Object.assign({}, item);
        item.flag = "addproducts";
        item.filename = "products";
        axios.post("router.php", item).then(function (response) {
          _this2.$emit("product", product);

          console.log(response.data);
        });
        this.$refs.form.reset();
        this.close();
      }
    },
    update: function update(item) {
      var _this3 = this;

      if (this.$refs.form.validate()) {
        var product = Object.assign({}, item);
        console.log("item");
        item.flag = "updateproducts";
        item.filename = "products";
        axios.post("router.php", item).then(function (response) {
          _this3.$emit("product", product);

          console.log(response.data);
        });
        this.$refs.form.reset();
        this.close();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/products.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/products.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Product */ "./resources/js/apis/Product.js");
/* harmony import */ var _product_info_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-info.vue */ "./resources/js/components/main/products/product-info.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ProductInfo: _product_info_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      //-------etched data-----------------f
      products: [],
      prdct_types: [],
      prdct_forms: [],
      prdct_taxes: [],
      //-----------------------------------//
      product_info_product: "",
      product_info_dialog: false,
      search: "",
      status: "salam",
      title: "الأصناف والمنتجات",
      //---
      products_total: 20,
      loading: true,
      options: {},
      headers: [{
        text: "م",
        align: "center",
        width: "5",
        sortable: false,
        value: "id"
      }, {
        text: "اسم الصنف",
        align: "center",
        value: "ar_name"
      }, {
        text: "الباركود",
        align: "center",
        sortable: false,
        value: "barcode"
      }, {
        text: "الكمية المخزونة",
        align: "center",
        value: "quantity"
      }, {
        text: "الخصم",
        align: "center",
        value: "selling_discount"
      }, {
        text: "التحكم ",
        align: "center",
        value: "actions"
      }]
    };
  },
  computed: {
    params: function params(nv) {
      return _objectSpread(_objectSpread({}, this.options), {}, {
        query: this.search
      });
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this = this;

        this.getDataFromApi().then(function (response) {
          _this.products = response.data.products.data;
          _this.prdct_types = response.data.prdct_types;
          _this.prdct_forms = response.data.prdct_forms;
          _this.prdct_taxes = response.data.prdct_taxes;
          _this.products_total = response.data.products.total;
          _this.product_info_product = response.data.products.data[0];
          console.log(_this.products_total);
        });
      },
      deep: true
    }
  },
  // mounted() {
  //   this.getDataFromApi().then((data) => {
  //     this.products = data.response;
  //   });
  // },
  methods: {
    show_product_dialog: function show_product_dialog(item) {
      //get info
      //get info
      this.product_info_product = item;
      this.product_info_dialog = true;
      console.log("item");
      console.log(item);
    },
    deleteProduct: function deleteProduct(item) {
      var _this2 = this;

      this.loading = true;
      var _this$options = this.options,
          sortBy = _this$options.sortBy,
          sortDesc = _this$options.sortDesc,
          page = _this$options.page,
          itemsPerPage = _this$options.itemsPerPage;
      var search = this.search.trim().toLowerCase();
      var id = item.id;
      _apis_Product__WEBPACK_IMPORTED_MODULE_0__.default.delete({
        id: id,
        page: page,
        itemsPerPage: itemsPerPage,
        search: search
      }).then(function (response) {
        _this2.loading = false;
        _this2.products = response.data.products.data;
        _this2.products_total = response.data.products.total;
      });
    },
    getDataFromApi: function getDataFromApi() {
      var _this3 = this;

      this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this3$options = _this3.options,
            sortBy = _this3$options.sortBy,
            sortDesc = _this3$options.sortDesc,
            page = _this3$options.page,
            itemsPerPage = _this3$options.itemsPerPage;

        var search = _this3.search.trim().toLowerCase();

        _apis_Product__WEBPACK_IMPORTED_MODULE_0__.default.get({
          page: page,
          itemsPerPage: itemsPerPage,
          search: search
        }).then(function (response) {
          _this3.loading = false;
          resolve(response);
        });
      });
    }
  }
});

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
  isExist: function isExist(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/product/exists/" + product.type + "/" + product.what_to_search);
  },
  create: function create() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/products/create");
  },
  store: function store(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/products", product);
  },
  update: function update(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/products", product);
  },
  postCreate: function postCreate(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/products/create", product);
  },
  get: function get(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/products/", {
      params: params
    });
  },
  search: function search(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/products/search", {
      params: params
    });
  },
  purchaseBarcodeSearch: function purchaseBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/purchase/barcode/" + params.barcode);
  },
  invoiceBarcodeSearch: function invoiceBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/invoice/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  stockTakeBarcodeSearch: function stockTakeBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/stock_take/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/products/", {
      params: params
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate)\r\n  .v-icon {\r\n  color: rgb(111, 98, 228) !important;\n}\n.row {\r\n  margin: 0 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/main/products/product-info.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/main/products/product-info.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-info.vue?vue&type=template&id=b36f5868& */ "./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&");
/* harmony import */ var _product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-info.vue?vue&type=script&lang=js& */ "./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&");
/* harmony import */ var _product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-info.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.render,
  _product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/products/product-info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/products/products.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/main/products/products.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _products_vue_vue_type_template_id_31ba1664___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.vue?vue&type=template&id=31ba1664& */ "./resources/js/components/main/products/products.vue?vue&type=template&id=31ba1664&");
/* harmony import */ var _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.vue?vue&type=script&lang=js& */ "./resources/js/components/main/products/products.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _products_vue_vue_type_template_id_31ba1664___WEBPACK_IMPORTED_MODULE_0__.render,
  _products_vue_vue_type_template_id_31ba1664___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/products/products.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/products/products.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/main/products/products.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/products.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=template&id=b36f5868& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&");


/***/ }),

/***/ "./resources/js/components/main/products/products.vue?vue&type=template&id=31ba1664&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/main/products/products.vue?vue&type=template&id=31ba1664& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_31ba1664___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_31ba1664___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_31ba1664___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./products.vue?vue&type=template&id=31ba1664& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/products.vue?vue&type=template&id=31ba1664&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { scrollable: "", "max-width": "1000px", persistent: "" },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            { staticClass: "my-3 pa-0" },
            [
              _c(
                "v-row",
                { staticStyle: { "font-size": "14px" } },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "align-self-center",
                      staticStyle: { "border-left": "1px solid" },
                      attrs: { cols: "12", lg: "3" }
                    },
                    [
                      _vm._t("title", function() {
                        return [_vm._v(" new product ")]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "align-self-center",
                      attrs: { cols: "12", lg: "5" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.product.ar_name) +
                                "\n            "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("v-col", [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.product.en_name) +
                                "\n            "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.windowHeight >= 0
                    ? _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "4" } },
                        [
                          _c(
                            "v-row",
                            { staticClass: "justify-center" },
                            [
                              _c(
                                "v-col",
                                [
                                  _c("v-barcode", {
                                    staticStyle: { direction: "ltr" },
                                    attrs: {
                                      value: _vm.product.barcode,
                                      width: "1",
                                      height: "50"
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
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticStyle: { height: "400px" } },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "3" } },
                    [
                      _c("v-checkbox", {
                        staticClass: "nib",
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "المنتج نشط"
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "2" } },
                    [
                      _c("v-checkbox", {
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "قابل للاسترجاع"
                        },
                        model: {
                          value: _vm.product.is_returnable,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "is_returnable", $$v)
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
                    { attrs: { cols: "6", lg: "3" } },
                    [
                      _c("v-checkbox", {
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "الصنف مجاني"
                        },
                        model: {
                          value: _vm.product.is_free,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "is_free", $$v)
                          },
                          expression: "product.is_free"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "2" } },
                    [
                      _c("v-checkbox", {
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "السماح بالبونص"
                        },
                        model: {
                          value: _vm.product.is_bonus,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "is_bonus", $$v)
                          },
                          expression: "product.is_bonus"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "2" } },
                    [
                      _c("v-checkbox", {
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "لديه تاريخ انتهاء"
                        },
                        model: {
                          value: _vm.product.has_expiration_date,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "has_expiration_date", $$v)
                          },
                          expression: "product.has_expiration_date"
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
                "v-tabs",
                {
                  attrs: {
                    "background-color": "transparent",
                    color: "basil",
                    "gv-row": ""
                  },
                  model: {
                    value: _vm.tab,
                    callback: function($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab"
                  }
                },
                _vm._l(_vm.items, function(item) {
                  return _c("v-tab", { key: item.id }, [
                    _vm._v("\n          " + _vm._s(item) + "\n        ")
                  ])
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "v-tabs-items",
                {
                  model: {
                    value: _vm.tab,
                    callback: function($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab"
                  }
                },
                [
                  _c(
                    "v-tab-item",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  الرقم التسلسلي\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.product.serial_number) +
                                        " "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  نوع الصنف\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(
                                          _vm.prdct_types.find(function(elem) {
                                            return (
                                              elem.id ==
                                              _vm.product.prdct_type_id
                                            )
                                          })
                                            ? _vm.prdct_types.find(function(
                                                elem
                                              ) {
                                                return (
                                                  elem.id ==
                                                  _vm.product.prdct_type_id
                                                )
                                              })["ar_name"]
                                            : ""
                                        ) +
                                        "\n                "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  مجموعات الصنف\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    _vm._l(_vm.product.groups, function(item) {
                                      return _c("span", { key: item.id }, [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(item.ar_name) +
                                            "،\n                  "
                                        )
                                      ])
                                    }),
                                    0
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
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  حد التنبيه الأدني\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      " " + _vm._s(_vm.product.min_alert) + " "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  حد التنبيه الأعلى\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      " " + _vm._s(_vm.product.max_alert) + " "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  فترة الركود\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.product.stagnation_period) +
                                        " "
                                    )
                                  ])
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
                    "v-tab-item",
                    [
                      _c("div", { staticStyle: { height: "60px" } }),
                      _vm._v(" "),
                      _c("v-data-table", {
                        attrs: {
                          headers: _vm.product_units_headers,
                          items: _vm.product.units,
                          "hide-default-footer": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.main_sales_unit_id",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm.product.units.indexOf(item) + 1 ==
                                _vm.product.main_sales_unit_id
                                  ? _c("v-icon", { attrs: { small: "" } }, [
                                      _vm._v("mdi-check")
                                    ])
                                  : _vm._e()
                              ]
                            }
                          },
                          {
                            key: "item.main_purchase_unit_id",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm.product.units.indexOf(item) + 1 ==
                                _vm.product.main_purchase_unit_id
                                  ? _c("v-icon", { attrs: { small: "" } }, [
                                      _vm._v("mdi-check")
                                    ])
                                  : _vm._e()
                              ]
                            }
                          },
                          {
                            key: "item.contains",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.pivot.contains) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.equals",
                            fn: function(ref) {
                              var item = ref.item
                              return [_vm._v(" = ")]
                            }
                          },
                          {
                            key: "item.from_unit",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.product.units[0] &&
                                        _vm.product.units[0].ar_name
                                    ) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.purchase_price",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.pivot.purchase_price) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.sales_price",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.pivot.sales_price) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.barcode",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.pivot.barcode) +
                                    "\n            "
                                )
                              ]
                            }
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
                "v-container",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: false,
                      expression: "false"
                    }
                  ]
                },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "6", sm: "6", md: "4" } }, [
                        _c("div", { staticStyle: { display: "flex" } }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: { "font-size": "14px", float: "left" }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.product) +
                                "\n            "
                            )
                          ]
                        )
                      ])
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
              _c(
                "v-btn",
                {
                  attrs: { color: "blue darken-1", text: "" },
                  on: { click: _vm.close }
                },
                [_vm._v("الغاء")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/products.vue?vue&type=template&id=31ba1664&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/products.vue?vue&type=template&id=31ba1664& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "product-info",
        {
          attrs: {
            dialog: _vm.product_info_dialog,
            product: _vm.product_info_product,
            prdct_forms: _vm.prdct_forms,
            prdct_taxes: _vm.prdct_taxes,
            prdct_types: _vm.prdct_types,
            suppliers: _vm.suppliers
          }
        },
        [
          _c("span", { attrs: { slot: "title" }, slot: "title" }, [
            _vm._v(" معلومات الصنف")
          ])
        ]
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.products,
          options: _vm.options,
          "server-items-length": _vm.products_total,
          loading: _vm.loading
        },
        on: {
          "update:options": function($event) {
            _vm.options = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  { attrs: { flat: "", color: "white" } },
                  [
                    _c("v-toolbar-title", [_vm._v(_vm._s(_vm.title))]),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { inset: "", vertical: "" }
                    }),
                    _vm._v(" "),
                    _c("v-spacer")
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { attrs: { justify: "start" } },
                  [
                    _c(
                      "v-col",
                      { staticStyle: { "text-align": "end" } },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { elevation: "", color: "primary" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.addUpdateSupplier("", "add")
                              }
                            }
                          },
                          [_vm._v("جرد المخزون")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { elevation: "", color: "primary" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.addUpdateSupplier("", "add")
                              }
                            }
                          },
                          [_vm._v("نقل المخزون")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { elevation: "", color: "primary" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.addUpdateSupplier("", "add")
                              }
                            }
                          },
                          [_vm._v("المجموعات")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { elevation: "", color: "primary" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.addUpdateSupplier("", "add")
                              }
                            }
                          },
                          [_vm._v("الأنواع")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { elevation: "", color: "primary" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.addUpdateSupplier("", "add")
                              }
                            }
                          },
                          [_vm._v("إضافة صنف جديد")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-text-field", {
                  staticClass: "mx-4",
                  attrs: { label: "البحث بالاسم أو الباركود" },
                  model: {
                    value: _vm.search,
                    callback: function($$v) {
                      _vm.search = $$v
                    },
                    expression: "search"
                  }
                })
              ]
            },
            proxy: true
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: { name: "product", params: { product: item } }
                    }
                  },
                  [
                    _c("v-icon", { attrs: { small: "" } }, [
                      _vm._v("mdi-pencil")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.show_product_dialog(item)
                      }
                    }
                  },
                  [
                    _c(
                      "v-icon",
                      {
                        staticClass: "outlined font-size-12",
                        attrs: { small: "" }
                      },
                      [_vm._v("mdi-eye")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-icon",
                  {
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        return _vm.deleteProduct(item)
                      }
                    }
                  },
                  [_vm._v("mdi-delete")]
                )
              ]
            }
          },
          {
            key: "no-data",
            fn: function() {
              return [_vm._v("no data!")]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);