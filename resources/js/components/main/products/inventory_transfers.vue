<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="600px" persistent>
      <v-card>
        <p style="margin: 0 10px; font-size: 14px; padding: 10pxz">
          قم باختيار الصنف المناسب واضغط موافق
        </p>

        <v-card-text>
          <ul>
            <li v-for="set in sets" tabIndex="-1" :key="set + 'd'">
              {{
                set.id +
                " - " +
                set.document_type_id +
                " - " +
                set.document_id +
                set.expires_at
              }}
            </li>
          </ul>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card>
      <v-card-title>
        <span class="text-h5" :key="someVariableUnderYourControl">
          نقل المخزون
        </span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row class="justify-space-between">
            <v-col cols="12" lg="5">
              <v-row>
                <v-col cols="12" class="pa-0">
                  <v-autocomplete
                    flat
                    outlined
                    no-data
                    no-data-text
                    non-linear
                    v-model="inventory_transfers.inventory_id"
                    :items="inventories"
                    item-text="ar_name"
                    item-value="id"
                    prefix=" من المخزن | "
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" class="pa-0">
                  <v-autocomplete
                    flat
                    outlined
                    no-data
                    no-data-text
                    non-linear
                    v-model="inventory_transfers.inventory_id"
                    :items="inventories"
                    item-text="ar_name"
                    item-value="id"
                    prefix=" إلى المخزن | "
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" class="pa-0">
                  <v-text-field
                    v-model="inventory_transfers.date"
                    outlined
                    prefix=" التاريخ | "
                  ></v-text-field>
                </v-col>
                
              </v-row>
            </v-col>
            <v-col cols="12" lg="5">
              <v-row>
                
                <v-col cols="12" class="pa-0">
                  <v-textarea
                    rows="3"
                    v-model="inventory_transfers.description"
                    outlined
                    prefix=" الوصف* | "
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <v-row>
          <small>*indicates required field</small>
        </v-row>

        <v-row>
          <v-data-table
            disable-pagination
            :headers="stock_header"
            :items="inventory_transfers.stock_take_details"
            class="elevation-1"
            :hide-default-footer="true"
            :item-key="toString(Math.floor(Math.random(1, 100) * 100))"
            style="width: 100%"
          >
            <template slot="no-data"> يرجى اختيار الأصناف </template>
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>قائمة الأصناف</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete
                    v-model="selected_product"
                    :loading="loading"
                    :items="found_products"
                    item-text="ar_name"
                    return-object
                    :search-input.sync="name_search"
                    flat
                    hide-no-data
                    label="اسم الصنف"
                    @change="addProductToPurchase"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    id="barcode"
                    autocomplete="off"
                    v-model="searched_barcode"
                    label="الباركود"
                    @keydown.enter="searchAndAddToStockTackes"
                    :rules="is_exists"
                  ></v-text-field>
                </v-col>

                <v-spacer></v-spacer>
              </v-toolbar>
            </template>
            <template v-slot:item.ar_name="{ item }">
              <div>{{ item.ar_name }}</div>
            </template>
            <template v-slot:item.expires_at="{ item }">
              {{ item.expires_at && item.expires_at.split(" ")[0] }}
            </template>
            <template v-slot:item.unit_price="{ item }">
              <v-text-field
                v-model="item.unit_price"
                flat
                type="number"
                outlined
                autocomplete="off"
                hide-no-data
                hide-details
              ></v-text-field>
            </template>

            <template v-slot:item.action="{ item }">
              <v-icon color="red" small @click="deleteItem(item)"
                >mdi-delete</v-icon
              >
            </template>

            <template v-slot:item.product_unit_id="{ item }">
              <v-autocomplete
                v-model="item.purchased_unit_id"
                :items="item.units"
                item-text="ar_name"
                item-value="pivot.id"
                cache-items
                flat
                no-filter
                hide-no-data
                hide-details
                solo-inverted
                outlined
                @change="product_unit_change(item)"
              >
              </v-autocomplete>
            </template>
            <template v-slot:item.document_id="{ item }">
              {{ item.purchase_details[0].document_id }}
            </template>
            <template v-slot:item.document_type_id="{ item }">
              {{ item.purchase_details[0].document_type_id }}
            </template>
            <template v-slot:item.current_quantity="{ item }">
              <v-text-field
                disabled
                hide-no-data
                hide-details
                autocomplete="off"
                single-line
                outlined
                v-model="item.current_quantity"
              ></v-text-field>
            </template>
            <template v-slot:item.actual_quantity="{ item }">
              <v-text-field
                type="number"
                min="0"
                hide-no-data
                hide-details
                autocomplete="off"
                single-line
                outlined
                v-model="item.actual_quantity"
                @input="actual_quantity_change(item)"
              ></v-text-field>
            </template>
            <template v-slot:item.total="{ item }">
              {{
                (item.actual_quantity - item.current_quantity) * item.unit_price
              }}
            </template>
          </v-data-table>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          الغاء
        </v-btn>
        <v-btn color="blue darken-1" text @click="submit"> حفظ </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import Product from "../../../apis/Product";
import Inventory_transfers from "../../../apis/InventoryTransfer";
export default {
  data() {
    return {
      someVariableUnderYourControl: 1,
      is_new_stock: true,
      index_of_selected_product: "",
      selected_item: [],
      sets: [],
      dialog: false,
      account_div_update: 0,
      revenue_accounts: [],
      expense_accounts: [],
      inventories: [],
      take_expense_account: [],
      name_search: "",
      searched_barcode: "",
      found_products: [],
      loading: false,
      selected_product: [],
      stock_header: [
        {
          text: "نوع المستند",
          align: "center",
          value: "document_type_id",

          sortable: false,
        },
        {
          text: "رقم المستند",
          align: "center",
          value: "document_id",

          sortable: false,
        },

        {
          text: "اسم الصنف",
          align: "center",
          value: "ar_name",
          width: 300,
          sortable: false,
        },
        {
          text: "الصلاحية",
          align: "center",
          value: "expires_at",
          sortable: false,
          width: 100,
        },
        {
          text: "الكمية في النظام",
          align: "center",
          value: "current_quantity",
          sortable: false,
        },

        {
          text: "الكمية الفعلية",
          align: "center",
          value: "actual_quantity",
          sortable: false,
        },

        {
          text: "الوحدة",
          align: "center",
          value: "product_unit_id",
          sortable: false,
        },

        {
          text: "سعر الوحدة",
          align: "center",
          value: "unit_price",
          sortable: false,
        },

        {
          text: "تكلفة الفرق",
          align: "center",
          value: "total",
          sortable: false,
        },

        { text: "تحكم ", align: "center", value: "action" },
      ],
      inventory_transfers: {
        stock_take_details: [],
        inventory_id: "",
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        revenue_account_id: "",
        expense_account_id: "",

        description: "",
      },
      /*-------------------validators---------------------------*/
      vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
      vld_selected: [(v) => v > 0 || "أدخل قيمة"],
      required: [(value) => !!value || "الحقل مطلوب."],
      isunique: [],
      is_exists: [],
      is_valid_date: [],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],

      people: [
        { header: "Group 1" },
        { name: "Sandra Adams" },
        { name: "Ali Connors" },
        { name: "Trevor Hansen" },
        { name: "Tucker Smith" },
        { divider: true },
        { header: "Group 2" },
        { name: "Britta Holt", group: "Group 2" },
        { name: "Jane Smith ", group: "Group 2" },
        { name: "John Smith", group: "Group 2" },
        { name: "Sandra Williams", group: "Group 2" },
      ],
      friends: "",
    };
  },
  methods: {
    bgblue(item) {
      if (item.id == "owners" || item.id == "revenues" || item.id == "expenses")
        $("#nib" + item.id)
          .parent()
          .addClass("first-level");

      if (this.account_div_update == 0) this.account_div_update += 1;
      return "";
    },
    deleteItem(item) {
      this.inventory_transfers.stock_take_details.splice(
        this.inventory_transfers.stock_take_details.indexOf(item),
        1
      );
    },
    actual_quantity_change(item) {
      let purchased_unit = item.units.find(
        (elem) => elem.pivot.id == item.purchased_unit_id
      );
      console.log(purchased_unit);
      console.log("purchased_unit");
      item.actual_quantity_in_minor_unit = parseInt(
        item.actual_quantity * purchased_unit.pivot.contains
      );

      console.log(item.actual_quantity_in_minor_unit);
    },
    product_unit_change(item) {
      //alert(1)
      let purchased_unit = item.units.find(
        (elem) => elem.pivot.id == item.purchased_unit_id
      );

      item.unit_price = purchased_unit.pivot.purchase_price;

      item.current_quantity = parseInt(
        item.purchase_details[0].quantity_in_minor_unit /
          purchased_unit.pivot.contains
      );

      item.actual_quantity = item.current_quantity;
      item.actual_quantity_in_minor_unit = parseInt(
        item.actual_quantity * purchased_unit.pivot.contains
      );
      this.someVariableUnderYourControl++;
    },
    getProducts(val, type) {
      if (val.length > 2) {
        this.loading = true;
        let params = "";
        if (type == "barcode")
          params = {
            barcode: val,
            inventory_id: this.inventory_transfers.inventory_id,
          };
        else
          params = {
            name: val,
            inventory_id: this.inventory_transfers.inventory_id,
          };

        // Simulated ajax query ajax
        Product.search(params).then((response) => {
          this.loading = false;
          console.log("hi", response.data);
          if (response.data.length !== 0) {
            this.found_products = JSON.parse(
              JSON.stringify(response.data.products)
            );
          }
        });
      }
    },

    submit() {
      console.log("this.inventory_transfers");
      console.log(this.inventory_transfers);
      console.log("this.inventory_transfers");
      if (this.is_new_stock)
        Inventory_transfers.store(this.inventory_transfers).then((response) =>
          console.log(response.data)
        );
      else
        Inventory_transfers.update(this.inventory_transfers).then((response) =>
          console.log(response.data)
        );

      console.log(this.inventory_transfers);
    },
    showThisProduct(selected_product) {
      if (
        this.inventory_transfers.stock_take_details.findIndex(
          (elem) => elem.id == selected_product.id
        ) >= 0
      )
        return;
      selected_product.purchased_unit_id =
        selected_product.units[
          selected_product.main_purchase_unit_id - 1
        ].pivot.id;

      selected_product.unit_price =
        selected_product.units[
          selected_product.main_purchase_unit_id - 1
        ].pivot.purchase_price;

      selected_product.purchased_quantity = 1;
      selected_product.current_quantity =
        selected_product.purchase_details[0].quantity_in_minor_unit /
        selected_product.units[selected_product.main_purchase_unit_id - 1].pivot
          .contains;

      selected_product.actual_quantity = selected_product.current_quantity;
      selected_product.actual_quantity_in_minor_unit = parseInt(
        selected_product.actual_quantity *
          selected_product.units[selected_product.main_purchase_unit_id - 1]
            .pivot.contains
      );
      this.inventory_transfers.stock_take_details.unshift(selected_product);
      return;
    },

    searchAndAddToStockTackes() {
      let params = { barcode: this.searched_barcode, inventory_id: 1 };

      Product.inventory_transfersBarcodeSearch(params).then((response) => {
        if (response.data.products.length == 0) {
          this.is_exists = [false || "الصنف غير موجود "];
          return;
        }

        this.is_exists = [true];

        response.data.products[0].actual_quantity = 0;
        response.data.products[0].actual_quantity_in_minor_unit = 0;

        this.selected_item = JSON.parse(
          JSON.stringify(response.data.products[0])
        );

        if (this.selected_item.purchase_details.length == 0) return;
        if (this.selected_item.purchase_details.length == 1) {
          this.showThisProduct(this.selected_item);
        }
        let products_grouped = true;
        if (products_grouped) {
          this.selected_item.purchase_details[0].quantity_in_minor_unit =
            this.selected_item.quantity_in_minor_unit;

          // this.selected_item.purchase_details[0].quantity_in_minor_unit =
          //   this.selected_item.purchase_details.reduce(
          //     (a, b) => +a + +b.quantity_in_minor_unit,
          //     0
          //   );
          console.log("this.selected_item");
          console.log(this.selected_item);
          this.showThisProduct(this.selected_item);
          return;
        }

        this.sets = this.selected_item.purchase_details;

        this.dialog = true;

        this.$nextTick().then(() => {
          var listElm = document.querySelector("ul");

          // Mark first list item
          this.$nextTick(() => {
            listElm.firstElementChild.focus();
            var selectedElm = document.activeElement,
              goToStart,
              // map actions to event's key
              action = {
                ArrowUp: "previous",
                Up: "previous",
                ArrowDown: "next",
                Down: "next",
              };

            let f = (e) => {
              if (e.key === "Enter") {
                var parent = selectedElm.parentNode;
                console.log(parent);
                console.log(selectedElm);

                this.index_of_selected_product = Array.prototype.indexOf.call(
                  listElm.children,
                  selectedElm
                );

                let selected_item = JSON.parse(
                  JSON.stringify(this.selected_item)
                );

                console.log(selected_item);
                selected_item["purchase_details"][0] =
                  selected_item["purchase_details"][
                    this.index_of_selected_product
                  ];

                this.showThisProduct(selected_item);
                console.log("index");

                console.log("index");

                window.removeEventListener("keydown", f);

                console.log("input_barcode");
                console.log(input_barcode);
                console.log("input_barcode");
                let input_barcode = document.getElementById("barcode");
                this.$nextTick(() => {
                  input_barcode.focus();
                });

                console.log("selectedElm");
                console.log(selectedElm);
                console.log("selectedElm");
                this.dialog = false;
                return;
              }
              //e.preventDefault();

              console.log(selectedElm);
              selectedElm = selectedElm[action[e.key] + "ElementSibling"];

              // loop if top/bottom edges reached or "home"/"end" keys clicked
              if (!selectedElm || e.key == "Home" || e.key == "End") {
                goToStart = action[e.key] == "next" || e.key == "Home";
                selectedElm =
                  listElm.children[goToStart ? 0 : listElm.children.length - 1];
              }

              selectedElm.focus();
            };
            window.addEventListener("keydown", f);
          });

          // Event listener
        });

        //-----add

        //---------
        //selected_product["document_type_id"] = 1; // purchase
        //selected_product["product_id"] = selected_product["id"]; // purchase
      });
    },
    addProductToPurchase() {
      console.log(this.purchase.purchase_details);
      console.log("seles", this.selected_product);
      //set defaultpurchase_id from main purchsedid
      this.selected_product.purchased_unit_id =
        this.selected_product.units[
          this.selected_product.main_purchase_unit_id - 1
        ].pivot.id;

      this.selected_product.unit_price =
        this.selected_product.units[
          this.selected_product.main_purchase_unit_id - 1
        ].pivot.purchase_price;

      this.selected_product.purchased_quantity = 1;
      console.log("nnj", this.selected_product.purchased_unit_id);
      this.purchase.purchase_details.unshift(
        JSON.parse(JSON.stringify(this.selected_product))
      );
      console.log("nib", this.purchase.purchase_details);
      this.selected_product = [];
    },
  },

  created() {
    Inventory_transfers.create().then((response) => {
      this.revenue_accounts = [
        ...[{ header: "حسابات حقوق الملاك" }],
        ...response.data[3],
        ...[{ divider: true }, { header: "حسابات الإيرادات" }],
        ...response.data[4],
      ];
      console.log(this.revenue_accounts);
      this.expense_accounts = [
        ...[{ header: "حسابات حقوق الملاك" }],
        ...response.data[3],
        ...[{ divider: true }, { header: "حسابات المصروفات" }],
        ...response.data[5],
      ];
      this.inventories = response.data["inventories"];
    });
  },
  watch: {
    name_search(val) {
      val &&
        val !== this.selected_product.ar_name &&
        this.getProducts(val, "name");
    },
  },
};
</script>

<style scoped>
.v-application ol,
.v-application ul {
  padding-left: 0;
}
ul {
  list-style: none;
  border: 1px solid silver;
  max-height: 170px;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth; /* nice smooth movement */
  overflow: hidden; /* set to hidden by OP's request */
}

li {
  padding: 0.5em;
  margin: 0;
}
li:focus {
  background: lightsalmon;
  outline: none;
}

.theme--light.v-subheader {
  background: rgb(255, 231, 243);
  justify-content: center;
}
.first-level {
  background: rgb(103, 133, 196);
  justify-content: center;
}
</style>