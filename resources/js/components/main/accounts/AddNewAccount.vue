<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          إضافة حساب
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" class="pt-0">
                <v-autocomplete
                  label="الحساب الرئيسي"
                  v-model="new_account.parent_id"
                  :items="this.$store.state.accounts"
                  :item-text="(item) => item.account_code + ' ' + item.ar_name"
                  item-value="id"
                  @change="onParentChange"
                >
                  <template v-slot:item="data">
                    <div
                      :key="account_div_update"
                      :id="'nib' + data.item.account_code"
                      :style="bgblue(data.item) + 'font-size:12px'"
                    >
                      {{ data.item.account_code + " " + data.item.ar_name }}
                    </div>
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  label="نوع الحساب "
                  v-model="new_account.type_code"
                  :items="account_types"
                  :item-text="(item) => item.type_code + ' - ' + item.ar_name"
                  item-value="type_code"
                ></v-autocomplete>
              </v-col>
              <v-row class="justify-space-between">
                <v-col cols="12" lg="5">
                  <v-text-field
                    label="اسم الحساب بالعربي*"
                    v-model="new_account.ar_name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="5">
                  <v-text-field
                    v-model="new_account.en_name"
                    label="اسم الحساب بالانجليزي*"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-col cols="12">
                <v-text-field
                  v-model="new_account.account_code"
                  label="رقم الحساب *"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  rows="2"
                  v-model="new_account.description"
                  label="الوصف"
                ></v-textarea>
              </v-col>
              <v-col cols="12" lg="6" class="pa-0 ma-0">
                <v-checkbox
                  v-model="new_account.is_active"
                  style="
                    white-space: nowrap;
                    margin-left: 5px;
                    margin-right: 5px;
                  "
                  color="#e91e63"
                  label="يمكن التحصيل بهذالحساب"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            إلغاء
          </v-btn>
          <v-btn color="blue darken-1" text @click="saveNewAccount()">
            حفظ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import Account from "../../../apis/Account";
export default {
  data: () => ({
    account_types: [],
    account_div_update: 0,
    new_account: {
      parent_id: "",
      account_type_code: "",
      ar_name: "",
      en_name: "",
      account_code: "",
      description: "",
    },
    dialog: false,
  }),
  computed: {},
  methods: {
    saveNewAccount() {
      Account.saveNewAccount(this.new_account).then((this.dialog = false));
      this.load_accounts();
    },
    onParentChange() {
      let parent = this.$store.state.accounts.find((elem) => elem.id == this.new_account.parent_id);
    console.log(parent.type_code);
      this.new_account.level = parseInt(parent.level + 1);

      this.account_types = this.$store.state.account_types.filter((elem) => {
        let length = 2;

        if (parent.level >= 2) {
          length = 4;
        }
        //alert(length);
        return (
          elem.type_code.toString().startsWith(parent.type_code.toString()) &&
          elem.type_code.toString().length == length
        );
      });
    },

    bgblue(item) {
      if (Math.ceil(Math.log10(item.account_code + 1)) <= 2) {
        $("#nib" + item.account_code)
          .parent()
          .addClass("first-level");
      } else if (Math.ceil(Math.log10(item.account_code + 1)) <= 3) {
        $("#nib" + item.account_code)
          .parent()
          .addClass("second-level");
      }
      if (this.account_div_update == 0) this.account_div_update += 1;
      return "";
    },
  },
};
</script>
</script>

<style>
.first-level {
  background: rgb(255, 222, 228);
}
.second-level {
  background: rgb(233, 233, 233);
}
</style>