"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_purchases_suppliers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Supplier */ "./resources/js/apis/Supplier.js");
/* harmony import */ var _apis_Country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Country */ "./resources/js/apis/Country.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["dialog", "supplier", "cities", "operation"],
  data: function data() {
    return {
      isloading: false,
      title: "إضافة مورد جديد",
      countries: [],
      supplier_div_update: 0
    };
  },
  created: function created() {
    var _this = this;

    _apis_Country__WEBPACK_IMPORTED_MODULE_1__.default.loadCountries().then(function (response) {
      return _this.countries = response.data.countries;
    });
  },
  computed: {},
  methods: {
    loadCities: function loadCities() {
      this.$emit("changeCountry", this.supplier.country_id);
    },
    closeDialog: function closeDialog() {
      this.$parent.$data.add_update_supplier_dialog = false;
    },
    saveSupplier: function saveSupplier() {
      var _this2 = this;

      console.log(this.operation);
      this.isloading = "blue";

      if (this.operation == "add") {
        _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__.default.store(this.supplier).then(function (response) {
          _this2.supplier["id"] = response.data;
          _this2.$parent.$data.add_update_supplier_dialog = false;
          _this2.isloading = false;

          _this2.$emit("addUpdateSupplier", _this2.supplier);
        });
        return;
      }

      if (this.operation == "update") {
        _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__.default.update(this.supplier).then(function (response) {
          _this2.$parent.$data.add_update_supplier_dialog = false;
          _this2.isloading = false;

          _this2.$emit("addUpdateSupplier", _this2.supplier);
        });
        return;
      }
    },
    onParentChange: function onParentChange() {
      var _this3 = this;

      var parent = this.$store.state.suppliers.find(function (elem) {
        return elem.id == _this3.supplier.parent_id;
      });
      console.log(parent.type_id);
      var parent_type_code = this.$store.state.supplier_types.find(function (elem) {
        return elem.id == parent.type_id;
      }).type_code;
      console.log(parent_type_code);
      this.supplier.level = parseInt(parent.level + 1);
      this.supplier_types = this.$store.state.supplier_types.filter(function (elem) {
        var length = 2;

        if (parent.level >= 2) {
          length = 4;
        } //alert(length);


        return elem.type_code.toString().startsWith(parent_type_code.toString()) && elem.type_code.toString().length == length;
      });
    },
    bgblue: function bgblue(item) {
      if (Math.ceil(Math.log10(item.supplier_code + 1)) <= 2) {
        $("#nib" + item.supplier_code).parent().addClass("first-level");
      } else if (Math.ceil(Math.log10(item.supplier_code + 1)) <= 3) {
        $("#nib" + item.supplier_code).parent().addClass("second-level");
      }

      if (this.supplier_div_update == 0) this.supplier_div_update += 1;
      return "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tab: null,
      items: ['الفواتير', 'الاشعارات', 'السندات'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Supplier */ "./resources/js/apis/Supplier.js");
/* harmony import */ var _supplier_info_tabs_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-info-tabs.vue */ "./resources/js/components/main/purchases/supplier-info-tabs.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    SupplierInfoTabs: _supplier_info_tabs_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      //---- tabs
      tab: null,
      items: ["الفواتير", "الاشعارات", "السندات"],
      //----
      pur_loading: false,
      remain_amount: 0,
      receipt_loading: false,
      purchase_headers: [{
        text: "م",
        align: "center",
        width: "5",
        sortable: false,
        value: "id"
      }, {
        text: "رقم المرجع",
        align: "center",
        value: "purchase_reference"
      }, {
        text: "جهة الاتصال",
        align: "center",
        sortable: false,
        value: "issue_date"
      }, {
        text: "الرصيد",
        align: "center",
        value: "total_amount"
      }, {
        text: "متأخرات",
        align: "center",
        value: "paid_amount"
      }, {
        text: "الحالة ",
        align: "center",
        value: "status"
      }, {
        text: "التحكم ",
        align: "center",
        value: "actions"
      }],
      receipt_headers: [{
        text: "م",
        align: "center",
        width: "5",
        sortable: false,
        value: "id"
      }, {
        text: "رقم المرجع",
        align: "center",
        value: "receipt_reference"
      }, {
        text: "تاريخ الاصدار",
        align: "center",
        sortable: false,
        value: "date"
      }, {
        text: "القيمة",
        align: "center",
        value: "amount"
      }, {
        text: "الحالة ",
        align: "center",
        value: "status"
      }, {
        text: "لتحكم ",
        align: "center",
        value: "actions"
      }],
      pur_options: {},
      receipt_options: {},
      supplier: "",
      total_amount: 0,
      purchases: [],
      receipts: [],
      purchase_statuses: [{
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
      receipt_statuses: [{
        id: 1,
        ar_name: "غير مستعمل"
      }, {
        id: 2,
        ar_name: "مستعمل"
      }, {
        id: 3,
        ar_name: "مستعمل جزئيا"
      }],
      purchases_total: 0,
      receipt_total: 0,
      arrears: 0,
      balance: 0,
      purchases_count: 0
    };
  },
  computed: {
    pur_params: function pur_params(nv) {
      return _objectSpread({}, this.pur_options);
    },
    receipt_params: function receipt_params(nv) {
      return _objectSpread({}, this.receipt_options);
    }
  },
  watch: {
    pur_params: {
      handler: function handler() {
        var _this = this;

        var pur_page = this.pur_options.page;
        var pur_itemsPerPage = this.pur_options.itemsPerPage; //console.log(this.purchase_options)

        console.log("itemsPerPage", pur_itemsPerPage);
        _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__.default.getOne({
          id: this.$route.params.id,
          pur_page: pur_page,
          pur_itemsPerPage: pur_itemsPerPage
        }).then(function (response) {
          _this.DataProcessing(response, "pur");
        });
      },
      deep: true
    },
    receipt_params: {
      handler: function handler() {
        var _this2 = this;

        var receipt_page = this.receipt_options.page;
        var receipt_itemsPerPage = this.receipt_options.itemsPerPage;
        console.log("itemsPerPage", receipt_itemsPerPage);
        _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__.default.getOne({
          id: this.$route.params.id,
          receipt_page: receipt_page,
          receipt_itemsPerPage: receipt_itemsPerPage
        }).then(function (response) {
          _this2.DataProcessing(response, "receipt");
        });
      },
      deep: true
    }
  },
  created: function created() {
    var _this3 = this;

    _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__.default.getOne({
      id: this.$route.params.id
    }).then(function (response) {
      _this3.DataProcessing(response, "receipt");
    });
  },
  methods: {
    DataProcessing: function DataProcessing(response, type) {
      console.log("response", response);

      if (response.data.purchases) {
        this.purchases = response.data.purchases.data;
        this.purchases_total = response.data.purchases.total;
        return;
      }

      if (response.data.receipts) {
        this.receipts = response.data.receipts.data;
        console.log(this.receipts);
        this.receipt_total = response.data.receipts.total;
        return;
      }

      this.supplier = response.data.supplier;
      this.total_amount = response.data.total_amount;
      this.purchases_count = response.data.purchases_count;
      this.remain_amount = response.data.remain_amount;
      this.arrears = response.data.arrears;
      this.balance = response.data.balance;
      return 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/suppliers.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/suppliers.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Supplier */ "./resources/js/apis/Supplier.js");
/* harmony import */ var _apis_Country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Country */ "./resources/js/apis/Country.js");
/* harmony import */ var _supplier_info_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplier-info.vue */ "./resources/js/components/main/purchases/supplier-info.vue");
/* harmony import */ var _AddUpdateSupplier_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddUpdateSupplier.vue */ "./resources/js/components/main/purchases/AddUpdateSupplier.vue");
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SupplierInfo: _supplier_info_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    AddUpdateSupplier: _AddUpdateSupplier_vue__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    var _ref;

    return _ref = {
      loading: false,
      dialog: false,
      supplier_status: [{
        is_supplier_active: 0,
        status: "نشط"
      }, {
        is_supplier_active: 1,
        status: "غير نشط"
      }],
      cities: [],
      //-------etched data-----------------f
      operation: "add",
      suppliers: [],
      add_update_supplier_dialog: false,
      passed_supplier: "",
      //-----------------------------------//
      supplier_info_supplier: "",
      supplier_info_dialog: false,
      search: {
        company_name: "",
        name: "",
        phone: "",
        is_supplier_active: ""
      },
      options: {},
      status: "salam",
      title: "إدارة الموردين",
      //---
      suppliers_total: 20
    }, _defineProperty(_ref, "loading", true), _defineProperty(_ref, "headers", [{
      text: "م",
      align: "center",
      width: "5",
      sortable: false,
      value: "id"
    }, {
      text: "اسم الشركة",
      align: "center",
      value: "company_name"
    }, {
      text: "جهة الاتصال",
      align: "center",
      sortable: false,
      value: "name"
    }, {
      text: "الرصيد",
      align: "center",
      value: "balance"
    }, {
      text: "متأخرات",
      align: "center",
      value: "arrears"
    }, {
      text: "الحالة ",
      align: "center",
      value: "status"
    }, {
      text: "لتحكم ",
      align: "center",
      value: "actions"
    }]), _ref;
  },
  computed: {
    params: function params(nv) {
      return _objectSpread({}, this.options);
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this = this;

        this.getDataFromApi().then(function (response) {
          var data = response.data.suppliers.data;
          var helper = [];
          var elper = [];
          var arrears01 = [];
          var arrears02 = []; //let balance = [];

          if (data) {
            data.forEach(function (element) {
              //amount null -> 0
              if (element.amount == null) element.amount = 0; // no transactions yet!

              if (!element.trans_id) {
                element.deletable = true;
                elper.push(element);
                return;
              } //الغاء التكرار


              if (element.pur_id && element.supdoc_id) {
                console.log("nibfir");

                if (!elper.find(function (elem) {
                  return (// element.id +
                    //   " " +
                    element.pur_id + " " + element.trans_id == //elem.id + " " +
                    elem.pur_id + " " + elem.trans_id
                  );
                })) {
                  console.log("nibsoc");
                  elper.push(element);
                } else {
                  elper[elper.findIndex(function (elem) {
                    return (// element.id +
                      //   " " +
                      element.pur_id + " " + element.trans_id == //elem.id + " " +
                      elem.pur_id + " " + elem.trans_id
                    );
                  })].amount += element.amount;
                }

                return;
              }

              elper.push(element);
            });
            console.log("elper", elper); //تجميع الفواتير

            console.log("arrears01", arrears01);
            console.log("arrears02", arrears02);
            elper.forEach(function (element) {
              if (!element.trans_id) {
                helper.push(element);
                return;
              }

              if (!helper.find(function (elem) {
                return element.id == elem.id;
              })) {
                helper.push(element);
                return;
              }

              var index = helper.findIndex(function (elem) {
                return elem.id == element.id;
              });
              if (element.debit != -1) helper[index].debit += element.debit;
              helper[index].credit += element.credit;
            });
          }

          _this.suppliers = helper;
          console.log("helper", helper.amount);
          _this.suppliers_total = response.data.suppliers.data.total;
          _this.supplier_info_supplier = response.data.suppliers.data[0];
          console.log(_this.suppliers_total);
        });
      },
      deep: true
    }
  },
  // mounted() {
  //   this.getDataFromApi().then((data) => {
  //     this.suppliers = data.response;
  //   });
  // },
  methods: {
    findSuppliers: function findSuppliers() {
      var _this2 = this;

      this.getDataFromApi().then(function (response) {
        var data = response.data.suppliers.data;
        var helper = [];
        var elper = [];
        var arrears01 = [];
        var arrears02 = []; //let balance = [];

        if (data) {
          data.forEach(function (element) {
            //amount null -> 0
            if (element.amount == null) element.amount = 0; // no transactions yet!

            if (!element.trans_id) {
              element.deletable = true;
              elper.push(element);
              return;
            } //الغاء التكرار


            if (element.pur_id && element.supdoc_id) {
              console.log("nibfir");

              if (!elper.find(function (elem) {
                return (// element.id +
                  //   " " +
                  element.pur_id + " " + element.trans_id == //elem.id + " " +
                  elem.pur_id + " " + elem.trans_id
                );
              })) {
                console.log("nibsoc");
                elper.push(element);
              } else {
                elper[elper.findIndex(function (elem) {
                  return (// element.id +
                    //   " " +
                    element.pur_id + " " + element.trans_id == //elem.id + " " +
                    elem.pur_id + " " + elem.trans_id
                  );
                })].amount += element.amount;
              }

              return;
            }

            elper.push(element);
          });
          console.log("elper", elper); //تجميع الفواتير

          console.log("arrears01", arrears01);
          console.log("arrears02", arrears02);
          elper.forEach(function (element) {
            if (!element.trans_id) {
              helper.push(element);
              return;
            }

            if (!helper.find(function (elem) {
              return element.id == elem.id;
            })) {
              helper.push(element);
              return;
            }

            var index = helper.findIndex(function (elem) {
              return elem.id == element.id;
            });
            if (element.debit != -1) helper[index].debit += element.debit;
            helper[index].credit += element.credit;
          });
        }

        _this2.suppliers = helper;
        console.log("helper", helper.amount);
        _this2.suppliers_total = response.data.suppliers.data.total;
        _this2.supplier_info_supplier = response.data.suppliers.data[0];
        console.log(_this2.suppliers_total);
      });
    },
    searchReset: function searchReset() {
      var _this3 = this;

      this.search = {
        company_name: "",
        name: "",
        phone: "",
        is_supplier_active: ""
      }, this.getDataFromApi().then(function (response) {
        var data = response.data.suppliers.data;
        var helper = [];
        var elper = [];
        var arrears01 = [];
        var arrears02 = []; //let balance = [];

        if (data) {
          data.forEach(function (element) {
            //amount null -> 0
            if (element.amount == null) element.amount = 0; // no transactions yet!

            if (!element.trans_id) {
              element.deletable = true;
              elper.push(element);
              return;
            } //الغاء التكرار


            if (element.pur_id && element.supdoc_id) {
              console.log("nibfir");

              if (!elper.find(function (elem) {
                return (// element.id +
                  //   " " +
                  element.pur_id + " " + element.trans_id == //elem.id + " " +
                  elem.pur_id + " " + elem.trans_id
                );
              })) {
                console.log("nibsoc");
                elper.push(element);
              } else {
                elper[elper.findIndex(function (elem) {
                  return (// element.id +
                    //   " " +
                    element.pur_id + " " + element.trans_id == //elem.id + " " +
                    elem.pur_id + " " + elem.trans_id
                  );
                })].amount += element.amount;
              }

              return;
            }

            elper.push(element);
          });
          console.log("elper", elper); //تجميع الفواتير

          console.log("arrears01", arrears01);
          console.log("arrears02", arrears02);
          elper.forEach(function (element) {
            if (!element.trans_id) {
              helper.push(element);
              return;
            }

            if (!helper.find(function (elem) {
              return element.id == elem.id;
            })) {
              helper.push(element);
              return;
            }

            var index = helper.findIndex(function (elem) {
              return elem.id == element.id;
            });
            if (element.debit != -1) helper[index].debit += element.debit;
            helper[index].credit += element.credit;
          });
        }

        _this3.suppliers = helper;
        console.log("helper", helper.amount);
        _this3.suppliers_total = response.data.suppliers.data.total;
        _this3.supplier_info_supplier = response.data.suppliers.data[0];
        console.log(_this3.suppliers_total);
      });
    },
    loadCities: function loadCities(country_id) {
      var _this4 = this;

      this.cities = [];
      _apis_Country__WEBPACK_IMPORTED_MODULE_1__.default.loadCities(country_id).then(function (response) {
        return _this4.cities = response.data.cities;
      });
    },
    addSupplierToList: function addSupplierToList(supplier) {
      console.log("supplier");
      if (this.operation == "add") this.suppliers.push(supplier);else if (this.operation == "update") {
        this.suppliers.splice(this.suppliers.indexOf(function (elem) {
          return elem.id == supplier.id;
        }), 1, supplier);
      }
    },
    addUpdateSupplier: function addUpdateSupplier(item, operation) {
      this.operation = operation;

      if (operation == "add") {
        this.passed_supplier = {
          parent_id: "",
          type_id: "",
          name: "",
          account_code: "",
          description: ""
        };
      }

      if (operation == "update") {
        this.loadCities(item.country_id);
        this.passed_supplier = item;
        console.log("item", item);
        console.log("item", this.cities);
      }

      this.add_update_supplier_dialog = true;
    },
    show_supplier_dialog: function show_supplier_dialog(item) {
      this.supplier_info_dialog = true;
      console.log(item);
      this.supplier_info_supplier = item;
    },
    deleteSupplier: function deleteSupplier(item) {
      var _this5 = this;

      if (!item.deletable) {
        this.dialog = true;
        return;
      }

      this.loading = true;
      var _this$options = this.options,
          sortBy = _this$options.sortBy,
          sortDesc = _this$options.sortDesc,
          page = _this$options.page,
          itemsPerPage = _this$options.itemsPerPage; //let search = this.search.trim().toLowerCase();

      var person_id = item.id;
      _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__.default.delete({
        person_id: person_id,
        page: page,
        itemsPerPage: itemsPerPage,
        search: this.search
      }).then(function (response) {
        _this5.loading = false;
        var data = response.data.suppliers.data;
        var helper = [];
        var elper = [];
        var arrears01 = [];
        var arrears02 = []; //let balance = [];

        if (data) {
          data.forEach(function (element) {
            //amount null -> 0
            if (element.amount == null) element.amount = 0; // no transactions yet!

            if (!element.trans_id) {
              element.deletable = true;
              elper.push(element);
              return;
            } //الغاء التكرار


            if (element.pur_id && element.supdoc_id) {
              console.log("nibfir");

              if (!elper.find(function (elem) {
                return (// element.id +
                  //   " " +
                  element.pur_id + " " + element.trans_id == //elem.id + " " +
                  elem.pur_id + " " + elem.trans_id
                );
              })) {
                console.log("nibsoc");
                elper.push(element);
              } else {
                elper[elper.findIndex(function (elem) {
                  return (// element.id +
                    //   " " +
                    element.pur_id + " " + element.trans_id == //elem.id + " " +
                    elem.pur_id + " " + elem.trans_id
                  );
                })].amount += element.amount;
              }

              return;
            }

            elper.push(element);
          });
          console.log("elper", elper); //تجميع الفواتير

          console.log("arrears01", arrears01);
          console.log("arrears02", arrears02);
          elper.forEach(function (element) {
            if (!element.trans_id) {
              helper.push(element);
              return;
            }

            if (!helper.find(function (elem) {
              return element.id == elem.id;
            })) {
              helper.push(element);
              return;
            }

            var index = helper.findIndex(function (elem) {
              return elem.id == element.id;
            });
            if (element.debit != -1) helper[index].debit += element.debit;
            helper[index].credit += element.credit;
          });
        }

        _this5.suppliers = helper;
        console.log("helper", helper.amount);
        _this5.suppliers_total = response.data.suppliers.data.total;
        _this5.supplier_info_supplier = response.data.suppliers.data[0];
        console.log(_this5.suppliers_total);
      });
    },
    getDataFromApi: function getDataFromApi() {
      var _this6 = this;

      this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this6$options = _this6.options,
            sortBy = _this6$options.sortBy,
            sortDesc = _this6$options.sortDesc,
            page = _this6$options.page,
            itemsPerPage = _this6$options.itemsPerPage; // let search = this.search.trim().toLowerCase();

        _apis_Supplier__WEBPACK_IMPORTED_MODULE_0__.default.get({
          page: page,
          itemsPerPage: itemsPerPage,
          search: _this6.search
        }).then(function (response) {
          _this6.loading = false;
          resolve(response);
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/apis/Country.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Country.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loadCountries: function loadCountries(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/countries", {
      params: params
    });
  },
  loadCities: function loadCities(country_id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/cities/" + country_id);
  }
});

/***/ }),

/***/ "./resources/js/apis/Supplier.js":
/*!***************************************!*\
  !*** ./resources/js/apis/Supplier.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(supplier) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/suppliers", supplier);
  },
  update: function update(supplier) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/suppliers", supplier);
  },
  postCreate: function postCreate(supplier) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/suppliers/create", supplier);
  },
  getOne: function getOne(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/suppliers/getOne", {
      params: params
    });
  },
  get: function get(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/suppliers", {
      params: params
    });
  },
  getByProductID: function getByProductID(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/suppliers/product/" + id);
  },
  search: function search(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/suppliers/search", {
      params: params
    });
  },
  barcodeSearch: function barcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/router/" + params.barcode);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/suppliers/", {
      params: params
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.first-level {\r\n  background: rgb(255, 222, 228);\n}\n.second-level {\r\n  background: rgb(233, 233, 233);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* Helper classes */\n.basil {\n}\n.basil--text {\r\n  color: #356859 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-window__container {\r\n  height: 100%;\n}\n.v-tabs__content {\r\n  background-color: green;\r\n  height: 100px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateSupplier_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdateSupplier.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateSupplier_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateSupplier_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_tabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info-tabs.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_tabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_tabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/main/purchases/AddUpdateSupplier.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/main/purchases/AddUpdateSupplier.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddUpdateSupplier_vue_vue_type_template_id_6cab12ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUpdateSupplier.vue?vue&type=template&id=6cab12ce& */ "./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=template&id=6cab12ce&");
/* harmony import */ var _AddUpdateSupplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUpdateSupplier.vue?vue&type=script&lang=js& */ "./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddUpdateSupplier_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddUpdateSupplier.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AddUpdateSupplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddUpdateSupplier_vue_vue_type_template_id_6cab12ce___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddUpdateSupplier_vue_vue_type_template_id_6cab12ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/purchases/AddUpdateSupplier.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/purchases/supplier-info-tabs.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/main/purchases/supplier-info-tabs.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _supplier_info_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-info-tabs.vue?vue&type=script&lang=js& */ "./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=script&lang=js&");
/* harmony import */ var _supplier_info_tabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-info-tabs.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;

;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _supplier_info_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/purchases/supplier-info-tabs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/purchases/supplier-info.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/main/purchases/supplier-info.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-info.vue?vue&type=template&id=54dab5c7& */ "./resources/js/components/main/purchases/supplier-info.vue?vue&type=template&id=54dab5c7&");
/* harmony import */ var _supplier_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier-info.vue?vue&type=script&lang=js& */ "./resources/js/components/main/purchases/supplier-info.vue?vue&type=script&lang=js&");
/* harmony import */ var _supplier_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplier-info.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/purchases/supplier-info.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _supplier_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__.render,
  _supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/purchases/supplier-info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/purchases/suppliers.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/main/purchases/suppliers.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _suppliers_vue_vue_type_template_id_01aaaddf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suppliers.vue?vue&type=template&id=01aaaddf& */ "./resources/js/components/main/purchases/suppliers.vue?vue&type=template&id=01aaaddf&");
/* harmony import */ var _suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suppliers.vue?vue&type=script&lang=js& */ "./resources/js/components/main/purchases/suppliers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _suppliers_vue_vue_type_template_id_01aaaddf___WEBPACK_IMPORTED_MODULE_0__.render,
  _suppliers_vue_vue_type_template_id_01aaaddf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/purchases/suppliers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateSupplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdateSupplier.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateSupplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info-tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/purchases/supplier-info.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/main/purchases/supplier-info.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/purchases/suppliers.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/main/purchases/suppliers.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./suppliers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/suppliers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateSupplier_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdateSupplier.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_tabs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info-tabs.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info-tabs.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/purchases/supplier-info.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/main/purchases/supplier-info.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=template&id=6cab12ce&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=template&id=6cab12ce& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateSupplier_vue_vue_type_template_id_6cab12ce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateSupplier_vue_vue_type_template_id_6cab12ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateSupplier_vue_vue_type_template_id_6cab12ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdateSupplier.vue?vue&type=template&id=6cab12ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=template&id=6cab12ce&");


/***/ }),

/***/ "./resources/js/components/main/purchases/supplier-info.vue?vue&type=template&id=54dab5c7&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/main/purchases/supplier-info.vue?vue&type=template&id=54dab5c7& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_supplier_info_vue_vue_type_template_id_54dab5c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./supplier-info.vue?vue&type=template&id=54dab5c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=template&id=54dab5c7&");


/***/ }),

/***/ "./resources/js/components/main/purchases/suppliers.vue?vue&type=template&id=01aaaddf&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/main/purchases/suppliers.vue?vue&type=template&id=01aaaddf& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_suppliers_vue_vue_type_template_id_01aaaddf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_suppliers_vue_vue_type_template_id_01aaaddf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_suppliers_vue_vue_type_template_id_01aaaddf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./suppliers.vue?vue&type=template&id=01aaaddf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/suppliers.vue?vue&type=template&id=01aaaddf&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=template&id=6cab12ce&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/AddUpdateSupplier.vue?vue&type=template&id=6cab12ce& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { "max-width": "800px", persistent: "" },
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
          _c(
            "v-card-title",
            [
              _c(
                "v-row",
                [
                  _c("v-col", [_vm._v(" " + _vm._s(_vm.title))]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticStyle: { "text-align": "end" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.closeDialog()
                            }
                          }
                        },
                        [_vm._v("\n            إلغاء\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.saveSupplier()
                            }
                          }
                        },
                        [_vm._v("\n            حفظ\n          ")]
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
                            attrs: { label: "اسم المورد *", required: "" },
                            model: {
                              value: _vm.supplier.name,
                              callback: function($$v) {
                                _vm.$set(_vm.supplier, "name", $$v)
                              },
                              expression: "supplier.name"
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
                            attrs: { label: "اسم الشركة*", required: "" },
                            model: {
                              value: _vm.supplier.company_name,
                              callback: function($$v) {
                                _vm.$set(_vm.supplier, "company_name", $$v)
                              },
                              expression: "supplier.company_name"
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
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.countries,
                              "item-text": "en_name",
                              "item-value": "id",
                              prefix: "البلد |",
                              autocomplete: "off"
                            },
                            on: { change: _vm.loadCities },
                            model: {
                              value: _vm.supplier.country_id,
                              callback: function($$v) {
                                _vm.$set(_vm.supplier, "country_id", $$v)
                              },
                              expression: "supplier.country_id"
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
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.cities,
                              "item-text": "en_name",
                              "item-value": "id",
                              prefix: "المدينة |",
                              autocomplete: "off"
                            },
                            model: {
                              value: _vm.supplier.city_id,
                              callback: function($$v) {
                                _vm.$set(_vm.supplier, "city_id", $$v)
                              },
                              expression: "supplier.city_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              rows: "2",
                              label: "العنوان",
                              required: ""
                            },
                            model: {
                              value: _vm.supplier.address,
                              callback: function($$v) {
                                _vm.$set(_vm.supplier, "address", $$v)
                              },
                              expression: "supplier.address"
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
                            attrs: {
                              label: "رقم الاتصال الأساسي",
                              required: ""
                            },
                            model: {
                              value: _vm.supplier.phone01,
                              callback: function($$v) {
                                _vm.$set(_vm.supplier, "phone01", $$v)
                              },
                              expression: "supplier.phone01"
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
                            attrs: {
                              label: "رقم الاتصال الثانوي",
                              required: ""
                            },
                            model: {
                              value: _vm.supplier.phone02,
                              callback: function($$v) {
                                _vm.$set(_vm.supplier, "phone02", $$v)
                              },
                              expression: "supplier.phone02"
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
                            attrs: { label: "البريد الالكتروني", required: "" },
                            model: {
                              value: _vm.supplier.email,
                              callback: function($$v) {
                                _vm.$set(_vm.supplier, "email", $$v)
                              },
                              expression: "supplier.email"
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
                            attrs: { label: "الموقع الالكتروني", required: "" },
                            model: {
                              value: _vm.supplier.website,
                              callback: function($$v) {
                                _vm.$set(_vm.supplier, "website", $$v)
                              },
                              expression: "supplier.website"
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
                            attrs: { label: "الرقم الضريبي", required: "" },
                            model: {
                              value: _vm.supplier.tax_number,
                              callback: function($$v) {
                                _vm.$set(_vm.supplier, "tax_number", $$v)
                              },
                              expression: "supplier.tax_number"
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
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { staticStyle: { "text-align": "end" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "blue darken-1",
                                        text: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.closeDialog()
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  إلغاء\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "blue darken-1",
                                        text: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.saveSupplier()
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  حفظ\n                "
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
          _c("v-card-actions", [_c("v-spacer")], 1)
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=template&id=54dab5c7&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/supplier-info.vue?vue&type=template&id=54dab5c7& ***!
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
    { staticStyle: { padding: "20px", "font-size": "14px" } },
    [
      _c(
        "v-row",
        {},
        [
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "6" } },
            [
              _c(
                "v-row",
                {
                  staticStyle: {
                    "font-size": "14px",
                    border: "1px solid #bababa",
                    "border-radius": "5px",
                    padding: "10px",
                    "margin-left": "10px",
                    "margin-right": "10px"
                  }
                },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("الاسم")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.supplier.name) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("\n          الشركة\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.supplier.company_name) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("\n          رقم الاتصال\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.supplier.phone01) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("\n          البريد الالكتروني\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.supplier.email) +
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
                {
                  staticStyle: {
                    "font-size": "14px",
                    border: "1px solid #bababa",
                    "border-radius": "5px",
                    padding: "10px",
                    "margin-left": "10px",
                    "margin-right": "10px",
                    "min-height": "135px"
                  }
                },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("الحالة")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.supplier.is_supplier_active == 1
                              ? "نشط"
                              : "غير نشط"
                          ) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "3" }
                    },
                    [_vm._v("\n          العنوان\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pa-1",
                      staticStyle: { "text-align": "start" },
                      attrs: { cols: "9" }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.supplier.address) +
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
        { staticClass: "pt-10 justify-center" },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "2" } },
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _vm._v(" الرصيد ")
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _c("h1", [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.balance.toFixed(2)) +
                          "\n          "
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "2" } },
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _vm._v(" قيمة الفواتير ")
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _c("h1", [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.total_amount.toFixed(2)) +
                          "\n          "
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "2" } },
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _vm._v(" إجمالي المستحق ")
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _c("h1", [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.remain_amount.toFixed(2)) +
                          "\n          "
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "2" } },
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _vm._v(" متأخرات ")
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _c("h1", [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.arrears.toFixed(2)) +
                          "\n          "
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "2" } },
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _vm._v(" عدد الفواتير ")
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "6", lg: "12" } }, [
                    _c("h1", [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.purchases_count) +
                          "\n          "
                      )
                    ])
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
        "v-row",
        [
          _c(
            "v-card",
            { staticStyle: { width: "100%" }, attrs: { color: "basil" } },
            [
              _c(
                "v-card-title",
                { staticClass: "text-center justify-center py-6" },
                [_c("p", { staticClass: "basil--text" }, [_vm._v("التعاملات")])]
              ),
              _vm._v(" "),
              _c(
                "v-tabs",
                {
                  attrs: { "background-color": "transparent", color: "basil" },
                  model: {
                    value: _vm.tab,
                    callback: function($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab"
                  }
                },
                _vm._l(_vm.items, function(item) {
                  return _c("v-tab", { key: item }, [
                    _vm._v("\n          " + _vm._s(item) + "\n        ")
                  ])
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "v-tabs-items",
                {
                  model: {
                    value: _vm.tab,
                    callback: function($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab"
                  }
                },
                [
                  _c(
                    "v-tab-item",
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-data-table", {
                            staticClass: "elevation-1",
                            staticStyle: { width: "100%" },
                            attrs: {
                              headers: _vm.purchase_headers,
                              items: _vm.purchases,
                              options: _vm.pur_options,
                              "server-items-length": _vm.purchases_total,
                              loading: _vm.pur_loading
                            },
                            on: {
                              "update:options": function($event) {
                                _vm.pur_options = $event
                              }
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "top",
                                fn: function() {
                                  return undefined
                                },
                                proxy: true
                              },
                              {
                                key: "item.issue_date",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(item.issue_date.split(" ")[0]) +
                                        "\n              "
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
                                      "\n                " +
                                        _vm._s(
                                          _vm.purchase_statuses.find(function(
                                            elem
                                          ) {
                                            return elem.id == item.status_id
                                          }).ar_name
                                        ) +
                                        "\n              "
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tab-item",
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-data-table", {
                            staticClass: "elevation-1",
                            staticStyle: { width: "100%" },
                            attrs: {
                              headers: _vm.receipt_headers,
                              items: _vm.receipts,
                              options: _vm.receipt_options,
                              "server-items-length": _vm.receipt_total,
                              loading: _vm.receipt_loading
                            },
                            on: {
                              "update:options": function($event) {
                                _vm.receipt_options = $event
                              }
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "top",
                                fn: function() {
                                  return undefined
                                },
                                proxy: true
                              },
                              {
                                key: "item.status",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm.receipt_statuses.find(function(
                                            elem
                                          ) {
                                            return elem.id == item.status_id
                                          }).ar_name
                                        ) +
                                        "\n              "
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tab-item",
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-data-table", {
                            staticClass: "elevation-1",
                            staticStyle: { width: "100%" },
                            attrs: {
                              headers: _vm.receipt_headers,
                              items: _vm.receipts,
                              options: _vm.receipt_options,
                              "server-items-length": _vm.receipt_total,
                              loading: _vm.receipt_loading
                            },
                            on: {
                              "update:options": function($event) {
                                _vm.receipt_options = $event
                              }
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "top",
                                fn: function() {
                                  return undefined
                                },
                                proxy: true
                              },
                              {
                                key: "item.status",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm.receipt_statuses.find(function(
                                            elem
                                          ) {
                                            return elem.id == item.status_id
                                          }).ar_name
                                        ) +
                                        "\n              "
                                    )
                                  ]
                                }
                              },
                              {
                                key: "item.date",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(item.date.split(" ")[0]) +
                                        "\n              "
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
                                      { attrs: { to: "purchases/" + item.id } },
                                      [
                                        _c("v-icon", { attrs: { small: "" } }, [
                                          _vm._v("mdi-pencil")
                                        ])
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
                                            return _vm.deletePurchase(
                                              item,
                                              "update"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          {
                                            staticClass:
                                              "outlined font-size-12",
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/suppliers.vue?vue&type=template&id=01aaaddf&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/purchases/suppliers.vue?vue&type=template&id=01aaaddf& ***!
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
      _c("add-update-supplier", {
        attrs: {
          dialog: _vm.add_update_supplier_dialog,
          supplier: _vm.passed_supplier,
          operation: _vm.operation,
          cities: _vm.cities
        },
        on: {
          addUpdateSupplier: _vm.addSupplierToList,
          changeCountry: _vm.loadCities
        }
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "600px" },
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
            [
              _c("v-card-title", [
                _c("span", { staticClass: "text-h5" }, [_vm._v("تنبيه!")])
              ]),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "text--primary" }, [
                _vm._v(
                  "\n        لايمكن حذف هذا المورد لوجود تعاملات مالية معه\n      "
                )
              ]),
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
                    [_vm._v("\n          إلغاء\n        ")]
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
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.suppliers,
          options: _vm.options,
          "server-items-length": _vm.suppliers_total,
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
                    _c("v-toolbar-title", [_vm._v(_vm._s(_vm.title))]),
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
                            return _vm.addUpdateSupplier("", "add")
                          }
                        }
                      },
                      [_vm._v("إضافة مورد")]
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
                          attrs: { label: "اسم الشركة" },
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
                      { attrs: { cols: "12", lg: "3" } },
                      [
                        _c("v-text-field", {
                          staticClass: "mx-4",
                          attrs: { label: "جهة الاتصال" },
                          model: {
                            value: _vm.search.name,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "name", $$v)
                            },
                            expression: "search.name"
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
                        _c("v-text-field", {
                          staticClass: "mx-4",
                          attrs: { label: "رقم الاتصال" },
                          model: {
                            value: _vm.search.phone,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "phone", $$v)
                            },
                            expression: "search.phone"
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
                            items: _vm.supplier_status,
                            "item-text": "status",
                            "item-value": "is_supplier_active",
                            label: "الحالة"
                          },
                          model: {
                            value: _vm.search.is_supplier_active,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "is_supplier_active", $$v)
                            },
                            expression: "search.is_supplier_active"
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
                        _c(
                          "v-row",
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "2" } },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { elevation: "", color: "primary" },
                                    on: { click: _vm.findSuppliers }
                                  },
                                  [_vm._v("البحث")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "2" } },
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
            key: "item.name",
            fn: function(ref) {
              var item = ref.item
              return [_vm._v("\n      " + _vm._s(item.name) + "\n    ")]
            }
          },
          {
            key: "item.arrears",
            fn: function(ref) {
              var item = ref.item
              return [_vm._v("\n      " + _vm._s(item.amount) + "\n    ")]
            }
          },
          {
            key: "item.balance",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n      " +
                    _vm._s((item.credit - item.debit).toFixed(2)) +
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
                    _vm._s(item.is_active ? "نشط" : "غير نشط") +
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
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.addUpdateSupplier(item, "update")
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
                      [_vm._v("mdi-pencil")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  { attrs: { to: "suppliers/" + item.id } },
                  [_c("v-icon", { attrs: { small: "" } }, [_vm._v("mdi-eye")])],
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
                        return _vm.deleteSupplier(item, "update")
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