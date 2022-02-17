"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_apis_Document_js"],{

/***/ "./resources/js/apis/Document.js":
/*!***************************************!*\
  !*** ./resources/js/apis/Document.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(document) {
    console.log('document', document);
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/documents", document);
  },
  get: function get(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/documents/" + id);
  },
  getAll: function getAll(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/documents/all", {
      params: params
    });
  },
  update: function update(document) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/documents", document);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/documents", {
      params: params
    });
  }
});

/***/ })

}]);