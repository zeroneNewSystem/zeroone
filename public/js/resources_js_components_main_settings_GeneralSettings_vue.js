"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_settings_GeneralSettings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/GeneralSettings.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/GeneralSettings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Setting */ "./resources/js/apis/Setting.js");
/* harmony import */ var _generalSettings_ProductSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generalSettings/ProductSettings */ "./resources/js/components/main/settings/generalSettings/ProductSettings.vue");
/* harmony import */ var _generalSettings_PurchaseSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generalSettings/PurchaseSettings */ "./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue");
/* harmony import */ var _generalSettings_CompanySettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generalSettings/CompanySettings */ "./resources/js/components/main/settings/generalSettings/CompanySettings.vue");
/* harmony import */ var _apis_Country__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../apis/Country */ "./resources/js/apis/Country.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ProductSettings: _generalSettings_ProductSettings__WEBPACK_IMPORTED_MODULE_1__.default,
    PurchaseSettings: _generalSettings_PurchaseSettings__WEBPACK_IMPORTED_MODULE_2__.default,
    CompanySettings: _generalSettings_CompanySettings__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    return {
      cities: [],
      companySettingsOptions: {
        country_id: ""
      },
      productSettingsOptions: {
        sold_discount_is_active: false,
        sold_discount: 5,
        sold_discount_type_id: 1
      },

      /* tabs ----------------------------*/
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      /* tabs ----------------------------*/

    };
  },
  methods: {
    loadCities: function loadCities(country_id) {
      var _this = this;

      this.cities = [];
      _apis_Country__WEBPACK_IMPORTED_MODULE_4__.default.loadCities(country_id).then(function (response) {
        _this.cities = response.data.cities;
        "cities", JSON.stringify(_this.cities);
      });
    },
    productSettingsMethod: function productSettingsMethod(item) {
      this.productSettingsOptions = item;
    },
    companySettingsMethod: function companySettingsMethod(item) {
      this.companySettingsOptions = item;
      var data = {
        product_settings: this.productSettingsOptions,
        company_settings: this.companySettingsOptions
      };
      "general_response", JSON.stringify(data);
    }
  },
  created: function created() {
    var _this2 = this;

    var general_response = JSON.parse(localStorage.getItem("general_response"));
    console.log(general_response);

    if (general_response) {
      this.productSettingsOptions = general_response.product_settings;
      this.companySettingsOptions = general_response.company_settings;
      this.cities = JSON.parse(localStorage.getItem("cities"));
      return;
    }

    _apis_Setting__WEBPACK_IMPORTED_MODULE_0__.default.get().then(function (response) {
      "general_response", JSON.stringify(response.data);
      _this2.productSettingsOptions = response.data.product_settings;
      _this2.companySettingsOptions = response.data.company_settings;

      _this2.loadCities(_this2.companySettingsOptions.country_id);

      console.log(response);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/CompanySettings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/CompanySettings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../apis/Country */ "./resources/js/apis/Country.js");
/* harmony import */ var _apis_Setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../apis/Setting */ "./resources/js/apis/Setting.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["companySettingsOptions", "cities"],
  data: function data() {
    return {
      countries: []
    };
  },
  methods: {
    loadCities: function loadCities() {
      this.$emit("changeCountry", this.companySettingsOptions.country_id);
    },
    submit: function submit() {
      var _this = this;

      _apis_Setting__WEBPACK_IMPORTED_MODULE_1__.default.store({
        company: this.companySettingsOptions
      }).then(function (elem) {
        _this.emitcompanySettings();
      });
    },
    emitcompanySettings: function emitcompanySettings() {
      this.$emit("companySettingsMethod", this.companySettingsOptions);
    }
  },
  created: function created() {
    var _this2 = this;

    var countries = JSON.parse(localStorage.getItem("countries"));
    console.log('countries');
    console.log(countries);

    if (countries) {
      this.countries = countries;
      return;
    }

    _apis_Country__WEBPACK_IMPORTED_MODULE_0__.default.loadCountries().then(function (response) {
      localStorage.setItem("countries", JSON.stringify(response.data.countries));
      _this2.countries = response.data.countries;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/ProductSettings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/ProductSettings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../apis/Setting */ "./resources/js/apis/Setting.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["productSettingsOptions"],
  data: function data() {
    return {
      discount_types: [{
        id: 1,
        ar_name: "%",
        en_name: "%"
      }, {
        id: 2,
        ar_name: "قيمة",
        en_name: "amount"
      }]
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      _apis_Setting__WEBPACK_IMPORTED_MODULE_0__.default.store({
        product: this.productSettingsOptions
      }).then(function (elem) {
        _this.emitProductSettings();
      });
    },
    emitProductSettings: function emitProductSettings() {
      this.$emit("productSettingsMethod", this.productSettingsOptions);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./resources/js/apis/Country.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Country.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loadCountries: function loadCountries(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/countries", {
      params: params
    });
  },
  loadCities: function loadCities(country_id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/cities/" + country_id);
  }
});

/***/ }),

/***/ "./resources/js/apis/Setting.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Setting.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(settings) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/settings", settings);
  },
  productSettingsSave: function productSettingsSave(settings) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/settings/product_settings/store", settings);
  },
  companySettingsSave: function companySettingsSave(settings) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/settings/company_settings/store", settings);
  },
  isExist: function isExist(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/product/exists/" + product.type + "/" + product.what_to_search);
  },
  create: function create() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/settings/create");
  },
  update: function update(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/settings", product);
  },
  postCreate: function postCreate(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/settings/create", product);
  },
  get: function get() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/settings");
  },
  search: function search(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/settings/search", {
      params: params
    });
  },
  billBarcodeSearch: function billBarcodeSearch(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/" + route + "/barcode/" + params.barcode);
  },
  invoiceBarcodeSearch: function invoiceBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/invoice/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  stockTakeBarcodeSearch: function stockTakeBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/stock_take/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/settings/", {
      params: params
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-tab {\r\n  letter-spacing: 0 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GeneralSettings.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/main/settings/GeneralSettings.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/main/settings/GeneralSettings.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GeneralSettings_vue_vue_type_template_id_1b8acc0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneralSettings.vue?vue&type=template&id=1b8acc0c& */ "./resources/js/components/main/settings/GeneralSettings.vue?vue&type=template&id=1b8acc0c&");
/* harmony import */ var _GeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralSettings.vue?vue&type=script&lang=js& */ "./resources/js/components/main/settings/GeneralSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GeneralSettings.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _GeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GeneralSettings_vue_vue_type_template_id_1b8acc0c___WEBPACK_IMPORTED_MODULE_0__.render,
  _GeneralSettings_vue_vue_type_template_id_1b8acc0c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/settings/GeneralSettings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/settings/generalSettings/CompanySettings.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/main/settings/generalSettings/CompanySettings.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CompanySettings_vue_vue_type_template_id_278b3daa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanySettings.vue?vue&type=template&id=278b3daa& */ "./resources/js/components/main/settings/generalSettings/CompanySettings.vue?vue&type=template&id=278b3daa&");
/* harmony import */ var _CompanySettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanySettings.vue?vue&type=script&lang=js& */ "./resources/js/components/main/settings/generalSettings/CompanySettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CompanySettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CompanySettings_vue_vue_type_template_id_278b3daa___WEBPACK_IMPORTED_MODULE_0__.render,
  _CompanySettings_vue_vue_type_template_id_278b3daa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/settings/generalSettings/CompanySettings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/settings/generalSettings/ProductSettings.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/main/settings/generalSettings/ProductSettings.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductSettings_vue_vue_type_template_id_6221d69d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductSettings.vue?vue&type=template&id=6221d69d& */ "./resources/js/components/main/settings/generalSettings/ProductSettings.vue?vue&type=template&id=6221d69d&");
/* harmony import */ var _ProductSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductSettings.vue?vue&type=script&lang=js& */ "./resources/js/components/main/settings/generalSettings/ProductSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductSettings_vue_vue_type_template_id_6221d69d___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductSettings_vue_vue_type_template_id_6221d69d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/settings/generalSettings/ProductSettings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PurchaseSettings_vue_vue_type_template_id_78816069___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurchaseSettings.vue?vue&type=template&id=78816069& */ "./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=template&id=78816069&");
/* harmony import */ var _PurchaseSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseSettings.vue?vue&type=script&lang=js& */ "./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PurchaseSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PurchaseSettings_vue_vue_type_template_id_78816069___WEBPACK_IMPORTED_MODULE_0__.render,
  _PurchaseSettings_vue_vue_type_template_id_78816069___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/settings/generalSettings/PurchaseSettings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/settings/GeneralSettings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/main/settings/GeneralSettings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GeneralSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/GeneralSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/settings/generalSettings/CompanySettings.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/main/settings/generalSettings/CompanySettings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CompanySettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/CompanySettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/settings/generalSettings/ProductSettings.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/main/settings/generalSettings/ProductSettings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/ProductSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PurchaseSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GeneralSettings.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/settings/GeneralSettings.vue?vue&type=template&id=1b8acc0c&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/main/settings/GeneralSettings.vue?vue&type=template&id=1b8acc0c& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_template_id_1b8acc0c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_template_id_1b8acc0c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_template_id_1b8acc0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GeneralSettings.vue?vue&type=template&id=1b8acc0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/GeneralSettings.vue?vue&type=template&id=1b8acc0c&");


/***/ }),

/***/ "./resources/js/components/main/settings/generalSettings/CompanySettings.vue?vue&type=template&id=278b3daa&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/main/settings/generalSettings/CompanySettings.vue?vue&type=template&id=278b3daa& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettings_vue_vue_type_template_id_278b3daa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettings_vue_vue_type_template_id_278b3daa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettings_vue_vue_type_template_id_278b3daa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CompanySettings.vue?vue&type=template&id=278b3daa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/CompanySettings.vue?vue&type=template&id=278b3daa&");


/***/ }),

/***/ "./resources/js/components/main/settings/generalSettings/ProductSettings.vue?vue&type=template&id=6221d69d&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/main/settings/generalSettings/ProductSettings.vue?vue&type=template&id=6221d69d& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSettings_vue_vue_type_template_id_6221d69d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSettings_vue_vue_type_template_id_6221d69d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSettings_vue_vue_type_template_id_6221d69d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductSettings.vue?vue&type=template&id=6221d69d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/ProductSettings.vue?vue&type=template&id=6221d69d&");


/***/ }),

/***/ "./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=template&id=78816069&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=template&id=78816069& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseSettings_vue_vue_type_template_id_78816069___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseSettings_vue_vue_type_template_id_78816069___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseSettings_vue_vue_type_template_id_78816069___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PurchaseSettings.vue?vue&type=template&id=78816069& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=template&id=78816069&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/GeneralSettings.vue?vue&type=template&id=1b8acc0c&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/GeneralSettings.vue?vue&type=template&id=1b8acc0c& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        "v-row",
        [
          _c(
            "v-toolbar",
            { attrs: { flat: "", color: "white" } },
            [
              _c("v-toolbar-title", [_vm._v("الاعدادات العامة")]),
              _vm._v(" "),
              _c("v-divider", {
                staticClass: "mx-4",
                attrs: { inset: "", vertical: "" }
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-spacer")
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-tabs",
            {
              attrs: { centered: "", "icons-and-text": "" },
              model: {
                value: _vm.tab,
                callback: function($$v) {
                  _vm.tab = $$v
                },
                expression: "tab"
              }
            },
            [
              _c("v-tabs-slider"),
              _vm._v(" "),
              _c(
                "v-tab",
                [
                  _vm._v("\n        إعدادات الشركة\n        "),
                  _c("v-icon", [_vm._v("mdi-phone")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab",
                [
                  _vm._v("\n        المنتجات\n        "),
                  _c("v-icon", [_vm._v("mdi-phone")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab",
                [
                  _vm._v("\n        فواتير المشتريات\n        "),
                  _c("v-icon", [_vm._v("mdi-heart")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab",
                [
                  _vm._v("\n        فواتير المبيعات\n        "),
                  _c("v-icon", [_vm._v("mdi-account-box")])
                ],
                1
              )
            ],
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
                    "v-card",
                    { attrs: { flat: "", "min-height": "500" } },
                    [
                      _c("company-settings", {
                        attrs: {
                          cities: _vm.cities,
                          companySettingsOptions: _vm.companySettingsOptions
                        },
                        on: {
                          changeCountry: _vm.loadCities,
                          companySettingsMethod: _vm.companySettingsMethod
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
                "v-tab-item",
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "", "min-height": "500" } },
                    [
                      _c("product-settings", {
                        attrs: {
                          productSettingsOptions: _vm.productSettingsOptions
                        },
                        on: { productSettingsMethod: _vm.productSettingsMethod }
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
                    "v-card",
                    { attrs: { flat: "", "min-height": "500" } },
                    [_c("purchase-settings")],
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
                    "v-card",
                    { attrs: { flat: "", "min-height": "500" } },
                    [_c("product-settings")],
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/CompanySettings.vue?vue&type=template&id=278b3daa&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/CompanySettings.vue?vue&type=template&id=278b3daa& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { staticClass: "mx-3" },
    [
      _c(
        "v-col",
        [
          _c(
            "v-row",
            [
              _c(
                "v-toolbar",
                { attrs: { flat: "", color: "white" } },
                [
                  _c(
                    "v-toolbar-title",
                    { staticStyle: { "font-size": "14px", color: "crimson" } },
                    [_vm._v("اعدادات الشركة")]
                  ),
                  _vm._v(" "),
                  _c("v-divider", {
                    staticClass: "mx-4",
                    attrs: { inset: "", vertical: "" }
                  }),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-spacer")
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
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "اسم الشركة*", required: "" },
                        model: {
                          value: _vm.companySettingsOptions.company_name,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.companySettingsOptions,
                              "company_name",
                              $$v
                            )
                          },
                          expression: "companySettingsOptions.company_name"
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
                        attrs: { label: "جهة الاتصال *", required: "" },
                        model: {
                          value: _vm.companySettingsOptions.name,
                          callback: function($$v) {
                            _vm.$set(_vm.companySettingsOptions, "name", $$v)
                          },
                          expression: "companySettingsOptions.name"
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
                          items: _vm.countries,
                          "item-text": "en_name",
                          "item-value": "id",
                          prefix: "البلد |",
                          autocomplete: "off"
                        },
                        on: { change: _vm.loadCities },
                        model: {
                          value: _vm.companySettingsOptions.country_id,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.companySettingsOptions,
                              "country_id",
                              $$v
                            )
                          },
                          expression: "companySettingsOptions.country_id"
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
                          items: _vm.cities,
                          "item-text": "en_name",
                          "item-value": "id",
                          prefix: "المدينة |",
                          autocomplete: "off"
                        },
                        model: {
                          value: _vm.companySettingsOptions.city_id,
                          callback: function($$v) {
                            _vm.$set(_vm.companySettingsOptions, "city_id", $$v)
                          },
                          expression: "companySettingsOptions.city_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-textarea", {
                        attrs: { rows: "2", label: "العنوان", required: "" },
                        model: {
                          value: _vm.companySettingsOptions.address,
                          callback: function($$v) {
                            _vm.$set(_vm.companySettingsOptions, "address", $$v)
                          },
                          expression: "companySettingsOptions.address"
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
                        attrs: { label: "رقم الاتصال الأساسي", required: "" },
                        model: {
                          value: _vm.companySettingsOptions.phone01,
                          callback: function($$v) {
                            _vm.$set(_vm.companySettingsOptions, "phone01", $$v)
                          },
                          expression: "companySettingsOptions.phone01"
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
                        attrs: { label: "رقم الاتصال الثانوي", required: "" },
                        model: {
                          value: _vm.companySettingsOptions.phone02,
                          callback: function($$v) {
                            _vm.$set(_vm.companySettingsOptions, "phone02", $$v)
                          },
                          expression: "companySettingsOptions.phone02"
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
                        attrs: { label: "البريد الالكتروني", required: "" },
                        model: {
                          value: _vm.companySettingsOptions.email,
                          callback: function($$v) {
                            _vm.$set(_vm.companySettingsOptions, "email", $$v)
                          },
                          expression: "companySettingsOptions.email"
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
                        attrs: { label: "الموقع الالكتروني", required: "" },
                        model: {
                          value: _vm.companySettingsOptions.website,
                          callback: function($$v) {
                            _vm.$set(_vm.companySettingsOptions, "website", $$v)
                          },
                          expression: "companySettingsOptions.website"
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
        "v-col",
        { attrs: { cols: "12" } },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
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
                      _vm._v("حفظ\n        ")
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/ProductSettings.vue?vue&type=template&id=6221d69d&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/ProductSettings.vue?vue&type=template&id=6221d69d& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { staticClass: "mx-3" },
    [
      _c(
        "v-col",
        [
          _c(
            "v-row",
            [
              _c(
                "v-toolbar",
                { attrs: { flat: "", color: "white" } },
                [
                  _c(
                    "v-toolbar-title",
                    { staticStyle: { "font-size": "14px", color: "crimson" } },
                    [_vm._v("اعدادات المنتجات")]
                  ),
                  _vm._v(" "),
                  _c("v-divider", {
                    staticClass: "mx-4",
                    attrs: { inset: "", vertical: "" }
                  }),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-spacer")
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
                "v-col",
                { attrs: { cols: "12", lg: "4" } },
                [
                  _c("v-checkbox", {
                    staticStyle: {
                      "white-space": "nowrap",
                      "margin-left": "5px",
                      "margin-right": "5px",
                      "margin-top": "0px"
                    },
                    attrs: {
                      color: "#e91e63",
                      label: "اعتماد خصم البيع لجميع المنتجات"
                    },
                    model: {
                      value: _vm.productSettingsOptions.sold_discount_is_active,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.productSettingsOptions,
                          "sold_discount_is_active",
                          $$v
                        )
                      },
                      expression:
                        "productSettingsOptions.sold_discount_is_active"
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
                  _c("v-text-field", {
                    attrs: { autocomplete: "off", label: "خصم عند البيع" },
                    model: {
                      value: _vm.productSettingsOptions.sold_discount,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.productSettingsOptions,
                          "sold_discount",
                          $$v
                        )
                      },
                      expression: "productSettingsOptions.sold_discount"
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
                  _c("v-autocomplete", {
                    attrs: {
                      label: "طريقة الحساب",
                      items: _vm.discount_types,
                      "item-text": "ar_name",
                      "item-value": "id"
                    },
                    model: {
                      value: _vm.productSettingsOptions.sold_discount_type_id,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.productSettingsOptions,
                          "sold_discount_type_id",
                          $$v
                        )
                      },
                      expression: "productSettingsOptions.sold_discount_type_id"
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
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", lg: "4" } },
                [
                  _c("v-checkbox", {
                    staticStyle: {
                      "white-space": "nowrap",
                      "margin-left": "5px",
                      "margin-right": "5px",
                      "margin-top": "0px"
                    },
                    attrs: {
                      color: "#e91e63",
                      label: "اعتماد خصم الشراء لجميع المنتجات"
                    },
                    model: {
                      value:
                        _vm.productSettingsOptions.purchase_discount_is_active,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.productSettingsOptions,
                          "purchase_discount_is_active",
                          $$v
                        )
                      },
                      expression:
                        "productSettingsOptions.purchase_discount_is_active"
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
                  _c("v-text-field", {
                    attrs: { autocomplete: "off", label: "خصم عند الشراء" },
                    model: {
                      value: _vm.productSettingsOptions.purchase_discount,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.productSettingsOptions,
                          "purchase_discount",
                          $$v
                        )
                      },
                      expression: "productSettingsOptions.purchase_discount"
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
                  _c("v-autocomplete", {
                    attrs: {
                      label: "طريقة الحساب",
                      items: _vm.discount_types,
                      "item-text": "ar_name",
                      "item-value": "id"
                    },
                    model: {
                      value:
                        _vm.productSettingsOptions.purchase_discount_type_id,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.productSettingsOptions,
                          "purchase_discount_type_id",
                          $$v
                        )
                      },
                      expression:
                        "productSettingsOptions.purchase_discount_type_id"
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
        { attrs: { cols: "12" } },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
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
                      _vm._v("حفظ\n        ")
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=template&id=78816069&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=template&id=78816069& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_vm._v("purchase")])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);