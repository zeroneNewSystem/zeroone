 <template>
  <div>
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

        <v-text-field
          v-model="search"
          label="البحث بالاسم أو الباركود"
          class="mx-4"
        ></v-text-field>
      </template>

      <template v-slot:item.actions="{ item }">
        <router-link
          style="text-decoration: none"
          :to="'/addupdatedrugclass/' + item.id"
        >
          <v-icon small @click="$emit('updatestatus', item)">mdi-pencil</v-icon>
        </router-link>

        <router-link
          style="text-decoration: none"
          :to="'/drugclass-details/' + item.id"
          @click="$emit('update-status', status)"
        >
          <v-icon small>mdi-view-module</v-icon>
        </router-link>

        <v-icon small @click="deleteProduct(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>no data!</template>
    </v-data-table>
  </div>
</template>i

<script>
import Product from "../../../apis/Product";
export default {
  data() {
    return {
      search: "",
      status: "salam",
      title: "إدارة الأصناف",
      //---
      products_total: 20,
      products: [],
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
          this.products = response.data;
          this.products_total = response.total;
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
          resolve(response.data.products);
        });
      });
    },
  },
};
</script>