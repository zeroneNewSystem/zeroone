 <template>
  <div>
    <add-update-customer
      :dialog="add_update_customer_dialog"
      :customer="passed_customer"
      :operation="operation"
      :cities="cities"
      @addUpdateCustomer="addCustomerToList"
      @changeCountry="loadCities"
    ></add-update-customer>

    <customer-info
      :dialog="customer_info_dialog"
      :customer="customer_info_customer"
    >
      <span slot="title"> معلومات المورد</span>
    </customer-info>
    <v-data-table
      :headers="headers"
      :items="customers"
      :options.sync="options"
      :server-items-length="customers_total"
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
            @click.stop="addUpdateCustomer('', 'add')"
            >إضافة مورد</v-btn
          >
        </v-toolbar>

        <v-row>
          <v-col cols="12" lg="3">
            <v-text-field
              v-model="search.company_name"
              label="اسم الشركة"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="3">
            <v-text-field
              v-model="search.name"
              label="جهة الاتصال"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="3">
            <v-text-field
              v-model="search.phone"
              label="رقم الاتصال"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="3">
            <v-autocomplete
              v-model="search.is_customer_active"
              :items="customer_status"
              item-text="status"
              item-value="is_customer_active"
              label="الحالة"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" lg="6">
            <v-row>
              <v-col cols="2">
                <v-btn elevation color="primary" @click="findCustomers"
                  >البحث</v-btn
                >
              </v-col>
              <v-col cols="2">
                <v-btn elevation color="primary" @click.stop="searchReset"
                  >إعادة تعيين</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </template>
      <template v-slot:item.name="{ item }">
        {{ item.name }}
      </template>
      <template v-slot:item.status="{ item }">
        {{ item.is_active ? "نشط" : "غير نشط" }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn icon @click.stop="addUpdateCustomer(item, 'update')">
          <v-icon small class="outlined font-size-12">mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click.stop="show_customer_dialog(item)">
          <v-icon small class="outlined font-size-12">mdi-eye</v-icon>
        </v-btn>

        <v-icon small @click="deleteCustomer(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>no data!</template>
    </v-data-table>
  </div>
</template>

<script>
import Customer from "../../../apis/Customer";
import Country from "../../../apis/Country";
import CustomerInfo from "./customer-info.vue";
import AddUpdateCustomer from "./AddUpdateCustomer.vue";
export default {
  components: {
    CustomerInfo,
    AddUpdateCustomer,
  },
  data() {
    return {
      customer_status: [
        { is_customer_active: 0, status: "نشط" },
        { is_customer_active: 1, status: "غير نشط" },
      ],
      cities: [],
      //-------etched data-----------------f
      operation: "add",
      customers: [],
      add_update_customer_dialog: false,
      passed_customer: "",

      //-----------------------------------//
      customer_info_customer: "",
      customer_info_dialog: false,

      search: {
        company_name: "",
        name: "",
        phone: "",
        is_customer_active: "",
      },
      options: {},
      status: "salam",

      title: "إدارة الموردين",
      //---
      customers_total: 20,
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
          this.customers = response.data.customers.data;

          this.customers_total = response.data.customers.data.total;
          this.customer_info_customer = response.data.customers.data[0];
          console.log(this.customers_total);
        });
      },
      deep: true,
    },
  },
  // mounted() {
  //   this.getDataFromApi().then((data) => {
  //     this.customers = data.response;
  //   });
  // },

  methods: {
    findCustomers() {
      this.getDataFromApi().then((response) => {
        this.customers = response.data.customers.data;

        this.customers_total = response.data.customers.data.total;
        this.customer_info_customer = response.data.customers.data[0];
        console.log(this.customers_total);
      });
    },
    searchReset() {
      (this.search = {
        company_name: "",
        name: "",
        phone: "",
        is_customer_active: "",
      }),
        this.getDataFromApi().then((response) => {
          this.customers = response.data.customers.data;

          this.customers_total = response.data.customers.data.total;
          this.customer_info_customer = response.data.customers.data[0];
          console.log(this.customers_total);
        });
    },
    loadCities(country_id) {
      this.cities = [];
      Country.loadCities(country_id).then(
        (response) => (this.cities = response.data.cities)
      );
    },

    addCustomerToList(customer) {
      if (this.operation == "add") this.customers.push(customer);
      else if (this.operation == "update") {
        this.customers.splice(
          this.customers.indexOf((elem) => elem.id == customer.id),
          1,
          customer
        );
      }
    },
    addUpdateCustomer(item, operation) {
      this.operation = operation;
      if (operation == "add") {
        this.passed_customer = {
          parent_id: "",
          type_id: "",
          name: "",
          account_code: "",
          description: "",
        };
      }
      if (operation == "update") {
        this.loadCities(item.country_id);

        this.passed_customer = item;
        console.log("item", item);
        console.log("item", this.cities);
      }

      this.add_update_customer_dialog = true;
    },

    show_customer_dialog(item) {
      this.customer_info_dialog = true;
      console.log(item);
      this.customer_info_customer = item;
    },
    deleteCustomer(item) {
      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      //let search = this.search.trim().toLowerCase();
      let person_id = item.id;
      Customer.delete({
        person_id,
        page,
        itemsPerPage,
        search: this.search,
      }).then((response) => {
        this.loading = false;
        this.customers = response.data.customers.data;
        this.customers_total = response.data.customers.data.total;
      });
    },
    getDataFromApi() {
      this.loading = true;
      return new Promise((resolve, reject) => {
        const { sortBy, sortDesc, page, itemsPerPage } = this.options;
        // let search = this.search.trim().toLowerCase();

        Customer.get({ page, itemsPerPage, search: this.search }).then(
          (response) => {
            this.loading = false;
            resolve(response);
          }
        );
      });
    },
  },
};
</script>