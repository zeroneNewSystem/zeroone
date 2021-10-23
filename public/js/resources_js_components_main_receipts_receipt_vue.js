"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_receipts_receipt_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Purchase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Purchase */ "./resources/js/apis/Purchase.js");
/* harmony import */ var _apis_Receipt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Receipt */ "./resources/js/apis/Receipt.js");
/* harmony import */ var _apis_Supplier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apis/Supplier */ "./resources/js/apis/Supplier.js");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _ref;

    return _ref = {
      from_accounts: [],
      types: [{
        id: 1,
        ar_name: "صرف"
      }, {
        id: 2,
        ar_name: "نقد"
      }],

      /*-------------------validators---------------------------*/
      vld_minlingth_one: [function (v) {
        return v.length >= 1 || "أدخل قيمة";
      }],
      vld_selected: [function (v) {
        return v > 0 || "أدخل قيمة";
      }],
      required: [function (value) {
        return !!value || "الحقل مطلوب.";
      }],
      isunique: [],
      is_exists: [],
      is_valid_date: [],
      vld_numbering: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],
      suppliers: [],
      supplier: "",
      receipts: [],
      purchases: [],
      purchase_headers: [{
        text: "م",
        align: "center",
        width: "5",
        sortable: false,
        value: "id"
      }, {
        text: "رقم المرجع",
        align: "center",
        value: "purchase_reference"
      }, {
        text: "تاريخ الاصدار",
        align: "center",
        sortable: false,
        value: "date"
      }, {
        text: "قيمة الفاتورة",
        align: "center",
        value: "total_amount"
      }, {
        text: "الباقي",
        align: "center",
        value: "remainder"
      }]
    }, _defineProperty(_ref, "supplier", ""), _defineProperty(_ref, "date_is_down", false), _defineProperty(_ref, "receipt", {
      supplier_id: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      receipt_reference: "",
      person_id: "",
      account_id: "",
      type_id: "",
      description: "",
      amount: ""
    }), _ref;
  },
  methods: {
    getPurchases: function getPurchases() {
      var _this = this;

      _apis_Purchase__WEBPACK_IMPORTED_MODULE_0__.default.getAll({
        supplier_id: this.receipt.person_id,
        status_id: 0
      }).then(function (response) {
        return _this.purchases = response.data;
      });
    },
    supplierInfo: function supplierInfo() {
      var _this2 = this;

      return this.suppliers && this.suppliers.find(function (elem) {
        return elem.id == _this2.receipt.person_id;
      });
    },
    checkExecting: function checkExecting() {},
    submit: function submit() {
      /* remove zero amount or not account methods */
      // this.purchase.payment_methods = this.purchase.payment_methods.filter(
      //   (elem) => elem.account_id != "" && elem.credit != 0
      // );
      _apis_Receipt__WEBPACK_IMPORTED_MODULE_1__.default.store(this.receipt).then(function (response) {
        return console.log(response.data);
      });
    }
  },
  created: function created() {
    var _this3 = this;

    _apis_Receipt__WEBPACK_IMPORTED_MODULE_1__.default.create().then(function (response) {
      _this3.suppliers = response.data.suppliers;
      _this3.from_accounts = response.data.accounts.accounts;
    });
  }
});

/***/ }),

/***/ "./resources/js/apis/Purchase.js":
/*!***************************************!*\
  !*** ./resources/js/apis/Purchase.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(purchase) {
    console.log('purchase', purchase);
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/purchases", purchase);
  },
  get: function get(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/purchases/" + id);
  },
  getAll: function getAll(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/purchases/all", {
      params: params
    });
  },
  update: function update(purchase) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/purchases", purchase);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/purchases/", {
      params: params
    });
  }
});

/***/ }),

/***/ "./resources/js/apis/Receipt.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Receipt.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(receipt) {
    console.log('receipt', receipt);
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/receipts", receipt);
  },
  getOne: function getOne(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/receipts/" + id);
  },
  create: function create() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/receipts/create");
  },
  update: function update(receipt) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/receipts", receipt);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/receipts", {
      params: params
    });
  },
  deleteSupDoc: function deleteSupDoc(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/receipts/sup_doc", {
      params: params
    });
  },
  getAll: function getAll(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/receipts/all", {
      params: params
    });
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt.vue?vue&type=style&index=0&id=670b9e82&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt.vue?vue&type=style&index=0&id=670b9e82&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-card__title[data-v-670b9e82] {\r\n  padding: 2px;\r\n  padding-right: 20px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt.vue?vue&type=style&index=0&id=670b9e82&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt.vue?vue&type=style&index=0&id=670b9e82&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_670b9e82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receipt.vue?vue&type=style&index=0&id=670b9e82&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt.vue?vue&type=style&index=0&id=670b9e82&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_670b9e82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_670b9e82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/main/receipts/receipt.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/main/receipts/receipt.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _receipt_vue_vue_type_template_id_670b9e82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receipt.vue?vue&type=template&id=670b9e82&scoped=true& */ "./resources/js/components/main/receipts/receipt.vue?vue&type=template&id=670b9e82&scoped=true&");
/* harmony import */ var _receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receipt.vue?vue&type=script&lang=js& */ "./resources/js/components/main/receipts/receipt.vue?vue&type=script&lang=js&");
/* harmony import */ var _receipt_vue_vue_type_style_index_0_id_670b9e82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receipt.vue?vue&type=style&index=0&id=670b9e82&scoped=true&lang=css& */ "./resources/js/components/main/receipts/receipt.vue?vue&type=style&index=0&id=670b9e82&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _receipt_vue_vue_type_template_id_670b9e82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _receipt_vue_vue_type_template_id_670b9e82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "670b9e82",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/receipts/receipt.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/receipts/receipt.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/main/receipts/receipt.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receipt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/receipts/receipt.vue?vue&type=style&index=0&id=670b9e82&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/main/receipts/receipt.vue?vue&type=style&index=0&id=670b9e82&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_670b9e82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receipt.vue?vue&type=style&index=0&id=670b9e82&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt.vue?vue&type=style&index=0&id=670b9e82&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/receipts/receipt.vue?vue&type=template&id=670b9e82&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/main/receipts/receipt.vue?vue&type=template&id=670b9e82&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_template_id_670b9e82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_template_id_670b9e82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_template_id_670b9e82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receipt.vue?vue&type=template&id=670b9e82&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt.vue?vue&type=template&id=670b9e82&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt.vue?vue&type=template&id=670b9e82&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt.vue?vue&type=template&id=670b9e82&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { padding: "10px", "padding-top": "50px" } },
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
                      staticClass: "pt-0 pb-0",
                      attrs: { cols: "12", lg: "10" }
                    },
                    [
                      _c("v-text-field", {
                        staticClass: "receipt-info",
                        attrs: {
                          outlined: "",
                          autocomplete: "off",
                          prefix: " رقم المرجع | "
                        },
                        on: {
                          blur: function($event) {
                            return _vm.checkExecting()
                          }
                        },
                        model: {
                          value: _vm.receipt.receipt_reference,
                          callback: function($$v) {
                            _vm.$set(_vm.receipt, "receipt_reference", $$v)
                          },
                          expression: "receipt.receipt_reference"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pt-0 pb-0",
                      attrs: { cols: "12", lg: "10" }
                    },
                    [
                      _c("v-autocomplete", {
                        attrs: {
                          items: _vm.suppliers,
                          "item-text": "name",
                          "item-value": "id",
                          outlined: "",
                          rules: _vm.vld_selected,
                          prefix: " المورد | "
                        },
                        on: { change: _vm.getPurchases },
                        model: {
                          value: _vm.receipt.person_id,
                          callback: function($$v) {
                            _vm.$set(_vm.receipt, "person_id", $$v)
                          },
                          expression: "receipt.person_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pt-0 pb-0",
                      attrs: { cols: "12", lg: "10" }
                    },
                    [
                      _c("v-autocomplete", {
                        attrs: {
                          flat: "",
                          outlined: "",
                          "no-data": "",
                          "no-data-text": "",
                          prefix: " من حساب | ",
                          "non-linear": "",
                          items: _vm.from_accounts,
                          "item-text": "ar_name",
                          "item-value": "id"
                        },
                        model: {
                          value: _vm.receipt.account_id,
                          callback: function($$v) {
                            _vm.$set(_vm.receipt, "account_id", $$v)
                          },
                          expression: "receipt.account_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pt-0 pb-0",
                      attrs: { cols: "12", lg: "10" }
                    },
                    [
                      _c("v-autocomplete", {
                        staticClass: "receipt-info",
                        attrs: {
                          outlined: "",
                          autocomplete: "off",
                          items: _vm.types,
                          "item-text": "ar_name",
                          "item-value": "id",
                          prefix: " النوع | "
                        },
                        on: {
                          blur: function($event) {
                            return _vm.checkExecting()
                          }
                        },
                        model: {
                          value: _vm.receipt.type_id,
                          callback: function($$v) {
                            _vm.$set(_vm.receipt, "type_id", $$v)
                          },
                          expression: "receipt.type_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pt-0 pb-0",
                      attrs: { cols: "12", lg: "10" }
                    },
                    [
                      _c("v-text-field", {
                        staticClass: "receipt-info",
                        attrs: {
                          outlined: "",
                          autocomplete: "off",
                          prefix: " الوصف | "
                        },
                        on: {
                          blur: function($event) {
                            return _vm.checkExecting()
                          }
                        },
                        model: {
                          value: _vm.receipt.description,
                          callback: function($$v) {
                            _vm.$set(_vm.receipt, "description", $$v)
                          },
                          expression: "receipt.description"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pt-0 pb-0",
                      attrs: { cols: "12", lg: "10" }
                    },
                    [
                      _c(
                        "v-menu",
                        {
                          ref: "date",
                          attrs: {
                            "close-on-content-click": false,
                            transition: "scale-transition",
                            "offset-y": "",
                            "max-width": "290px",
                            "min-width": "auto"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            outlined: "",
                                            prefix: " التاريخ | "
                                          },
                                          on: {
                                            keydown: function($event) {
                                              if (
                                                !$event.type.indexOf("key") &&
                                                _vm._k(
                                                  $event.keyCode,
                                                  "enter",
                                                  13,
                                                  $event.key,
                                                  "Enter"
                                                )
                                              ) {
                                                return null
                                              }
                                              _vm.date_is_down = false
                                            }
                                          },
                                          model: {
                                            value: _vm.receipt.date,
                                            callback: function($$v) {
                                              _vm.$set(_vm.receipt, "date", $$v)
                                            },
                                            expression: "receipt.date"
                                          }
                                        },
                                        "v-text-field",
                                        attrs,
                                        false
                                      ),
                                      on
                                    )
                                  )
                                ]
                              }
                            }
                          ]),
                          model: {
                            value: _vm.date_is_down,
                            callback: function($$v) {
                              _vm.date_is_down = $$v
                            },
                            expression: "date_is_down"
                          }
                        },
                        [
                          _vm._v(" "),
                          _c("v-date-picker", {
                            attrs: { "no-title": "" },
                            on: {
                              input: function($event) {
                                _vm.date_is_down = false
                              }
                            },
                            model: {
                              value: _vm.receipt.date,
                              callback: function($$v) {
                                _vm.$set(_vm.receipt, "date", $$v)
                              },
                              expression: "receipt.date"
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
                    "v-col",
                    {
                      staticClass: "pt-0 pb-0",
                      attrs: { cols: "12", lg: "10" }
                    },
                    [
                      _c("v-text-field", {
                        staticClass: "receipt-info",
                        attrs: {
                          outlined: "",
                          autocomplete: "off",
                          prefix: " المبلغ | "
                        },
                        on: {
                          blur: function($event) {
                            return _vm.checkExecting()
                          }
                        },
                        model: {
                          value: _vm.receipt.amount,
                          callback: function($$v) {
                            _vm.$set(_vm.receipt, "amount", $$v)
                          },
                          expression: "receipt.amount"
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
                    "v-card",
                    { staticStyle: { width: "100%", "margin-left": "20px" } },
                    [
                      _c(
                        "v-card-title",
                        { staticStyle: { background: "lightgray" } },
                        [_vm._v("\n            معلومات المورد\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "12", lg: "6" } }, [
                                _vm._v(" الاسم ")
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "12", lg: "6" } }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm.supplierInfo() &&
                                        _vm.supplierInfo().name
                                    ) +
                                    "\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "12", lg: "6" } }, [
                                _vm._v(" الهاتف ")
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "12", lg: "6" } }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm.supplierInfo() &&
                                        _vm.supplierInfo().phone01
                                    ) +
                                    " "
                                )
                              ]),
                              _c("v-col", { attrs: { cols: "12", lg: "6" } }, [
                                _vm._v(" البريد الالكتروني ")
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "12", lg: "6" } }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm.supplierInfo() &&
                                        _vm.supplierInfo().email
                                    ) +
                                    " "
                                )
                              ]),
                              _c("v-col", { attrs: { cols: "12", lg: "6" } }, [
                                _vm._v(" الرقم الضريبي ")
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "12", lg: "6" } }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm.supplierInfo() &&
                                        _vm.supplierInfo().tax_number
                                    ) +
                                    "\n              "
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
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-checkbox", {
                        attrs: {
                          color: "#e91e63",
                          label: "سداد تلقائي للفواتير بحسب الأقدمية"
                        },
                        model: {
                          value: _vm.receipt.allocate_dynamically,
                          callback: function($$v) {
                            _vm.$set(_vm.receipt, "allocate_dynamically", $$v)
                          },
                          expression: "receipt.allocate_dynamically"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticStyle: {
                        "text-align": "end",
                        "padding-left": "25px"
                      },
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "btn btn-info m-b-5 m-r-2 white--text",
                          attrs: { color: "text--white", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.submit()
                            }
                          }
                        },
                        [
                          _c("v-icon", { staticClass: "white--text" }, [
                            _vm._v("mdi-plus-box")
                          ]),
                          _vm._v("حفظ\n          ")
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
      ),
      _vm._v(" "),
      _c("v-row"),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "px-10", staticStyle: { "font-size": "16px" } },
        [_vm._v("\n    الفواتير التي لم تحصل جزئيا أو كليا\n  ")]
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pt-10", staticStyle: { "font-size": "16px" } },
        [
          _c("v-data-table", {
            staticClass: "elevation-1",
            staticStyle: { width: "100%" },
            attrs: {
              "hide-default-footer": "",
              headers: _vm.purchase_headers,
              items: _vm.purchases
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
                key: "item.date",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(item.date && item.date.split(" ")[0]) +
                        "\n      "
                    )
                  ]
                }
              },
              {
                key: "item.remainder",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(item.remainder.toFixed(3)) +
                        "\n      "
                    )
                  ]
                }
              },
              {
                key: "item.payment_status",
                fn: function(ref) {
                  var item = ref.item
                  return [_vm._v(" paid ")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);