"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_products_groups_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/groups.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/groups.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Group */ "./resources/js/apis/Group.js");
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
      group: {
        ar_name: ""
      },
      groups: [],
      groups_header: [{
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
    saveGroup: function saveGroup() {
      var _this = this;

      // check if its exists
      if (this.groups.findIndex(function (elem) {
        return elem.ar_name == _this.group.ar_name.trim();
      }) >= 0) {
        this.is_exists = ["اسم المجموعة موجود مسبقا"];
        return;
      }

      this.is_exists = [];
      this.isloading = true;

      if (this.operation == "add") {
        _apis_Group__WEBPACK_IMPORTED_MODULE_0__.default.create(this.group).then(function (response) {
          _this.isloading = false;
          _this.dialog = false;
          _this.groups = response.data.groups;
        });
        return;
      }

      if (this.operation == "update") {
        _apis_Group__WEBPACK_IMPORTED_MODULE_0__.default.update(this.group).then(function (response) {
          _this.dialog = false;
          _this.isloading = false;
          _this.groups = response.data.groups;
        });
        return;
      }
    },
    showDialog: function showDialog(item) {
      this.dialog = true;

      if (item) {
        this.operation = "update";
        this.group = _objectSpread({}, item);
      } else {
        this.operation = "add";
        this.group = {
          ar_name: "",
          ar_group_representation: "",
          company_id: "",
          created_at: "",
          deleted_at: "",
          en_name: "",
          en_group_representation: ""
        };
      }
    },
    canBeModefied: function canBeModefied(item) {
      return true;
    },
    canBeDeleted: function canBeDeleted(item) {
      return true;
    },
    deleteGroup: function deleteGroup(item) {
      var _this2 = this;

      this.table_loading = true;
      _apis_Group__WEBPACK_IMPORTED_MODULE_0__.default.delete(item.id).then(function (response) {
        _this2.table_loading = false;
        _this2.groups = response.data.groups;
      });
    }
  },
  created: function created() {
    var _this3 = this;

    this.table_loading = true;
    _apis_Group__WEBPACK_IMPORTED_MODULE_0__.default.getAll().then(function (response) {
      _this3.table_loading = false;
      _this3.groups = response.data.groups;
    });
  }
});

/***/ }),

/***/ "./resources/js/apis/Group.js":
/*!************************************!*\
  !*** ./resources/js/apis/Group.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAll: function getAll() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/groups/");
  },
  create: function create(group) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/groups", group);
  },
  "delete": function _delete(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/groups/" + id);
  },
  update: function update(group) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/groups", group);
  }
});

/***/ }),

/***/ "./resources/js/components/main/products/groups.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/main/products/groups.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _groups_vue_vue_type_template_id_a11f3e58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups.vue?vue&type=template&id=a11f3e58& */ "./resources/js/components/main/products/groups.vue?vue&type=template&id=a11f3e58&");
/* harmony import */ var _groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups.vue?vue&type=script&lang=js& */ "./resources/js/components/main/products/groups.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _groups_vue_vue_type_template_id_a11f3e58___WEBPACK_IMPORTED_MODULE_0__.render,
  _groups_vue_vue_type_template_id_a11f3e58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/products/groups.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/products/groups.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/main/products/groups.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./groups.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/groups.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/products/groups.vue?vue&type=template&id=a11f3e58&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/main/products/groups.vue?vue&type=template&id=a11f3e58& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_groups_vue_vue_type_template_id_a11f3e58___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_groups_vue_vue_type_template_id_a11f3e58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_groups_vue_vue_type_template_id_a11f3e58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./groups.vue?vue&type=template&id=a11f3e58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/groups.vue?vue&type=template&id=a11f3e58&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/groups.vue?vue&type=template&id=a11f3e58&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/groups.vue?vue&type=template&id=a11f3e58& ***!
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
                                      label: "اسم المجموعة العربي",
                                      rules: _vm.is_exists
                                    },
                                    model: {
                                      value: _vm.group.ar_name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.group, "ar_name", $$v)
                                      },
                                      expression: "group.ar_name"
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
                                      value: _vm.group.ar_group_representation,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.group,
                                          "ar_group_representation",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "group.ar_group_representation"
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
                                    attrs: { label: "اسم المجموعة بالانجليزي" },
                                    model: {
                                      value: _vm.group.en_name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.group, "en_name", $$v)
                                      },
                                      expression: "group.en_name"
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
                                      value: _vm.group.en_group_representation,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.group,
                                          "en_group_representation",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "group.en_group_representation"
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
                          on: { click: _vm.saveGroup }
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
          headers: _vm.groups_header,
          items: _vm.groups,
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
                    _c("v-toolbar-title", [_vm._v("إدارة المجموعات")]),
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
                      [_vm._v(" إضافة مجموعة ")]
                    ),
                    _vm._v(" "),
                    _c("v-spacer")
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-text-field", {
                  staticClass: "mx-4",
                  attrs: { label: "ادخل معلومات المجموعة" },
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
                                          return _vm.deleteGroup(item)
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