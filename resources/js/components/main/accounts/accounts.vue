<template>
  <div>
    <update-account
      :dialog="update_account_dialog"
      :updated_account="updated_account"
    ></update-account>
    <show-account :dialog="show_account_dialog"></show-account>

    <v-data-table
      :loading="this.$store.state.accountsVDTloading"
      disable-pagination
      hide-default-footer
      :headers="accounts_header"
      :items="this.$store.state.accounts"
      item-key="id"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-divider class="mx-4" inset vertical></v-divider>
          <add-new-account></add-new-account>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:item.ar_name="{ item }">
        <div :style="computed_margin(item)">
          {{ item.account_id + "- " + item.ar_name }}
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
              @click.stop="updateAccountDialog(item)"
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
            <v-btn icon to="/home" v-if="canBeDeleted(item)">
              <v-icon v-bind="attrs" v-on="on" class="outlined font-size-12"
                >mdi-delete</v-icon
              ></v-btn
            >
          </template>
          <span style="font-size: 10px">حذف الحساب </span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon to="/home" v-if="canBeArchived(item)">
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
import ShowAccount from "./ShowAccount";
import { mapActions } from "vuex";
export default {
  components: {
    AddNewAccount,
    UpdateAccount,
    ShowAccount,
  },
  data() {
    return {
      updated_account: "",
      progress: true,
      update_account_dialog: false,
      show_account_dialog: false,
      computedk: "margin-right:20px",
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
    ...mapActions(["load_accounts", "load_account_types"]),
    updateAccountDialog(item) {
      this.update_account_dialog = true;
      this.updated_account = item;
    },

    hasChild(item) {
      item = item.toString();

      this.accounts.forEach((element) => {});

      return false;
    },

    canBeBranched(item) {
      if (Math.ceil(Math.log10(item.account_id + 1)) >= 6) return false;
      if (this.hasChild(item)) return false;
      return true;
    },
    canBeModefied(item) {
      if (Math.ceil(Math.log10(item.account_id + 1)) <= 2) return false;

      return true;
    },
    canBeDeleted(item) {
      if (Math.ceil(Math.log10(item.account_id + 1)) <= 3) return false;

      return true;
    },
    canBeArchived(item) {
      if (Math.ceil(Math.log10(item.account_id + 1)) <= 2) return false;
      if (this.canBeDeleted(item)) return false;

      return true;
    },

    computed_margin(item) {
      return (
        //"margin-right:" + Math.ceil(Math.log10(item.account_id + 1)) * 10 + "px"
        "margin-right:" + item.level  * 10 + "px"
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