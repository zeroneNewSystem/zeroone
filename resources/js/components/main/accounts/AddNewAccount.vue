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
              <v-col cols="12">
                <v-autocomplete
                  label="الحساب الرئيسي"
                  v-model="new_account.main_account_id"
                  :items="this.$store.state.accounts"
                  :item-text="(item) => item.account_id + ' ' + item.ar_name"
                  item-value="account_id"
                  @change="changeAccountypes"
                >
                  <template v-slot:item="data">
                    <div
                      :key="account_div_update"
                      :id="'nib' + data.item.account_id"
                      :style="bgblue(data.item) + 'font-size:12px'"
                    >
                      {{ data.item.account_id + " " + data.item.ar_name }}
                    </div>
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col cols="12" lg="6">
                <v-autocomplete
                  label="نوع الحساب "
                  v-model="new_account.type_id"
                  :items="filteredAccountTypes()"
                  :item-text="(item) => item.type_id + ' - ' + item.ar_name"
                  item-value="type_id"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" lg="6">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump',
                  ]"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    account_types: [],
    account_div_update: 0,
    new_account: {
      main_account_id: "",
    },
    dialog: false,
  }),
  computed: {},
  methods: {
    changeAccountypes() {
      this.account_types = this.$store.state.account_types.filter((elem) => {
        let level = 1;
        console.log(
          Math.ceil(Math.log10(this.new_account.main_account_id + 1))
        );
        if (Math.ceil(Math.log10(this.new_account.main_account_id + 1)) == 2)
          return false;

        //if ()

        return elem.type_id
          .toString()
          .startsWith(this.new_account.main_account_id.toString());
      });
    },

    bgblue(item) {
      if (Math.ceil(Math.log10(item.account_id + 1)) <= 2) {
        $("#nib" + item.account_id)
          .parent()
          .addClass("first-level");
      } else if (Math.ceil(Math.log10(item.account_id + 1)) <= 3) {
        $("#nib" + item.account_id)
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