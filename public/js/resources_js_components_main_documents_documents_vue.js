"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_documents_documents_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/documents.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/documents.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../apis/Document'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false,
      menu1: false,
      menu2: false,
      types: [{
        id: 1,
        ar_name: "صرف"
      }, {
        id: 2,
        ar_name: "نقد"
      }],
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
      search: {
        company_name: "",
        reference: "",
        minimum: "",
        maximum: "",
        status_id: "",
        date_from: "",
        date_to: ""
      },
      documents_total: 10,
      options: {},
      documents: [],
      headers: [{
        text: "م",
        align: "center",
        width: "5",
        sortable: false,
        value: "id"
      }, {
        text: "المرجع",
        align: "center",
        sortable: false,
        value: "reference"
      }, {
        text: "اسم المشتريات",
        align: "center",
        value: "company_name"
      }, {
        text: "تاريخ الإصدار",
        align: "center",
        value: "issue_date"
      }, {
        text: "	تاريخ الاستحقاق",
        align: "center",
        value: "maturity_date"
      }, {
        text: "قيمة الفاتورة",
        align: "center",
        value: "total_amount"
      }, {
        text: "الباقي",
        align: "center",
        value: "remainder"
      }, {
        text: "الحالة ",
        align: "center",
        value: "status"
      }, {
        text: "التحكم ",
        align: "center",
        value: "actions"
      }]
    };
  },
  methods: {
    deleteDocument: function deleteDocument(document) {
      var _this = this;

      var _this$options = this.options,
          sortBy = _this$options.sortBy,
          sortDesc = _this$options.sortDesc,
          page = _this$options.page,
          itemsPerPage = _this$options.itemsPerPage;
      Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../apis/Document'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        id: document.id,
        page: page,
        itemsPerPage: itemsPerPage,
        search: this.search
      }).then(function (response) {
        _this.documents = response.data.data;
        _this.documents_total = response.data.total;
      });
    },
    getDocuments: function getDocuments() {
      var _this2 = this;

      var _this$options2 = this.options,
          sortBy = _this$options2.sortBy,
          sortDesc = _this$options2.sortDesc,
          page = _this$options2.page,
          itemsPerPage = _this$options2.itemsPerPage;
      Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../apis/Document'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        page: page,
        itemsPerPage: itemsPerPage,
        search: this.search
      }).then(function (response) {
        _this2.documents = response.data.data;
        _this2.documents_total = response.data.total;
      });
    },
    searchReset: function searchReset() {
      var _this3 = this;

      Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../apis/Document'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        page: 1,
        itemsPerPage: 10,
        search: {}
      }).then(function (response) {
        _this3.documents = response.data.data;
        _this3.documents_total = response.data.total;
        _this3.search = {
          company_name: "",
          reference: "",
          minimum: "",
          maximum: "",
          status_id: "",
          date_from: "",
          date_to: ""
        };
      });
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread({}, this.options);
    }
  },
  watch: {
    params: {
      handler: function handler() {
        this.getDocuments();
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./resources/js/components/main/documents/documents.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/main/documents/documents.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _documents_vue_vue_type_template_id_ec9b66d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documents.vue?vue&type=template&id=ec9b66d4& */ "./resources/js/components/main/documents/documents.vue?vue&type=template&id=ec9b66d4&");
/* harmony import */ var _documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents.vue?vue&type=script&lang=js& */ "./resources/js/components/main/documents/documents.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _documents_vue_vue_type_template_id_ec9b66d4___WEBPACK_IMPORTED_MODULE_0__.render,
  _documents_vue_vue_type_template_id_ec9b66d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/documents/documents.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/documents/documents.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/main/documents/documents.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/documents.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/documents/documents.vue?vue&type=template&id=ec9b66d4&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/main/documents/documents.vue?vue&type=template&id=ec9b66d4& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_ec9b66d4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_ec9b66d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_ec9b66d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./documents.vue?vue&type=template&id=ec9b66d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/documents.vue?vue&type=template&id=ec9b66d4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/documents.vue?vue&type=template&id=ec9b66d4&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/documents.vue?vue&type=template&id=ec9b66d4& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.documents,
          options: _vm.options,
          "server-items-length": _vm.documents_total,
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
                    _c("v-toolbar-title", [_vm._v("إدارة المشتريات")]),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { inset: "", vertical: "" }
                    }),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { elevation: "", color: "primary" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.AddUpdatePerson("", "add")
                          }
                        }
                      },
                      [_vm._v("إضافة مشتريات")]
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
                      { attrs: { cols: "12", lg: "3" } },
                      [
                        _c("v-text-field", {
                          staticClass: "mx-4",
                          attrs: { label: "اسم المورد" },
                          model: {
                            value: _vm.search.company_name,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "company_name", $$v)
                            },
                            expression: "search.company_name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12", lg: "2" } },
                      [
                        _c("v-text-field", {
                          staticClass: "mx-4",
                          attrs: { label: "رقم الفاتورة" },
                          model: {
                            value: _vm.search.reference,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "reference", $$v)
                            },
                            expression: "search.reference"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12", lg: "3" } },
                      [
                        _c("v-autocomplete", {
                          attrs: {
                            items: _vm.statuses,
                            "item-text": "ar_name",
                            "item-value": "id",
                            label: "الحالة"
                          },
                          model: {
                            value: _vm.search.status_id,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "status_id", $$v)
                            },
                            expression: "search.status_id"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12", lg: "2" } },
                      [
                        _c("v-text-field", {
                          staticClass: "mx-4",
                          attrs: { label: "القيمة الأدنى" },
                          model: {
                            value: _vm.search.minimum,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "minimum", $$v)
                            },
                            expression: "search.minimum"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12", lg: "2" } },
                      [
                        _c("v-text-field", {
                          staticClass: "mx-4",
                          attrs: { label: "القيمة الأعالى" },
                          model: {
                            value: _vm.search.maximum,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "maximum", $$v)
                            },
                            expression: "search.maximum"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12", lg: "3" } },
                      [
                        _c(
                          "v-menu",
                          {
                            attrs: {
                              "close-on-content-click": false,
                              "nudge-right": 40,
                              transition: "scale-transition",
                              "offset-y": "",
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
                                              label: "من تاريخ",
                                              "prepend-icon": "mdi-calendar",
                                              readonly: ""
                                            },
                                            model: {
                                              value: _vm.search.date_from,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.search,
                                                  "date_from",
                                                  $$v
                                                )
                                              },
                                              expression: "search.date_from"
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
                              value: _vm.menu1,
                              callback: function($$v) {
                                _vm.menu1 = $$v
                              },
                              expression: "menu1"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c("v-date-picker", {
                              attrs: { "no-title": "" },
                              on: {
                                input: function($event) {
                                  _vm.menu1 = false
                                }
                              },
                              model: {
                                value: _vm.search.date_from,
                                callback: function($$v) {
                                  _vm.$set(_vm.search, "date_from", $$v)
                                },
                                expression: "search.date_from"
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
                      { attrs: { cols: "12", lg: "3" } },
                      [
                        _c(
                          "v-menu",
                          {
                            attrs: {
                              "close-on-content-click": false,
                              "nudge-right": 40,
                              transition: "scale-transition",
                              "offset-y": "",
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
                                              label: "إلى تاريخ",
                                              "prepend-icon": "mdi-calendar",
                                              readonly: ""
                                            },
                                            model: {
                                              value: _vm.search.date_to,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.search,
                                                  "date_to",
                                                  $$v
                                                )
                                              },
                                              expression: "search.date_to"
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
                              value: _vm.menu2,
                              callback: function($$v) {
                                _vm.menu2 = $$v
                              },
                              expression: "menu2"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c("v-date-picker", {
                              attrs: { "no-title": "" },
                              on: {
                                input: function($event) {
                                  _vm.menu2 = false
                                }
                              },
                              model: {
                                value: _vm.search.date_to,
                                callback: function($$v) {
                                  _vm.$set(_vm.search, "date_to", $$v)
                                },
                                expression: "search.date_to"
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
                      { attrs: { cols: "12", lg: "3" } },
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
                                    attrs: { elevation: "", color: "primary" },
                                    on: { click: _vm.getDocuments }
                                  },
                                  [_vm._v("البحث")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { elevation: "", color: "primary" },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.searchReset.apply(
                                          null,
                                          arguments
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("إعادة تعيين")]
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
              ]
            },
            proxy: true
          },
          {
            key: "item.type",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n      " +
                    _vm._s(
                      _vm.types.find(function(elem) {
                        return elem.id == item.type_id
                      }).ar_name
                    ) +
                    "\n    "
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
                  "\n      " +
                    _vm._s(
                      _vm.statuses.find(function(elem) {
                        return elem.id == item.status_id
                      }).ar_name
                    ) +
                    "\n    "
                )
              ]
            }
          },
          {
            key: "item.account",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n      " +
                    _vm._s(item.account_code) +
                    " - " +
                    _vm._s(item.ar_name) +
                    "\n    "
                )
              ]
            }
          },
          {
            key: "item.issue_date",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("div", { staticStyle: { "white-space": "nowrap" } }, [
                  _vm._v(
                    "\n        " +
                      _vm._s(item.issue_date.split(" ")[0]) +
                      "\n      "
                  )
                ])
              ]
            }
          },
          {
            key: "item.remainder",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n      " + _vm._s(item.remainder.toFixed(2)) + "\n    "
                )
              ]
            }
          },
          {
            key: "item.maturity_date",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n      " +
                    _vm._s(item.maturity_date.split(" ")[0]) +
                    "\n    "
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
                  { attrs: { to: "document/" + item.id } },
                  [
                    _c("v-icon", { attrs: { small: "" } }, [
                      _vm._v("mdi-pencil")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  { attrs: { to: "document/" + item.id } },
                  [
                    _c("v-icon", { attrs: { small: "" } }, [_vm._v("mdi-card")])
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
                        return _vm.deleteDocument(item, "update")
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