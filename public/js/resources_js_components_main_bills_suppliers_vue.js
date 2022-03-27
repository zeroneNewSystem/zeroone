"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_bills_suppliers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Person */ "./resources/js/apis/Person.js");
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
  props: ["dialog", "person", "cities", "operation", "route"],
  data: function data() {
    return {
      isloading: false,
      title: "إضافة مورد جديد",
      countries: [],
      person_div_update: 0
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
      this.$emit("changeCountry", this.person.country_id);
    },
    closeDialog: function closeDialog() {
      this.$emit("close_person_dialog");
    },
    savePerson: function savePerson() {
      var _this2 = this;

      console.log(this.operation);
      this.isloading = "blue";

      if (this.operation == "add") {
        _apis_Person__WEBPACK_IMPORTED_MODULE_0__.default.store(this.person, this.route != "purchase" ? "customers" : "suppliers").then(function (response) {
          _this2.person["id"] = response.data;
          _this2.isloading = false;

          _this2.$emit("addUpdatePerson", _this2.person);
        });
        return;
      }

      if (this.operation == "update") {
        _apis_Person__WEBPACK_IMPORTED_MODULE_0__.default.update(this.person).then(function (response) {
          _this2.isloading = false;

          _this2.$emit("addUpdatePerson", _this2.person);
        });
        return;
      }
    },
    onParentChange: function onParentChange() {
      var _this3 = this;

      var parent = this.$store.state.persons.find(function (elem) {
        return elem.id == _this3.person.parent_id;
      });
      console.log(parent.type_id);
      var parent_type_code = this.$store.state.person_types.find(function (elem) {
        return elem.id == parent.type_id;
      }).type_code;
      console.log(parent_type_code);
      this.person.level = parseInt(parent.level + 1);
      this.person_types = this.$store.state.person_types.filter(function (elem) {
        var length = 2;

        if (parent.level >= 2) {
          length = 4;
        } //alert(length);


        return elem.type_code.toString().startsWith(parent_type_code.toString()) && elem.type_code.toString().length == length;
      });
    },
    bgblue: function bgblue(item) {
      if (Math.ceil(Math.log10(item.person_code + 1)) <= 2) {
        $("#nib" + item.person_code).parent().addClass("first-level");
      } else if (Math.ceil(Math.log10(item.person_code + 1)) <= 3) {
        $("#nib" + item.person_code).parent().addClass("second-level");
      }

      if (this.person_div_update == 0) this.person_div_update += 1;
      return "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/suppliers.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/suppliers.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/person */ "./resources/js/apis/person.js");
/* harmony import */ var _apis_Country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Country */ "./resources/js/apis/Country.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './person-info.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _AddUpdatePerson_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddUpdatePerson.vue */ "./resources/js/components/main/bills/AddUpdatePerson.vue");
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    personInfo: Object(function webpackMissingModule() { var e = new Error("Cannot find module './person-info.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    AddUpdatePerson: _AddUpdatePerson_vue__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    var _ref;

    return _ref = {
      route: window.location.pathname.replace(/^\/([^\/]*).*$/, "$1"),
      type_id: 1,
      //1 person
      loading: false,
      dialog: false,
      person_status: [{
        is_person_active: 0,
        status: "نشط"
      }, {
        is_person_active: 1,
        status: "غير نشط"
      }],
      cities: [],
      //-------etched data-----------------f
      operation: "add",
      people: [],
      add_update_person_dialog: false,
      passed_person: "",
      //-----------------------------------//
      person_info_person: "",
      person_info_dialog: false,
      search: {
        company_name: "",
        name: "",
        phone: "",
        is_person_active: ""
      },
      options: {},
      status: "salam",
      title: "إدارة الموردين",
      //---
      people_total: 20
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
          var data = response.data.people.data;
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

          _this.people = helper;
          console.log("helper", helper.amount);
          _this.people_total = response.data.people.data.total;
          _this.person_info_person = response.data.people.data[0];
          console.log(_this.people_total);
        });
      },
      deep: true
    }
  },
  // mounted() {
  //   this.getDataFromApi().then((data) => {
  //     this.people = data.response;
  //   });
  // },
  methods: {
    findpeople: function findpeople() {
      var _this2 = this;

      this.getDataFromApi().then(function (response) {
        var data = response.data.people.data;
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

        _this2.people = helper;
        console.log("helper", helper.amount);
        _this2.people_total = response.data.people.data.total;
        _this2.person_info_person = response.data.people.data[0];
        console.log(_this2.people_total);
      });
    },
    searchReset: function searchReset() {
      var _this3 = this;

      this.search = {
        company_name: "",
        name: "",
        phone: "",
        is_person_active: ""
      }, this.getDataFromApi().then(function (response) {
        var data = response.data.people.data;
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

        _this3.people = helper;
        console.log("helper", helper.amount);
        _this3.people_total = response.data.people.data.total;
        _this3.person_info_person = response.data.people.data[0];
        console.log(_this3.people_total);
      });
    },
    loadCities: function loadCities(country_id) {
      var _this4 = this;

      this.cities = [];
      _apis_Country__WEBPACK_IMPORTED_MODULE_1__.default.loadCities(country_id).then(function (response) {
        return _this4.cities = response.data.cities;
      });
    },
    addpersonToList: function addpersonToList(person) {
      console.log("person");
      if (this.operation == "add") this.people.push(person);else if (this.operation == "update") {
        this.people.splice(this.people.indexOf(function (elem) {
          return elem.id == person.id;
        }), 1, person);
      }
    },
    AddUpdatePerson: function AddUpdatePerson(item, operation) {
      this.operation = operation;

      if (operation == "add") {
        this.passed_person = {
          parent_id: "",
          type_id: "",
          name: "",
          account_code: "",
          description: ""
        };
      }

      if (operation == "update") {
        this.loadCities(item.country_id);
        this.passed_person = item;
        console.log("item", item);
        console.log("item", this.cities);
      }

      this.add_update_person_dialog = true;
    },
    show_person_dialog: function show_person_dialog(item) {
      this.person_info_dialog = true;
      console.log(item);
      this.person_info_person = item;
    },
    deleteperson: function deleteperson(item) {
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
      _apis_person__WEBPACK_IMPORTED_MODULE_0__.default.delete({
        person_id: person_id,
        page: page,
        itemsPerPage: itemsPerPage,
        search: this.search
      }).then(function (response) {
        _this5.loading = false;
        var data = response.data.people.data;
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

        _this5.people = helper;
        console.log("helper", helper.amount);
        _this5.people_total = response.data.people.data.total;
        _this5.person_info_person = response.data.people.data[0];
        console.log(_this5.people_total);
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

        _apis_person__WEBPACK_IMPORTED_MODULE_0__.default.get({
          type_id: _this6.type_id,
          page: page,
          itemsPerPage: itemsPerPage,
          search: _this6.search
        }).then(function (response) {
          _this6.loading = false;
          resolve(response);
        });
      });
    }
  },
  created: function created() {
    console.log(this.$route);
    console.log(this.route);
    console.log("patho");
    console.log(this.route.split("/"));

    if (this.route == "person") {
      this.type_id = 1;
      /* 
        1- suppplier
        2- customer
        3 - user
        */
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

/***/ "./resources/js/apis/Person.js":
/*!*************************************!*\
  !*** ./resources/js/apis/Person.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(supplier, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/" + route, supplier);
  },
  update: function update(supplier, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/" + route, supplier);
  },
  postCreate: function postCreate(supplier, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/" + route + "/create", supplier);
  },
  getOne: function getOne(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route + "/getOne", {
      params: params
    });
  },
  get: function get(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route, {
      params: params
    });
  },
  getByProductID: function getByProductID(id, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route + "/product/" + id);
  },
  search: function search(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route + "/search", {
      params: params
    });
  },
  barcodeSearch: function barcodeSearch(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/router/" + params.barcode);
  },
  "delete": function _delete(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/" + route + "/", {
      params: params
    });
  }
});

/***/ }),

/***/ "./resources/js/apis/person.js":
/*!*************************************!*\
  !*** ./resources/js/apis/person.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(supplier, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/" + route, supplier);
  },
  update: function update(supplier, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/" + route, supplier);
  },
  postCreate: function postCreate(supplier, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/" + route + "/create", supplier);
  },
  getOne: function getOne(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route + "/getOne", {
      params: params
    });
  },
  get: function get(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route, {
      params: params
    });
  },
  getByProductID: function getByProductID(id, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route + "/product/" + id);
  },
  search: function search(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route + "/search", {
      params: params
    });
  },
  barcodeSearch: function barcodeSearch(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/router/" + params.barcode);
  },
  "delete": function _delete(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/" + route + "/", {
      params: params
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdatePerson.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/main/bills/AddUpdatePerson.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/main/bills/AddUpdatePerson.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddUpdatePerson_vue_vue_type_template_id_27d75cde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUpdatePerson.vue?vue&type=template&id=27d75cde& */ "./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=template&id=27d75cde&");
/* harmony import */ var _AddUpdatePerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUpdatePerson.vue?vue&type=script&lang=js& */ "./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddUpdatePerson.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AddUpdatePerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddUpdatePerson_vue_vue_type_template_id_27d75cde___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddUpdatePerson_vue_vue_type_template_id_27d75cde___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/bills/AddUpdatePerson.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/bills/suppliers.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/main/bills/suppliers.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _suppliers_vue_vue_type_template_id_5e769899___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suppliers.vue?vue&type=template&id=5e769899& */ "./resources/js/components/main/bills/suppliers.vue?vue&type=template&id=5e769899&");
/* harmony import */ var _suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suppliers.vue?vue&type=script&lang=js& */ "./resources/js/components/main/bills/suppliers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _suppliers_vue_vue_type_template_id_5e769899___WEBPACK_IMPORTED_MODULE_0__.render,
  _suppliers_vue_vue_type_template_id_5e769899___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/bills/suppliers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdatePerson.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/bills/suppliers.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/main/bills/suppliers.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./suppliers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/suppliers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdatePerson.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=template&id=27d75cde&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=template&id=27d75cde& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_template_id_27d75cde___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_template_id_27d75cde___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_template_id_27d75cde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdatePerson.vue?vue&type=template&id=27d75cde& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=template&id=27d75cde&");


/***/ }),

/***/ "./resources/js/components/main/bills/suppliers.vue?vue&type=template&id=5e769899&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/main/bills/suppliers.vue?vue&type=template&id=5e769899& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_suppliers_vue_vue_type_template_id_5e769899___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_suppliers_vue_vue_type_template_id_5e769899___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_suppliers_vue_vue_type_template_id_5e769899___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./suppliers.vue?vue&type=template&id=5e769899& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/suppliers.vue?vue&type=template&id=5e769899&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=template&id=27d75cde&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=template&id=27d75cde& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
                              return _vm.savePerson()
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
                              value: _vm.person.name,
                              callback: function($$v) {
                                _vm.$set(_vm.person, "name", $$v)
                              },
                              expression: "person.name"
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
                              value: _vm.person.company_name,
                              callback: function($$v) {
                                _vm.$set(_vm.person, "company_name", $$v)
                              },
                              expression: "person.company_name"
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
                              value: _vm.person.country_id,
                              callback: function($$v) {
                                _vm.$set(_vm.person, "country_id", $$v)
                              },
                              expression: "person.country_id"
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
                              value: _vm.person.city_id,
                              callback: function($$v) {
                                _vm.$set(_vm.person, "city_id", $$v)
                              },
                              expression: "person.city_id"
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
                              value: _vm.person.address,
                              callback: function($$v) {
                                _vm.$set(_vm.person, "address", $$v)
                              },
                              expression: "person.address"
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
                              value: _vm.person.phone01,
                              callback: function($$v) {
                                _vm.$set(_vm.person, "phone01", $$v)
                              },
                              expression: "person.phone01"
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
                              value: _vm.person.phone02,
                              callback: function($$v) {
                                _vm.$set(_vm.person, "phone02", $$v)
                              },
                              expression: "person.phone02"
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
                              value: _vm.person.email,
                              callback: function($$v) {
                                _vm.$set(_vm.person, "email", $$v)
                              },
                              expression: "person.email"
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
                              value: _vm.person.website,
                              callback: function($$v) {
                                _vm.$set(_vm.person, "website", $$v)
                              },
                              expression: "person.website"
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
                              value: _vm.person.tax_number,
                              callback: function($$v) {
                                _vm.$set(_vm.person, "tax_number", $$v)
                              },
                              expression: "person.tax_number"
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
                                          return _vm.savePerson()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/suppliers.vue?vue&type=template&id=5e769899&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/suppliers.vue?vue&type=template&id=5e769899& ***!
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
    [
      _c("add-update-person", {
        attrs: {
          dialog: _vm.add_update_person_dialog,
          person: _vm.passed_person,
          operation: _vm.operation,
          cities: _vm.cities
        },
        on: {
          AddUpdatePerson: _vm.addpersonToList,
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
          items: _vm.people,
          options: _vm.options,
          "server-items-length": _vm.people_total,
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
                            return _vm.AddUpdatePerson("", "add")
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
                            items: _vm.person_status,
                            "item-text": "status",
                            "item-value": "is_person_active",
                            label: "الحالة"
                          },
                          model: {
                            value: _vm.search.is_person_active,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "is_person_active", $$v)
                            },
                            expression: "search.is_person_active"
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
                                    on: { click: _vm.findpeople }
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
                        return _vm.AddUpdatePerson(item, "update")
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
                  { attrs: { to: "people/" + item.id } },
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
                        return _vm.deleteperson(item, "update")
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