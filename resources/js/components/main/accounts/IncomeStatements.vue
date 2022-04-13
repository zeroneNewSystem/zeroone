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
        <v-row style="font-size: small">
          <v-col>
            <v-menu
              v-model="menu1"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="search.date_from"
                  label="من تاريخ"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="search.date_from"
                no-title
                @input="menu1 = false"
              ></v-date-picker> </v-menu
          ></v-col>

          <v-col>
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="search.date_to"
                  label="إلى تاريخ"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                no-title
                v-model="search.date_to"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col>
            <v-btn
              primary
              elevation
              color="primary"
              @click.stop="getIncomeStatements()"
            >
              بحث
            </v-btn>
          </v-col>
          <v-col>
            <v-btn elevation color="primary" @click.stop="searchReset"
              >إعادة تعيين</v-btn
            >
          </v-col>
        </v-row>

        <v-spacer></v-spacer>
      </v-toolbar>
    </v-row>
    <div style="height: 10px"></div>
    <v-row class="ma-2" style="font-size: small; border: 1px solid lightgrey">
      <v-col>
        <v-row style="background: #ffeae0">
          <v-col>الحساب</v-col>

          <v-col>مدين</v-col>
          <v-col>دائن</v-col>
          <v-col>صافي الحركة</v-col>
        </v-row>

        <v-row
          v-for="account in accounts"
          :key="account.id"
          style="background: #eaf3f2; height: 35px"
          class="father-account"
        >
          <v-col
            style="
              text-align: start;
              border-top: 1px solid white;
              border-left: 1px solid white;
            "
          >
            <div :style="computed_margin(account)">
              {{ account.account_code }} - {{ account.ar_name }}
            </div>
          </v-col>

          
          <v-col
            style="border-top: 1px solid white; border-left: 1px solid white"
          >
            {{
              Math.abs(
                +(!("parent_id" in account) ? account.debit.toFixed(2) : "") -
                  +(!("parent_id" in account) ? account.credit.toFixed(2) : "")
              )
            }}</v-col
          >
        </v-row>

        <v-row>
          <v-col>الربح</v-col>
          
          <v-col>{{ Math.abs(debit_sum().toFixed(2) - credit_sum().toFixed(2)) }}</v-col>
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
      menu1: false,
      menu2: false,
      search: {
        date_from: "",
        date_to: "",
      },
      value: 0,
      query: true,
      show: true,
      accounts: [],
      documents: [
        {
          name: "",
          date: "",
          accounts: [{ ar_name: "", detail: "", debit: "", credit: "" }],
        },
      ],
    };
  },
  methods: {
    getIncomeStatements() {
      Account.getIncomeStatements(this.search).then((response) => {
        this.query = false;
        this.show = false;
        console.log(response.data);
        console.log("response");
        this.accounts = response.data;
      });
    },
    searchReset() {
      this.search.date_from = "";
      this.search.date_to = "";
      this.search.date_from = "";
      Account.getIncomeStatements(this.search).then((response) => {
        this.query = false;
        this.show = false;
        this.accounts = response.data;
      });
    },
    summed_accounts() {
      let acc = [];
      this.accounts.forEach((elem) => {
        if (elem["debit"]) {
        }
      });
    },
    computed_margin(item) {
      return (
        "margin-right:" +
        Math.ceil(Math.log10(item.account_code + 1)) * 10 +
        "px"
        //"margin-right:" + item.level * 10 + "px"
      );
    },
    debit_sum() {
      let sum_of_debits = 0;
      console.log("this.accounts");
      console.log(this.accounts);
      this.accounts.forEach((element) => {
        if (element.debit) sum_of_debits += +element.debit;
      });
      return sum_of_debits;
    },
    credit_sum() {
      let sum_of_credits = 0;
      this.accounts.forEach((element) => {
        if (element.credit) sum_of_credits += +element.credit;
      });
      return sum_of_credits;
    },
  },
  created() {
    this.getIncomeStatements();
  },
};
</script>

<style>
.v-label {
  font-size: small !important;
}
</style>