"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_bonds_bond-info_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bonds/bond-info.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bonds/bond-info.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Bond__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Bond */ "./resources/js/apis/Bond.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        value: "bond_reference"
      }, {
        text: "المبلغ ",
        align: "center",
        value: "amount"
      }, {
        text: "التحكم ",
        align: "center",
        value: "actions"
      }],
      bond: {
        company_name: ""
      }
    };
  },
  methods: {
    deleteBond: function deleteBond(sup_duc) {
      var _this = this;

      _apis_Bond__WEBPACK_IMPORTED_MODULE_0__.default.deleteSupDoc({
        bond_id: this.bond.id,
        id: sup_duc.sup_doc_id
      }).then(function (response) {
        return _this.DataProcessing(response);
      });
    },
    DataProcessing: function DataProcessing(response) {
      this.bond = response.data;
      this.uses_of_bond = response.data.uses_of_bond;
    }
  },
  created: function created() {
    var _this2 = this;

    if (this.$route.params.id) {
      _apis_Bond__WEBPACK_IMPORTED_MODULE_0__.default.getOne(this.$route.params.id).then(function (response) {
        if (response.data.code == 20) return;

        _this2.DataProcessing(response);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/apis/Bond.js":
/*!***********************************!*\
  !*** ./resources/js/apis/Bond.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(bond) {
    console.log('bond', bond);
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/bonds", bond);
  },
  getOne: function getOne(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/bonds/" + id);
  },
  create: function create() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/bonds/create");
  },
  update: function update(bond) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/bonds", bond);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/bonds", {
      params: params
    });
  },
  deleteSupDoc: function deleteSupDoc(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/bonds/sup_doc", {
      params: params
    });
  },
  getAll: function getAll(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/bonds/all", {
      params: params
    });
  }
});

/***/ }),

/***/ "./resources/js/components/main/bonds/bond-info.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/main/bonds/bond-info.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bond_info_vue_vue_type_template_id_371cef2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bond-info.vue?vue&type=template&id=371cef2e& */ "./resources/js/components/main/bonds/bond-info.vue?vue&type=template&id=371cef2e&");
/* harmony import */ var _bond_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bond-info.vue?vue&type=script&lang=js& */ "./resources/js/components/main/bonds/bond-info.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _bond_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _bond_info_vue_vue_type_template_id_371cef2e___WEBPACK_IMPORTED_MODULE_0__.render,
  _bond_info_vue_vue_type_template_id_371cef2e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/bonds/bond-info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/bonds/bond-info.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/main/bonds/bond-info.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bond_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bond-info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bonds/bond-info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bond_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/bonds/bond-info.vue?vue&type=template&id=371cef2e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/main/bonds/bond-info.vue?vue&type=template&id=371cef2e& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bond_info_vue_vue_type_template_id_371cef2e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bond_info_vue_vue_type_template_id_371cef2e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bond_info_vue_vue_type_template_id_371cef2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bond-info.vue?vue&type=template&id=371cef2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bonds/bond-info.vue?vue&type=template&id=371cef2e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bonds/bond-info.vue?vue&type=template&id=371cef2e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bonds/bond-info.vue?vue&type=template&id=371cef2e& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                  _vm._s(_vm.te.bond_reference) +
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
                          _vm._s(_vm.bond.company_name) +
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
                        "\n          " + _vm._s(_vm.bond.ar_name) + "\n        "
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
                    [_vm._v("\n          رقم الفاتورة\n        ")]
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
                          _vm._s(_vm.bond.bond_reference) +
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
                          _vm._s(_vm.bond.description) +
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
                          _vm._s(_vm.bond.date.split(" ")[0]) +
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
                        "\n          " + _vm._s(_vm.bond.amount) + "\n        "
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
                          _vm._s(_vm.bond.type_d == 1 ? "صرف" : "قبض") +
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
                          _vm._s(_vm.bond.amount - _vm.bond.spentAmount) +
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
                  items: _vm.uses_of_bond,
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
                    key: "item.bond_reference",
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
                                return _vm.deleteBond(item)
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