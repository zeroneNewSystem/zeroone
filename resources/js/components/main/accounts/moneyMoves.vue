<template>
  <div style="margin-top: 20px">
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card :loading="isloading">
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row class="justify-center">
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
                      :item-text="
                        (item) => item.account_code + ' - ' + item.ar_name
                      "
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
                      :item-text="
                        (item) => item.account_code + ' - ' + item.ar_name
                      "
                      item-value="id"
                      prefix=" إلى حساب | "
                      @change="changeToAccount"
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
                          v-model="money_move.created_at.split(' ')[0]"
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
                  <v-col cols="12" class="pa-0"> </v-col>
                </v-row>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              الغاء
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveMoneyMove">
              حفظ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-data-table
      :headers="money_moves_header"
      :items="money_moves"
      item-key="id"
      :search="search"
      :loading="table_loading"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>قيود التحويلات أو الحركات المالية</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-btn primary @click.stop="showDialog()"> إضافة وحدة </v-btn>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-text-field
          v-model="search"
          label="ادخل معلومات الوحدة"
          class="mx-4"
        ></v-text-field>
      </template>

      <template v-slot:item.created_at="{ item }">
        <div style="white-space: nowrap">
          {{ item.created_at.split(" ")[0] }}
        </div>
      </template>
      <template v-slot:item.to_account_id="{ item }">
        <div style="white-space: nowrap">
          {{ item.to_account_code + " - " + item.to_account_ar_name }}
        </div>
      </template>
      <template v-slot:item.from_account_id="{ item }">
        <div style="white-space: nowrap">
          {{ item.from_account_code + " - " + item.from_account_ar_name }}
        </div>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-if="canBeDeleted(item)" @click="deleteMove(item)">
              <v-icon v-bind="attrs" v-on="on" class="outlined font-size-12"
                >mdi-delete</v-icon
              >
            </v-btn>
          </template>
          <span style="font-size: 10px">إضافة حساب فرعي</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              @click.stop="showDialog(item)"
              v-if="canBeModefied(item)"
            >
              <v-icon v-bind="attrs" v-on="on" class="outlined font-size-12"
                >mdi-pencil</v-icon
              ></v-btn
            >
          </template>
          <span style="font-size: 10px">تعديل الحساب</span>
        </v-tooltip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Account from "../../../apis/Account";
export default {
  data() {
    return {
      accounts: {
        11: "",
        3: "",
        12: "",
        34: "",
        52: "",
      },

      from_account_disabled: false,
      date_is_down: false,
      from_accounts: [],
      to_accounts: [],
      money_move: {
        type_id: 1,
        from_account_id: "",
        from_account_code: "",
        from_account_ar_name: "",

        to_account_id: "",
        to_account_code: "",
        to_account_ar_name: "",
        document_type_id: 1,
        document_id: "",
        created_at: "",
      },
      money_moves: [],
      money_moves_header: [
        {
          text: " من ",
          align: "center",
          sortable: false,
          value: "from_account_id",
        },

        {
          text: "إلى ",
          align: "center",
          sortable: false,
          value: "to_account_id",
        },

        {
          text: "الوصف",
          align: "center",
          sortable: false,
          value: "description",
        },
        {
          text: "التاريخ",
          align: "center",
          sortable: false,
          value: "created_at",
        },
        {
          text: "القيمة",
          align: "center",
          sortable: false,
          value: "amount",
        },
        {
          text: "الوصف",
          align: "center",
          sortable: false,
          value: "actions",
        },
      ],
      /*-------------------validators---------------------------*/
      vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
      vld_selected: [(v) => v > 0 || "أدخل قيمة"],
      required: [(value) => !!value || "الحقل مطلوب."],
      isunique: [],
      is_exists: [],
      is_valid_date: [],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],
      vld_match: [true],

      table_loading: false,
      isloading: false,
      operation: "add",
      dialog: false,
      search: "",
    };
  },
  methods: {
    changeFromAccount(from_account_id) {
      let from_account = this.from_accounts.find(
        (elem) => elem.id == from_account_id
      );

      console.log("from_account");
      console.log(from_account);
      this.money_move.from_account_code = from_account["account_code"];
      this.money_move.from_account_ar_name = from_account["ar_name"];

      console.log(this.money_move);
    },
    changeToAccount(to_account_id) {
      let to_account = this.to_accounts.find(
        (elem) => elem.id == to_account_id
      );

      console.log("to_account");
      console.log(to_account);
      this.money_move.to_account_code = to_account["account_code"];
      this.money_move.to_account_ar_name = to_account["ar_name"];

      console.log(this.money_move);
    },
    deleteMove(item) {
      Account.moneyMoveDelete(item.document_id).then((response) => {
        let index = this.money_moves.indexOf(item);
        this.money_moves.splice(index, 1);
      });
    },
    saveMoneyMove() {
      this.isloading = true;
      Account.moneyMoveUpdate(this.money_move).then((response) => {
        this.isloading = false;
        let index = this.money_moves.findIndex(
          (elem) => elem.document_id == this.money_move.document_id
        );

        console.log(index);
        this.money_moves.splice(index, 1, this.money_move);

        this.dialog = false;
      });
    },
    showDialog(item) {
      
      let from_account_type = "11";
      let to_account_type = "11";

      if (item.document_type_id == -1) {
        from_account_type = "11";
        to_account_type = "11";
      }
      if (item.document_type_id == -2) {
        from_account_type = "3";
        to_account_type = "11";
      }
      if (item.document_type_id == -3) {
        from_account_type = "12";
        to_account_type = "52";
      }
      if (item.document_type_id == -4) {
        from_account_type = "1";
        to_account_type = "3";
      }
      if (item.document_type_id == -5) {
        from_account_type = "34";
        to_account_type = "3";
      }

      this.money_move = JSON.parse(JSON.stringify(item));

      this.dialog = true;
      this.from_accounts = this.accounts[from_account_type];
      console.log('sdsdsdsd');
      console.log(this.from_accounts);
      
      this.to_accounts = this.accounts[to_account_type];

      this.from_account_disabled = false;
      if (item.document_type_id == -5) {
        this.from_accounts = this.accounts[from_account_type].filter(
          (elem) => elem.account_code == "3402"
        );
        this.money_move.from_account_id = 50;
        this.from_account_disabled = true;

        this.to_accounts = this.accounts[to_account_type].filter(
          (elem) => elem.account_code != "3402"
        );
      }

      
    },

    canBeModefied(item) {
      return true;
    },
    canBeDeleted(item) {
      return true;
    },
    deleteUnit(item) {
      this.table_loading = true;
      Unit.delete(item.id).then((response) => {
        this.table_loading = false;
        this.units = response.data.units;
      });
    },
  },

  created() {
    //for (var account in this.accounts)
    this.isloading = true;
    Account.moneyMoveCreate(this.accounts).then((response) => {
      this.accounts = response.data;
      this.isloading = false;
      console.log(this.accounts);
    });

    this.table_loading = true;

    let arr = [];

    Account.getMoneyMoves().then((response) => {
      response.data.forEach((element) => {
        let index = arr.findIndex(
          (elem) => elem.document_id == element.document_id
        );
        if (index == -1) arr.push(element);
        if (index != -1) {
          if ("from_account_id" in element) {
            arr[index].from_account_id = element.from_account_id;
            arr[index].from_account_ar_name = element.from_account_ar_name;
            arr[index].from_account_code = element.from_account_code;
          }
          if ("to_account_id" in element) {
            arr[index].to_account_id = element.to_account_id;
            arr[index].to_account_ar_name = element.to_account_ar_name;
            arr[index].to_account_code = element.to_account_code;
          }
        }
      });
      this.money_moves = arr;
      console.log(arr);
      this.table_loading = false;
      this.units = response.data.units;
    });
  },
};
</script>

<style>
</style>