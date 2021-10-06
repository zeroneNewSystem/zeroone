<template>
  <div style="padding: 20px">
    <v-row>
      <v-col cols="12" lg="6">
        <v-row
          style="
            font-size: 14px;
            border: 1px solid #bababa;
            border-radius: 5px;
            padding: 10px;
          "
        >
          <v-col cols="3" style="text-align: start" class="pa-0"> الاسم </v-col>
          <v-col cols="9" style="text-align: start" class="pa-0">
            {{ supplier.name }}
          </v-col>
          <v-col cols="3" style="text-align: start" class="pa-0">
            الشركة
          </v-col>
          <v-col cols="9" style="text-align: start" class="pa-0">
            {{ supplier.compnay_name }}
          </v-col>
          <v-col cols="3" style="text-align: start" class="pa-0">
            رقم الاتصال
          </v-col>
          <v-col cols="9" style="text-align: start" class="pa-0">
            {{ supplier.phone }}
          </v-col>
          <v-col cols="3" style="text-align: start" class="pa-0">
            البريد الالكتروني
          </v-col>
          <v-col cols="9" style="text-align: start" class="pa-0">
            {{ supplier.email }}
          </v-col>
          <v-col cols="3" style="text-align: start" class="pa-0">
            العنوان
          </v-col>
          <v-col cols="9" style="text-align: start" class="pa-0">
            {{ supplier.address }}
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6"> </v-col>
    </v-row>
    <v-row>
      <v-col>
        {{ total_of_purchases }}
      </v-col>
      <v-col>
        {{ arrears }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Supplier from "../../../apis/Supplier";
export default {
  data() {
    return {
      supplier: "",
      total_of_purchases: 0,
      purchases: [],
      arrears: 0,
    };
  },
  created() {
    if (this.$route.params.id) {
      Supplier.getOne(this.$route.params.id).then((response) => {
        this.supplier = response.data.supplier[0];
        this.purchase_processing(response.data.purchases);
      });
    }
  },
  methods: {
    purchase_processing(purchases) {
      let elper = [];
      if (purchases.length > 0) {
        purchases.forEach((element) => {
          //amount null -> 0
          if (element.amount == null) element.amount = 0;

          if (element.supdoc_id) {
            if (!elper.find((elem) => element.id == elem.id)) {
              elper.push(element);
            } else {
              elper[elper.findIndex((elem) => element.id == elem.id)].amount +=
                element.amount;
            }

            return;
          }
          elper.push(element);
        });
        console.log("elper", elper);

        let x = elper.reduce((a, b) => a + b.total_amount, 0);
        let y = elper.reduce((a, b) => a + b.amount, 0);
        let z = elper.reduce((a, b) => a + b.paid_amount, 0);
        this.arrears = x - y - z;

        this.total_of_purchases = x;
        //ألغاء التكرار

        return x;
      }
      return 0;
    },
  },
};
</script>

<style>
</style>