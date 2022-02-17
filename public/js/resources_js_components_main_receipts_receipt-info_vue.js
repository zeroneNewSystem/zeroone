"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_receipts_receipt-info_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt-info.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt-info.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Receipt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Receipt */ "./resources/js/apis/Receipt.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: false,
      headers: [{
        text: "م",
        align: "center",
        width: "5",
        sortable: false,
        value: "id"
      }, {
        text: "التاريخ",
        align: "center",
        value: "issue_date"
      }, {
        text: "المخصص له",
        align: "center",
        value: "used_for"
      }, {
        text: "المرجع",
        align: "center",
        sortable: false,
        value: "receipt_reference"
      }, {
        text: "المبلغ ",
        align: "center",
        value: "amount"
      }, {
        text: "التحكم ",
        align: "center",
        value: "actions"
      }],
      receipt: {
        company_name: ""
      }
    };
  },
  methods: {
    deleteReceipt: function deleteReceipt(sup_duc) {
      var _this = this;

      _apis_Receipt__WEBPACK_IMPORTED_MODULE_0__.default.deleteSupDoc({
        receipt_id: this.receipt.id,
        id: sup_duc.sup_doc_id
      }).then(function (response) {
        return _this.DataProcessing(response);
      });
    },
    DataProcessing: function DataProcessing(response) {
      this.receipt = response.data;
      this.uses_of_receipt = response.data.uses_of_receipt;
    }
  },
  created: function created() {
    var _this2 = this;

    if (this.$route.params.id) {
      _apis_Receipt__WEBPACK_IMPORTED_MODULE_0__.default.getOne(this.$route.params.id).then(function (response) {
        if (response.data.code == 20) return;

        _this2.DataProcessing(response);
      });
    }
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

/***/ "./resources/js/components/main/receipts/receipt-info.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/main/receipts/receipt-info.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _receipt_info_vue_vue_type_template_id_4d8c54a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receipt-info.vue?vue&type=template&id=4d8c54a8& */ "./resources/js/components/main/receipts/receipt-info.vue?vue&type=template&id=4d8c54a8&");
/* harmony import */ var _receipt_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receipt-info.vue?vue&type=script&lang=js& */ "./resources/js/components/main/receipts/receipt-info.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _receipt_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _receipt_info_vue_vue_type_template_id_4d8c54a8___WEBPACK_IMPORTED_MODULE_0__.render,
  _receipt_info_vue_vue_type_template_id_4d8c54a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/receipts/receipt-info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/receipts/receipt-info.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/main/receipts/receipt-info.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receipt-info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt-info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/receipts/receipt-info.vue?vue&type=template&id=4d8c54a8&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/main/receipts/receipt-info.vue?vue&type=template&id=4d8c54a8& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_info_vue_vue_type_template_id_4d8c54a8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_info_vue_vue_type_template_id_4d8c54a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_info_vue_vue_type_template_id_4d8c54a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receipt-info.vue?vue&type=template&id=4d8c54a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt-info.vue?vue&type=template&id=4d8c54a8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt-info.vue?vue&type=template&id=4d8c54a8&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receipt-info.vue?vue&type=template&id=4d8c54a8& ***!
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
    "div",
    { staticClass: "pa-4" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            {
              staticClass: "mb-6",
              staticStyle: { "text-align": "start", background: "#acacac" },
              attrs: { cols: "12" }
            },
            [
              _vm._v(
                "\n          بيانات السند " +
                  _vm._s(_vm.receipt.receipt_reference) +
                  "\n      "
              )
            ]
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
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [_vm._v("\n          الشركة\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.receipt.company_name) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [_vm._v("\n          الحساب\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.receipt.ar_name) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [_vm._v("\n          رقم المرجع\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.receipt.receipt_reference) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [_vm._v("\n          الوصف\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.receipt.description) +
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
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [_vm._v("\n          التاريخ\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.receipt.date.split(" ")[0]) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [_vm._v("\n          المبلغ\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.receipt.amount) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [_vm._v("\n          النوع\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.receipt.type_d == 1 ? "صرف" : "قبض") +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [_vm._v("\n          المبلغ غير المستخدم\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: {
                        "text-align": "start",
                        "font-size": "14px"
                      },
                      attrs: { cols: "12", lg: "6" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.receipt.amount - _vm.receipt.spentAmount) +
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
        [
          _c(
            "v-col",
            {
              staticClass: "mt-6",
              staticStyle: { "text-align": "start" },
              attrs: { cols: "12" }
            },
            [_vm._v("\n      \n      تخصيصات السند ")]
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
            [
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.uses_of_receipt,
                  loading: _vm.loading
                },
                scopedSlots: _vm._u([
                  {
                    key: "item.issue_date",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _vm._v(
                          "\n          " +
                            _vm._s(item.issue_date.split(" ")[0]) +
                            "\n        "
                        )
                      ]
                    }
                  },
                  {
                    key: "item.used_for",
                    fn: function(ref) {
                      var item = ref.item
                      return [_vm._v(" فاتورة شراء ")]
                    }
                  },
                  {
                    key: "item.receipt_reference",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _vm._v(
                          "\n          " + _vm._s(item.bill_id) + "\n        "
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
                          "v-btn",
                          {
                            attrs: { icon: "" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.deleteReceipt(item)
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);