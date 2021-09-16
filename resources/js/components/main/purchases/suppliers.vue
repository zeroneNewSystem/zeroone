 <template>
  <div>
    <add-update-supplier
      :dialog="add_update_supplier_dialog"
      :supplier="passed_supplier"
      :operation="operation"
      :cities="cities"
      @addUpdateSupplier="addSupplierToList"
      @changeCountry="loadCities"
    ></add-update-supplier>

    <supplier-info
      :dialog="supplier_info_dialog"
      :supplier="supplier_info_supplier"
    >
      <span slot="title"> معلومات المورد</span>
    </supplier-info>
    <v-data-table
      :headers="headers"
      :items="suppliers"
      :options.sync="options"
      :server-items-length="suppliers_total"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-btn
            elevation
            color="primary"
            @click.stop="addUpdateSupplier('', 'add')"
            >إضافة مورد</v-btn
          >
        </v-toolbar>

        <v-text-field
          v-model="search"
          label="البحث بالاسم أو الباركود"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:item.name="{ item }">
        {{ item.name }}
      </template>
      <template v-slot:item.status="{ item }">
        {{ item.is_active ? "نشط" : "غير نشط" }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn icon @click.stop="addUpdateSupplier(item, 'update')">
          <v-icon small class="outlined font-size-12">mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click.stop="show_supplier_dialog(item)">
          <v-icon small class="outlined font-size-12">mdi-eye</v-icon>
        </v-btn>

        <v-icon small @click="deleteSupplier(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>no data!</template>
    </v-data-table>
  </div>
</template>

<script>
import Supplier from "../../../apis/Supplier";
import Country from "../../../apis/Country";
import SupplierInfo from "./supplier-info.vue";
import AddUpdateSupplier from "./AddUpdateSupplier.vue";
export default {
  components: {
    SupplierInfo,
    AddUpdateSupplier,
  },
  data() {
    return {
      cities: [],
      //-------etched data-----------------f
      operation: "add",
      suppliers: [],
      add_update_supplier_dialog: false,
      passed_supplier: "",

      //-----------------------------------//
      supplier_info_supplier: "",
      supplier_info_dialog: false,
      search: "",
      options: {},
      status: "salam",

      title: "إدارة الموردين",
      //---
      suppliers_total: 20,
      loading: true,

      headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        { text: "اسم الشركة", align: "center", value: "company_name" },
        {
          text: "جهة الاتصال",
          align: "center",
          sortable: false,
          value: "name",
        },
        { text: "الرصيد", align: "center", value: "balance" },
        { text: "متأخرات", align: "center", value: "arrears" },
        { text: "الحالة ", align: "center", value: "status" },
        { text: "لتحكم ", align: "center", value: "actions" },
      ],
    };
  },
  computed: {
    params(nv) {
      return {
        ...this.options,
        //query: this.search,
      };
    },
  },
  watch: {
    params: {
      handler() {
        this.getDataFromApi().then((response) => {
          this.suppliers = response.data.suppliers.data;

          this.suppliers_total = response.data.suppliers.data.total;
          this.supplier_info_supplier = response.data.suppliers.data[0];
          console.log(this.suppliers_total);
        });
      },
      deep: true,
    },
  },
  // mounted() {
  //   this.getDataFromApi().then((data) => {
  //     this.suppliers = data.response;
  //   });
  // },

  methods: {
    loadCities(country_id) {
      this.cities = [];
      Country.loadCities(country_id).then(
        (response) => (this.cities = response.data.cities)
      );
    },

    addSupplierToList(supplier) {
      if (this.operation == "add") this.suppliers.push(supplier);
      else if (this.operation == "update") {
        this.suppliers.splice(
          this.suppliers.indexOf((elem) => elem.id == supplier.id),
          1,
          supplier
        );
      }
    },
    addUpdateSupplier(item, operation) {
      this.operation = operation;
      if (operation == "add") {
        this.passed_supplier = {
          parent_id: "",
          type_id: "",
          name: "",
          account_code: "",
          description: "",
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

    show_supplier_dialog(item) {
      this.supplier_info_dialog = true;
      console.log(item);
      this.supplier_info_supplier = item;
    },
    deleteSupplier(item) {
      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      let search = this.search.trim().toLowerCase();
      let person_id = item.id;
      Supplier.delete({ person_id, page, itemsPerPage, search }).then(
        (response) => {
          this.loading = false;
          this.suppliers = response.data.suppliers.data;
          this.suppliers_total = response.data.suppliers.data.total;
        }
      );
    },
    getDataFromApi() {
      this.loading = true;
      return new Promise((resolve, reject) => {
        const { sortBy, sortDesc, page, itemsPerPage } = this.options;
        let search = this.search.trim().toLowerCase();

        Supplier.get({ page, itemsPerPage, search }).then((response) => {
          this.loading = false;
          resolve(response);
        });
      });
    },
  },
};
</script>