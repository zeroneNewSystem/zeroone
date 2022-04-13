"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_accounts_moneyMove_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/accounts/moneyMove.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/accounts/moneyMove.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Account */ "./resources/js/apis/Account.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      value: 0,
      query: false,
      show: true,
      interval: 0,
      from_account_disabled: false,
      //-------------
      snackbar: false,
      snackbarText: "تأكد من تعبئة الحقول",
      snackbarTimeout: 2000,
      //-------------
      date_is_down: false,
      from_accounts: [],
      to_accounts: [],
      money_move: {
        type_id: 1,
        from_account_id: "",
        to_account_id: "",
        document_type_id: -1,
        created_at: ""
      },
      title: "حركة الأموال"
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      _apis_Account__WEBPACK_IMPORTED_MODULE_0__.default.moneyMoveStore(this.money_move).then(function (response) {
        _this.snackbar = true;
      });
    },
    createPage: function createPage(to, status) {
      var _Account$moneyMoveCre,
          _this2 = this;

      this.query = true;
      this.show = true;
      var from_account_type = "11";
      var to_account_type = "11";
      this.route = to.fullPath.replace(/^\/([^\/]*).*$/, "$1");
      console.log(this.route);
      console.log("to");

      if (this.route == "money_moves") {
        this.money_move.document_type_id = -1;
        from_account_type = "11";
        to_account_type = "11";
        this.title = "حركة أموال";
      }

      if (this.route == "additional_money") {
        this.money_move.document_type_id = -2;
        from_account_type = "3";
        to_account_type = "11";
        this.title = "إضافة إلى رأس المال";
      }

      if (this.route == "fixed_asset_depreciation") {
        this.money_move.document_type_id = -3;
        from_account_type = "12";
        to_account_type = "52";
        this.title = "إهلاك أصل ثابت";
      }

      if (this.route == "owner_withdraw") {
        from_account_type = "1";
        to_account_type = "3";
        this.money_move.document_type_id = -4;
        this.title = "سحب المالك";
      }

      if (this.route == "distribute_profits") {
        from_account_type = "34";
        to_account_type = "3";
        this.money_move.document_type_id = -5;
        this.title = "توزيع الأرباح";
      }

      _apis_Account__WEBPACK_IMPORTED_MODULE_0__.default.moneyMoveCreate((_Account$moneyMoveCre = {}, _defineProperty(_Account$moneyMoveCre, from_account_type, from_account_type), _defineProperty(_Account$moneyMoveCre, to_account_type, to_account_type), _Account$moneyMoveCre)).then(function (response) {
        _this2.from_accounts = response.data[from_account_type];
        _this2.to_accounts = response.data[to_account_type];
        _this2.from_account_disabled = false;

        if (_this2.route == "distribute_profits") {
          _this2.from_accounts = _this2.from_accounts.find(function (elem) {
            return elem.account_code == "3402";
          });
          _this2.money_move.from_account_id = 50;
          _this2.from_account_disabled = true;
          _this2.to_accounts = _this2.to_accounts.filter(function (elem) {
            return elem.account_code != "3402";
          });
        }

        _this2.query = false;
        _this2.show = false;
      });
    }
  },
  created: function created() {
    this.createPage(this.$route, "new");
  },
  watch: {
    $route: function $route(to, from) {
      console.log("from");
      console.log(to);
      this.createPage(to, "old");
    }
  }
});

/***/ }),

/***/ "./resources/js/components/main/accounts/moneyMove.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/main/accounts/moneyMove.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _moneyMove_vue_vue_type_template_id_8e6d2b3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moneyMove.vue?vue&type=template&id=8e6d2b3a& */ "./resources/js/components/main/accounts/moneyMove.vue?vue&type=template&id=8e6d2b3a&");
/* harmony import */ var _moneyMove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moneyMove.vue?vue&type=script&lang=js& */ "./resources/js/components/main/accounts/moneyMove.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _moneyMove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _moneyMove_vue_vue_type_template_id_8e6d2b3a___WEBPACK_IMPORTED_MODULE_0__.render,
  _moneyMove_vue_vue_type_template_id_8e6d2b3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/accounts/moneyMove.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/accounts/moneyMove.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/main/accounts/moneyMove.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moneyMove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./moneyMove.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/accounts/moneyMove.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moneyMove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/accounts/moneyMove.vue?vue&type=template&id=8e6d2b3a&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/main/accounts/moneyMove.vue?vue&type=template&id=8e6d2b3a& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moneyMove_vue_vue_type_template_id_8e6d2b3a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moneyMove_vue_vue_type_template_id_8e6d2b3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moneyMove_vue_vue_type_template_id_8e6d2b3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./moneyMove.vue?vue&type=template&id=8e6d2b3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/accounts/moneyMove.vue?vue&type=template&id=8e6d2b3a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/accounts/moneyMove.vue?vue&type=template&id=8e6d2b3a&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/accounts/moneyMove.vue?vue&type=template&id=8e6d2b3a& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        [_vm._v(_vm._s(_vm.snackbarText))]
      ),
      _vm._v(" "),
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
            "v-col",
            [
              _c(
                "v-toolbar",
                { attrs: { flat: "", color: "white" } },
                [_c("v-toolbar-title", [_vm._v(_vm._s(_vm.title) + " ")])],
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
        "v-container",
        [
          _c(
            "v-row",
            { staticClass: "justify-center" },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", lg: "5" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { staticClass: "pa-0", attrs: { cols: "12" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              disabled: _vm.from_account_disabled,
                              flat: "",
                              outlined: "",
                              "no-data": "",
                              "no-data-text": "",
                              "non-linear": "",
                              items: _vm.from_accounts,
                              "item-text": function(item) {
                                return item.account_code + " - " + item.ar_name
                              },
                              "item-value": "id",
                              prefix: " من حساب | "
                            },
                            model: {
                              value: _vm.money_move.from_account_id,
                              callback: function($$v) {
                                _vm.$set(_vm.money_move, "from_account_id", $$v)
                              },
                              expression: "money_move.from_account_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pa-0", attrs: { cols: "12" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              flat: "",
                              outlined: "",
                              "no-data": "",
                              "no-data-text": "",
                              "non-linear": "",
                              items: _vm.to_accounts,
                              "item-text": function(item) {
                                return item.account_code + " - " + item.ar_name
                              },
                              "item-value": "id",
                              prefix: " إلى حساب | "
                            },
                            model: {
                              value: _vm.money_move.to_account_id,
                              callback: function($$v) {
                                _vm.$set(_vm.money_move, "to_account_id", $$v)
                              },
                              expression: "money_move.to_account_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pa-0", attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "number",
                              prefix: " القيمة | ",
                              outlined: ""
                            },
                            model: {
                              value: _vm.money_move.amount,
                              callback: function($$v) {
                                _vm.$set(_vm.money_move, "amount", $$v)
                              },
                              expression: "money_move.amount"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pa-0", attrs: { cols: "12" } },
                        [
                          _c(
                            "v-menu",
                            {
                              ref: "issue_date",
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
                                                flat: "",
                                                outlined: "",
                                                autocomplete: "off",
                                                "hide-no-data": "",
                                                prefix: "  التاريخ | "
                                              },
                                              on: {
                                                keydown: function($event) {
                                                  if (
                                                    !$event.type.indexOf(
                                                      "key"
                                                    ) &&
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
                                                value:
                                                  _vm.money_move.created_at,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.money_move,
                                                    "created_at",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "money_move.created_at"
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
                                  value: _vm.money_move.created_at,
                                  callback: function($$v) {
                                    _vm.$set(_vm.money_move, "created_at", $$v)
                                  },
                                  expression: "money_move.created_at"
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
                        { staticClass: "pa-0", attrs: { cols: "12" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              rows: "3",
                              outlined: "",
                              prefix: " الوصف | "
                            },
                            model: {
                              value: _vm.money_move.description,
                              callback: function($$v) {
                                _vm.$set(_vm.money_move, "description", $$v)
                              },
                              expression: "money_move.description"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pa-0", attrs: { cols: "12" } },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass:
                                "btn btn-info m-b-5 m-r-2 white--text",
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
                              _vm._v(" حفظ\n            ")
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);