"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_apis_Purchase_js"],{

/***/ "./resources/js/apis/Purchase.js":
/*!***************************************!*\
  !*** ./resources/js/apis/Purchase.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(purchase) {
    console.log('purchase', purchase);
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/purchases", purchase);
  },
  get: function get(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/purchases/" + id);
  },
  getAll: function getAll(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/purchases/all", {
      params: params
    });
  },
  update: function update(purchase) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/purchases", purchase);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/purchases", {
      params: params
    });
  }
});

/***/ })

}]);