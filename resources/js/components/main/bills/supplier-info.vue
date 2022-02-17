<template>
  <div style="padding: 20px; font-size: 14px">
    <v-row style="">
      <v-col cols="12" lg="6">
        <v-row
          style="
            font-size: 14px;
            border: 1px solid #bababa;
            border-radius: 5px;
            padding: 10px;
            margin-left: 10px;
            margin-right: 10px;
          "
        >
          <v-col cols="3" style="text-align: start" class="pa-1">الاسم</v-col>
          <v-col cols="9" style="text-align: start" class="pa-1">
            {{ supplier.name }}
          </v-col>
          <v-col cols="3" style="text-align: start" class="pa-1">
            الشركة
          </v-col>
          <v-col cols="9" style="text-align: start" class="pa-1">
            {{ supplier.company_name }}
          </v-col>
          <v-col cols="3" style="text-align: start" class="pa-1">
            رقم الاتصال
          </v-col>
          <v-col cols="9" style="text-align: start" class="pa-1">
            {{ supplier.phone01 }}
          </v-col>
          <v-col cols="3" style="text-align: start" class="pa-1">
            البريد الالكتروني
          </v-col>
          <v-col cols="9" style="text-align: start" class="pa-1">
            {{ supplier.email }}
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6">
        <v-row
          style="
            font-size: 14px;
            border: 1px solid #bababa;
            border-radius: 5px;
            padding: 10px;
            margin-left: 10px;
            margin-right: 10px;
            min-height: 135px;
          "
        >
          <v-col cols="3" style="text-align: start" class="pa-1">الحالة</v-col>
          <v-col cols="9" style="text-align: start" class="pa-1">
            {{ supplier.is_supplier_active == 1? 'نشط':'غير نشط' }}
          </v-col>

          <v-col cols="3" style="text-align: start" class="pa-1">
            العنوان
          </v-col>
          <v-col cols="9" style="text-align: start" class="pa-1">
            {{ supplier.address }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="pt-10 justify-center">
      <v-col cols="12" lg="2">
        <v-row>
          <v-col cols="6" lg="12"> الرصيد </v-col>
          <v-col cols="6" lg="12">
            <h1>
              {{ balance.toFixed(2) }}
            </h1>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="2">
        <v-row>
          <v-col cols="6" lg="12"> قيمة الفواتير </v-col>
          <v-col cols="6" lg="12">
            <h1>
              {{ total_amount.toFixed(2) }}
            </h1>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="2">
        <v-row>
          <v-col cols="6" lg="12"> إجمالي المستحق </v-col>
          <v-col cols="6" lg="12">
            <h1>
              {{ remain_amount.toFixed(2) }}
            </h1>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="2">
        <v-row>
          <v-col cols="6" lg="12"> متأخرات </v-col>
          <v-col cols="6" lg="12">
            <h1>
              {{ arrears.toFixed(2) }}
            </h1>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="2">
        <v-row>
          <v-col cols="6" lg="12"> عدد الفواتير </v-col>
          <v-col cols="6" lg="12">
            <h1>
              {{ bills_count }}
            </h1>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-card color="basil" style="width: 100%">
        <v-card-title class="text-center justify-center py-6">
          <p class="basil--text">التعاملات</p>
        </v-card-title>

        <v-tabs v-model="tab" background-color="transparent" color="basil">
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-row>
              <v-data-table
                style="width: 100%"
                :headers="headers"
                :items="bills"
                :options.sync="pur_options"
                :server-items-length="bills_total"
                :loading="pur_loading"
                class="elevation-1"
              >
                <template v-slot:top> </template>
                <template v-slot:item.issue_date="{ item }">
                  {{ item.issue_date.split(" ")[0] }}
                </template>
                <template v-slot:item.status="{ item }">
                  {{
                    statuses.find((elem) => elem.id == item.status_id)
                      .ar_name
                  }}
                </template>
              </v-data-table>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-data-table
                style="width: 100%"
                :headers="receipt_headers"
                :items="receipts"
                :options.sync="receipt_options"
                :server-items-length="receipt_total"
                :loading="receipt_loading"
                class="elevation-1"
              >
                <template v-slot:top> </template>
                <template v-slot:item.status="{ item }">
                  {{
                    receipt_statuses.find((elem) => elem.id == item.status_id)
                      .ar_name
                  }}
                </template>
              </v-data-table>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-data-table
                style="width: 100%"
                :headers="receipt_headers"
                :items="receipts"
                :options.sync="receipt_options"
                :server-items-length="receipt_total"
                :loading="receipt_loading"
                class="elevation-1"
              >
                <template v-slot:top> </template>
                <template v-slot:item.status="{ item }">
                  {{
                    receipt_statuses.find((elem) => elem.id == item.status_id)
                      .ar_name
                  }}
                </template>
                <template v-slot:item.date="{ item }">
                  {{ item.date.split(" ")[0] }}
                </template>
                <template v-slot:item.actions="{ item }">
                  <router-link :to="'bills/' + item.id"
                    ><v-icon small>mdi-pencil</v-icon></router-link
                  >
                  <v-btn icon @click.stop="deleteBill(item, 'update')">
                    <v-icon small class="outlined font-size-12"
                      >mdi-delete</v-icon
                    >
                  </v-btn>
                </template>
              </v-data-table>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import Supplier from "../../../apis/Supplier";
import SupplierInfoTabs from "./supplier-info-tabs.vue";
export default {
  components: {
    SupplierInfoTabs,
  },
  data() {
    return {
      //---- tabs
      tab: null,
      items: ["الفواتير", "الاشعارات", "السندات"],

      //----
      pur_loading: false,
      remain_amount: 0,
      receipt_loading: false,
      headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        { text: "رقم المرجع", align: "center", value: "reference" },
        {
          text: "جهة الاتصال",
          align: "center",
          sortable: false,
          value: "issue_date",
        },
        { text: "الرصيد", align: "center", value: "total_amount" },
        { text: "متأخرات", align: "center", value: "paid_amount" },
        { text: "الحالة ", align: "center", value: "status" },
        { text: "التحكم ", align: "center", value: "actions" },
      ],
      receipt_headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        { text: "رقم المرجع", align: "center", value: "receipt_reference" },
        {
          text: "تاريخ الاصدار",
          align: "center",
          sortable: false,
          value: "date",
        },
        { text: "القيمة", align: "center", value: "amount" },

        { text: "الحالة ", align: "center", value: "status" },
        { text: "لتحكم ", align: "center", value: "actions" },
      ],
      pur_options: {},
      receipt_options: {},
      supplier: "",
      total_amount: 0,
      bills: [],
      receipts: [],
      statuses: [
        { id: 1, ar_name: "موافق عليه" },
        { id: 2, ar_name: "بانتظار الموافقة" },
        { id: 3, ar_name: "ألغيت" },
        { id: 4, ar_name: "مسودة" },
        { id: 5, ar_name: "دفعت" },
        { id: 6, ar_name: "دفعت جزئيا" },
      ],
      receipt_statuses: [
        { id: 1, ar_name: "غير مستعمل" },
        { id: 2, ar_name: "مستعمل" },
        { id: 3, ar_name: "مستعمل جزئيا" },
      ],
      bills_total: 0,
      receipt_total: 0,
      arrears: 0,
      balance: 0,
      bills_count: 0,
    };
  },
  computed: {
    pur_params(nv) {
      return {
        ...this.pur_options,
      };
    },
    receipt_params(nv) {
      return {
        ...this.receipt_options,
      };
    },
  },
  watch: {
    pur_params: {
      handler() {
        let pur_page = this.pur_options.page;
        let pur_itemsPerPage = this.pur_options.itemsPerPage;

        //console.log(this.options)

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
    receipt_params: {
      handler() {
        let receipt_page = this.receipt_options.page;
        let receipt_itemsPerPage = this.receipt_options.itemsPerPage;

        console.log("itemsPerPage", receipt_itemsPerPage);

        Supplier.getOne({
          id: this.$route.params.id,
          receipt_page,
          receipt_itemsPerPage,
        }).then((response) => {
          this.DataProcessing(response, "receipt");
        });
      },
      deep: true,
    },
  },
  created() {
    Supplier.getOne({ id: this.$route.params.id }).then((response) => {
      this.DataProcessing(response, "receipt");
    });
  },
  methods: {
    DataProcessing(response, type) {
      console.log("response", response);

      if (response.data.bills) {
        this.bills = response.data.bills.data;
        this.bills_total = response.data.bills.total;
        return;
      }

      if (response.data.receipts) {
        this.receipts = response.data.receipts.data;
        console.log(this.receipts);
        this.receipt_total = response.data.receipts.total;
        return;
      }
      this.supplier = response.data.supplier;
      this.total_amount = response.data.total_amount;
      this.bills_count = response.data.bills_count;
      this.remain_amount = response.data.remain_amount;
      this.arrears = response.data.arrears;
      this.balance = response.data.balance;
      return 0;
    },
  },
};
</script>

<style>
.v-window__container {
  height: 100%;
}
.v-tabs__content {
  background-color: green;
  height: 100px;
}
</style>