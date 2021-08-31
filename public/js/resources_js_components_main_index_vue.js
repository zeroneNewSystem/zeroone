"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/Api */ "./resources/js/apis/Api.js");
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var _components_DrawerItems_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DrawerItems.vue */ "./resources/js/components/main/components/DrawerItems.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    source: String
  },
  components: {
    DrawerItems: _components_DrawerItems_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
      drawer: true,
      currentUser: ""
    };
  },
  methods: {
    getUser: function getUser() {
      return _apis_User__WEBPACK_IMPORTED_MODULE_1__.default.getUser();
    },
    logout: function logout() {
      var _this = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_1__.default.getUser().then(function (response) {
        localStorage.removeItem("token");

        _this.$router.push("login"); //this.currentUser = response.data;

      })["catch"](function (errors) {
        _this.errors = errors.response.data.errors;
        console.log(errors.response.data);
      });
    }
  },
  created: function created() {
    var _this2 = this;

    this.getUser().then(function (response) {
      _this2.currentUser = response.data;
    })["catch"](function (errors) {
      _this2.errors = errors.response.data.errors;
      console.log(errors.response.data);
    });
  }
});

/***/ }),

/***/ "./resources/js/apis/User.js":
/*!***********************************!*\
  !*** ./resources/js/apis/User.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  register: function register(form) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post('/register', form);
  },
  login: function login(form) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post('/login', form);
  },
  getUser: function getUser() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get('/user');
  },
  logout: function logout() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post('/logout', form);
  }
});

/***/ }),

/***/ "./resources/js/components/main/index.vue":
/*!************************************************!*\
  !*** ./resources/js/components/main/index.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_1deb0787___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1deb0787& */ "./resources/js/components/main/index.vue?vue&type=template&id=1deb0787&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/main/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_1deb0787___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_1deb0787___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/main/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/index.vue?vue&type=template&id=1deb0787&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/main/index.vue?vue&type=template&id=1deb0787& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1deb0787___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1deb0787___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1deb0787___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=1deb0787& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=template&id=1deb0787&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=template&id=1deb0787&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=template&id=1deb0787& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "app" } },
    [
      _c(
        "v-app",
        { attrs: { id: "inspire" } },
        [
          _c(
            "v-navigation-drawer",
            {
              attrs: {
                app: "",
                right: _vm.$vuetify.rtl,
                dark: "",
                width: "225"
              },
              model: {
                value: _vm.drawer,
                callback: function($$v) {
                  _vm.drawer = $$v
                },
                expression: "drawer"
              }
            },
            [
              _c(
                "v-list",
                { attrs: { dense: "" } },
                [
                  _c(
                    "v-list-item",
                    { attrs: { "two-line": "" } },
                    [
                      _c("v-list-item-avatar", [
                        _c("img", {
                          attrs: {
                            src:
                              "https://randomuser.me/api/portraits/women/81.jpg"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [
                            _vm._v(" " + _vm._s(_vm.currentUser.name) + " ")
                          ]),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [_vm._v("Logged In")])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c("drawer-items")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                { attrs: { link: "" }, on: { click: _vm.logout } },
                [
                  _c(
                    "v-list-item-action",
                    [
                      _c("v-icon", { attrs: { color: "red" } }, [
                        _vm._v("mdi-power")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", { staticClass: "red--text" }, [
                        _vm._v("logout")
                      ])
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
            "v-app-bar",
            { attrs: { app: "", color: "pink", dark: "", height: "50" } },
            [
              _c("v-app-bar-nav-icon", {
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.drawer = !_vm.drawer
                  }
                }
              }),
              _vm._v(" "),
              _c("v-toolbar-title", [_vm._v(_vm._s(_vm.$t("zerone")))])
            ],
            1
          ),
          _vm._v(" "),
          _c("v-main", [
            _c(
              "div",
              {
                staticStyle: { margin: "0px", padding: "0px", width: "100%" },
                attrs: { fluid: "" }
              },
              [
                _c(
                  "v-row",
                  { attrs: { align: "center", justify: "center" } },
                  [
                    _c(
                      "v-col",
                      { staticClass: "text-center" },
                      [
                        _c("router-view", {
                          staticClass: "main-view",
                          attrs: { name: "mainView" }
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
          ]),
          _vm._v(" "),
          _c("v-footer", { attrs: { color: "pink", app: "" } }, [
            _c("span", { staticClass: "white--text" }, [
              _vm._v("© " + _vm._s(new Date().getFullYear()))
            ])
          ])
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