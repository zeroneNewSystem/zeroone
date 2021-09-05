 <template>
  <div>
    <supplier-info
      :dialog="supplier_info_dialog"
      :supplier="supplier_info_supplier"
      :prdct_forms="prdct_forms"
      :prdct_taxes="prdct_taxes"
      :prdct_types="prdct_types"
    >
      <span slot="title"> معلومات الصنف</span>
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
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-text-field
          v-model="search"
          label="البحث بالاسم أو الباركود"
          class="mx-4"
        ></v-text-field>
      </template>

      <template v-slot:item.actions="{ item }">
        <router-link :to="{ name: 'supplier', params: { supplier: item } }"
          ><v-icon small>mdi-pencil</v-icon></router-link
        >

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
import SupplierInfo from "./supplier-info.vue";
export default {
  components: {
    SupplierInfo,
  },
  data() {
    return {
      //-------etched data-----------------f
      suppliers: [],
      prdct_types: [],
      prdct_forms: [],
      prdct_taxes: [],

      //-----------------------------------//
      supplier_info_supplier: "",
      supplier_info_dialog: false,
      search: "",
      status: "salam",
      title: "إدارة الأصناف",
      //---
      suppliers_total: 20,
      loading: true,
      options: {},
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
          value: "contact_person",
        },
        { text: "الشركة", align: "center", value: "company" },
        { text: "الخصم", align: "center", value: "selling_discount" },
        { text: "عمليات ", align: "center", value: "actions" },
      ],
    };
  },
  computed: {
    params(nv) {
      return {
        ...this.options,
        query: this.search,
      };
    },
  },
  watch: {
    params: {
      handler() {
        this.getDataFromApi().then((response) => {
          this.suppliers = response.data.suppliers.data;
          this.prdct_types = response.data.prdct_types;
          this.prdct_forms = response.data.prdct_forms;
          this.prdct_taxes = response.data.prdct_taxes;
          this.suppliers_total = response.data.suppliers.total;
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
    show_supplier_dialog(item) {
      this.supplier_info_dialog = true;
      console.log(item);
      this.supplier_info_supplier = item;
    },
    deleteSupplier(item) {
      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      let search = this.search.trim().toLowerCase();
      let id = item.id;
      Supplier.delete({ id, page, itemsPerPage, search }).then((response) => {
        this.loading = false;
        this.suppliers = response.data.suppliers.data;
        this.suppliers_total = response.data.suppliers.total;
      });
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