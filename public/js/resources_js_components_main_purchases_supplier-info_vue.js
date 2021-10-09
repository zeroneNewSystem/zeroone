"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_purchases_supplier-info_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Supplier */ "./resources/js/apis/Supplier.js");
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
  data: function data() {
    return {
      pur_loading: false,
      reciept_loading: false,
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
        text: "لتحكم ",
        align: "center",
        value: "actions"
      }],
      reciept_headers: [{
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
        text: "لتحكم ",
        align: "center",
        value: "actions"
      }],
      pur_options: {},
      reciept_options: {},
      supplier: "",
      total_of_purchases: 0,
      purchases: [],
      reciepts: [],
      purchases_total: 0,
      reciept_total: 0,
      arrears: 0,
      balance: 0,
      purchases_count: 0
    };
  },
  computed: {
    pur_params: function pur_params(nv) {
      return _objectSpread({}, this.pur_options);
    },
    reciept_params: function reciept_params(nv) {
      return _objectSpread({}, this.reciept_options);
    }
  },
  watch: {
    pur_params: {
      handler: function handler() {
        var _this = this;

        var pur_page = this.pur_options.page;
        var pur_itemsPerPage = this.pur_options.itemsPerPage; //console.log(this.purchase_options)

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
    reciept_params: {
      handler: function handler() {
        var _this2 = this;

        var reciept_page = this.reciept_options.page;
        var reciept_itemsPerPage = this.reciept_options.itemsPerPage; //console.log(this.reciept_options)

        console.log("itemsPerPage", reciept_itemsPerPage);
        _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__.default.getOne({
          reciept_page: reciept_page,
          reciept_itemsPerPage: reciept_itemsPerPage
        }).then(function (response) {
          _this2.DataProcessing(response);
        });
      },
      deep: true
    }
  },
  created: function created() {},
  methods: {
    DataProcessing: function DataProcessing(response, type) {
      if (type == "pur") {
        this.purchases = response.data;
        this.total_of_purchases = response.total;
      }

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

/***/ "./resources/js/components/main/purchases/supplier-info.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/main/purchases/supplier-info.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-info.vue?vue&type=template&id=54dab5c7& */ "./resources/js/components/main/purchases/supplier-info.vue?vue&type=template&id=54dab5c7&");
/* harmony import */ var _supplier_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-info.vue?vue&type=script&lang=js& */ "./resources/js/components/main/purchases/supplier-info.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
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
component.options.__file = "resources/js/components/main/purchases/supplier-info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/purchases/supplier-info.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/main/purchases/supplier-info.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/purchases/supplier-info.vue?vue&type=template&id=54dab5c7&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/main/purchases/supplier-info.vue?vue&type=template&id=54dab5c7& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info.vue?vue&type=template&id=54dab5c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=template&id=54dab5c7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=template&id=54dab5c7&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=template&id=54dab5c7& ***!
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
    { staticStyle: { padding: "20px" } },
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
                {
                  staticStyle: {
                    "font-size": "14px",
                    border: "1px solid #bababa",
                    "border-radius": "5px",
                    padding: "10px"
                  }
                },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-0",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v(" الاسم ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-0",
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
                      staticClass: "pa-0",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("\n          الشركة\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-0",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.supplier.compnay_name) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-0",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("\n          رقم الاتصال\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-0",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.supplier.phone) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-0",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("\n          البريد الالكتروني\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-0",
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-0",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("\n          العنوان\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-0",
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
          ),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "12", lg: "6" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-col", [
            _vm._v("\n      " + _vm._s(_vm.total_of_purchases) + "\n    ")
          ]),
          _vm._v(" "),
          _c("v-col", [_vm._v("\n      " + _vm._s(_vm.arrears) + "\n    ")]),
          _vm._v(" "),
          _c("v-col", [_vm._v("\n      " + _vm._s(_vm.balance) + "\n    ")]),
          _vm._v(" "),
          _c("v-col", [
            _vm._v("\n      " + _vm._s(_vm.purchases_count) + "\n    ")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-data-table", {
            staticClass: "elevation-1",
            staticStyle: { width: "100%" },
            attrs: {
              headers: _vm.purchase_headers,
              items: _vm.purchases,
              options: _vm.pur_options,
              "server-items-length": _vm.purchases_total,
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
                key: "item.payment_status_id",
                fn: function(ref) {
                  var item = ref.item
                  return [_vm._v(" paid ")]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-data-table", {
            staticClass: "elevation-1",
            staticStyle: { width: "100%" },
            attrs: {
              headers: _vm.reciept_headers,
              items: _vm.reciepts,
              options: _vm.reciept_options,
              "server-items-length": _vm.reciept_total,
              loading: _vm.reciept_loading
            },
            on: {
              "update:options": function($event) {
                _vm.reciept_options = $event
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
                key: "item.payment_status_id",
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