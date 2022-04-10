"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_accounts_JournalEntries_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/accounts/JournalEntries.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/accounts/JournalEntries.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Account */ "./resources/js/apis/Account.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      value: 0,
      query: true,
      show: true,
      documents: [{
        name: "",
        date: "",
        accounts: [{
          ar_name: "",
          detail: "",
          debit: "",
          credit: ""
        }]
      }]
    };
  },
  methods: {
    debit_sum: function debit_sum(document) {
      var sum_of_debits = 0;
      document.accounts.forEach(function (element) {
        sum_of_debits += +element.debit;
      });
      return sum_of_debits;
    },
    credit_sum: function credit_sum(document) {
      var sum_of_credits = 0;
      document.accounts.forEach(function (element) {
        sum_of_credits += +element.credit;
      });
      return sum_of_credits;
    }
  },
  created: function created() {
    var _this = this;

    _apis_Account__WEBPACK_IMPORTED_MODULE_0__.default.getJurnalEntries().then(function (response) {
      _this.query = false;
      _this.show = false;
      _this.documents = response.data;
    });
  }
});

/***/ }),

/***/ "./resources/js/components/main/accounts/JournalEntries.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/main/accounts/JournalEntries.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JournalEntries_vue_vue_type_template_id_26e8f437___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JournalEntries.vue?vue&type=template&id=26e8f437& */ "./resources/js/components/main/accounts/JournalEntries.vue?vue&type=template&id=26e8f437&");
/* harmony import */ var _JournalEntries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JournalEntries.vue?vue&type=script&lang=js& */ "./resources/js/components/main/accounts/JournalEntries.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _JournalEntries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _JournalEntries_vue_vue_type_template_id_26e8f437___WEBPACK_IMPORTED_MODULE_0__.render,
  _JournalEntries_vue_vue_type_template_id_26e8f437___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/accounts/JournalEntries.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/accounts/JournalEntries.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/main/accounts/JournalEntries.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JournalEntries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JournalEntries.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/accounts/JournalEntries.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JournalEntries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/accounts/JournalEntries.vue?vue&type=template&id=26e8f437&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/main/accounts/JournalEntries.vue?vue&type=template&id=26e8f437& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JournalEntries_vue_vue_type_template_id_26e8f437___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JournalEntries_vue_vue_type_template_id_26e8f437___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JournalEntries_vue_vue_type_template_id_26e8f437___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JournalEntries.vue?vue&type=template&id=26e8f437& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/accounts/JournalEntries.vue?vue&type=template&id=26e8f437&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/accounts/JournalEntries.vue?vue&type=template&id=26e8f437&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/accounts/JournalEntries.vue?vue&type=template&id=26e8f437& ***!
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
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticStyle: { height: "10px" } },
            [
              _c("v-progress-linear", {
                attrs: {
                  active: _vm.show,
                  indeterminate: _vm.query,
                  query: true
                },
                model: {
                  value: _vm.value,
                  callback: function($$v) {
                    _vm.value = $$v
                  },
                  expression: "value"
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
            "v-toolbar",
            { attrs: { flat: "", color: "white" } },
            [
              _c("v-toolbar-title", [_vm._v("دفتر القيود اليومية")]),
              _vm._v(" "),
              _c("v-divider", {
                staticClass: "mx-4",
                attrs: { inset: "", vertical: "" }
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { primary: "" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.showDialog()
                    }
                  }
                },
                [_vm._v(" إضافة وحدة ")]
              ),
              _vm._v(" "),
              _c("v-spacer")
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticStyle: { height: "10px" } }),
      _vm._v(" "),
      _vm._l(_vm.documents, function(document) {
        return _c(
          "v-row",
          {
            key: document.name,
            staticClass: "ma-2",
            staticStyle: { "font-size": "small", border: "1px solid lightgrey" }
          },
          [
            _c(
              "v-col",
              [
                _c(
                  "v-row",
                  {
                    staticStyle: {
                      background: "#ffeaf5",
                      "border-bottom": "1px solid lightgrey"
                    }
                  },
                  [
                    _c("v-col", [
                      _vm._v(
                        " " +
                          _vm._s(document.name) +
                          " رقم: " +
                          _vm._s(document.id) +
                          " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-col", [
                      _vm._v(" تاريخ الفاتورة: " + _vm._s(document.date) + " ")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { staticStyle: { background: "#ffeae0" } },
                  [
                    _c("v-col", [_vm._v("الحساب")]),
                    _vm._v(" "),
                    _c("v-col", [_vm._v("التفصيل")]),
                    _vm._v(" "),
                    _c("v-col", [_vm._v("مدين")]),
                    _vm._v(" "),
                    _c("v-col", [_vm._v("دائن")])
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._l(document.accounts, function(account) {
                  return _c(
                    "v-row",
                    {
                      key: account.id,
                      staticClass: "father-account",
                      staticStyle: { background: "#eaf3f2" }
                    },
                    [
                      _c(
                        "v-col",
                        {
                          staticStyle: {
                            "text-align": "start",
                            "border-top": "1px solid white",
                            "border-left": "1px solid white"
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(account.account_code) +
                              " - " +
                              _vm._s(account.ar_name)
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticStyle: {
                            "border-top": "1px solid white",
                            "border-left": "1px solid white"
                          }
                        },
                        [_vm._v(" " + _vm._s(account.detail))]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticStyle: {
                            "border-top": "1px solid white",
                            "border-left": "1px solid white"
                          }
                        },
                        [_vm._v(" " + _vm._s(account.debit.toFixed(2)))]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticStyle: {
                            "border-top": "1px solid white",
                            "border-left": "1px solid white"
                          }
                        },
                        [_vm._v(" " + _vm._s(account.credit.toFixed(2)))]
                      )
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _c(
                  "v-row",
                  [
                    _c("v-col", [_vm._v("المجموع")]),
                    _vm._v(" "),
                    _c("v-col"),
                    _vm._v(" "),
                    _c("v-col", [
                      _vm._v(_vm._s(_vm.debit_sum(document).toFixed(2)))
                    ]),
                    _vm._v(" "),
                    _c("v-col", [
                      _vm._v(_vm._s(_vm.credit_sum(document).toFixed(2)) + " ")
                    ])
                  ],
                  1
                )
              ],
              2
            )
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);