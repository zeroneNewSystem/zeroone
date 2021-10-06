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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      supplier: "",
      total_of_purchases: 0,
      purchases: [],
      arrears: 0
    };
  },
  created: function created() {
    var _this = this;

    if (this.$route.params.id) {
      _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__.default.getOne(this.$route.params.id).then(function (response) {
        _this.supplier = response.data.supplier[0];

        _this.purchase_processing(response.data.purchases);
      });
    }
  },
  methods: {
    purchase_processing: function purchase_processing(purchases) {
      var elper = [];

      if (purchases.length > 0) {
        purchases.forEach(function (element) {
          //amount null -> 0
          if (element.amount == null) element.amount = 0;

          if (element.supdoc_id) {
            if (!elper.find(function (elem) {
              return element.id == elem.id;
            })) {
              elper.push(element);
            } else {
              elper[elper.findIndex(function (elem) {
                return element.id == elem.id;
              })].amount += element.amount;
            }

            return;
          }

          elper.push(element);
        });
        console.log("elper", elper);
        var x = elper.reduce(function (a, b) {
          return a + b.total_amount;
        }, 0);
        var y = elper.reduce(function (a, b) {
          return a + b.amount;
        }, 0);
        var z = elper.reduce(function (a, b) {
          return a + b.paid_amount;
        }, 0);
        this.arrears = x - y - z;
        this.total_of_purchases = x; //ألغاء التكرار

        return x;
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
  getOne: function getOne(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/suppliers/" + id);
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
          _c("v-col", [_vm._v("\n      " + _vm._s(_vm.arrears) + "\n    ")])
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