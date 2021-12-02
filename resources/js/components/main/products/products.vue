 <template>
  <div>
    <product-info
      :dialog="product_info_dialog"
      :product="product_info_product"
      :prdct_forms="prdct_forms"
      :prdct_taxes="prdct_taxes"
      :prdct_types="prdct_types"
    >
      <span slot="title"> معلومات الصنف</span>
    </product-info>
    <v-data-table
      :headers="headers"
      :items="products"
      :options.sync="options"
      :server-items-length="products_total"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>

          <v-spacer></v-spacer>
        </v-toolbar>
        <v-row justify="start">
          <v-col style="text-align: end">
            <v-btn
              elevation
              color="primary"
              @click.stop="addUpdateSupplier('', 'add')"
              >جرد المخزون</v-btn
            >

            <v-btn
              elevation
              color="primary"
              @click.stop="addUpdateSupplier('', 'add')"
              >نقل المخزون</v-btn
            >

            <v-btn
              elevation
              color="primary"
              @click.stop="addUpdateSupplier('', 'add')"
              >المجموعات</v-btn
            >

            <v-btn
              elevation
              color="primary"
              @click.stop="addUpdateSupplier('', 'add')"
              >الأنواع</v-btn
            >

            <v-btn
              elevation
              color="primary"
              @click.stop="addUpdateSupplier('', 'add')"
              >إضافة صنف جديد</v-btn
            >
          </v-col>
        </v-row>

        <v-text-field
          v-model="search"
          label="البحث بالاسم أو الباركود"
          class="mx-4"
        ></v-text-field>
      </template>

      <template v-slot:item.actions="{ item }">
        <router-link :to="{ name: 'product', params: { product: item } }"
          ><v-icon small>mdi-pencil</v-icon></router-link
        >

        <v-btn icon @click.stop="show_product_dialog(item)">
          <v-icon small class="outlined font-size-12">mdi-eye</v-icon>
        </v-btn>

        <v-icon small @click="deleteProduct(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>no data!</template>
    </v-data-table>
  </div>
</template>

<script>
import Product from "../../../apis/Product";
import ProductInfo from "./product-info.vue";
export default {
  components: {
    ProductInfo,
  },
  data() {
    return {
      //-------etched data-----------------f
      products: [],
      prdct_types: [],
      prdct_forms: [],
      prdct_taxes: [],

      //-----------------------------------//
      product_info_product: "",
      product_info_dialog: false,
      search: "",
      status: "salam",
      title: "الأصناف والمنتجات",
      //---
      products_total: 20,
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
        { text: "اسم الصنف", align: "center", value: "ar_name" },
        {
          text: "الباركود",
          align: "center",
          sortable: false,
          value: "barcode",
        },
        { text: "الشركة", align: "center", value: "company" },
        { text: "الخصم", align: "center", value: "selling_discount" },
        { text: "التحكم ", align: "center", value: "actions" },
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
          this.products = response.data.products.data;
          this.prdct_types = response.data.prdct_types;
          this.prdct_forms = response.data.prdct_forms;
          this.prdct_taxes = response.data.prdct_taxes;
          this.products_total = response.data.products.total;
          this.product_info_product = response.data.products.data[0];
          console.log(this.products_total);
        });
      },
      deep: true,
    },
  },
  // mounted() {
  //   this.getDataFromApi().then((data) => {
  //     this.products = data.response;
  //   });
  // },
  methods: {
    show_product_dialog(item) {
      this.product_info_dialog = true;
      console.log(item);
      this.product_info_product = item;
    },
    deleteProduct(item) {
      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      let search = this.search.trim().toLowerCase();
      let id = item.id;
      Product.delete({ id, page, itemsPerPage, search }).then((response) => {
        this.loading = false;
        this.products = response.data.products.data;
        this.products_total = response.data.products.total;
      });
    },
    getDataFromApi() {
      this.loading = true;
      return new Promise((resolve, reject) => {
        const { sortBy, sortDesc, page, itemsPerPage } = this.options;
        let search = this.search.trim().toLowerCase();

        Product.get({ page, itemsPerPage, search }).then((response) => {
          this.loading = false;
          resolve(response);
        });
      });
    },
  },
};
</script>