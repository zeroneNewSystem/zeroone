<template>
  <div style="padding: 20px">
    <v-row>
      <v-col cols="12" lg="6">
        <v-row
          style="
            font-size: 14px;
            border: 1px solid #bababa;
            border-radius: 5px;
            padding: 10px;
          "
        >
          <v-col cols="3" style="text-align: start" class="pa-0"> الاسم </v-col>
          <v-col cols="9" style="text-align: start" class="pa-0">
            {{ supplier.name }}
          </v-col>
          <v-col cols="3" style="text-align: start" class="pa-0">
            الشركة
          </v-col>
          <v-col cols="9" style="text-align: start" class="pa-0">
            {{ supplier.compnay_name }}
          </v-col>
          <v-col cols="3" style="text-align: start" class="pa-0">
            رقم الاتصال
          </v-col>
          <v-col cols="9" style="text-align: start" class="pa-0">
            {{ supplier.phone }}
          </v-col>
          <v-col cols="3" style="text-align: start" class="pa-0">
            البريد الالكتروني
          </v-col>
          <v-col cols="9" style="text-align: start" class="pa-0">
            {{ supplier.email }}
          </v-col>
          <v-col cols="3" style="text-align: start" class="pa-0">
            العنوان
          </v-col>
          <v-col cols="9" style="text-align: start" class="pa-0">
            {{ supplier.address }}
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6"> </v-col>
    </v-row>
    <v-row>
      <v-col>
        {{ total_of_purchases }}
      </v-col>
      <v-col>
        {{ arrears }}
      </v-col>
      <v-col>
        {{ balance }}
      </v-col>
      <v-col>
        {{ purchases_count }}
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
        style="width: 100%"
        :headers="purchase_headers"
        :items="purchases"
        :options.sync="pur_options"
        :server-items-length="purchases_total"
        :loading="pur_loading"
        class="elevation-1"
      >
        <template v-slot:top> </template>
        <template v-slot:item.payment_status_id="{ item }"> paid </template>
      </v-data-table>
    </v-row>
    <v-row>
      <v-data-table
        style="width: 100%"
        :headers="reciept_headers"
        :items="reciepts"
        :options.sync="reciept_options"
        :server-items-length="reciept_total"
        :loading="reciept_loading"
        class="elevation-1"
      >
        <template v-slot:top> </template>
        <template v-slot:item.payment_status_id="{ item }"> paid </template>
      </v-data-table>
    </v-row>
  </div>
</template>

<script>
import Supplier from "../../../apis/Supplier";
export default {
  data() {
    return {
      pur_loading: false,
      reciept_loading: false,
      purchase_headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        { text: "رقم المرجع", align: "center", value: "purchase_reference" },
        {
          text: "جهة الاتصال",
          align: "center",
          sortable: false,
          value: "issue_date",
        },
        { text: "الرصيد", align: "center", value: "total_amount" },
        { text: "متأخرات", align: "center", value: "paid_amount" },
        { text: "الحالة ", align: "center", value: "status" },
        { text: "لتحكم ", align: "center", value: "actions" },
      ],
      reciept_headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        { text: "رقم المرجع", align: "center", value: "purchase_reference" },
        {
          text: "جهة الاتصال",
          align: "center",
          sortable: false,
          value: "issue_date",
        },
        { text: "الرصيد", align: "center", value: "total_amount" },
        { text: "متأخرات", align: "center", value: "paid_amount" },
        { text: "الحالة ", align: "center", value: "status" },
        { text: "لتحكم ", align: "center", value: "actions" },
      ],
      pur_options: {},
      reciept_options: {},
      supplier: "",
      total_of_purchases: 0,
      purchases: [],
      reciepts: [],
      purchases_total: 0,
      reciept_total: 0,
      arrears: 0,
      balance: 0,
      purchases_count: 0,
    };
  },
  computed: {
    pur_params(nv) {
      return {
        ...this.pur_options,
      };
    },
    reciept_params(nv) {
      return {
        ...this.reciept_options,
      };
    },
  },
  watch: {
    pur_params: {
      handler() {
        let pur_page = this.pur_options.page;
        let pur_itemsPerPage = this.pur_options.itemsPerPage;

        //console.log(this.purchase_options)

        console.log("itemsPerPage", pur_itemsPerPage);

        Supplier.getOne({
          id: this.$route.params.id,
          pur_page,
          pur_itemsPerPage,
        }).then((response) => {
          this.DataProcessing(response, "pur");
        });
      },
      deep: true,
    },
    reciept_params: {
      handler() {
        let reciept_page = this.reciept_options.page;
        let reciept_itemsPerPage = this.reciept_options.itemsPerPage;

        //console.log(this.reciept_options)

        console.log("itemsPerPage", reciept_itemsPerPage);

        Supplier.getOne({ reciept_page, reciept_itemsPerPage }).then(
          (response) => {
            this.DataProcessing(response);
          }
        );
      },
      deep: true,
    },
  },
  created() {},
  methods: {
    DataProcessing(response, type) {
      if (type == "pur") {
        this.purchases = response.data;
        this.total_of_purchases = response.total;

      }

      
      return 0;
    },
  },
};
</script>

<style>
</style>