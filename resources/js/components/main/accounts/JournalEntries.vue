<template>
  <div>
    <v-row>
      <v-col style="height: 10px">
        <v-progress-linear
          v-model="value"
          :active="show"
          :indeterminate="query"
          :query="true"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <v-row>
      <v-toolbar flat color="white">
        <v-toolbar-title>دفتر القيود اليومية</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <v-btn primary @click.stop="showDialog()"> إضافة وحدة </v-btn>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-row>
    <div style="height: 10px"></div>
    <v-row
      v-for="document in documents"
      :key="document.accounts[0].id"
      class="ma-2"
      style="font-size: small; border: 1px solid lightgrey"
    >
      <v-col>
        <v-row style="background: #ffeaf5; border-bottom: 1px solid lightgrey">
          <v-col> {{ document.name }} رقم: {{ document.id }} </v-col>
          <v-col> تاريخ الفاتورة: {{ document.date }} </v-col>
        </v-row>
        <v-row style="background: #ffeae0">
          <v-col>الحساب</v-col>
          <v-col>التفصيل</v-col>
          <v-col>مدين</v-col>
          <v-col>دائن</v-col>
        </v-row>
        <v-row
          v-for="account in document.accounts"
          :key="account.id"
          style="background: #eaf3f2"
          class="father-account"
        >
          <v-col
            style="
              text-align: start;
              border-top: 1px solid white;
              border-left: 1px solid white;
            "
            >{{ account.account_code }} - {{ account.ar_name }}</v-col
          >
          <v-col
            style="border-top: 1px solid white; border-left: 1px solid white"
          >
            {{ account.detail }}</v-col
          >
          <v-col
            style="border-top: 1px solid white; border-left: 1px solid white"
          >
            {{ account.debit.toFixed(2) }}</v-col
          >
          <v-col
            style="border-top: 1px solid white; border-left: 1px solid white"
          >
            {{ account.credit.toFixed(2) }}</v-col
          >
        </v-row>
        <v-row>
          <v-col>المجموع</v-col>
          <v-col></v-col>
          <v-col>{{ debit_sum(document).toFixed(2) }}</v-col>
          <v-col>{{ credit_sum(document).toFixed(2) }} </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Account from "../../../apis/Account";
export default {
  data() {
    return {
      value: 0,
      query: true,
      show: true,

      documents: [
        {
          name: "",
          date: "",
          accounts: [{ ar_name: "", detail: "", debit: 0, credit: 0 }],
        },
      ],
    };
  },
  methods: {
    debit_sum(document) {
      let sum_of_debits = 0;
      document.accounts.forEach((element) => {
        sum_of_debits += +element.debit;
      });
      return sum_of_debits;
    },
    credit_sum(document) {
      let sum_of_credits = 0;
      document.accounts.forEach((element) => {
        sum_of_credits += +element.credit;
      });
      return sum_of_credits;
    },
  },
  created() {
    Account.getJurnalEntries().then((response) => {
      this.documents = response.data;
      this.query = false;
      this.show = false;
    });
  },
};
</script>

<style>
</style>