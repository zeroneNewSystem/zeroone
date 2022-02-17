"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_documents_supplier-info_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tab: null,
      items: ['الفواتير', 'الاشعارات', 'السندات'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Supplier */ "./resources/js/apis/Supplier.js");
/* harmony import */ var _supplier_info_tabs_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-info-tabs.vue */ "./resources/js/components/main/documents/supplier-info-tabs.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SupplierInfoTabs: _supplier_info_tabs_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      //---- tabs
      tab: null,
      items: ["الفواتير", "الاشعارات", "السندات"],
      //----
      pur_loading: false,
      remain_amount: 0,
      receipt_loading: false,
      headers: [{
        text: "م",
        align: "center",
        width: "5",
        sortable: false,
        value: "id"
      }, {
        text: "رقم المرجع",
        align: "center",
        value: "reference"
      }, {
        text: "جهة الاتصال",
        align: "center",
        sortable: false,
        value: "issue_date"
      }, {
        text: "الرصيد",
        align: "center",
        value: "total_amount"
      }, {
        text: "متأخرات",
        align: "center",
        value: "paid_amount"
      }, {
        text: "الحالة ",
        align: "center",
        value: "status"
      }, {
        text: "التحكم ",
        align: "center",
        value: "actions"
      }],
      receipt_headers: [{
        text: "م",
        align: "center",
        width: "5",
        sortable: false,
        value: "id"
      }, {
        text: "رقم المرجع",
        align: "center",
        value: "receipt_reference"
      }, {
        text: "تاريخ الاصدار",
        align: "center",
        sortable: false,
        value: "date"
      }, {
        text: "القيمة",
        align: "center",
        value: "amount"
      }, {
        text: "الحالة ",
        align: "center",
        value: "status"
      }, {
        text: "لتحكم ",
        align: "center",
        value: "actions"
      }],
      pur_options: {},
      receipt_options: {},
      supplier: "",
      total_amount: 0,
      documents: [],
      receipts: [],
      statuses: [{
        id: 1,
        ar_name: "موافق عليه"
      }, {
        id: 2,
        ar_name: "بانتظار الموافقة"
      }, {
        id: 3,
        ar_name: "ألغيت"
      }, {
        id: 4,
        ar_name: "مسودة"
      }, {
        id: 5,
        ar_name: "دفعت"
      }, {
        id: 6,
        ar_name: "دفعت جزئيا"
      }],
      receipt_statuses: [{
        id: 1,
        ar_name: "غير مستعمل"
      }, {
        id: 2,
        ar_name: "مستعمل"
      }, {
        id: 3,
        ar_name: "مستعمل جزئيا"
      }],
      documents_total: 0,
      receipt_total: 0,
      arrears: 0,
      balance: 0,
      documents_count: 0
    };
  },
  computed: {
    pur_params: function pur_params(nv) {
      return _objectSpread({}, this.pur_options);
    },
    receipt_params: function receipt_params(nv) {
      return _objectSpread({}, this.receipt_options);
    }
  },
  watch: {
    pur_params: {
      handler: function handler() {
        var _this = this;

        var pur_page = this.pur_options.page;
        var pur_itemsPerPage = this.pur_options.itemsPerPage; //console.log(this.options)

        console.log("itemsPerPage", pur_itemsPerPage);
        _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__.default.getOne({
          id: this.$route.params.id,
          pur_page: pur_page,
          pur_itemsPerPage: pur_itemsPerPage
        }).then(function (response) {
          _this.DataProcessing(response, "pur");
        });
      },
      deep: true
    },
    receipt_params: {
      handler: function handler() {
        var _this2 = this;

        var receipt_page = this.receipt_options.page;
        var receipt_itemsPerPage = this.receipt_options.itemsPerPage;
        console.log("itemsPerPage", receipt_itemsPerPage);
        _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__.default.getOne({
          id: this.$route.params.id,
          receipt_page: receipt_page,
          receipt_itemsPerPage: receipt_itemsPerPage
        }).then(function (response) {
          _this2.DataProcessing(response, "receipt");
        });
      },
      deep: true
    }
  },
  created: function created() {
    var _this3 = this;

    _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__.default.getOne({
      id: this.$route.params.id
    }).then(function (response) {
      _this3.DataProcessing(response, "receipt");
    });
  },
  methods: {
    DataProcessing: function DataProcessing(response, type) {
      console.log("response", response);

      if (response.data.documents) {
        this.documents = response.data.documents.data;
        this.documents_total = response.data.documents.total;
        return;
      }

      if (response.data.receipts) {
        this.receipts = response.data.receipts.data;
        console.log(this.receipts);
        this.receipt_total = response.data.receipts.total;
        return;
      }

      this.supplier = response.data.supplier;
      this.total_amount = response.data.total_amount;
      this.documents_count = response.data.documents_count;
      this.remain_amount = response.data.remain_amount;
      this.arrears = response.data.arrears;
      this.balance = response.data.balance;
      return 0;
    }
  }
});

/***/ }),

/***/ "./resources/js/apis/Supplier.js":
/*!***************************************!*\
  !*** ./resources/js/apis/Supplier.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(supplier) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/suppliers", supplier);
  },
  update: function update(supplier) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/suppliers", supplier);
  },
  postCreate: function postCreate(supplier) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/suppliers/create", supplier);
  },
  getOne: function getOne(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/suppliers/getOne", {
      params: params
    });
  },
  get: function get(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/suppliers", {
      params: params
    });
  },
  getByProductID: function getByProductID(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/suppliers/product/" + id);
  },
  search: function search(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/suppliers/search", {
      params: params
    });
  },
  barcodeSearch: function barcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/router/" + params.barcode);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/suppliers/", {
      params: params
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* Helper classes */\n.basil {\n}\n.basil--text {\r\n  color: #356859 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-window__container {\r\n  height: 100%;\n}\n.v-tabs__content {\r\n  background-color: green;\r\n  height: 100px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_tabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info-tabs.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_tabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_tabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/main/documents/supplier-info-tabs.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/main/documents/supplier-info-tabs.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _supplier_info_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-info-tabs.vue?vue&type=script&lang=js& */ "./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=script&lang=js&");
/* harmony import */ var _supplier_info_tabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-info-tabs.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;

;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _supplier_info_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/documents/supplier-info-tabs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/documents/supplier-info.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/main/documents/supplier-info.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-info.vue?vue&type=template&id=54dab5c7& */ "./resources/js/components/main/documents/supplier-info.vue?vue&type=template&id=54dab5c7&");
/* harmony import */ var _supplier_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-info.vue?vue&type=script&lang=js& */ "./resources/js/components/main/documents/supplier-info.vue?vue&type=script&lang=js&");
/* harmony import */ var _supplier_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplier-info.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/documents/supplier-info.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _supplier_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__.render,
  _supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/documents/supplier-info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info-tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/documents/supplier-info.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/main/documents/supplier-info.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_tabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info-tabs.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info-tabs.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/documents/supplier-info.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/main/documents/supplier-info.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/documents/supplier-info.vue?vue&type=template&id=54dab5c7&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/main/documents/supplier-info.vue?vue&type=template&id=54dab5c7& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info.vue?vue&type=template&id=54dab5c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info.vue?vue&type=template&id=54dab5c7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info.vue?vue&type=template&id=54dab5c7&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/supplier-info.vue?vue&type=template&id=54dab5c7& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { padding: "20px", "font-size": "14px" } },
    [
      _c(
        "v-row",
        {},
        [
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "6" } },
            [
              _c(
                "v-row",
                {
                  staticStyle: {
                    "font-size": "14px",
                    border: "1px solid #bababa",
                    "border-radius": "5px",
                    padding: "10px",
                    "margin-left": "10px",
                    "margin-right": "10px"
                  }
                },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("الاسم")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.supplier.name) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("\n          الشركة\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.supplier.company_name) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("\n          رقم الاتصال\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.supplier.phone01) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("\n          البريد الالكتروني\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.supplier.email) +
                          "\n        "
                      )
                    ]
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
                {
                  staticStyle: {
                    "font-size": "14px",
                    border: "1px solid #bababa",
                    "border-radius": "5px",
                    padding: "10px",
                    "margin-left": "10px",
                    "margin-right": "10px",
                    "min-height": "135px"
                  }
                },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("الحالة")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.supplier.is_supplier_active == 1
                              ? "نشط"
                              : "غير نشط"
                          ) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("\n          العنوان\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.supplier.address) +
                          "\n        "
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
        "v-row",
        { staticClass: "pt-10 justify-center" },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "2" } },
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _vm._v(" الرصيد ")
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _c("h1", [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.balance.toFixed(2)) +
                          "\n          "
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "2" } },
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _vm._v(" قيمة الفواتير ")
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _c("h1", [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.total_amount.toFixed(2)) +
                          "\n          "
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "2" } },
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _vm._v(" إجمالي المستحق ")
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _c("h1", [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.remain_amount.toFixed(2)) +
                          "\n          "
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "2" } },
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _vm._v(" متأخرات ")
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _c("h1", [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.arrears.toFixed(2)) +
                          "\n          "
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "2" } },
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _vm._v(" عدد الفواتير ")
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _c("h1", [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.documents_count) +
                          "\n          "
                      )
                    ])
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
        "v-row",
        [
          _c(
            "v-card",
            { staticStyle: { width: "100%" }, attrs: { color: "basil" } },
            [
              _c(
                "v-card-title",
                { staticClass: "text-center justify-center py-6" },
                [_c("p", { staticClass: "basil--text" }, [_vm._v("التعاملات")])]
              ),
              _vm._v(" "),
              _c(
                "v-tabs",
                {
                  attrs: { "background-color": "transparent", color: "basil" },
                  model: {
                    value: _vm.tab,
                    callback: function($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab"
                  }
                },
                _vm._l(_vm.items, function(item) {
                  return _c("v-tab", { key: item }, [
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
                          _c("v-data-table", {
                            staticClass: "elevation-1",
                            staticStyle: { width: "100%" },
                            attrs: {
                              headers: _vm.headers,
                              items: _vm.documents,
                              options: _vm.pur_options,
                              "server-items-length": _vm.documents_total,
                              loading: _vm.pur_loading
                            },
                            on: {
                              "update:options": function($event) {
                                _vm.pur_options = $event
                              }
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "top",
                                fn: function() {
                                  return undefined
                                },
                                proxy: true
                              },
                              {
                                key: "item.issue_date",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(item.issue_date.split(" ")[0]) +
                                        "\n              "
                                    )
                                  ]
                                }
                              },
                              {
                                key: "item.status",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm.statuses.find(function(elem) {
                                            return elem.id == item.status_id
                                          }).ar_name
                                        ) +
                                        "\n              "
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
                    "v-tab-item",
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-data-table", {
                            staticClass: "elevation-1",
                            staticStyle: { width: "100%" },
                            attrs: {
                              headers: _vm.receipt_headers,
                              items: _vm.receipts,
                              options: _vm.receipt_options,
                              "server-items-length": _vm.receipt_total,
                              loading: _vm.receipt_loading
                            },
                            on: {
                              "update:options": function($event) {
                                _vm.receipt_options = $event
                              }
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "top",
                                fn: function() {
                                  return undefined
                                },
                                proxy: true
                              },
                              {
                                key: "item.status",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm.receipt_statuses.find(function(
                                            elem
                                          ) {
                                            return elem.id == item.status_id
                                          }).ar_name
                                        ) +
                                        "\n              "
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
                    "v-tab-item",
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-data-table", {
                            staticClass: "elevation-1",
                            staticStyle: { width: "100%" },
                            attrs: {
                              headers: _vm.receipt_headers,
                              items: _vm.receipts,
                              options: _vm.receipt_options,
                              "server-items-length": _vm.receipt_total,
                              loading: _vm.receipt_loading
                            },
                            on: {
                              "update:options": function($event) {
                                _vm.receipt_options = $event
                              }
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "top",
                                fn: function() {
                                  return undefined
                                },
                                proxy: true
                              },
                              {
                                key: "item.status",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm.receipt_statuses.find(function(
                                            elem
                                          ) {
                                            return elem.id == item.status_id
                                          }).ar_name
                                        ) +
                                        "\n              "
                                    )
                                  ]
                                }
                              },
                              {
                                key: "item.date",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(item.date.split(" ")[0]) +
                                        "\n              "
                                    )
                                  ]
                                }
                              },
                              {
                                key: "item.actions",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c(
                                      "router-link",
                                      { attrs: { to: "documents/" + item.id } },
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
                                            return _vm.deleteDocument(
                                              item,
                                              "update"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          {
                                            staticClass:
                                              "outlined font-size-12",
                                            attrs: { small: "" }
                                          },
                                          [_vm._v("mdi-delete")]
                                        )
                                      ],
                                      1
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);