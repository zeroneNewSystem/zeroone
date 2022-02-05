<template>
  <div>
    <v-dialog v-model="dialog" scrollable max-width="1000px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="0" v-bind="attrs" v-on="on" dark @click="setMethodsIfEmpty">
          طريقة الدفع!..
        </v-btn>
      </template>
      <v-card flat>
        <v-card-text>
          <v-data-table
            :headers="payment_methods_header"
            :items="payment_methods"
            hide-default-footer
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>
                  <v-row class="justify-space-between">
                    <v-col>
                      حدد طريقة الدفع والمبلغ المستلم
                      <v-divider class="mx-4" inset vertical></v-divider>
                    </v-col>
                    <v-col>
                      <v-icon @click="addPaymentMethod"> mdi-plus </v-icon>
                    </v-col>
                  </v-row>
                </v-toolbar-title>

                <v-spacer></v-spacer>
              </v-toolbar>
            </template>
            <template v-slot:item.id="{ item }">
              <div>
                {{ payment_methods.indexOf(item) + 1 }}
              </div>
            </template>
            <template v-slot:item.ar_name="{ item }">
              <v-autocomplete
                v-model="item.account_id"
                :items="accounts"
                item-text="ar_name"
                item-value="id"
                append-icon=""
                outlined
                single-line
              >
              </v-autocomplete>
            </template>
            <template v-slot:item.account_code="{ item }">
              <v-text-field
                autocomplete="off"
                single-line
                outlined
                disabled
                :value="
                  accounts.find((elem) => elem.id == item.account_id) &&
                  accounts.find((elem) => elem.id == item.account_id)[
                    'account_code'
                  ]
                "
              ></v-text-field>
            </template>
            <template v-slot:item.credit="{ item }">
              <v-text-field
                :disabled="item.account_id == 0"
                autocomplete="off"
                :rules="vld_numbering"
                single-line
                outlined
                v-model="item.credit"
              ></v-text-field>
            </template>

            <template v-slot:item.description="{ item }">
              <v-text-field
                autocomplete="off"
                :rules="vld_numbering"
                single-line
                outlined
                v-model="item.description"
              ></v-text-field>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-icon
                color="red"
                small
                style="margin-bottom: 20px"
                @click="deletPaymentMethod(item)"
              >
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:footer>
              <v-row>
                <v-col cols="12" lg="4" style="text-align: center">
                  المطلوب
                </v-col>
                <v-col cols="12" lg="4" style="text-align: center">
                  المدفوع
                </v-col>
                <v-col cols="12" lg="4" style="text-align: center">
                  الباقي
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" lg="4" style="text-align: center">
                  {{ total.toFixed(2) }}
                </v-col>
                <v-col cols="12" lg="4" style="text-align: center">
                  {{ paid_amount.toFixed(2) }}
                </v-col>
                <v-col cols="12" lg="4" style="text-align: center">
                  {{ remaining_amount.toFixed(2) }}
                </v-col>
              </v-row>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            إلغاء
          </v-btn>
          <v-btn color="blue darken-1" text @click="emitPayments()">
            حفظ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["total","accounts","payment_methods"],
  data() {
    return {
      /*-------------------validators---------------------------*/
      vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
      required: [(value) => !!value || "الحقل مطلوب."],
      isunique: [],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],
      dialog: false,
      /*-------------------validators---------------------------*/

      
      
      payment_methods_header: [
        {
          text: "م",
          align: "center",
          width: "10px",
          sortable: false,
          value: "id",
        },
        {
          text: "الدفع عبر...",
          align: "center",
          value: "ar_name",
          sortable: false,
        },
        {
          text: "رقم الحساب",
          align: "center",
          value: "account_code",
          sortable: false,
        },
        { text: " القيمة", align: "center", value: "credit", sortable: false },
        {
          text: "ملاحظات",
          align: "center",
          value: "description",
          sortable: false,
        },
        { text: "تحكم ", align: "center", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    remaining_amount: (v) => v.total - v.paid_amount,
    paid_amount: (v) => v.payment_methods.reduce((a, b) => +a + +b.credit, 0),
  },
  methods: {
    setMethodsIfEmpty(){
      
    },
    addPaymentMethod() {
      this.payment_methods.push({
        account_id: "",
        credit: 0,
        description: "",
      });
    },
    deletPaymentMethod(item) {
      let index = this.payment_methods.indexOf(item);
      this.payment_methods.splice(index, 1);
    },
    emitPayments() {
      

      this.$emit("payment_methods", {
        payment_methods: this.payment_methods,
        paid_amount: this.paid_amount,
      });

      this.dialog = false;
    },
  },
};
</script>

<style>
</style>