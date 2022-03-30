<template>
  <div style="padding: 10px; padding-top: 50px">
    <v-row>
      <v-col>
    <v-toolbar flat color="white">
          <v-toolbar-title>    {{ title}}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6">
        <v-row>
          <v-col cols="12" lg="10" class="pt-0 pb-0">
            <v-text-field
              class="receipt-info"
              outlined
              autocomplete="off"
              v-model="receipt.receipt_reference"
              prefix=" رقم السند | "
              @blur="checkExicting()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="10" class="pt-0 pb-0">
            <v-autocomplete
              v-model="receipt.person_id"
              :items="people"
              item-text="name"
              item-value="id"
              outlined
              :rules="vld_selected"
              :prefix="persona + '|'"
              @change="getBills"
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12" lg="10" class="pt-0 pb-0">
            <v-autocomplete
              flat
              outlined
              no-data
              no-data-text
              prefix=" الحساب | "
              non-linear
              v-model="receipt.account_id"
              :items="from_accounts"
              item-text="ar_name"
              item-value="id"
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12" lg="10" class="pt-0 pb-0">
            <v-autocomplete
              class="receipt-info"
              outlined
              autocomplete="off"
              v-model="receipt.payment_type_id"
              :items="types"
              item-text="ar_name"
              item-value="id"
              prefix=" النوع | "
              @blur="checkExicting()"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" lg="10" class="pt-0 pb-0">
            <v-text-field
              class="receipt-info"
              outlined
              autocomplete="off"
              v-model="receipt.description"
              prefix=" الوصف | "
              @blur="checkExicting()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="10" class="pt-0 pb-0">
            <v-menu
              ref="date"
              v-model="date_is_down"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  outlined
                  v-model="receipt.date"
                  prefix=" التاريخ | "
                  v-bind="attrs"
                  v-on="on"
                  @keydown.enter="date_is_down = false"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="receipt.date"
                no-title
                @input="date_is_down = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" lg="10" class="pt-0 pb-0">
            <v-text-field
              class="receipt-info"
              outlined
              autocomplete="off"
              v-model="receipt.amount"
              prefix=" المبلغ | "
              @blur="checkExicting()"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6">
        <v-row>
          <v-card style="width: 100%; margin-left: 20px">
            <v-card-title style="background: lightgray">
              {{ person_info }}
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" lg="6"> الاسم </v-col>
                <v-col cols="12" lg="6">
                  {{ personInfo() && personInfo().name }}
                </v-col>
                <v-col cols="12" lg="6"> الهاتف </v-col>
                <v-col cols="12" lg="6">
                  {{ personInfo() && personInfo().phone01 }} </v-col
                ><v-col cols="12" lg="6"> البريد الالكتروني </v-col>
                <v-col cols="12" lg="6">
                  {{ personInfo() && personInfo().email }} </v-col
                ><v-col cols="12" lg="6"> الرقم الضريبي </v-col>
                <v-col cols="12" lg="6">
                  {{ personInfo() && personInfo().tax_number }}
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-col cols="12">
            <v-checkbox
              v-model="receipt.allocate_dynamically"
              color="#e91e63"
              label="سداد تلقائي للفواتير بحسب الأقدمية"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" style="text-align: end; padding-left: 25px">
            <v-btn
              class="btn btn-info m-b-5 m-r-2 white--text"
              color="text--white"
              text
              @click="submit()"
            >
              <v-icon class="white--text">mdi-plus-box</v-icon>حفظ
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row> </v-row>
    <v-row class="px-10" style="font-size: 16px">
      الفواتير التي لم تحصل جزئيا أو كليا
    </v-row>
    <v-row class="pt-10" style="font-size: 16px">
      <v-data-table
        hide-default-footer
        style="width: 100%"
        :headers="headers"
        :items="bills"
        class="elevation-1"
      >
        <template v-slot:top> </template>
        <template v-slot:item.issue_date="{ item }">
          {{ item.issue_date && item.issue_date.split(" ")[0] }}
        </template>
        <template v-slot:item.maturity_date="{ item }">
          {{ item.maturity_date && item.maturity_date.split(" ")[0] }}
        </template>
        <template v-slot:item.remainder="{ item }">
          {{ item.remainder.toFixed(3) }}
        </template>
        <template v-slot:item.payment_status="{ item }"> paid </template>
      </v-data-table>
    </v-row>
  </div>
</template>



<script>
import Bill from "../../../apis/Bill";
import Receipt from "../../../apis/Receipt";
export default {
  data() {
    return {
      title:'سند مورد جديد',
      //----
      person_info: "معلومات المورد",
      person_type: "suppliers",
      persona: "المورد",
      //----
      route: "",
      from_accounts: [],
      types: [
        { id: 1, ar_name: "صرف" },
        { id: 2, ar_name: "استلام" },
      ],
      /*-------------------validators---------------------------*/
      vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
      vld_selected: [(v) => v > 0 || "أدخل قيمة"],
      required: [(value) => !!value || "الحقل مطلوب."],
      isunique: [],
      is_exists: [],
      is_valid_date: [],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],

      people: [],
      supplier: "",
      receipts: [],
      bills: [],
      headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        { text: "رقم الفاتورة", align: "center", value: "reference" },
        {
          text: "تاريخ الاصدار",
          align: "center",
          sortable: false,
          value: "issue_date",
        },
        {
          text: "تاريخ الاستحقاق",
          align: "center",
          sortable: false,
          value: "maturity_date",
        },
        { text: "قيمة الفاتورة", align: "center", value: "total_amount" },
        { text: "الباقي", align: "center", value: "remainder" },
      ],
      supplier: "",
      date_is_down: false,
      receipt: {
        supplier_id: "",
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        receipt_reference: "",
        person_id: "",
        account_id: "",
        type_id: "",
        payment_type_id: "",
        description: "",
        amount: "",
      },
    };
  },

  methods: {
    getBills() {
      Bill.getAll({
        supplier_id: this.receipt.person_id,
        status_id: 0,
        search: {
          company_name: "",
          reference: "",
          minimum: "",
          maximum: "",
          status_id: "",
          date_from: "",
          date_to: "",
          payment_type_id: 1,
          type_id: this.receipt.type_id,
        },
      }).then((response) => (this.bills = response.data.data));
    },
    personInfo() {
      return (
        this.people &&
        this.people.find((elem) => elem.id == this.receipt.person_id)
      );
    },
    checkExicting() {},
    submit() {
      /* remove zero amount or not account methods */
      // this.bill.payment_methods = this.bill.payment_methods.filter(
      //   (elem) => elem.account_id != "" && elem.credit != 0
      // );

      Receipt.store(this.receipt).then((response) =>
        console.log(response.data)
      );
    },
    createPage(to, status) {
      this.route = to.fullPath.substr(
        this.$route.fullPath.lastIndexOf("/") + 1
      );

      if (this.route == "supplier") {
        this.title = "سند مورد جديد";
        this.person_type = "supplier";
        this.person_info = "معلومات المورد";
        this.persona = "المورد";
        this.receipt.type_id = 1;
        
      }
      if (this.route == "customer") {
        this.title = "سند عميل جديد";
        this.person_type = "customers";
        this.person_info = "معلومات العميل";
        this.persona = "العميل";
        this.receipt.type_id = 2;
        
      }
      
      Receipt.create({ type_id: this.receipt.type_id }).then((response) => {
        this.people = response.data.people;
        this.from_accounts = response.data.accounts.accounts;
      });
    },
  },
  watch: {
    $route(to, from) {
      this.createPage(to, "old");
    },
  },
  created() {
    this.route = this.$route.fullPath.substr(
      this.$route.fullPath.lastIndexOf("/") + 1
    );

    this.createPage(this.$route, "new");
  },
};
</script>

<style scoped>
.v-card__title {
  padding: 2px;
  padding-right: 20px;
}
</style>