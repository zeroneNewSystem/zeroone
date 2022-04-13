<template>
  <div>
    <v-snackbar
      v-model="snackbar"
      :timeout="snackbarTimeout"
      color="#e91e63"
      centered
      transition="scale-transition"
      vertical
      >{{ snackbarText }}</v-snackbar
    >
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
      <v-col>
        <v-toolbar flat color="white">
          <v-toolbar-title>{{ title }} </v-toolbar-title>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" lg="5">
          <v-row>
            <v-col cols="12" class="pa-0">
              <v-autocomplete
                :disabled="from_account_disabled"
                flat
                outlined
                no-data
                no-data-text
                non-linear
                v-model="money_move.from_account_id"
                :items="from_accounts"
                :item-text="(item) => item.account_code + ' - ' + item.ar_name"
                item-value="id"
                prefix=" من حساب | "
              >
              </v-autocomplete>
            </v-col>
            <v-col cols="12" class="pa-0">
              <v-autocomplete
                flat
                outlined
                no-data
                no-data-text
                non-linear
                v-model="money_move.to_account_id"
                :items="to_accounts"
                :item-text="(item) => item.account_code + ' - ' + item.ar_name"
                item-value="id"
                prefix=" إلى حساب | "
              >
              </v-autocomplete>
            </v-col>
            <v-col cols="12" class="pa-0">
              <v-text-field
                type="number"
                v-model="money_move.amount"
                prefix=" القيمة | "
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-0">
              <v-menu
                ref="issue_date"
                v-model="date_is_down"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="money_move.created_at"
                    flat
                    outlined
                    autocomplete="off"
                    hide-no-data
                    prefix="  التاريخ | "
                    v-bind="attrs"
                    v-on="on"
                    @keydown.enter="date_is_down = false"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="money_move.created_at"
                  no-title
                  @input="date_is_down = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" class="pa-0">
              <v-textarea
                rows="3"
                v-model="money_move.description"
                outlined
                prefix=" الوصف | "
              ></v-textarea>
            </v-col>
            <v-col cols="12" class="pa-0">
              <v-btn
                class="btn btn-info m-b-5 m-r-2 white--text"
                color="text--white"
                text
                @click="submit()"
              >
                <v-icon class="white--text">mdi-plus-box</v-icon> حفظ
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Account from "../../../apis/Account";
export default {
  data() {
    return {
      value: 0,
      query: false,
      show: true,
      interval: 0,
      from_account_disabled: false,
      //-------------
      snackbar: false,
      snackbarText: "تأكد من تعبئة الحقول",
      snackbarTimeout: 2000,
      //-------------
      date_is_down: false,
      from_accounts: [],
      to_accounts: [],

      money_move: {
        type_id: 1,
        from_account_id: "",
        to_account_id: "",
        document_type_id: -1,

        created_at: "",
      },
      title: "حركة الأموال",
    };
  },
  methods: {
    submit() {
      Account.moneyMoveStore(this.money_move).then((response) => {
        this.snackbar = true;
      });
    },
    createPage(to, status) {
      this.query = true;
      this.show = true;

      let from_account_type = "11";
      let to_account_type = "11";
      this.route = to.fullPath.replace(/^\/([^\/]*).*$/, "$1");

      console.log(this.route);
      console.log("to");

      if (this.route == "money_moves") {
        this.money_move.document_type_id = -1;
        from_account_type = "11";
        to_account_type = "11";

        this.title = "حركة أموال";
      }
      if (this.route == "additional_money") {
        this.money_move.document_type_id = -2;
        from_account_type = "3";
        to_account_type = "11";
        this.title = "إضافة إلى رأس المال";
      }
      if (this.route == "fixed_asset_depreciation") {
        this.money_move.document_type_id = -3;
        from_account_type = "12";
        to_account_type = "52";
        this.title = "إهلاك أصل ثابت";
      }
      if (this.route == "owner_withdraw") {
        from_account_type = "1";
        to_account_type = "3";
        this.money_move.document_type_id = -4;

        this.title = "سحب المالك";
      }
      if (this.route == "distribute_profits") {
        from_account_type = "34";
        to_account_type = "3";
        this.money_move.document_type_id = -5;

        this.title = "توزيع الأرباح";
      }

      Account.moneyMoveCreate({
        [from_account_type]: from_account_type,
        [to_account_type]: to_account_type,
      }).then((response) => {
        this.from_accounts = response.data[from_account_type];
        this.to_accounts = response.data[to_account_type];

        this.from_account_disabled = false;
        if (this.route == "distribute_profits") {
          this.from_accounts = this.from_accounts.find(
            (elem) => elem.account_code == "3402"
          );
          this.money_move.from_account_id = 50;
          this.from_account_disabled = true;

          this.to_accounts = this.to_accounts.filter(
            (elem) => elem.account_code != "3402"
          );
        }
        this.query = false;
        this.show = false;
      });
    },
  },
  created() {
    this.createPage(this.$route, "new");
  },
  watch: {
    $route(to, from) {
      console.log("from");
      console.log(to);
      this.createPage(to, "old");
    },
  },
};
</script>

<style>
</style>