"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_products_units_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/units.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/units.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Unit */ "./resources/js/apis/Unit.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
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
      vld_match: [true],
      table_loading: false,
      isloading: false,
      operation: "add",
      dialog: false,
      search: "",
      unit: {
        ar_name: ""
      },
      units: [],
      units_header: [{
        text: " الاسم العربي ",
        align: "center",
        sortable: false,
        value: "ar_name"
      }, {
        text: "الاسم الانجليزي ",
        align: "center",
        sortable: false,
        value: "en_name"
      }, {
        text: "الخيارات",
        align: "center",
        sortable: false,
        value: "actions",
        width: 110
      }]
    };
  },
  methods: {
    saveUnit: function saveUnit() {
      var _this = this;

      // check if its exists
      if (this.units.findIndex(function (elem) {
        return elem.ar_name == _this.unit.ar_name.trim();
      }) >= 0) {
        this.is_exists = ["اسم الوحدة موجود مسبقا"];
        return;
      }

      this.is_exists = [];
      this.isloading = true;

      if (this.operation == "add") {
        _apis_Unit__WEBPACK_IMPORTED_MODULE_0__.default.create(this.unit).then(function (response) {
          _this.isloading = false;
          _this.dialog = false;
          _this.units = response.data.units;
        });
        return;
      }

      if (this.operation == "update") {
        _apis_Unit__WEBPACK_IMPORTED_MODULE_0__.default.update(this.unit).then(function (response) {
          _this.dialog = false;
          _this.isloading = false;
          _this.units = response.data.units;
        });
        return;
      }
    },
    showDialog: function showDialog(item) {
      this.dialog = true;

      if (item) {
        this.operation = "update";
        this.unit = _objectSpread({}, item);
      } else {
        this.operation = "add";
        this.unit = {
          ar_name: "",
          ar_unit_representation: "",
          company_id: "",
          created_at: "",
          deleted_at: "",
          en_name: "",
          en_unit_representation: ""
        };
      }
    },
    canBeModefied: function canBeModefied(item) {
      return true;
    },
    canBeDeleted: function canBeDeleted(item) {
      return true;
    },
    deleteUnit: function deleteUnit(item) {
      var _this2 = this;

      this.table_loading = true;
      _apis_Unit__WEBPACK_IMPORTED_MODULE_0__.default.delete(item.id).then(function (response) {
        _this2.table_loading = false;
        _this2.units = response.data.units;
      });
    }
  },
  created: function created() {
    var _this3 = this;

    this.table_loading = true;
    _apis_Unit__WEBPACK_IMPORTED_MODULE_0__.default.getAll().then(function (response) {
      _this3.table_loading = false;
      _this3.units = response.data.units;
    });
  }
});

/***/ }),

/***/ "./resources/js/apis/Unit.js":
/*!***********************************!*\
  !*** ./resources/js/apis/Unit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAll: function getAll() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/units/");
  },
  create: function create(unit) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/units", unit);
  },
  "delete": function _delete(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/units/" + id);
  },
  update: function update(unit) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/units", unit);
  }
});

/***/ }),

/***/ "./resources/js/components/main/products/units.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/main/products/units.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _units_vue_vue_type_template_id_09056f1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./units.vue?vue&type=template&id=09056f1f& */ "./resources/js/components/main/products/units.vue?vue&type=template&id=09056f1f&");
/* harmony import */ var _units_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units.vue?vue&type=script&lang=js& */ "./resources/js/components/main/products/units.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _units_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _units_vue_vue_type_template_id_09056f1f___WEBPACK_IMPORTED_MODULE_0__.render,
  _units_vue_vue_type_template_id_09056f1f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/products/units.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/products/units.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/main/products/units.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_units_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./units.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/units.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_units_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/products/units.vue?vue&type=template&id=09056f1f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/main/products/units.vue?vue&type=template&id=09056f1f& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_units_vue_vue_type_template_id_09056f1f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_units_vue_vue_type_template_id_09056f1f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_units_vue_vue_type_template_id_09056f1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./units.vue?vue&type=template&id=09056f1f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/units.vue?vue&type=template&id=09056f1f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/units.vue?vue&type=template&id=09056f1f&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/units.vue?vue&type=template&id=09056f1f& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { "margin-top": "20px" } },
    [
      _c(
        "v-row",
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "600px" },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _c(
                "v-card",
                { attrs: { loading: _vm.isloading } },
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "text-h5" }, [
                      _vm._v("User Profile")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "اسم الوحدة العربي",
                                      rules: _vm.is_exists
                                    },
                                    model: {
                                      value: _vm.unit.ar_name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.unit, "ar_name", $$v)
                                      },
                                      expression: "unit.ar_name"
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
                                    attrs: { label: "الاختصار العربي" },
                                    model: {
                                      value: _vm.unit.ar_unit_representation,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.unit,
                                          "ar_unit_representation",
                                          $$v
                                        )
                                      },
                                      expression: "unit.ar_unit_representation"
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
                                    attrs: { label: "اسم الوحدة بالانجليزي" },
                                    model: {
                                      value: _vm.unit.en_name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.unit, "en_name", $$v)
                                      },
                                      expression: "unit.en_name"
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
                                    attrs: { label: "الاختصار  بالانجليزي" },
                                    model: {
                                      value: _vm.unit.en_unit_representation,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.unit,
                                          "en_unit_representation",
                                          $$v
                                        )
                                      },
                                      expression: "unit.en_unit_representation"
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
                      _c("small", [_vm._v("*indicates required field")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [_vm._v("\n            الغاء\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: { click: _vm.saveUnit }
                        },
                        [_vm._v(" حفظ ")]
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
      _c("v-data-table", {
        attrs: {
          headers: _vm.units_header,
          items: _vm.units,
          "item-key": "id",
          search: _vm.search,
          loading: _vm.table_loading
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
                    _c("v-toolbar-title", [_vm._v("إدارة الوحدات")]),
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
                ),
                _vm._v(" "),
                _c("v-text-field", {
                  staticClass: "mx-4",
                  attrs: { label: "ادخل معلومات الوحدة" },
                  model: {
                    value: _vm.search,
                    callback: function($$v) {
                      _vm.search = $$v
                    },
                    expression: "search"
                  }
                })
              ]
            },
            proxy: true
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _vm.canBeDeleted(item)
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteUnit(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              staticClass:
                                                "outlined font-size-12"
                                            },
                                            "v-icon",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [_vm._v("mdi-delete")]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [
                    _vm._v(" "),
                    _c("span", { staticStyle: { "font-size": "10px" } }, [
                      _vm._v("إضافة حساب فرعي")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _vm.canBeModefied(item)
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.showDialog(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              staticClass:
                                                "outlined font-size-12"
                                            },
                                            "v-icon",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [_vm._v("mdi-pencil")]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [
                    _vm._v(" "),
                    _c("span", { staticStyle: { "font-size": "10px" } }, [
                      _vm._v("تعديل الحساب")
                    ])
                  ]
                )
              ]
            }
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