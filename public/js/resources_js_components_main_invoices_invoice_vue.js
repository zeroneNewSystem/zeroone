"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_invoices_invoice_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Customer */ "./resources/js/apis/Customer.js");
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
  props: ["dialog", "customer", "cities", "operation"],
  data: function data() {
    return {
      isloading: false,
      title: "إضافة عميل جديد",
      countries: [],
      customer_div_update: 0
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
      this.$emit("changeCountry", this.customer.country_id);
    },
    closeDialog: function closeDialog() {
      this.$parent.$data.add_update_customer_dialog = false;
    },
    saveCustomer: function saveCustomer() {
      var _this2 = this;

      console.log(this.operation);
      this.isloading = "blue";

      if (this.operation == "add") {
        _apis_Customer__WEBPACK_IMPORTED_MODULE_0__.default.store(this.customer).then(function (response) {
          _this2.customer["id"] = response.data;
          _this2.$parent.$data.add_update_customer_dialog = false;
          _this2.isloading = false;

          _this2.$emit("addUpdateCustomer", _this2.customer);
        });
        return;
      }

      if (this.operation == "update") {
        _apis_Customer__WEBPACK_IMPORTED_MODULE_0__.default.update(this.customer).then(function (response) {
          _this2.$parent.$data.add_update_customer_dialog = false;
          _this2.isloading = false;

          _this2.$emit("addUpdateCustomer", _this2.customer);
        });
        return;
      }
    },
    onParentChange: function onParentChange() {
      var _this3 = this;

      var parent = this.$store.state.customers.find(function (elem) {
        return elem.id == _this3.customer.parent_id;
      });
      console.log(parent.type_id);
      var parent_type_code = this.$store.state.customer_types.find(function (elem) {
        return elem.id == parent.type_id;
      }).type_code;
      console.log(parent_type_code);
      this.customer.level = parseInt(parent.level + 1);
      this.customer_types = this.$store.state.customer_types.filter(function (elem) {
        var length = 2;

        if (parent.level >= 2) {
          length = 4;
        } //alert(length);


        return elem.type_code.toString().startsWith(parent_type_code.toString()) && elem.type_code.toString().length == length;
      });
    },
    bgblue: function bgblue(item) {
      if (Math.ceil(Math.log10(item.customer_code + 1)) <= 2) {
        $("#nib" + item.customer_code).parent().addClass("first-level");
      } else if (Math.ceil(Math.log10(item.customer_code + 1)) <= 3) {
        $("#nib" + item.customer_code).parent().addClass("second-level");
      }

      if (this.customer_div_update == 0) this.customer_div_update += 1;
      return "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/invoice.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/invoice.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Product */ "./resources/js/apis/Product.js");
/* harmony import */ var _apis_Invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Invoice */ "./resources/js/apis/Invoice.js");
/* harmony import */ var _products_product_info_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products/product-info.vue */ "./resources/js/components/main/products/product-info.vue");
/* harmony import */ var _payment_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-methods */ "./resources/js/components/main/invoices/payment-methods.vue");
/* harmony import */ var _invoices_AddUpdateCustomer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../invoices/AddUpdateCustomer.vue */ "./resources/js/components/main/invoices/AddUpdateCustomer.vue");
/* harmony import */ var _apis_Country__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apis/Country */ "./resources/js/apis/Country.js");
/* harmony import */ var _apis_Customer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../apis/Customer */ "./resources/js/apis/Customer.js");
/* harmony import */ var _apis_Account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../apis/Account */ "./resources/js/apis/Account.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ProductInfo: _products_product_info_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    PaymentMethod: _payment_methods__WEBPACK_IMPORTED_MODULE_3__.default,
    AddUpdateCustomer: _invoices_AddUpdateCustomer_vue__WEBPACK_IMPORTED_MODULE_4__.default
  },
  data: function data() {
    return {
      title: "فاتورة بيع جديدة",
      is_new_invoice: true,
      additional_expenses_from_accounts: [],
      additional_expenses_from_account_id: "",
      searched_barcode: "",

      /*----------------info----------------- */
      payment_method_dialog: false,
      product_info_product: "",
      product_info_dialog: false,
      prdct_forms: [],
      prdct_taxes: [],
      prdct_types: [],

      /*-----------------------taxes---------------------------*/
      taxes: [],

      /*----------------discount_types--------------------*/
      discount_types: [{
        id: 1,
        ar_name: "%",
        en_name: "%"
      }, {
        id: 2,
        ar_name: "قيمة",
        en_name: "amount"
      }],
      add_update_customer_dialog: false,
      passed_customer: "",
      operation: "add",
      cities: [],
      customers: [],
      name_search: "",
      loading: false,
      found_products: [],
      selected_product: [],
      sales_header: [{
        text: "اسم الصنف",
        align: "center",
        value: "ar_name",
        width: 300,
        sortable: false
      }, {
        text: "الصلاحية",
        align: "center",
        value: "expires_at",
        sortable: false,
        width: 100
      }, {
        text: "الكمية",
        align: "center",
        value: "sales_quantity",
        sortable: false
      }, {
        text: "الوحدة",
        align: "center",
        value: "product_unit_id",
        sortable: false
      }, {
        text: "سعر الوحدة",
        align: "center",
        value: "unit_price",
        sortable: false
      }, {
        text: "الكمية و.ص",
        align: "center",
        value: "quantity_in_minor_unit",
        sortable: false
      }, {
        text: "خصم البيع",
        align: "center",
        value: "sales_discount",
        sortable: false,
        width: 100
      }, {
        text: "الاجمالي قبل الضريبة",
        align: "center",
        value: "total_befor_tax",
        sortable: false
      }, {
        text: "الضريبة % ",
        align: "center",
        value: "sales_tax",
        sortable: false
      }, {
        text: "قيمة الضريبة",
        align: "center",
        value: "sales_tax_value",
        sortable: false
      }, {
        text: "القيمة",
        align: "center",
        value: "total",
        sortable: false
      }, {
        text: "تحكم ",
        align: "center",
        value: "action"
      }],
      payment_conditions: [],
      invoice: {
        payment_methods: [{
          account_id: "",
          credit: 0,
          description: ""
        }, {
          account_id: "",
          credit: 0,
          description: ""
        }, {
          account_id: "",
          credit: 0,
          description: ""
        }],
        paid_amount: 0,
        remaining_amount: 0,
        additional_expenses: 0,
        total_without_products_vat: 0,
        total_vat: 0,
        total_amount: 0,
        patch_number: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),
        invoice_details: [],
        sales_reference: "",
        description: "",
        customer_id: "",
        issue_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
        maturity_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)
      },

      /*------------------dateTime----------------------*/
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      issue_date_is_down: false,
      maturity_date_is_down: false,
      formatted_issue_date: this.formatDate(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)),

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
      }]
    };
  },
  watch: {
    name_search: function name_search(val) {
      val && val !== this.selected_product.ar_name && this.getProducts(val, "name");
    }
  },
  methods: {
    customerInfo: function customerInfo() {
      var _this = this;

      return this.customers.find(function (elem) {
        return elem.id == _this.invoice.customer_id;
      });
    },
    changeDateFormat: function changeDateFormat() {
      var chunks = this.invoice.test_date.match(/.{1,2}/g);
      if (chunks[1].length == 1) chunks[1] = "0" + chunks[1];
      var date = "20" + chunks[0] + "-" + chunks[1] + "-01";

      if (!isNaN(Date.parse(date))) {
        console.log(Date.parse(date));
        this.invoice.test_date = date;
        this.is_valid_date = [];
        return;
      }

      this.is_valid_date = ["التاريخ غير صحيح"];
    },
    addCustomerToList: function addCustomerToList(customer) {
      this.customers.push(customer);
      this.invoice.customer_id = customer.id;
    },
    loadCities: function loadCities(country_id) {
      var _this2 = this;

      this.cities = [];
      _apis_Country__WEBPACK_IMPORTED_MODULE_5__.default.loadCities(country_id).then(function (response) {
        return _this2.cities = response.data.cities;
      });
    },
    addCustomer: function addCustomer() {
      this.add_update_customer_dialog = true;
      this.operation = "add";
      this.passed_customer = {};
    },
    searchAndAddToInvoice: function searchAndAddToInvoice() {
      var _this3 = this;

      var params = {
        barcode: this.searched_barcode,
        inventory_id: 1
      };
      _apis_Product__WEBPACK_IMPORTED_MODULE_0__.default.invoiceBarcodeSearch(params).then(function (response) {
        if (response.data.products.length == 0) {
          _this3.is_exists = [ false || "الصنف غير موجود "];
          return;
        }

        _this3.is_exists = [true];
        response.data.products[0].actual_quantity = 0;
        response.data.products[0].actual_quantity_in_minor_unit = 0;
        _this3.selected_item = JSON.parse(JSON.stringify(response.data.products[0]));
        if (_this3.selected_item.purchase_details.length == 0) return;

        if (_this3.selected_item.purchase_details.length == 1) {
          _this3.showThisProduct(_this3.selected_item);
        }

        var products_grouped = true;

        if (products_grouped) {
          _this3.selected_item.invoice_details[0].quantity_in_minor_unit = _this3.selected_item.quantity_in_minor_unit; // this.selected_item.invoice_details[0].quantity_in_minor_unit =
          //   this.selected_item.invoice_details.reduce(
          //     (a, b) => +a + +b.quantity_in_minor_unit,
          //     0
          //   );

          console.log("this.selected_item");
          console.log(_this3.selected_item);

          _this3.showThisProduct(_this3.selected_item);

          return;
        }

        _this3.sets = _this3.selected_item.invoice_details;
        _this3.dialog = true;

        _this3.$nextTick().then(function () {
          var listElm = document.querySelector("ul"); // Mark first list item

          _this3.$nextTick(function () {
            listElm.firstElementChild.focus();
            var selectedElm = document.activeElement,
                goToStart,
                // map actions to event's key
            action = {
              ArrowUp: "previous",
              Up: "previous",
              ArrowDown: "next",
              Down: "next"
            };

            var f = function f(e) {
              if (e.key === "Enter") {
                var parent = selectedElm.parentNode;
                console.log(parent);
                console.log(selectedElm);
                _this3.index_of_selected_product = Array.prototype.indexOf.call(listElm.children, selectedElm);
                var selected_item = JSON.parse(JSON.stringify(_this3.selected_item));
                console.log(selected_item);
                selected_item["invoice_details"][0] = selected_item["invoice_details"][_this3.index_of_selected_product];

                _this3.showThisProduct(selected_item);

                console.log("index");
                console.log("index");
                window.removeEventListener("keydown", f);
                console.log("input_barcode");
                console.log(input_barcode);
                console.log("input_barcode");
                var input_barcode = document.getElementById("barcode");

                _this3.$nextTick(function () {
                  input_barcode.focus();
                });

                console.log("selectedElm");
                console.log(selectedElm);
                console.log("selectedElm");
                _this3.dialog = false;
                return;
              } //e.preventDefault();


              console.log(selectedElm);
              selectedElm = selectedElm[action[e.key] + "ElementSibling"]; // loop if top/bottom edges reached or "home"/"end" keys clicked

              if (!selectedElm || e.key == "Home" || e.key == "End") {
                goToStart = action[e.key] == "next" || e.key == "Home";
                selectedElm = listElm.children[goToStart ? 0 : listElm.children.length - 1];
              }

              selectedElm.focus();
            };

            window.addEventListener("keydown", f);
          }); // Event listener

        }); //-----add
        //---------
        //selected_product["document_type_id"] = 1; // invoice
        //selected_product["product_id"] = selected_product["id"]; // invoice

      });
    },
    remaining_amount: function remaining_amount() {
      return this.invoice.remaining_amount = this.invoice.total_amount - this.invoice.paid_amount;
    },
    payAllCash: function payAllCash() {
      this.invoice.paid_amount = this.invoice.total_amount.toFixed(2);
      this.invoice.payment_methods = "";
    },
    paymentMethods: function paymentMethods(payments) {
      this.invoice.payment_methods = payments.payment_methods;
      this.invoice.paid_amount = payments.paid_amount;
    },
    show_product_dialog: function show_product_dialog(item) {
      this.product_info_dialog = true;
      console.log(item);
      this.product_info_product = item;
    },
    showThisProduct: function showThisProduct(selected_product) {
      if (this.invoice.invoice_details.findIndex(function (elem) {
        return elem.id == selected_product.id;
      }) >= 0) return;
      selected_product.sales_unit_id = selected_product.units[selected_product.main_sales_unit_id - 1].pivot.id;
      selected_product.unit_price = selected_product.units[selected_product.main_sales_unit_id - 1].pivot.purchase_price;
      selected_product.sales_quantity = 1;
      selected_product.current_quantity = selected_product.purchase_details[0].quantity_in_minor_unit / selected_product.units[selected_product.main_sales_unit_id - 1].pivot.contains;
      selected_product.actual_quantity = selected_product.current_quantity;
      selected_product.actual_quantity_in_minor_unit = parseInt(selected_product.actual_quantity * selected_product.units[selected_product.main_sales_unit_id - 1].pivot.contains);
      console.log("selected_product");
      console.log(selected_product);
      selected_product["document_type_id"] = 2; // purchase

      selected_product["product_id"] = selected_product["id"]; // purchase

      this.invoice.invoice_details.push(selected_product);
      return;
    },
    product_unit_change: function product_unit_change(item) {
      var sales_unit = item.units.find(function (elem) {
        return elem.pivot.id == item.sales_unit_id;
      });
      item.unit_price = sales_unit.pivot.sales_price;
    },
    total_vat: function total_vat() {
      this.invoice.total_vat = this.invoice.invoice_details.reduce(function (a, b) {
        return +a + +b.sales_tax_value;
      }, 0);
      return this.invoice.total_vat;
    },
    total_amount: function total_amount() {
      this.invoice.total_amount = this.total_without_products_vat() + this.total_vat() + this.invoice.additional_expenses;
      return this.invoice.total_amount;
    },
    total_without_products_vat: function total_without_products_vat() {
      return this.invoice.invoice_details.reduce(function (a, b) {
        return +a + +b.total_befor_tax;
      }, 0);
    },
    total: function total(item) {
      item.total = this.sales_tax_value(item) + this.total_befor_tax(item);
      return item.total;
    },
    sales_tax_value: function sales_tax_value(item) {
      item.sales_tax_value = this.total_befor_tax(item) * item.sales_tax / 100;
      return item.sales_tax_value;
    },
    total_befor_tax: function total_befor_tax(item) {
      if (item.sales_discount_type_id == 1) {
        item.total_befor_tax = item.sales_quantity * item.unit_price - item.sales_quantity * item.unit_price * item.sales_discount / 100;
        return item.total_befor_tax;
      }

      item.total_befor_tax = item.sales_quantity * item.unit_price - item.sales_discount;
      return item.total_befor_tax;
    },
    quantity_in_minor_unit: function quantity_in_minor_unit(item) {
      console.log(item);
      var sales_unit = item.units.find(function (elem) {
        return elem.pivot.id == item.sales_unit_id;
      });
      console.log("sales_unit");
      console.log(sales_unit);
      item.quantity_in_minor_unit = item.sales_quantity * sales_unit.pivot.contains;
      console.log(item.quantity_in_minor_unit);
      return item.quantity_in_minor_unit;
    },
    deleteItem: function deleteItem(item) {
      this.invoice.invoice_details.splice(this.invoice.invoice_details.indexOf(item), 1);
    },
    getProducts: function getProducts(val, type) {
      var _this4 = this;

      if (val.length > 2) {
        this.loading = true;
        var params = "";
        if (type == "barcode") params = {
          barcode: val
        };else params = {
          name: val
        }; // Simulated ajax query ajax

        _apis_Product__WEBPACK_IMPORTED_MODULE_0__.default.search(params).then(function (response) {
          _this4.loading = false;
          console.log("hi", response.data);

          if (response.data.length !== 0) {
            _this4.found_products = JSON.parse(JSON.stringify(response.data.products));
          }
        });
      }
    },
    addProductToInvoice: function addProductToInvoice() {
      console.log(this.invoice.invoice_details);
      console.log("seles", this.selected_product); //set defaultsales_id from main salesid

      this.selected_product.sales_unit_id = this.selected_product.units[this.selected_product.main_sales_unit_id - 1].pivot.id;
      this.selected_product.unit_price = this.selected_product.units[this.selected_product.main_sales_unit_id - 1].pivot.sales_price;
      this.selected_product.sales_quantity = 1;
      console.log("nnj", this.selected_product.sales_unit_id);
      this.invoice.invoice_details.unshift(JSON.parse(JSON.stringify(this.selected_product)));
      console.log("nib", this.invoice.invoice_details);
      this.selected_product = [];
    },
    checkExicting: function checkExicting() {},
    submit: function submit() {
      if (this.is_new_invoice) _apis_Invoice__WEBPACK_IMPORTED_MODULE_1__.default.store(this.invoice).then(function (response) {
        return console.log(response.data);
      });else _apis_Invoice__WEBPACK_IMPORTED_MODULE_1__.default.update(this.invoice).then(function (response) {
        return console.log(response.data);
      });
      console.log(this.invoice);
    },

    /*------------------dateTime----------------------*/
    formatDate: function formatDate(date) {
      if (!date) return null;

      var _date$split = date.split("-"),
          _date$split2 = _slicedToArray(_date$split, 3),
          year = _date$split2[0],
          month = _date$split2[1],
          day = _date$split2[2];

      return "".concat(month, "/").concat(day, "/").concat(year);
    },
    parseDate: function parseDate(date) {
      if (!date) return null;

      var _date$split3 = date.split("/"),
          _date$split4 = _slicedToArray(_date$split3, 3),
          month = _date$split4[0],
          day = _date$split4[1],
          year = _date$split4[2];

      return "".concat(year, "-").concat(month.padStart(2, "0"), "-").concat(day.padStart(2, "0"));
    }
  },
  created: function created() {
    var _this5 = this;

    if (this.$route.params.id) {
      this.is_new_invoice = false;
      this.title = "تعديل فاتورة رقم " + this.$route.params.id;
      _apis_Invoice__WEBPACK_IMPORTED_MODULE_1__.default.get(this.$route.params.id).then(function (response) {
        _this5.invoice = response.data.invoice;
        console.log(_this5.invoice);
        _this5.invoice.issue_date = _this5.invoice.issue_date.split(" ")[0];
        _this5.invoice.maturity_date = _this5.invoice.maturity_date.split(" ")[0];

        _this5.invoice.invoice_details.forEach(function (elem) {
          if (elem.expires_at) elem.expires_at = elem.expires_at.split(" ")[0];
        });

        if (_this5.invoice.payment_methods.length == 0) _this5.invoice.payment_methods = [{
          account_id: "",
          credit: 0,
          description: ""
        }, {
          account_id: "",
          credit: 0,
          description: ""
        }, {
          account_id: "",
          credit: 0,
          description: ""
        }];
        _this5.customers = response.data.customers;
        _this5.additional_expenses_from_accounts = response.data.accounts.accounts;
        console.log(response.data.accounts.accounts);
      });
    } else {
      _apis_Customer__WEBPACK_IMPORTED_MODULE_6__.default.get().then(function (response) {
        return _this5.customers = response.data;
      });
      _apis_Account__WEBPACK_IMPORTED_MODULE_7__.default.cashAndBanks().then(function (response) {
        return _this5.additional_expenses_from_accounts = response.data.accounts;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/payment-methods.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/payment-methods.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["invoice_total", "accounts", "payment_methods"],
  data: function data() {
    return {
      /*-------------------validators---------------------------*/
      vld_minlingth_one: [function (v) {
        return v.length >= 1 || "أدخل قيمة";
      }],
      required: [function (value) {
        return !!value || "الحقل مطلوب.";
      }],
      isunique: [],
      vld_numbering: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],
      dialog: false,

      /*-------------------validators---------------------------*/
      payment_methods_header: [{
        text: "م",
        align: "center",
        width: "10px",
        sortable: false,
        value: "id"
      }, {
        text: "الدفع عبر...",
        align: "center",
        value: "ar_name",
        sortable: false
      }, {
        text: "رقم الحساب",
        align: "center",
        value: "account_code",
        sortable: false
      }, {
        text: " القيمة",
        align: "center",
        value: "credit",
        sortable: false
      }, {
        text: "ملاحظات",
        align: "center",
        value: "description",
        sortable: false
      }, {
        text: "تحكم ",
        align: "center",
        value: "actions",
        sortable: false
      }]
    };
  },
  computed: {
    remaining_amount: function remaining_amount(v) {
      return v.invoice_total - v.paid_amount;
    },
    paid_amount: function paid_amount(v) {
      return v.payment_methods.reduce(function (a, b) {
        return +a + +b.credit;
      }, 0);
    }
  },
  methods: {
    setMethodsIfEmpty: function setMethodsIfEmpty() {},
    addPaymentMethod: function addPaymentMethod() {
      this.payment_methods.push({
        account_id: "",
        credit: 0,
        description: ""
      });
    },
    deletPaymentMethod: function deletPaymentMethod(item) {
      var index = this.payment_methods.indexOf(item);
      this.payment_methods.splice(index, 1);
    },
    emitPayments: function emitPayments() {
      this.$emit("payment_methods", {
        payment_methods: this.payment_methods,
        paid_amount: this.paid_amount
      });
      this.dialog = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["product", "prdct_forms", "prdct_taxes", "prdct_types", "dialog"],
  mounted: function mounted() {
    var _this = this;

    window.addEventListener("resize", function () {
      _this.windowHeight = window.innerHeight;
      console.log(_this.windowHeight);
    });
  },
  data: function data() {
    return {
      windowHeight: 0,
      product_units_headers: [{
        text: " افتراضية البيع ",
        align: "center",
        sortable: false,
        value: "main_sales_unit_id"
      }, {
        text: " افتراضية الشراء ",
        align: "center",
        sortable: false,
        value: "main_purchase_unit_id"
      }, {
        text: " الوحدة",
        align: "center",
        sortable: false,
        value: "ar_name"
      }, {
        text: "تساوي",
        align: "center",
        sortable: false,
        value: "equals"
      }, {
        text: "عدد",
        align: "center",
        sortable: false,
        value: "contains"
      }, {
        text: "من الوحدة",
        align: "center",
        sortable: false,
        value: "from_unit"
      }, {
        text: "سعر الشراء",
        align: "center",
        sortable: false,
        value: "purchase_price"
      }, {
        text: "سعر البيع",
        align: "center",
        sortable: false,
        value: "sales_price"
      }, {
        text: "الباركود",
        align: "center",
        sortable: false,
        value: "barcode",
        width: "150"
      }],
      tab: null,
      items: ["بيانات أساسية", "الوحدات", "المجموعات", "التصنيف", "الموردين"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      editedIndex: -1,
      emailRules: [function (v) {
        return !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "ادخل البريد بشكل صحيح";
      }],
      vld_minlingth: [function (v) {
        return !v || (v === null || v === void 0 ? void 0 : v.length) >= 2 || "أدخل أكثر من حرفين";
      }],
      vld_minlingth_noEmpty: [function (v) {
        return (v === null || v === void 0 ? void 0 : v.length) >= 2 || "أدخل أكثر من حرفين";
      }],
      vld_numbering: [function (v) {
        return !v || /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],
      vld_numbering_noEmpty: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],
      formTitle: "",
      new_product: {
        name: "",
        mobile: "",
        tel: "",
        email: "",
        company: "",
        notes: ""
      },
      edited_product: {
        name: "",
        mobile: "",
        tel: "",
        email: "",
        company: "",
        notes: ""
      }
    };
  },
  methods: {
    close: function close() {
      this.$parent.$data.product_info_dialog = false;
    },
    emit_product: function emit_product() {},
    save: function save(item) {
      var _this2 = this;

      if (this.$refs.form.validate()) {
        var product = Object.assign({}, item);
        item.flag = "addproducts";
        item.filename = "products";
        axios.post("router.php", item).then(function (response) {
          _this2.$emit("product", product);

          console.log(response.data);
        });
        this.$refs.form.reset();
        this.close();
      }
    },
    update: function update(item) {
      var _this3 = this;

      if (this.$refs.form.validate()) {
        var product = Object.assign({}, item);
        console.log("item");
        item.flag = "updateproducts";
        item.filename = "products";
        axios.post("router.php", item).then(function (response) {
          _this3.$emit("product", product);

          console.log(response.data);
        });
        this.$refs.form.reset();
        this.close();
      }
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

/***/ "./resources/js/apis/Customer.js":
/*!***************************************!*\
  !*** ./resources/js/apis/Customer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(customer) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/customers", customer);
  },
  update: function update(customer) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/customers", customer);
  },
  postCreate: function postCreate(customer) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/customers/create", customer);
  },
  get: function get(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/customers", {
      params: params
    });
  },
  search: function search(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/customers/search", {
      params: params
    });
  },
  barcodeSearch: function barcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/router/" + params.barcode);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/customers/", {
      params: params
    });
  }
});

/***/ }),

/***/ "./resources/js/apis/Invoice.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Invoice.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(invoice) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/invoices", invoice);
  },
  get: function get(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/invoices/" + id);
  },
  update: function update(invoice) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/invoices", invoice);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/invoices/", {
      params: params
    });
  }
});

/***/ }),

/***/ "./resources/js/apis/Product.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Product.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isExist: function isExist(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/product/exists/" + product.type + "/" + product.what_to_search);
  },
  create: function create() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/products/create");
  },
  store: function store(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/products", product);
  },
  update: function update(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/products", product);
  },
  postCreate: function postCreate(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/products/create", product);
  },
  get: function get(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/products/", {
      params: params
    });
  },
  search: function search(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/products/search", {
      params: params
    });
  },
  purchaseBarcodeSearch: function purchaseBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/purchase/barcode/" + params.barcode);
  },
  invoiceBarcodeSearch: function invoiceBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/invoice/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  stockTakeBarcodeSearch: function stockTakeBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/stock_take/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/products/", {
      params: params
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/invoice.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/invoice.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-application--wrap > .container {\r\n  margin: 0;\n}\n.v-text-field.v-text-field--enclosed .v-text-field__details,\r\n.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)\r\n  > .v-input__control\r\n  > .v-input__slot {\r\n  padding: 0px;\n}\n.invoice-footer {\r\n  min-width: 0;\r\n  overflow: hidden;\n}\n.invoice-extra-expense :after,\r\n.invoice-extra-expense :before {\r\n  display: none;\n}\n.invoice-extra-expense .v-text-field__details {\r\n  display: none;\n}\n.text-red input {\r\n  color: red !important;\n}\n.invoice-info .v-text-field__prefix {\r\n  margin-right: 10px;\n}\r\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\n}\r\n\r\n/* Firefox */\ninput[type=\"number\"] {\r\n  -moz-appearance: textfield;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate)\r\n  .v-icon {\r\n  color: rgb(111, 98, 228) !important;\n}\n.row {\r\n  margin: 0 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateCustomer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdateCustomer.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateCustomer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateCustomer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/invoice.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/invoice.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invoice.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/invoice.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/main/invoices/AddUpdateCustomer.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/main/invoices/AddUpdateCustomer.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddUpdateCustomer_vue_vue_type_template_id_1713adda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUpdateCustomer.vue?vue&type=template&id=1713adda& */ "./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=template&id=1713adda&");
/* harmony import */ var _AddUpdateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUpdateCustomer.vue?vue&type=script&lang=js& */ "./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddUpdateCustomer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddUpdateCustomer.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AddUpdateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddUpdateCustomer_vue_vue_type_template_id_1713adda___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddUpdateCustomer_vue_vue_type_template_id_1713adda___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/invoices/AddUpdateCustomer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/invoices/invoice.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/main/invoices/invoice.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _invoice_vue_vue_type_template_id_2782a45f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.vue?vue&type=template&id=2782a45f& */ "./resources/js/components/main/invoices/invoice.vue?vue&type=template&id=2782a45f&");
/* harmony import */ var _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.vue?vue&type=script&lang=js& */ "./resources/js/components/main/invoices/invoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/invoices/invoice.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _invoice_vue_vue_type_template_id_2782a45f___WEBPACK_IMPORTED_MODULE_0__.render,
  _invoice_vue_vue_type_template_id_2782a45f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/invoices/invoice.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/invoices/payment-methods.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/main/invoices/payment-methods.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _payment_methods_vue_vue_type_template_id_77f2931d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-methods.vue?vue&type=template&id=77f2931d& */ "./resources/js/components/main/invoices/payment-methods.vue?vue&type=template&id=77f2931d&");
/* harmony import */ var _payment_methods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-methods.vue?vue&type=script&lang=js& */ "./resources/js/components/main/invoices/payment-methods.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _payment_methods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _payment_methods_vue_vue_type_template_id_77f2931d___WEBPACK_IMPORTED_MODULE_0__.render,
  _payment_methods_vue_vue_type_template_id_77f2931d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/invoices/payment-methods.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/products/product-info.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/main/products/product-info.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-info.vue?vue&type=template&id=b36f5868& */ "./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&");
/* harmony import */ var _product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-info.vue?vue&type=script&lang=js& */ "./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&");
/* harmony import */ var _product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-info.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.render,
  _product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/products/product-info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdateCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/invoices/invoice.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/main/invoices/invoice.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/invoice.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/invoices/payment-methods.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/main/invoices/payment-methods.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment-methods.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/payment-methods.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateCustomer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdateCustomer.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/invoices/invoice.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/main/invoices/invoice.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invoice.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/invoice.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=template&id=1713adda&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=template&id=1713adda& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateCustomer_vue_vue_type_template_id_1713adda___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateCustomer_vue_vue_type_template_id_1713adda___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateCustomer_vue_vue_type_template_id_1713adda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdateCustomer.vue?vue&type=template&id=1713adda& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=template&id=1713adda&");


/***/ }),

/***/ "./resources/js/components/main/invoices/invoice.vue?vue&type=template&id=2782a45f&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/main/invoices/invoice.vue?vue&type=template&id=2782a45f& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_2782a45f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_2782a45f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_2782a45f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invoice.vue?vue&type=template&id=2782a45f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/invoice.vue?vue&type=template&id=2782a45f&");


/***/ }),

/***/ "./resources/js/components/main/invoices/payment-methods.vue?vue&type=template&id=77f2931d&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/main/invoices/payment-methods.vue?vue&type=template&id=77f2931d& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_template_id_77f2931d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_template_id_77f2931d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_template_id_77f2931d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment-methods.vue?vue&type=template&id=77f2931d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/payment-methods.vue?vue&type=template&id=77f2931d&");


/***/ }),

/***/ "./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=template&id=b36f5868& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=template&id=1713adda&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/AddUpdateCustomer.vue?vue&type=template&id=1713adda& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
                              return _vm.saveCustomer()
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
                            attrs: { label: "اسم العميل *", required: "" },
                            model: {
                              value: _vm.customer.name,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "name", $$v)
                              },
                              expression: "customer.name"
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
                              value: _vm.customer.company_name,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "company_name", $$v)
                              },
                              expression: "customer.company_name"
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
                              value: _vm.customer.country_id,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "country_id", $$v)
                              },
                              expression: "customer.country_id"
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
                              value: _vm.customer.city_id,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "city_id", $$v)
                              },
                              expression: "customer.city_id"
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
                              value: _vm.customer.address,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "address", $$v)
                              },
                              expression: "customer.address"
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
                              value: _vm.customer.phone01,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "phone01", $$v)
                              },
                              expression: "customer.phone01"
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
                              value: _vm.customer.phone02,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "phone02", $$v)
                              },
                              expression: "customer.phone02"
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
                              value: _vm.customer.email,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "email", $$v)
                              },
                              expression: "customer.email"
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
                              value: _vm.customer.website,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "website", $$v)
                              },
                              expression: "customer.website"
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
                              value: _vm.customer.tax_number,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "tax_number", $$v)
                              },
                              expression: "customer.tax_number"
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
                                          return _vm.saveCustomer()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/invoice.vue?vue&type=template&id=2782a45f&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/invoice.vue?vue&type=template&id=2782a45f& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c("add-update-customer", {
        attrs: {
          dialog: _vm.add_update_customer_dialog,
          customer: _vm.passed_customer,
          operation: _vm.operation,
          cities: _vm.cities
        },
        on: {
          addUpdateCustomer: _vm.addCustomerToList,
          changeCountry: _vm.loadCities
        }
      }),
      _vm._v(" "),
      _c(
        "product-info",
        {
          attrs: {
            dialog: _vm.product_info_dialog,
            product: _vm.product_info_product,
            prdct_forms: _vm.prdct_forms,
            prdct_taxes: _vm.prdct_taxes,
            prdct_types: _vm.prdct_types
          }
        },
        [
          _c("span", { attrs: { slot: "title" }, slot: "title" }, [
            _vm._v(" معلومات الصنف")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { attrs: { "max-width": "100%" } },
        [
          _c(
            "v-card-title",
            [
              _c(
                "v-row",
                {
                  staticClass: "justify-space-between",
                  attrs: { justify: "center", align: "center" }
                },
                [
                  _c("v-col", { attrs: { cols: "12" } }, [
                    _vm._v(" " + _vm._s(_vm.title) + " ")
                  ])
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
                "router-link",
                {
                  staticClass: "btn btn-info m-b-5 m-r-2",
                  attrs: { to: "/invoice/1" }
                },
                [
                  _c("v-icon", { staticClass: "white--text" }, [
                    _vm._v("mdi-view-module")
                  ]),
                  _vm._v("إدارة الفواتير\n      ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { staticClass: "pa-0", attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      label: "الوصف"
                                    },
                                    model: {
                                      value: _vm.invoice.description,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.invoice,
                                          "description",
                                          $$v
                                        )
                                      },
                                      expression: "invoice.description"
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
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "10" } },
                                        [
                                          _c("v-autocomplete", {
                                            attrs: {
                                              items: _vm.customers,
                                              "item-text": "name",
                                              "item-value": "id",
                                              rules: _vm.vld_selected,
                                              label: "العميل"
                                            },
                                            model: {
                                              value: _vm.invoice.customer_id,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.invoice,
                                                  "customer_id",
                                                  $$v
                                                )
                                              },
                                              expression: "invoice.customer_id"
                                            }
                                          })
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
                                              attrs: {
                                                elevation: "0",
                                                dark: ""
                                              },
                                              on: { click: _vm.addCustomer }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v(" mdi-plus ")
                                              ])
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
                                                        label: "تاريخ الاصدار",
                                                        "prepend-icon":
                                                          "mdi-calendar"
                                                      },
                                                      on: {
                                                        keydown: function(
                                                          $event
                                                        ) {
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
                                                          _vm.issue_date_is_down = false
                                                        }
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.invoice
                                                            .issue_date,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.invoice,
                                                            "issue_date",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "invoice.issue_date"
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
                                        value: _vm.issue_date_is_down,
                                        callback: function($$v) {
                                          _vm.issue_date_is_down = $$v
                                        },
                                        expression: "issue_date_is_down"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("v-date-picker", {
                                        attrs: { "no-title": "" },
                                        on: {
                                          input: function($event) {
                                            _vm.issue_date_is_down = false
                                          }
                                        },
                                        model: {
                                          value: _vm.invoice.issue_date,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.invoice,
                                              "issue_date",
                                              $$v
                                            )
                                          },
                                          expression: "invoice.issue_date"
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
                                  _c(
                                    "v-menu",
                                    {
                                      ref: "maturity_date",
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
                                                        label: "تاريخ الاصدار",
                                                        "prepend-icon":
                                                          "mdi-calendar"
                                                      },
                                                      on: {
                                                        keydown: function(
                                                          $event
                                                        ) {
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
                                                          _vm.maturity_date_is_down = false
                                                        }
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.invoice
                                                            .maturity_date,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.invoice,
                                                            "maturity_date",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "invoice.maturity_date"
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
                                        value: _vm.maturity_date_is_down,
                                        callback: function($$v) {
                                          _vm.maturity_date_is_down = $$v
                                        },
                                        expression: "maturity_date_is_down"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("v-date-picker", {
                                        attrs: { "no-title": "" },
                                        on: {
                                          input: function($event) {
                                            _vm.maturity_date_is_down = false
                                          }
                                        },
                                        model: {
                                          value: _vm.invoice.maturity_date,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.invoice,
                                              "maturity_date",
                                              $$v
                                            )
                                          },
                                          expression: "invoice.maturity_date"
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
                                  _c("v-autocomplete", {
                                    attrs: {
                                      label: "شروط الدفع",
                                      items: _vm.payment_conditions,
                                      "item-text": "ar_name",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value: _vm.invoice.payment_condition_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.invoice,
                                          "payment_condition_id",
                                          $$v
                                        )
                                      },
                                      expression: "invoice.payment_condition_id"
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
                      _c(
                        "v-col",
                        [
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-card-title",
                                { staticStyle: { background: "lightgray" } },
                                [
                                  _vm._v(
                                    "\n                معلومات العميل\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [_vm._v(" الاسم ")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(
                                                _vm.customerInfo() &&
                                                  _vm.customerInfo().name
                                              ) +
                                              "\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [_vm._v(" الهاتف ")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(
                                                _vm.customerInfo() &&
                                                  _vm.customerInfo().phone01
                                              ) +
                                              " "
                                          )
                                        ]
                                      ),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [_vm._v(" البريد الالكتروني ")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(
                                                _vm.customerInfo() &&
                                                  _vm.customerInfo().email
                                              ) +
                                              " "
                                          )
                                        ]
                                      ),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [_vm._v(" الرقم الضريبي ")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(
                                                _vm.customerInfo() &&
                                                  _vm.customerInfo().tax_number
                                              ) +
                                              "\n                  "
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
                  ),
                  _vm._v(" "),
                  _c("v-divider", { attrs: { inset: "" } }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-data-table",
                        {
                          staticClass: "elevation-1",
                          attrs: {
                            "disable-pagination": "",
                            headers: _vm.sales_header,
                            items: _vm.invoice.invoice_details,
                            "hide-default-footer": true,
                            "item-key": _vm.toString(
                              Math.floor(Math.random(1, 100) * 100)
                            )
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
                                      _c("v-toolbar-title", [
                                        _vm._v("قائمة الأصناف")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-divider", {
                                        staticClass: "mx-4",
                                        attrs: { inset: "", vertical: "" }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c("v-autocomplete", {
                                            attrs: {
                                              loading: _vm.loading,
                                              items: _vm.found_products,
                                              "item-text": "ar_name",
                                              "return-object": "",
                                              "search-input": _vm.name_search,
                                              flat: "",
                                              "hide-no-data": "",
                                              label: "اسم الصنف"
                                            },
                                            on: {
                                              "update:searchInput": function(
                                                $event
                                              ) {
                                                _vm.name_search = $event
                                              },
                                              "update:search-input": function(
                                                $event
                                              ) {
                                                _vm.name_search = $event
                                              },
                                              change: _vm.addProductToInvoice
                                            },
                                            model: {
                                              value: _vm.selected_product,
                                              callback: function($$v) {
                                                _vm.selected_product = $$v
                                              },
                                              expression: "selected_product"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              autocomplete: "off",
                                              label: "الباركود",
                                              rules: _vm.is_exists
                                            },
                                            on: {
                                              keydown: function($event) {
                                                if (
                                                  !$event.type.indexOf("key") &&
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
                                                return _vm.searchAndAddToInvoice.apply(
                                                  null,
                                                  arguments
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.searched_barcode,
                                              callback: function($$v) {
                                                _vm.searched_barcode = $$v
                                              },
                                              expression: "searched_barcode"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer")
                                    ],
                                    1
                                  )
                                ]
                              },
                              proxy: true
                            },
                            {
                              key: "item.ar_name",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c("div", [_vm._v(_vm._s(item.ar_name))]),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.show_product_dialog(item)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v(" mdi-information ")
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              }
                            },
                            {
                              key: "item.expires_at",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            disabled: "",
                                            flat: "",
                                            outlined: "",
                                            autocomplete: "off",
                                            "hide-no-data": "",
                                            "hide-details": ""
                                          },
                                          on: {
                                            keydown: function($event) {
                                              if (
                                                !$event.type.indexOf("key") &&
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
                                              item.expires_at_is_down = false
                                            }
                                          },
                                          model: {
                                            value: item.purchase_details[0].expires_at.split(
                                              " "
                                            )[0],
                                            callback: function($$v) {
                                              _vm.$set(
                                                item.purchase_details[0].expires_at.split(
                                                  " "
                                                ),
                                                0,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "item.purchase_details[0].expires_at.split(' ')[0]"
                                          }
                                        },
                                        "v-text-field",
                                        _vm.attrs,
                                        false
                                      ),
                                      _vm.on
                                    )
                                  )
                                ]
                              }
                            },
                            {
                              key: "item.unit_price",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c("v-text-field", {
                                    attrs: {
                                      flat: "",
                                      type: "number",
                                      outlined: "",
                                      autocomplete: "off",
                                      "hide-no-data": "",
                                      "hide-details": ""
                                    },
                                    model: {
                                      value: item.unit_price,
                                      callback: function($$v) {
                                        _vm.$set(item, "unit_price", $$v)
                                      },
                                      expression: "item.unit_price"
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "item.sales_price",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c("v-text-field", {
                                    attrs: {
                                      flat: "",
                                      type: "number",
                                      outlined: "",
                                      autocomplete: "off",
                                      "hide-no-data": "",
                                      "hide-details": ""
                                    },
                                    model: {
                                      value: item.sales_price,
                                      callback: function($$v) {
                                        _vm.$set(item, "sales_price", $$v)
                                      },
                                      expression: "item.sales_price"
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "item.sales_tax",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c("v-text-field", {
                                    attrs: {
                                      type: "number",
                                      flat: "",
                                      "hide-no-data": "",
                                      "hide-details": "",
                                      outlined: "",
                                      autocomplete: "off"
                                    },
                                    model: {
                                      value: item.sales_tax,
                                      callback: function($$v) {
                                        _vm.$set(item, "sales_tax", $$v)
                                      },
                                      expression: "item.sales_tax"
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "item.sales_tax_value",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c("v-text-field", {
                                    attrs: {
                                      flat: "",
                                      disabled: "",
                                      "hide-no-data": "",
                                      "hide-details": "",
                                      outlined: "",
                                      autocomplete: "off",
                                      value: _vm
                                        .sales_tax_value(item)
                                        .toFixed(2)
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "item.sales_discount",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "v-row",
                                    { staticClass: "justify-center" },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "pl-0",
                                          attrs: { cols: "6" }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              flat: "",
                                              type: "number",
                                              "hide-no-data": "",
                                              "hide-details": "",
                                              outlined: "",
                                              autocomplete: "off"
                                            },
                                            model: {
                                              value: item.sales_discount,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  item,
                                                  "sales_discount",
                                                  $$v
                                                )
                                              },
                                              expression: "item.sales_discount"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "pr-0",
                                          attrs: { cols: "6" }
                                        },
                                        [
                                          _c("v-autocomplete", {
                                            attrs: {
                                              items: _vm.discount_types,
                                              "item-text": "ar_name",
                                              "item-value": "id",
                                              "cache-items": "",
                                              "append-icon": "",
                                              flat: "",
                                              "hide-no-data": "",
                                              "hide-details": "",
                                              "solo-inverted": "",
                                              outlined: ""
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.llll(item)
                                              }
                                            },
                                            model: {
                                              value:
                                                item.sales_discount_type_id,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  item,
                                                  "sales_discount_type_id",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "item.sales_discount_type_id"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              }
                            },
                            {
                              key: "item.action",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "v-icon",
                                    {
                                      attrs: { color: "red", small: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteItem(item)
                                        }
                                      }
                                    },
                                    [_vm._v("mdi-delete")]
                                  )
                                ]
                              }
                            },
                            {
                              key: "item.product_unit_id",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: item.units,
                                      "item-text": "ar_name",
                                      "item-value": "pivot.id",
                                      "cache-items": "",
                                      flat: "",
                                      "hide-no-data": "",
                                      "hide-details": "",
                                      "solo-inverted": "",
                                      outlined: ""
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.product_unit_change(item)
                                      }
                                    },
                                    model: {
                                      value: item.sales_unit_id,
                                      callback: function($$v) {
                                        _vm.$set(item, "sales_unit_id", $$v)
                                      },
                                      expression: "item.sales_unit_id"
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "item.sales_quantity",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c("v-text-field", {
                                    attrs: {
                                      type: "number",
                                      "hide-no-data": "",
                                      "hide-details": "",
                                      autocomplete: "off",
                                      "single-line": "",
                                      outlined: ""
                                    },
                                    model: {
                                      value: item.sales_quantity,
                                      callback: function($$v) {
                                        _vm.$set(item, "sales_quantity", $$v)
                                      },
                                      expression: "item.sales_quantity"
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "item.quantity_in_minor_unit",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      disabled: "",
                                      "single-line": "",
                                      flat: "",
                                      "hide-no-data": "",
                                      "hide-details": "",
                                      "solo-inverted": "",
                                      outlined: "",
                                      value: _vm.quantity_in_minor_unit(item)
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "item.total_befor_tax",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c("v-text-field", {
                                    attrs: {
                                      disabled: "",
                                      "hide-no-data": "",
                                      "hide-details": "",
                                      autocomplete: "off",
                                      "single-line": "",
                                      outlined: "",
                                      value: _vm
                                        .total_befor_tax(item)
                                        .toFixed(2)
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "item.total",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c("v-text-field", {
                                    attrs: {
                                      disabled: "",
                                      "hide-no-data": "",
                                      "hide-details": "",
                                      autocomplete: "off",
                                      "single-line": "",
                                      outlined: "",
                                      value: _vm.total(item).toFixed(2)
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "footer",
                              fn: function() {
                                return [
                                  _c("v-divider", {
                                    staticClass: "mx-4",
                                    attrs: { inset: "" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-toolbar",
                                    { attrs: { flat: "", color: "white" } },
                                    [
                                      _c("v-toolbar-title", [
                                        _vm._v("الإجمالي")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-divider", {
                                        staticClass: "mx-4",
                                        attrs: { inset: "", vertical: "" }
                                      }),
                                      _vm._v(" "),
                                      _c("v-spacer")
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "invoice-footer" },
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "6" } },
                                            [
                                              _c(
                                                "v-row",
                                                { attrs: { justify: "start" } },
                                                [
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "end",
                                                        "border-bottom":
                                                          "1px solid lightgray"
                                                      },
                                                      attrs: {
                                                        cols: "12",
                                                        lg: "5"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                        الاجمالي قبل الضريبة:\n                      "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "start",
                                                        "border-bottom":
                                                          "1px solid lightgray"
                                                      },
                                                      attrs: {
                                                        cols: "12",
                                                        lg: "5"
                                                      }
                                                    },
                                                    [
                                                      _c("div", {
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            _vm
                                                              .total_without_products_vat()
                                                              .toFixed(2)
                                                          )
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-row",
                                                { attrs: { justify: "start" } },
                                                [
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "end",
                                                        "border-bottom":
                                                          "1px solid lightgray"
                                                      },
                                                      attrs: {
                                                        cols: "12",
                                                        lg: "5"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                        قيمة الضريبة:\n                      "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "start",
                                                        "border-bottom":
                                                          "1px solid lightgray"
                                                      },
                                                      attrs: {
                                                        cols: "12",
                                                        lg: "5"
                                                      }
                                                    },
                                                    [
                                                      _c("div", {
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            _vm
                                                              .total_vat()
                                                              .toFixed(2)
                                                          )
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-row",
                                                { attrs: { justify: "start" } },
                                                [
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "end",
                                                        "font-size": "1.5rem"
                                                      },
                                                      attrs: {
                                                        cols: "12",
                                                        lg: "5"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                        المجموع:\n                      "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "start",
                                                        "font-size": "1.5rem"
                                                      },
                                                      attrs: { cols: "6" }
                                                    },
                                                    [
                                                      _c("div", {
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            _vm
                                                              .total_amount()
                                                              .toFixed(2)
                                                          )
                                                        }
                                                      })
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
                                            { attrs: { cols: "12", lg: "5" } },
                                            [
                                              _c(
                                                "v-row",
                                                { attrs: { justify: "start" } },
                                                [
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "end",
                                                        "border-bottom":
                                                          "1px solid lightgray",
                                                        color: "green"
                                                      },
                                                      attrs: {
                                                        cols: "12",
                                                        lg: "4"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticStyle: {
                                                            "margin-top": "10px"
                                                          }
                                                        },
                                                        [_vm._v("المدفوع:")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "start",
                                                        "border-bottom":
                                                          "1px solid lightgray"
                                                      },
                                                      attrs: {
                                                        cols: "12",
                                                        lg: "4"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        [
                                                          _c("v-text-field", {
                                                            attrs: {
                                                              outlined: "",
                                                              flat: "",
                                                              "no-data": "",
                                                              "no-data-text":
                                                                "",
                                                              "non-linear": ""
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.invoice
                                                                  .paid_amount,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.invoice,
                                                                  "paid_amount",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "invoice.paid_amount"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      attrs: {
                                                        cols: "12",
                                                        lg: "4"
                                                      }
                                                    },
                                                    [
                                                      _c("payment-method", {
                                                        attrs: {
                                                          invoice_total:
                                                            _vm.invoice
                                                              .total_amount,
                                                          accounts:
                                                            _vm.additional_expenses_from_accounts,
                                                          payment_methods:
                                                            _vm.invoice
                                                              .payment_methods
                                                        },
                                                        on: {
                                                          payment_methods:
                                                            _vm.paymentMethods
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
                                                { attrs: { justify: "start" } },
                                                [
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "end",
                                                        "border-bottom":
                                                          "1px solid lightgray",
                                                        color: "green"
                                                      },
                                                      attrs: {
                                                        cols: "12",
                                                        lg: "4"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticStyle: {
                                                            "margin-top": "10px"
                                                          }
                                                        },
                                                        [_vm._v("الباقي :")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "start",
                                                        "border-bottom":
                                                          "1px solid lightgray"
                                                      },
                                                      attrs: {
                                                        cols: "12",
                                                        lg: "4"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        [
                                                          _c("v-text-field", {
                                                            staticClass:
                                                              "invoice-extra-expense text-red",
                                                            attrs: {
                                                              flat: "",
                                                              disabled: "",
                                                              "no-data": "",
                                                              "no-data-text":
                                                                "",
                                                              "non-linear": "",
                                                              value: _vm
                                                                .remaining_amount()
                                                                .toFixed(2)
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      attrs: {
                                                        cols: "12",
                                                        lg: "4"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            elevation: "0",
                                                            dark: ""
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.payAllCash
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                          دفع الكل نقدا!\n                        "
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
                                      ),
                                      _vm._v(" "),
                                      _c("div", {
                                        staticStyle: { height: "30px" }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _c("template", { slot: "no-data" }, [
                            _vm._v(" يرجى اختيار الأصناف ")
                          ])
                        ],
                        2
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
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "btn btn-info m-b-5 m-r-2 white--text",
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
                  _vm._v("حفظ وإضافة صنف جديد\n      ")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/payment-methods.vue?vue&type=template&id=77f2931d&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/invoices/payment-methods.vue?vue&type=template&id=77f2931d& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        "v-dialog",
        {
          attrs: { scrollable: "", "max-width": "1000px" },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function(ref) {
                var on = ref.on
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._g(
                      _vm._b(
                        {
                          attrs: { elevation: "0", dark: "" },
                          on: { click: _vm.setMethodsIfEmpty }
                        },
                        "v-btn",
                        attrs,
                        false
                      ),
                      on
                    ),
                    [_vm._v("\n        طريقة الدفع!..\n      ")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _vm._v(" "),
          _c(
            "v-card",
            { attrs: { flat: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.payment_methods_header,
                      items: _vm.payment_methods,
                      "hide-default-footer": ""
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
                                _c(
                                  "v-toolbar-title",
                                  [
                                    _c(
                                      "v-row",
                                      { staticClass: "justify-space-between" },
                                      [
                                        _c(
                                          "v-col",
                                          [
                                            _vm._v(
                                              "\n                    حدد طريقة الدفع والمبلغ المستلم\n                    "
                                            ),
                                            _c("v-divider", {
                                              staticClass: "mx-4",
                                              attrs: { inset: "", vertical: "" }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                on: {
                                                  click: _vm.addPaymentMethod
                                                }
                                              },
                                              [_vm._v(" mdi-plus ")]
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
                                _c("v-spacer")
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "item.id",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("div", [
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.payment_methods.indexOf(item) + 1
                                  ) +
                                  "\n            "
                              )
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.ar_name",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-autocomplete", {
                              attrs: {
                                items: _vm.accounts,
                                "item-text": "ar_name",
                                "item-value": "id",
                                "append-icon": "",
                                outlined: "",
                                "single-line": ""
                              },
                              model: {
                                value: item.account_id,
                                callback: function($$v) {
                                  _vm.$set(item, "account_id", $$v)
                                },
                                expression: "item.account_id"
                              }
                            })
                          ]
                        }
                      },
                      {
                        key: "item.account_code",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-text-field", {
                              attrs: {
                                autocomplete: "off",
                                "single-line": "",
                                outlined: "",
                                disabled: "",
                                value:
                                  _vm.accounts.find(function(elem) {
                                    return elem.id == item.account_id
                                  }) &&
                                  _vm.accounts.find(function(elem) {
                                    return elem.id == item.account_id
                                  })["account_code"]
                              }
                            })
                          ]
                        }
                      },
                      {
                        key: "item.credit",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-text-field", {
                              attrs: {
                                disabled: item.account_id == 0,
                                autocomplete: "off",
                                rules: _vm.vld_numbering,
                                "single-line": "",
                                outlined: ""
                              },
                              model: {
                                value: item.credit,
                                callback: function($$v) {
                                  _vm.$set(item, "credit", $$v)
                                },
                                expression: "item.credit"
                              }
                            })
                          ]
                        }
                      },
                      {
                        key: "item.description",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-text-field", {
                              attrs: {
                                autocomplete: "off",
                                rules: _vm.vld_numbering,
                                "single-line": "",
                                outlined: ""
                              },
                              model: {
                                value: item.description,
                                callback: function($$v) {
                                  _vm.$set(item, "description", $$v)
                                },
                                expression: "item.description"
                              }
                            })
                          ]
                        }
                      },
                      {
                        key: "item.actions",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-icon",
                              {
                                staticStyle: { "margin-bottom": "20px" },
                                attrs: { color: "red", small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.deletPaymentMethod(item)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n              mdi-delete\n            "
                                )
                              ]
                            )
                          ]
                        }
                      },
                      {
                        key: "footer",
                        fn: function() {
                          return [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  {
                                    staticStyle: { "text-align": "center" },
                                    attrs: { cols: "12", lg: "4" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                المطلوب\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticStyle: { "text-align": "center" },
                                    attrs: { cols: "12", lg: "4" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                المدفوع\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticStyle: { "text-align": "center" },
                                    attrs: { cols: "12", lg: "4" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                الباقي\n              "
                                    )
                                  ]
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
                                  {
                                    staticStyle: { "text-align": "center" },
                                    attrs: { cols: "12", lg: "4" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm.invoice_total.toFixed(2)) +
                                        "\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticStyle: { "text-align": "center" },
                                    attrs: { cols: "12", lg: "4" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm.paid_amount.toFixed(2)) +
                                        "\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticStyle: { "text-align": "center" },
                                    attrs: { cols: "12", lg: "4" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm.remaining_amount.toFixed(2)
                                        ) +
                                        "\n              "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  })
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
                    [_vm._v("\n          إلغاء\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.emitPayments()
                        }
                      }
                    },
                    [_vm._v("\n          حفظ\n        ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868& ***!
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
      attrs: { scrollable: "", "max-width": "1000px", persistent: "" },
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
          _c(
            "v-card-title",
            { staticClass: "my-3 pa-0" },
            [
              _c(
                "v-row",
                { staticStyle: { "font-size": "14px" } },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "align-self-center",
                      staticStyle: { "border-left": "1px solid" },
                      attrs: { cols: "12", lg: "3" }
                    },
                    [
                      _vm._t("title", function() {
                        return [_vm._v(" new product ")]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "align-self-center",
                      attrs: { cols: "12", lg: "5" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.product.ar_name) +
                                "\n            "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("v-col", [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.product.en_name) +
                                "\n            "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.windowHeight >= 0
                    ? _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "4" } },
                        [
                          _c(
                            "v-row",
                            { staticClass: "justify-center" },
                            [
                              _c(
                                "v-col",
                                [
                                  _c("v-barcode", {
                                    staticStyle: { direction: "ltr" },
                                    attrs: {
                                      value: _vm.product.barcode,
                                      width: "1",
                                      height: "50"
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
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticStyle: { height: "400px" } },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "3" } },
                    [
                      _c("v-checkbox", {
                        staticClass: "nib",
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "المنتج نشط"
                        },
                        model: {
                          value: _vm.product.is_active,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "is_active", $$v)
                          },
                          expression: "product.is_active"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "2" } },
                    [
                      _c("v-checkbox", {
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "قابل للاسترجاع"
                        },
                        model: {
                          value: _vm.product.is_returnable,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "is_returnable", $$v)
                          },
                          expression: "product.is_returnable"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "3" } },
                    [
                      _c("v-checkbox", {
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "الصنف مجاني"
                        },
                        model: {
                          value: _vm.product.is_free,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "is_free", $$v)
                          },
                          expression: "product.is_free"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "2" } },
                    [
                      _c("v-checkbox", {
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "السماح بالبونص"
                        },
                        model: {
                          value: _vm.product.is_bonus,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "is_bonus", $$v)
                          },
                          expression: "product.is_bonus"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "2" } },
                    [
                      _c("v-checkbox", {
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "لديه تاريخ انتهاء"
                        },
                        model: {
                          value: _vm.product.has_expiration_date,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "has_expiration_date", $$v)
                          },
                          expression: "product.has_expiration_date"
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
                "v-tabs",
                {
                  attrs: {
                    "background-color": "transparent",
                    color: "basil",
                    "gv-row": ""
                  },
                  model: {
                    value: _vm.tab,
                    callback: function($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab"
                  }
                },
                _vm._l(_vm.items, function(item) {
                  return _c("v-tab", { key: item.id }, [
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
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  الرقم التسلسلي\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.product.serial_number) +
                                        " "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  نوع الصنف\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(
                                          _vm.prdct_types.find(function(elem) {
                                            return (
                                              elem.id ==
                                              _vm.product.prdct_type_id
                                            )
                                          })
                                            ? _vm.prdct_types.find(function(
                                                elem
                                              ) {
                                                return (
                                                  elem.id ==
                                                  _vm.product.prdct_type_id
                                                )
                                              })["ar_name"]
                                            : ""
                                        ) +
                                        "\n                "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  مجموعات الصنف\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    _vm._l(_vm.product.groups, function(item) {
                                      return _c("span", { key: item.id }, [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(item.ar_name) +
                                            "،\n                  "
                                        )
                                      ])
                                    }),
                                    0
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
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  حد التنبيه الأدني\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      " " + _vm._s(_vm.product.min_alert) + " "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  حد التنبيه الأعلى\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      " " + _vm._s(_vm.product.max_alert) + " "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  فترة الركود\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.product.stagnation_period) +
                                        " "
                                    )
                                  ])
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
                  _c(
                    "v-tab-item",
                    [
                      _c("div", { staticStyle: { height: "60px" } }),
                      _vm._v(" "),
                      _c("v-data-table", {
                        attrs: {
                          headers: _vm.product_units_headers,
                          items: _vm.product.units,
                          "hide-default-footer": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.main_sales_unit_id",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm.product.units.indexOf(item) + 1 ==
                                _vm.product.main_sales_unit_id
                                  ? _c("v-icon", { attrs: { small: "" } }, [
                                      _vm._v("mdi-check")
                                    ])
                                  : _vm._e()
                              ]
                            }
                          },
                          {
                            key: "item.main_purchase_unit_id",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm.product.units.indexOf(item) + 1 ==
                                _vm.product.main_purchase_unit_id
                                  ? _c("v-icon", { attrs: { small: "" } }, [
                                      _vm._v("mdi-check")
                                    ])
                                  : _vm._e()
                              ]
                            }
                          },
                          {
                            key: "item.contains",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.pivot.contains) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.equals",
                            fn: function(ref) {
                              var item = ref.item
                              return [_vm._v(" = ")]
                            }
                          },
                          {
                            key: "item.from_unit",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.product.units[0] &&
                                        _vm.product.units[0].ar_name
                                    ) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.purchase_price",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.pivot.purchase_price) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.sales_price",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.pivot.sales_price) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.barcode",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.pivot.barcode) +
                                    "\n            "
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
                "v-container",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: false,
                      expression: "false"
                    }
                  ]
                },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "6", sm: "6", md: "4" } }, [
                        _c("div", { staticStyle: { display: "flex" } }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: { "font-size": "14px", float: "left" }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.product) +
                                "\n            "
                            )
                          ]
                        )
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
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "blue darken-1", text: "" },
                  on: { click: _vm.close }
                },
                [_vm._v("الغاء")]
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