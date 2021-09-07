<template>
  <div>
    <add-update-account
      :dialog="add_update_account_dialog"
      :account="passed_account"
      :account_types="account_types"
      :operation="operation"
    ></add-update-account>

    <show-account :dialog="show_account_dialog"></show-account>

    <v-data-table
      :loading="this.$store.state.accountsVDTloading"
      :headers="accounts_header"
      :items="this.$store.state.accounts"
      item-key="id"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-text-field
            v-model="search"
            label="ادخل معلومات الحساب"
            class="mx-4"
          ></v-text-field>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-btn color="primary" dark @click.stop="addUpdateAccount('', 'add')">
            إضافة حساب
          </v-btn>

          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:item.ar_name="{ item }">
        <div :style="computed_margin(item)">
          {{ item.account_code + "- " + item.ar_name }}
        </div>
      </template>
      <template v-slot:item.type_id="{ item }">
        {{ item.type && item.type.ar_name }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon to="/home" v-if="canBeBranched(item)">
              <v-icon v-bind="attrs" v-on="on" class="outlined font-size-12"
                >mdi-plus</v-icon
              >
            </v-btn>
          </template>
          <span style="font-size: 10px">إضافة حساب فرعي</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon @click.stop="show_account_dialog = true">
              <v-icon v-bind="attrs" v-on="on" class="outlined font-size-12"
                >mdi-eye</v-icon
              >
            </v-btn>
          </template>
          <span style="font-size: 10px">عرض التفاصيل</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              @click.stop="addUpdateAccount(item, 'update')"
              v-if="canBeModefied(item)"
            >
              <v-icon v-bind="attrs" v-on="on" class="outlined font-size-12"
                >mdi-pencil</v-icon
              ></v-btn
            >
          </template>
          <span style="font-size: 10px">تعديل الحساب</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-if="canBeDeleted(item)" @click="deleteAccount(item)">
              <v-icon v-bind="attrs" v-on="on" class="outlined font-size-12"
                >mdi-delete</v-icon
              ></v-btn
            >
          </template>
          <span style="font-size: 10px">حذف الحساب </span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-if="canBeArchived(item)"
              @click="archiveAccount(item)"
            >
              <v-icon v-bind="attrs" v-on="on" class="outlined font-size-12"
                >mdi-archive</v-icon
              ></v-btn
            >
          </template>
          <span style="font-size: 10px">أرشفة الحساب</span>
        </v-tooltip>
      </template>
      <template v-slot:item.payable_receivable="{ item }">
        <v-icon v-if="item.payable_receivable" small>mdi-check</v-icon>

        <v-icon small v-else>mdi-close</v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Account from "../../../apis/Account";
import AddNewAccount from "./AddNewAccount";
import UpdateAccount from "./UpdateAccount";
import AddUpdateAccount from "./AddUpdateAccount";
import ShowAccount from "./ShowAccount";
import { mapActions } from "vuex";
export default {
  components: {
    AddNewAccount,
    UpdateAccount,
    AddUpdateAccount,
    ShowAccount,
  },
  data() {
    return {
      search: "",
      updated_account: "",
      account_types: [],
      operation: "add",
      progress: true,
      add_update_account_dialog: false,
      update_account_dialog: false,
      show_account_dialog: false,
      computedk: "margin-right:20px",
      passed_account: {
        parent_id: "",
        type_id: "",
        ar_name: "",
        en_name: "",
        account_code: "",
        description: "",
      },
      accounts: [],

      accounts_header: [
        {
          text: " اسم الحساب ",
          align: "right",
          sortable: false,
          value: "ar_name",
        },

        {
          text: "نوع الحساب",
          align: "right",
          sortable: false,
          value: "type_id",
        },
        {
          text: "الوصف",
          align: "center",
          sortable: false,
          value: "description",
        },
        {
          text: "قابلية الدفع والتحصيل بالحساب",
          align: "center",
          sortable: false,
          value: "payable_receivable",
        },
        {
          text: "الخيارات",
          align: "right",
          sortable: false,
          value: "actions",
          width: 110,
        },
      ],
    };
  },
  created() {
    // Account.types().then((response) => {
    //   this.account_types = response.data.accounts;
    // });

    //  Account.get().then((response) => {
    //   this.accounts = response.data.accounts;
    // });

    if (this.$store.state.accounts.length <= 0) {
      this.load_accounts();
      this.load_account_types();
    }
  },

  methods: {
    ...mapActions([
      "load_accounts",
      "load_account_types",
      "delete_account",
      "archive_account",
    ]),

    addUpdateAccount(item, operation) {
      this.operation = operation;
      this.passed_account = {
        parent_id: "",
        type_id: "",
        ar_name: "",
        en_name: "",
        account_code: "",
        description: "",
      };
      if (operation == "update") {
        this.passed_account = item;

        let parent = this.$store.state.accounts.find(
          (elem) => elem.id == item.parent_id
        );

        let parent_type_code = this.$store.state.account_types.find(
          (elem) => elem.id == parent.type_id
        ).type_code;
        console.log(parent_type_code);

        this.account_types = this.$store.state.account_types.filter((elem) => {
          let length = 2;

          if (parent?.level >= 2) {
            length = 4;
          }
          //alert(length);
          return (
            elem.type_code.toString().startsWith(parent_type_code.toString()) &&
            elem.type_code.toString().length == length
          );
        });
      }

      this.add_update_account_dialog = true;
    },
    deleteAccount(item) {
      this.delete_account(item);
    },
    archiveAccount(item) {
      this.archive_account(item);
    },

    updateAccountDialog(item) {
      console.log(item);
      this.update_account_dialog = true;
      this.updated_account = item;
    },

    hasChild(item) {
      return this.$store.state.accounts.find(
        (element) => element.parent_id == item.id
      );
    },

    canBeBranched(item) {
      if (Math.ceil(Math.log10(item.account_code + 1)) >= 6) return false;

      return true;
    },
    canBeModefied(item) {
      if (item.level <= 2) return false;

      return true;
    },
    canBeDeleted(item) {
      if (this.hasChild(item)) return false;
      if (Math.ceil(Math.log10(item.account_code + 1)) <= 3) return false;

      return true;
    },
    canBeArchived(item) {
      if (this.hasChild(item)) return false;
      if (Math.ceil(Math.log10(item.account_code + 1)) <= 2) return false;
      if (this.canBeDeleted(item)) return false;

      return true;
    },

    computed_margin(item) {
      return (
        //"margin-right:" + Math.ceil(Math.log10(item.account_code + 1)) * 10 + "px"
        "margin-right:" + item.level * 10 + "px"
      );
    },
  },
};
</script>

<style scoped>
.v-btn--icon.v-size--default {
  height: 28px;
  width: 21px;
}
.v-icon.outlined {
  border: 1px solid rgb(201, 201, 201);
  border-radius: 3px;
  padding: 2px;
}
.v-icon.font-size-12 {
  font-size: 12px;
}
.v-btn::before {
  background-color: transparent;
}
</style>