"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_products_product_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Product */ "./resources/js/apis/Product.js");
/* harmony import */ var _apis_Account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apis/Account */ "./resources/js/apis/Account.js");
/* harmony import */ var _apis_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apis/Api */ "./resources/js/apis/Api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["editedproduct"],
  components: {},
  data: function data() {
    return {
      submit_text: "",

      /*-----------------------inventories-----------------------*/
      inventories: [],

      /*-----------------------distribution_policies-----------------------*/
      distribution_policies: [],

      /*-----------------------taxes---------------------------*/
      taxes: [],

      /*-----------------------accounts---------------------------*/
      product_sold_accounts: [],
      product_sold_return_accounts: [],
      product_return_accounts: [],
      product_cogs_accounts: [],

      /*-----------------------extra units---------------------------*/
      extra_units_headers: [{
        text: " افتراضية البيع ",
        align: "center",
        sortable: false,
        value: "main_sold_unit_id"
      }, {
        text: " افتراضية الشراء ",
        align: "center",
        sortable: false,
        value: "main_bought_unit_id"
      }, {
        text: " الوحدة",
        align: "center",
        sortable: false,
        value: "prdct_unit_id"
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
        value: "bought_price"
      }, {
        text: "سعر البيع",
        align: "center",
        sortable: false,
        value: "sold_price"
      }, {
        text: "actions ",
        align: "center",
        value: "actions"
      }],

      /*-----------------------units---------------------------*/
      prdct_units: [{
        id: "",
        prdct_unit_id: "",
        contains: 1,
        bought_price: "20",
        sold_price: "25",
        barcode: ""
      }],

      /*-----------------------groups---------------------------*/
      prdct_groups: [],

      /*-----------------------forms---------------------------*/
      prdct_forms: [],

      /*-----------------------types---------------------------*/
      prdct_types: [],

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

      /*-------------------validators---------------------------*/
      vld_minlingth_one: [function (v) {
        return v.length >= 1 || "أدخل قيمة";
      }],
      required: [function (value) {
        return !!value || "الحقل مطلوب.";
      }],
      ar_name_unique: [],
      en_name_unique: [],
      barcode_unique: [],
      serial_unique: [],
      vld_numbering: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],

      /*-----------------------product---------------------------*/
      product: {
        company_id: "1",
        barcode: "",
        serial_number: "serial_number",
        average_cost: 0,
        ar_name: "ar_name",
        en_name: "en_name",
        prdct_units: [{
          id: "",
          prdct_unit_id: 1,
          contains: 1,
          bought_price: "9",
          sold_price: "8",
          barcode: ""
        }],
        prdct_group_ids: [1, 2],
        prdct_form_id: 1,
        prdct_type_id: 1,
        main_sold_unit_id: 1,
        main_bought_unit_id: 1,
        cogs_account_id: 53,
        sold_account_id: 1,
        bought_return_account_id: 1,
        sold_return_account_id: 1,
        sold_discount: 0,
        sold_discount_type_id: 1,
        discount: 0,
        discount_type_id: 1,
        tax: 1,
        sold_tax: 1,
        min_alert: 1,
        max_alert: 10,
        stagnation_period: 100,
        opening_balance_quantity: 200,
        opening_balance_cost: 150,
        profit_ratio: 5.4,
        side_effect: "side_effect",
        description: "",
        inventory_id: 1,
        image: "no-image.png",
        distribution_policy_id: 1,
        is_free: true,
        is_bonus: false,
        is_active: true,
        is_avilable_in_POS: true,
        is_sellable: true,
        is_purchasable: true,
        is_returnable: true,
        is_storable: true,
        has_expiration_date: true
      },
      barcodeValue: 123,
      barcodeQuan: 2,
      marker: true,
      found_drug: "",
      loading: false,
      items: [],
      search: null,
      date: new Date().toISOString().substr(0, 10),
      selectedradio: 1,
      menu1: false,
      menu2: false,
      //suucccmessage
      snackbar: false,
      snakebarText: "تم إضافة الصنف بنجاح",
      snackbarTimeout: 2000,
      //-ssuucccmessage
      dialog: false,
      printing_dialog: false,
      isUpdating: false,
      new_product: true,
      editedIndex: -1,
      title: "إضافة صنف",
      selectedGroups: []
    };
  },
  computed: {
    tax: function tax() {
      var true_for = [1, 3];
      if (true_for.indexOf(this.product.prdct_type_id) > -1) return true;
      return false;
    },
    sold_tax: function sold_tax() {
      var false_for = [5];
      if (false_for.indexOf(this.product.prdct_type_id) > -1) return false;
      return true;
    },
    min_alert: function min_alert() {
      var false_for = [2];
      if (false_for.indexOf(this.product.prdct_type_id) > -1) return false;
      return true;
    },
    max_alert: function max_alert() {
      var false_for = [2];
      if (false_for.indexOf(this.product.prdct_type_id) > -1) return false;
      return true;
    },
    stagnation_period: function stagnation_period() {
      var false_for = [2];
      if (false_for.indexOf(this.product.prdct_type_id) > -1) return false;
      return true;
    },
    has_units: function has_units() {
      var false_for = [2];
      if (false_for.indexOf(this.product.prdct_type_id) > -1) return false;
      return true;
    },
    is_storable: function is_storable() {
      var false_for = [2];
      if (false_for.indexOf(this.product.prdct_type_id) > -1) return false;
      return true;
    },
    is_sellable: function is_sellable() {
      var false_for = [5];
      if (false_for.indexOf(this.product.prdct_type_id) > -1) return false;
      return true;
    },
    is_purchasable: function is_purchasable() {
      var false_for = [2];
      if (false_for.indexOf(this.product.prdct_type_id) > -1) return false;
      return true;
    },
    has_expiration_date: function has_expiration_date() {
      var false_for = [2];
      if (false_for.indexOf(this.product.prdct_type_id) > -1) return false;
      return true;
    },
    fromUnit: function fromUnit() {
      this.product.minor_unit = this.product.prdct_units[0].prdct_unit_id;
      if (this.product.prdct_units[0].prdct_unit_id == "") return "-";
      return this.prdct_units[this.product.prdct_units[0].prdct_unit_id - 1].ar_name;
    },
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "إضافة صنف جديد" : "تعديل البيانات";
    }
  },
  mounted: function mounted() {},
  created: function created() {
    var _this = this;

    // Account.showAccountsByType(4).then((response) => {
    //   this.accounts = response.data.accounts;
    // });
    _apis_Product__WEBPACK_IMPORTED_MODULE_1__.default.create() //get method
    .then(function (response) {
      _this.product.cogs_account_id = +response.data.settings.cogs_account_id;
      _this.product.sold_account_id = +response.data.settings.sold_account_id;
      _this.product.sold_return_account_id = +response.data.settings.sold_return_account_id;
      _this.product.bought_return_account_id = +response.data.settings.bought_return_account_id;
      _this.product.bought_tax = +response.data.settings.bought_tax;
      _this.product.sold_tax = +response.data.settings.sold_tax;
      _this.prdct_forms = response.data.prdct_forms;
      _this.prdct_groups = response.data.prdct_groups;
      _this.prdct_units = response.data.prdct_units;
      _this.prdct_types = response.data.prdct_types;
      _this.inventories = response.data.inventories;
      _this.distribution_policies = response.data.distribution_policies; //this.taxes = response.data.taxes;

      _this.product_sold_accounts = response.data.product_sold_accounts;
      _this.product_sold_return_accounts = response.data.product_sold_accounts;
      _this.product_return_accounts = response.data.product_cogs_accounts;
      _this.product_cogs_accounts = response.data.product_cogs_accounts;
    })["catch"](function (errors) {
      _this.errors = errors.response.data.errors;
      console.log(errors.response.data);
    })["finally"]();
    console.log(this.$route.params["product"]);
    this.submit_text = "حفظ وإضافة صنف جديد";

    if (this.$route.params["product"]) {
      this.submit_text = "حفظ وتعديل";
      this.product = JSON.parse(JSON.stringify(this.productConverter(this.$route.params["product"])));
      this.new_product = false;
    }
  },
  methods: {
    productType: function productType() {
      console.log(this.product.prdct_type_id);
    },
    productConverter: function productConverter(product) {
      if (product.image == "" || product.image == "no-image.png") product.image = "no-image.png";else product.image = "/storage/products_images/" + product.image;
      product.prdct_group_ids = [];
      product.prdct_units = []; //convert groups

      product.groups.forEach(function (elem) {
        return product.prdct_group_ids.push(elem.id);
      }); //convert units

      product.units.forEach(function (elem) {
        return product.prdct_units.push(elem.pivot);
      });
      return product;
    },
    unit_barcode: function unit_barcode(length, item) {
      item.barcode = this.generate(length);
    },
    pickFile: function pickFile() {
      this.$refs.imageRef.click();
    },
    removeImage: function removeImage() {
      this.product.image = "no-image.png";
      this.product.image_name = "no-image.png";
      document.getElementById("image-upload").value = null;
    },
    saveImage: function saveImage() {
      var _this2 = this;

      _apis_Api__WEBPACK_IMPORTED_MODULE_3__.default.post("/save-image", {
        image: this.product.image,
        image_name: this.product.image_name
      }).then(function (response) {
        console.log(response.data);
        if (response.data.length !== 0) _this2.items = response.data;
        _this2.loading = false;
      });
    },
    fileinfo: function fileinfo(event) {
      var _files$,
          _this3 = this;

      var files = event.target.files;
      var filename = (_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.name;

      if ((filename === null || filename === void 0 ? void 0 : filename.lastIndexOf(".")) <= 0) {
        return alert("add a valid file");
      }

      var fileReader = new FileReader();
      fileReader.addEventListener("load", function () {
        _this3.product.image = fileReader === null || fileReader === void 0 ? void 0 : fileReader.result;
      });
      fileReader === null || fileReader === void 0 ? void 0 : fileReader.readAsDataURL(files[0]);
      this.product.image_name = filename;
    },
    deleteItem: function deleteItem(item) {
      var index = this.product.prdct_units.indexOf(item);
      this.product.prdct_units.splice(index, 1);

      if (this.product.prdct_units.length == 0) {
        this.product.prdct_units.push({
          prdct_unit_id: "",
          id: "",
          contains: 1,
          bought_price: "",
          sold_price: "",
          barcode: ""
        });
        return;
      }

      if (index == 0) {
        this.product.prdct_units[0].contains = 1;
      }

      if (index + 1 == this.product.main_sold_unit_id) {
        this.product.main_sold_unit_id = 1;
      }

      if (index + 1 < this.product.main_sold_unit_id) {
        this.product.main_sold_unit_id -= 1;
      }

      if (index + 1 == this.product.main_bought_unit_id) {
        this.product.main_bought_unit_id = 1;
      }

      if (index + 1 < this.product.main_bought_unit_id) {
        this.product.main_bought_unit_id -= 1;
      }
    },
    prventTwiseUnitSelection: function prventTwiseUnitSelection(item) {
      var index = this.product.prdct_units.indexOf(item);
      var sameunits = this.product.prdct_units.filter(function (elem) {
        return elem.prdct_unit_id == item.prdct_unit_id;
      });

      if (sameunits.length > 1) {
        alert("لايمكن تكرار الوحدات!");
        item.prdct_unit_id = 0;
      }
    },
    add_extra_unit: function add_extra_unit() {},
    addUnit: function addUnit() {
      console.log(this.product.prdct_units);
      this.product.prdct_units.push({
        prdct_unit_id: "",
        contains: 1,
        id: "",
        bought_price: "12",
        sold_price: "25",
        barcode: ""
      });
    },
    toggleMarker: function toggleMarker(length, type) {
      if (type == "serial number") this.product.serial_number = this.generate(12); //this.marker = !this.marker;

      if (type == "barcode") this.product.barcode = this.generate(12);
    },
    printDiv: function printDiv() {
      var printContents = document.getElementById("printableArea").innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    },
    printing: function printing() {
      JsBarcode("#barcode", this.product.barcode, {
        //format: "pharmacode",
        //lineColor: "#0aa",
        //width: 2,
        //height: 50,
        displayValue: true
      });
      window.print();
    },
    generate: function generate(n) {
      var add = 1,
          max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

      if (n > max) {
        return this.generate(max) + this.generate(n - max);
      }

      max = Math.pow(10, n + add);
      var min = max / 10; // Math.pow(10, n) basically

      var number = Math.floor(Math.random() * (max - min + 1)) + min;
      return ("" + number).substring(add);
    },
    setdrugname: function setdrugname(item) {
      console.log(item);
      this.product.name = item;
    },
    querySelections: function querySelections(v) {
      var _this4 = this;

      if (v.length > 2) {
        this.product.name = v;
        this.loading = true; // Simulated ajax query ajax

        axios__WEBPACK_IMPORTED_MODULE_0___default().post("router.php", {
          name: v,
          flag: "checkproducts",
          filename: "products"
        }).then(function (response) {
          console.log(response.data);
          if (response.data.length !== 0) _this4.items = response.data;
          _this4.loading = false;
        });
      }
    },
    additemtoinvoices: function additemtoinvoices() {
      console.log("local = ", this.found_drug);
    },
    itemtext: function itemtext(item) {
      return item.name + "-" + item.id;
    },
    addForm: function addForm() {
      console.log(this.product.categories);
    },
    testadded: function testadded() {
      console.log(this.product.categories);
    },
    unitsetting: function unitsetting(items) {},
    checknameExecting: function checknameExecting(item) {
      var _this5 = this;

      console.log("hi"); // Find if the array contains an object by comparing the property value

      if (item.length > 2) {
        this.loading = true; // Simulated ajax query ajax

        axios__WEBPACK_IMPORTED_MODULE_0___default().post("router.php", {
          name: item,
          flag: "checkproducts",
          filename: "products"
        }).then(function (response) {
          console.log(response.data);
          if (response.data.length !== 0) _this5.ar_name_unique = [ false || "الصنف موجود مسبقا"];else _this5.ar_name_unique = [true];
          _this5.loading = false;
        });
      }
    },
    checkExicting: function checkExicting(type) {
      var _this6 = this;

      if (type == "ar_name") {
        _apis_Product__WEBPACK_IMPORTED_MODULE_1__.default.isExist({
          type: "ar_name",
          what_to_search: this.product.ar_name
        }).then(function (response) {
          console.log(response.data);
          if (response.data.products.length !== 0) _this6.ar_name_unique = ["الصنف موجود مسبقا"];else _this6.ar_name_unique = [];
          _this6.loading = false;
        });
        return;
      }

      if (type == "en_name") {
        _apis_Product__WEBPACK_IMPORTED_MODULE_1__.default.isExist({
          type: "en_name",
          what_to_search: this.product.en_name
        }).then(function (response) {
          console.log(response.data);
          if (response.data.products.length !== 0) _this6.en_name_unique = ["الصنف موجود مسبقا"];else _this6.en_name_unique = [];
          _this6.loading = false;
        });
        return;
      }

      this.loading = true;
      item.filename = "products"; // Simulated ajax query ajax

      axios__WEBPACK_IMPORTED_MODULE_0___default().post("router.php", item).then(function (response) {
        console.log(response.data);
        if (response.data !== 0) _this6.isunique = [ false || "الصنف موجود مسبقا"];else _this6.isunique = [true];
        _this6.loading = false;
      }); // Find if the array contains an object by comparing the property value
    },
    mathopertion: function mathopertion() {
      this.product.currentQuan = eval(this.product.currentQuan);
    },
    initializeformproduct: function initializeformproduct() {
      this.selectedGroups = [];
      this.product = this.product = JSON.parse(JSON.stringify({
        company_id: "1",
        barcode: "",
        serial_number: "serial_number",
        ar_name: "ar_name",
        en_name: "en_name",
        prdct_units: [{
          id: "",
          prdct_unit_id: 1,
          contains: 1,
          bought_price: "9",
          sold_price: "8",
          barcode: ""
        }],
        prdct_group_ids: [1, 2],
        prdct_form_id: 1,
        prdct_type_id: 1,
        main_sold_unit_id: 1,
        main_bought_unit_id: 1,
        cogs_account_id: 53,
        sold_account_id: 1,
        bought_return_account_id: 1,
        sold_return_account_id: 1,
        sold_discount: 10,
        sold_discount_type_id: 1,
        discount: 10,
        discount_type_id: 1,
        tax: 1,
        sold_tax: 1,
        min_alert: 1,
        max_alert: 10,
        stagnation_period: 100,
        opening_balance_quantity: 200,
        opening_balance_cost: 150,
        profit_ratio: 5.4,
        side_effect: "side_effect",
        description: "description",
        inventory_id: 1,
        image: "no-image.png",
        distribution_policy_id: 1,
        is_free: true,
        is_bonus: false,
        is_active: true,
        is_avilable_in_POS: true,
        is_sellable: true,
        is_purchasable: true,
        is_returnable: true,
        is_storable: true,
        has_expiration_date: true
      }));
    },
    unitsadded: function unitsadded(item) {
      console.log(item);
      this.product.selectedGroups.push({
        name: this.selectedGroups[this.selectedGroups.length - 1],
        ordering_number: this.selectedGroups.length - 1,
        contains: "1",
        cost: "0"
      });
      console.log(this.product.selectedGroups);
    },
    setproduction_date: function setproduction_date() {
      this.product.production_date = this.date;
    },
    setexpired_date: function setexpired_date() {
      this.product.expired = this.date;
    },
    saveunits: function saveunits() {
      this.dialog = false;
    },
    savenewdrug: function savenewdrug() {
      this.add_products(this.product);
    },
    update_drug: function update_drug() {},
    close: function close() {
      var _this7 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this7.editedItem = Object.assign({}, _this7.defaultItem);
        _this7.editedIndex = -1;
      });
    },
    submit: function submit() {
      var _this8 = this;

      console.log(this.product);

      if (this.$refs.form.validate()) {
        if (this.new_product) {
          _apis_Product__WEBPACK_IMPORTED_MODULE_1__.default.store(this.product).then(function (response) {
            console.log("response.data", response.data);
            _this8.snakebarText = "تم إضافة الصنف بنجاح";
            _this8.snackbar = true;
            _this8.loading = false;

            _this8.initializeformproduct();

            _this8.$refs.form.resetValidation();
          });
          return;
        }

        _apis_Product__WEBPACK_IMPORTED_MODULE_1__.default.update(this.product).then(function (response) {
          console.log("response.data", response.data);
          _this8.snakebarText = "تم تعديل الصنف بنجاح";
          _this8.snackbar = true;
        });
      } //return;
      //if (this.$refs.form.validate()) {
      // }

    },
    update: function update(item) {
      console.log(item);
      item.flag = "updateproducts";
      item.filename = "products";
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("router.php", item).then(function (response) {
        console.log(response.data);
      }); //this.update_products(item);
    }
  },
  watch: {
    search: function search(val) {
      val && val !== this.found_drug && this.querySelections(val);
    },
    date: function date(val) {
      this.dateFormatted = this.date;
    },
    isUpdating: function isUpdating(val) {
      var _this9 = this;

      if (val) {
        setTimeout(function () {
          return _this9.isUpdating = false;
        }, 3000);
      }
    }
  },
  destroyed: function destroyed() {
    this.selectedGroups = [];
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
  purchaseBarcodeSearch: function purchaseBarcodeSearch(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/" + route + "/barcode/" + params.barcode);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=style&index=0&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate)\r\n  .v-icon {\r\n  color: rgb(111, 98, 228) !important;\n}\n.product_image {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  max-width: 200px;\r\n  max-height: 150px;\r\n  border-radius: 10px;\r\n  border: 1px solid #eee;\r\n  cursor: pointer;\n}\n.product-unit-barcode .v-input__append-inner {\r\n  margin-top: 6px !important;\r\n  margin-left: -13px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/main/products/product.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/main/products/product.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _product_vue_vue_type_template_id_f4c542c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=f4c542c2& */ "./resources/js/components/main/products/product.vue?vue&type=template&id=f4c542c2&");
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ "./resources/js/components/main/products/product.vue?vue&type=script&lang=js&");
/* harmony import */ var _product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/products/product.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _product_vue_vue_type_template_id_f4c542c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _product_vue_vue_type_template_id_f4c542c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/products/product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/products/product.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/main/products/product.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/products/product.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/main/products/product.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/products/product.vue?vue&type=template&id=f4c542c2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/main/products/product.vue?vue&type=template&id=f4c542c2& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_f4c542c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_f4c542c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_f4c542c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product.vue?vue&type=template&id=f4c542c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=template&id=f4c542c2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=template&id=f4c542c2&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product.vue?vue&type=template&id=f4c542c2& ***!
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
    { staticStyle: { "margin-top": "20px" } },
    [
      _vm._l(_vm.barcodeQuan, function(elem) {
        return _c("svg", {
          key: elem,
          staticClass: "printclass",
          attrs: { id: "barcode" }
        })
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "noPrint" },
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
            [_vm._v(_vm._s(_vm.snakebarText))]
          ),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c(
                "v-row",
                { attrs: { justify: "start" } },
                [
                  _c(
                    "v-col",
                    { staticStyle: { "text-align": "end" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            elevation: "",
                            color: "primary",
                            to: "/products"
                          }
                        },
                        [_vm._v("إدارة المخزون")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            elevation: "",
                            color: "primary",
                            to: "/products"
                          }
                        },
                        [_vm._v("أرصدة افتتاحية للمخزون")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            elevation: "",
                            color: "primary",
                            to: "/stock_takes"
                          }
                        },
                        [_vm._v("جرد المخزون")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { elevation: "", color: "primary", to: "" } },
                        [_vm._v("نقل المخزون")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { elevation: "", color: "primary", to: "" } },
                        [_vm._v("المجموعات")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { elevation: "", color: "primary", to: "" } },
                        [_vm._v("الأنواع")]
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
            "v-form",
            {
              ref: "form",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                }
              }
            },
            [
              _c(
                "v-card",
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
                          _c("v-col", { attrs: { cols: "12", lg: "3" } }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.formTitle) +
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "3" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  label: "نوع الصنف",
                                  items: _vm.prdct_types,
                                  "item-text": "ar_name",
                                  "item-value": "id",
                                  rules: _vm.required
                                },
                                on: { change: _vm.productType },
                                model: {
                                  value: _vm.product.prdct_type_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.product, "prdct_type_id", $$v)
                                  },
                                  expression: "product.prdct_type_id"
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
                              _c("v-checkbox", {
                                staticStyle: {
                                  "white-space": "nowrap",
                                  "margin-left": "5px",
                                  "margin-right": "5px"
                                },
                                attrs: {
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
                            { attrs: { cols: "12", lg: "3" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  disabled: "",
                                  autocomplete: "off",
                                  label: " متوسط تكلفة الوحدة الصغرى"
                                },
                                model: {
                                  value: _vm.product.average_cost,
                                  callback: function($$v) {
                                    _vm.$set(_vm.product, "average_cost", $$v)
                                  },
                                  expression: "product.average_cost"
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
                  _c("v-divider"),
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
                                { attrs: { cols: "12", lg: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      label: "الاسم العربي",
                                      rules: _vm.required.concat(
                                        _vm.ar_name_unique
                                      )
                                    },
                                    on: {
                                      blur: function($event) {
                                        return _vm.checkExicting("ar_name")
                                      }
                                    },
                                    model: {
                                      value: _vm.product.ar_name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.product, "ar_name", $$v)
                                      },
                                      expression: "product.ar_name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      autocomplete: "off",
                                      label: "الاسم الانجليزي",
                                      rules: _vm.required.concat(
                                        _vm.en_name_unique
                                      )
                                    },
                                    on: {
                                      blur: function($event) {
                                        return _vm.checkExicting("en_name")
                                      }
                                    },
                                    model: {
                                      value: _vm.product.en_name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.product, "en_name", $$v)
                                      },
                                      expression: "product.en_name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                               true
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          autocomplete: "off",
                                          "append-icon": "mdi-alpha-g-circle",
                                          label:
                                            " الباركود (اضغط على G لتوليد رقم عشوائي)",
                                          rules: _vm.required.concat(
                                            _vm.isunique
                                          )
                                        },
                                        on: {
                                          "click:append": function($event) {
                                            return _vm.toggleMarker(
                                              12,
                                              "barcode"
                                            )
                                          },
                                          blur: function($event) {
                                            return _vm.checkExicting("serial")
                                          }
                                        },
                                        model: {
                                          value: _vm.product.barcode,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.product,
                                              "barcode",
                                              $$v
                                            )
                                          },
                                          expression: "product.barcode"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : 0,
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "4" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      disabled: !!_vm.isUpdating,
                                      items: _vm.prdct_groups,
                                      "item-text": "ar_name",
                                      "item-value": "id",
                                      rules: _vm.vld_minlingth_one,
                                      label: "مجموعات الصنف",
                                      multiple: ""
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.unitsadded()
                                      }
                                    },
                                    model: {
                                      value: _vm.product.prdct_group_ids,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.product,
                                          "prdct_group_ids",
                                          $$v
                                        )
                                      },
                                      expression: "product.prdct_group_ids"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                               false
                                ? 0
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.sold_tax
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          autocomplete: "off",
                                          label: "ضريبة المبيعات%",
                                          rules: _vm.vld_numbering,
                                          value: "0"
                                        },
                                        model: {
                                          value: _vm.product.sold_tax,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.product,
                                              "sold_tax",
                                              $$v
                                            )
                                          },
                                          expression: "product.sold_tax"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.tax
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          autocomplete: "off",
                                          label: "ضريبة المشتريات%",
                                          rules: _vm.vld_numbering,
                                          value: "0"
                                        },
                                        model: {
                                          value: _vm.product.bought_tax,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.product,
                                              "bought_tax",
                                              $$v
                                            )
                                          },
                                          expression: "product.bought_tax"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.min_alert
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          autocomplete: "off",
                                          label: "حد التنبيه الأدني",
                                          rules: _vm.vld_numbering,
                                          value: "0"
                                        },
                                        model: {
                                          value: _vm.product.min_alert,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.product,
                                              "min_alert",
                                              $$v
                                            )
                                          },
                                          expression: "product.min_alert"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.max_alert
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          autocomplete: "off",
                                          label: "حد التنبيه الأعلى",
                                          rules: _vm.vld_numbering,
                                          value: "0"
                                        },
                                        model: {
                                          value: _vm.product.max_alert,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.product,
                                              "max_alert",
                                              $$v
                                            )
                                          },
                                          expression: "product.max_alert"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.stagnation_period
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          autocomplete: "off",
                                          label: "فترة الركود بالأيام",
                                          rules: _vm.vld_numbering,
                                          value: "0"
                                        },
                                        model: {
                                          value: _vm.product.stagnation_period,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.product,
                                              "stagnation_period",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "product.stagnation_period"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.has_units
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12", align: "right" } },
                                    [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v(
                                          " وحدات الصنف مرتبة من الأصغر للأعلى"
                                        )
                                      ])
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.has_units
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12", align: "right" } },
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c("v-data-table", {
                                            staticStyle: { width: "95%" },
                                            attrs: {
                                              "hide-default-footer": "",
                                              headers: _vm.extra_units_headers,
                                              items: _vm.product.prdct_units,
                                              "item-key": _vm.toString(
                                                Math.floor(
                                                  Math.random(1, 100) * 100
                                                )
                                              )
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "item.main_sold_unit_id",
                                                  fn: function(ref) {
                                                    var item = ref.item
                                                    return [
                                                      _c(
                                                        "v-radio-group",
                                                        {
                                                          staticClass:
                                                            "product-radio",
                                                          model: {
                                                            value:
                                                              _vm.product
                                                                .main_sold_unit_id,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.product,
                                                                "main_sold_unit_id",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "product.main_sold_unit_id"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticStyle: {
                                                                "font-size":
                                                                  "18px",
                                                                "padding-right":
                                                                  "20px",
                                                                "padding-bottom":
                                                                  "23px"
                                                              }
                                                            },
                                                            [
                                                              _c("v-radio", {
                                                                attrs: {
                                                                  value:
                                                                    _vm.product.prdct_units.indexOf(
                                                                      item
                                                                    ) + 1
                                                                }
                                                              })
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  }
                                                },
                                                {
                                                  key:
                                                    "item.main_bought_unit_id",
                                                  fn: function(ref) {
                                                    var item = ref.item
                                                    return [
                                                      _c(
                                                        "v-radio-group",
                                                        {
                                                          staticClass:
                                                            "product-radio",
                                                          model: {
                                                            value:
                                                              _vm.product
                                                                .main_bought_unit_id,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.product,
                                                                "main_bought_unit_id",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "product.main_bought_unit_id"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticStyle: {
                                                                "font-size":
                                                                  "18px",
                                                                "padding-right":
                                                                  "20px",
                                                                "padding-bottom":
                                                                  "23px"
                                                              }
                                                            },
                                                            [
                                                              _c("v-radio", {
                                                                attrs: {
                                                                  value:
                                                                    _vm.product.prdct_units.indexOf(
                                                                      item
                                                                    ) + 1
                                                                }
                                                              })
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  }
                                                },
                                                {
                                                  key: "item.equals",
                                                  fn: function(ref) {
                                                    var item = ref.item
                                                    return [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticStyle: {
                                                            "font-size": "18px",
                                                            "padding-bottom":
                                                              "23px"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                        =\n                      "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  }
                                                },
                                                {
                                                  key: "item.prdct_unit_id",
                                                  fn: function(ref) {
                                                    var item = ref.item
                                                    return [
                                                      _c("v-autocomplete", {
                                                        attrs: {
                                                          placeholder:
                                                            "اختر وحدة",
                                                          outlined: "",
                                                          items:
                                                            _vm.prdct_units,
                                                          "item-value": "id",
                                                          "item-text":
                                                            "ar_name",
                                                          "append-icon": "",
                                                          rules: _vm.required
                                                        },
                                                        on: {
                                                          change: function(
                                                            $event
                                                          ) {
                                                            return _vm.prventTwiseUnitSelection(
                                                              item
                                                            )
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            item.prdct_unit_id,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              item,
                                                              "prdct_unit_id",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "item.prdct_unit_id"
                                                        }
                                                      })
                                                    ]
                                                  }
                                                },
                                                {
                                                  key: "item.from_unit",
                                                  fn: function(ref) {
                                                    var item = ref.item
                                                    return [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          outlined: "",
                                                          disabled:
                                                            !!_vm.product.prdct_units.indexOf(
                                                              item
                                                            ) == 0,
                                                          rules: _vm.required
                                                        },
                                                        model: {
                                                          value: _vm.fromUnit,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.fromUnit = $$v
                                                          },
                                                          expression: "fromUnit"
                                                        }
                                                      })
                                                    ]
                                                  }
                                                },
                                                {
                                                  key: "item.contains",
                                                  fn: function(ref) {
                                                    var item = ref.item
                                                    return [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          outlined: "",
                                                          disabled:
                                                            !!_vm.product.prdct_units.indexOf(
                                                              item
                                                            ) == 0,
                                                          rules: _vm.required
                                                        },
                                                        model: {
                                                          value: item.contains,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              item,
                                                              "contains",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "item.contains"
                                                        }
                                                      })
                                                    ]
                                                  }
                                                },
                                                {
                                                  key: "item.bought_price",
                                                  fn: function(ref) {
                                                    var item = ref.item
                                                    return [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          outlined: "",
                                                          rules: _vm.required
                                                        },
                                                        model: {
                                                          value:
                                                            item.bought_price,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              item,
                                                              "bought_price",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "item.bought_price"
                                                        }
                                                      })
                                                    ]
                                                  }
                                                },
                                                {
                                                  key: "item.sold_price",
                                                  fn: function(ref) {
                                                    var item = ref.item
                                                    return [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          outlined: "",
                                                          rules: _vm.required
                                                        },
                                                        model: {
                                                          value:
                                                            item.sold_price,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              item,
                                                              "sold_price",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "item.sold_price"
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
                                                          staticStyle: {
                                                            "margin-bottom":
                                                              "20px"
                                                          },
                                                          attrs: {
                                                            color: "red",
                                                            small: ""
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.deleteItem(
                                                                item
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("mdi-delete")]
                                                      )
                                                    ]
                                                  }
                                                },
                                                {
                                                  key: "footer",
                                                  fn: function() {
                                                    return [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          staticClass: "mb-2",
                                                          attrs: {
                                                            color: "pink",
                                                            dark: ""
                                                          },
                                                          on: {
                                                            click: _vm.addUnit
                                                          }
                                                        },
                                                        [_vm._v("إضافة وحدة")]
                                                      )
                                                    ]
                                                  },
                                                  proxy: true
                                                }
                                              ],
                                              null,
                                              false,
                                              261017806
                                            )
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "12" } },
                                [_c("v-divider")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "12" } },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _vm.is_storable
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "2" } },
                                            [
                                              _c("v-checkbox", {
                                                staticStyle: {
                                                  "white-space": "nowrap",
                                                  "margin-left": "5px",
                                                  "margin-right": "5px"
                                                },
                                                attrs: {
                                                  color: "#e91e63",
                                                  label: "المنتج مخزون"
                                                },
                                                on: {
                                                  change: function($event) {
                                                    _vm.product.is_sellable = _vm.product.is_purchasable = true
                                                  }
                                                },
                                                model: {
                                                  value:
                                                    _vm.product.is_storable,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.product,
                                                      "is_storable",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "product.is_storable"
                                                }
                                              })
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
                              _vm.is_sellable
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "2" } },
                                            [
                                              _c("v-checkbox", {
                                                staticStyle: {
                                                  "white-space": "nowrap",
                                                  "margin-left": "5px",
                                                  "margin-right": "5px",
                                                  "margin-top": "0px"
                                                },
                                                attrs: {
                                                  disabled: !!_vm.product
                                                    .is_storable,
                                                  color: "#e91e63",
                                                  label: "قابل للبيع"
                                                },
                                                model: {
                                                  value:
                                                    _vm.product.is_sellable,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.product,
                                                      "is_sellable",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "product.is_sellable"
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
                                              _vm.product.is_sellable &&
                                              _vm.is_sellable
                                                ? _c("v-autocomplete", {
                                                    attrs: {
                                                      label: "حساب المبيعات",
                                                      items:
                                                        _vm.product_sold_accounts,
                                                      "item-text": "ar_name",
                                                      "item-value": "id",
                                                      rules: _vm.required
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.product
                                                          .sold_account_id,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.product,
                                                          "sold_account_id",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "product.sold_account_id"
                                                    }
                                                  })
                                                : _vm._e()
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "6", lg: "3" } },
                                            [
                                              _vm.product.is_sellable
                                                ? _c("v-autocomplete", {
                                                    attrs: {
                                                      label:
                                                        "حساب مردود المبيعات",
                                                      items:
                                                        _vm.product_sold_return_accounts,
                                                      "item-text": "ar_name",
                                                      "item-value": "id",
                                                      rules: _vm.required
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.product
                                                          .sold_return_account_id,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.product,
                                                          "sold_return_account_id",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "product.sold_return_account_id"
                                                    }
                                                  })
                                                : _vm._e()
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "6", lg: "2" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  autocomplete: "off",
                                                  label: "خصم عند البيع"
                                                },
                                                model: {
                                                  value:
                                                    _vm.product.sold_discount,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.product,
                                                      "sold_discount",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "product.sold_discount"
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
                                              _c("v-autocomplete", {
                                                attrs: {
                                                  label: "طريقة الحساب",
                                                  items: _vm.discount_types,
                                                  "item-text": "ar_name",
                                                  "item-value": "id",
                                                  rules: _vm.required
                                                },
                                                model: {
                                                  value:
                                                    _vm.product
                                                      .sold_discount_type_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.product,
                                                      "sold_discount_type_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "product.sold_discount_type_id"
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
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _vm.is_purchasable
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "2" } },
                                            [
                                              _c("v-checkbox", {
                                                staticStyle: {
                                                  "white-space": "nowrap",
                                                  "margin-left": "5px",
                                                  "margin-right": "5px",
                                                  "margin-top": "0px"
                                                },
                                                attrs: {
                                                  disabled: !!_vm.product
                                                    .is_storable,
                                                  color: "#e91e63",
                                                  label: "قابل للشراء"
                                                },
                                                model: {
                                                  value:
                                                    _vm.product.is_purchasable,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.product,
                                                      "is_purchasable",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "product.is_purchasable"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "6", lg: "3" } },
                                        [
                                          _vm.product.is_purchasable &&
                                          _vm.is_purchasable
                                            ? _c("v-autocomplete", {
                                                attrs: {
                                                  label: "حساب تكلفة المبيعات",
                                                  items:
                                                    _vm.product_cogs_accounts,
                                                  "item-text": "ar_name",
                                                  "item-value": "id",
                                                  rules: _vm.required
                                                },
                                                model: {
                                                  value:
                                                    _vm.product.cogs_account_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.product,
                                                      "cogs_account_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "product.cogs_account_id"
                                                }
                                              })
                                            : _vm._e()
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "6", lg: "3" } },
                                        [
                                          _vm.product.is_purchasable &&
                                          _vm.is_purchasable
                                            ? _c("v-autocomplete", {
                                                attrs: {
                                                  label: "حساب مردود المشتريات",
                                                  items:
                                                    _vm.product_return_accounts,
                                                  "item-text": "ar_name",
                                                  "item-value": "id",
                                                  rules: _vm.required
                                                },
                                                model: {
                                                  value:
                                                    _vm.product
                                                      .bought_return_account_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.product,
                                                      "bought_return_account_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "product.bought_return_account_id"
                                                }
                                              })
                                            : _vm._e()
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "6", lg: "2" } },
                                        [
                                          _vm.product.is_purchasable &&
                                          _vm.is_purchasable
                                            ? _c("v-text-field", {
                                                attrs: {
                                                  autocomplete: "off",
                                                  label: "خصم عند الشراء"
                                                },
                                                model: {
                                                  value: _vm.product.discount,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.product,
                                                      "discount",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "product.discount"
                                                }
                                              })
                                            : _vm._e()
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "6", lg: "2" } },
                                        [
                                          _vm.product.is_purchasable &&
                                          _vm.is_purchasable
                                            ? _c("v-autocomplete", {
                                                attrs: {
                                                  label: "طريقة الحساب",
                                                  items: _vm.discount_types,
                                                  "item-text": "ar_name",
                                                  "item-value": "id",
                                                  rules: _vm.required
                                                },
                                                model: {
                                                  value:
                                                    _vm.product
                                                      .discount_type_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.product,
                                                      "discount_type_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "product.discount_type_id"
                                                }
                                              })
                                            : _vm._e()
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
                              _c("v-col", { attrs: { cols: "12", lg: "12" } }),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "12", lg: "12" } }),
                              _vm._v(" "),
                               false
                                ? 0
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.is_storable
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "3" } },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          label: "اسم المخزن",
                                          items: _vm.inventories,
                                          "item-text": "ar_name",
                                          "item-value": "id",
                                          rules: _vm.required
                                        },
                                        model: {
                                          value: _vm.product.inventory_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.product,
                                              "inventory_id",
                                              $$v
                                            )
                                          },
                                          expression: "product.inventory_id"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                               false
                                ? 0
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "12" } },
                                [_c("v-divider")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "3" } },
                                [
                                  _c("v-checkbox", {
                                    staticStyle: {
                                      "white-space": "nowrap",
                                      "margin-left": "5px",
                                      "margin-right": "5px"
                                    },
                                    attrs: {
                                      color: "#e91e63",
                                      label: "قابل للاسترجاع بعد البيع"
                                    },
                                    model: {
                                      value: _vm.product.is_returnable,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.product,
                                          "is_returnable",
                                          $$v
                                        )
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
                                { attrs: { cols: "12", lg: "3" } },
                                [
                                  _c("v-checkbox", {
                                    staticStyle: {
                                      "white-space": "nowrap",
                                      "margin-left": "5px",
                                      "margin-right": "5px"
                                    },
                                    attrs: {
                                      color: "#e91e63",
                                      label: "هذا الصنف مجاني"
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
                                { attrs: { cols: "12", lg: "3" } },
                                [
                                  _c("v-checkbox", {
                                    staticStyle: {
                                      "white-space": "nowrap",
                                      "margin-left": "5px",
                                      "margin-right": "5px"
                                    },
                                    attrs: {
                                      color: "#e91e63",
                                      label: "السماح بالبونص عند البيع"
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
                              _vm.has_expiration_date
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "3" } },
                                    [
                                      _c("v-checkbox", {
                                        staticStyle: {
                                          "white-space": "nowrap",
                                          "margin-left": "5px",
                                          "margin-right": "5px"
                                        },
                                        attrs: {
                                          color: "#e91e63",
                                          label: "لديه تاريخ انتهاء"
                                        },
                                        model: {
                                          value:
                                            _vm.product.has_expiration_date,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.product,
                                              "has_expiration_date",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "product.has_expiration_date"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "12" } },
                                [_c("v-divider")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "6" } },
                                        [
                                          _c("v-textarea", {
                                            attrs: {
                                              outlined: "",
                                              autocomplete: "off",
                                              label: "الوصف"
                                            },
                                            model: {
                                              value: _vm.product.description,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.product,
                                                  "description",
                                                  $$v
                                                )
                                              },
                                              expression: "product.description"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", lg: "4" } },
                                        [
                                          _c(
                                            "v-row",
                                            {
                                              attrs: {
                                                justify: "center",
                                                align: "center"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  staticStyle: {
                                                    position: "relative"
                                                  },
                                                  attrs: { cols: "12", sm: "4" }
                                                },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "product_image",
                                                    attrs: {
                                                      src: _vm.product.image,
                                                      alt: "NO Image"
                                                    },
                                                    on: { click: _vm.pickFile }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticStyle: {
                                                        position: "absolute",
                                                        width: "24px",
                                                        height: "27px",
                                                        bottom: "0",
                                                        right: "0"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "show",
                                                              rawName: "v-show",
                                                              value:
                                                                _vm.product
                                                                  .image !=
                                                                  "" &&
                                                                _vm.product
                                                                  .image !=
                                                                  "no-image.png",
                                                              expression:
                                                                "\n                              product.image != '' &&\n                              product.image != 'no-image.png'\n                            "
                                                            }
                                                          ],
                                                          staticStyle: {
                                                            background: ""
                                                          },
                                                          attrs: {
                                                            color: "red"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.removeImage()
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                            mdi-close\n                          "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    ref: "imageRef",
                                                    staticStyle: {
                                                      display: "none"
                                                    },
                                                    attrs: {
                                                      type: "file",
                                                      name: "",
                                                      id: "image-upload",
                                                      accept:
                                                        "image/png, image/jpeg"
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        return _vm.fileinfo(
                                                          $event,
                                                          _vm.item
                                                        )
                                                      }
                                                    }
                                                  })
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
                              _c(
                                "v-col",
                                { attrs: { cols: "12", lg: "12" } },
                                [_c("v-divider")],
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
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _vm.editedIndex === -1
                        ? _c(
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
                              _vm._v(_vm._s(_vm.submit_text) + "\n          ")
                            ],
                            1
                          )
                        : _c(
                            "v-btn",
                            {
                              staticClass:
                                "btn btn-info m-b-5 m-r-2 white--text",
                              attrs: {
                                type: "submit",
                                color: "blue darken-1",
                                text: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.update(_vm.product)
                                }
                              }
                            },
                            [
                              _c("v-icon", { staticClass: "white--text" }, [
                                _vm._v("mdi-view-module")
                              ]),
                              _vm._v("تعديل\n          ")
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
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);