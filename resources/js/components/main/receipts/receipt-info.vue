<template>
  <div class="pa-4">
    <v-row>
        <v-col cols="12" style="text-align: start; background: #acacac" class="mb-6">
            بيانات السند {{ receipt.receipt_reference }}
        </v-col>
        
      <v-col cols="12" lg="6">
        <v-row>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            الشركة
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            {{ receipt.company_name }}
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            الحساب
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            {{ receipt.ar_name }}
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            رقم المرجع
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            {{ receipt.receipt_reference }}
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            الوصف
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            {{ receipt.description }}
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6">
        <v-row>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            التاريخ
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            {{ receipt.date.split(" ")[0] }}
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            المبلغ
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            {{ receipt.amount }}
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            النوع
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            {{ receipt.type_d == 1 ? "صرف" : "قبض" }}
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            المبلغ غير المستخدم
          </v-col>
          <v-col
            style="text-align: start; font-size: 14px"
            class="pa-1"
            cols="12"
            lg="6"
          >
            {{ receipt.amount - receipt.spentAmount }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row> 
        <v-col cols="12" style="text-align: start" class="mt-6">
        
        تخصيصات السند </v-col></v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="uses_of_receipt"
          :loading="loading"
          class="elevation-1"
        >
          <template v-slot:item.issue_date="{ item }">
            {{ item.issue_date.split(" ")[0] }}
          </template>
          <template v-slot:item.used_for="{ item }"> فاتورة شراء </template>
          <template v-slot:item.receipt_reference="{ item }">
            {{ item.bill_id }}
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn icon @click.stop="deleteReceipt(item)">
              <v-icon small class="outlined font-size-12">mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Receipt from "../../../apis/Receipt";
export default {
  data() {
    return {
      loading: false,
      headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        { text: "التاريخ", align: "center", value: "issue_date" },
        { text: "المخصص له", align: "center", value: "used_for" },
        {
          text: "المرجع",
          align: "center",
          sortable: false,
          value: "receipt_reference",
        },
        { text: "المبلغ ", align: "center", value: "amount" },

        { text: "التحكم ", align: "center", value: "actions" },
      ],
      receipt: {
        company_name: "",
      },
    };
  },
  methods: {
    deleteReceipt(sup_duc) {
      Receipt.deleteSupDoc({
        receipt_id: this.receipt.id,
        id: sup_duc.sup_doc_id,
      }).then((response) => this.DataProcessing(response));
    },
    DataProcessing(response) {
      this.receipt = response.data;
      this.uses_of_receipt = response.data.uses_of_receipt;
    },
  },
  created() {
    if (this.$route.params.id) {
      Receipt.getOne(this.$route.params.id).then((response) => {
        if (response.data.code == 20) return
        
        this.DataProcessing(response);
      });
    }
  },
};
</script>

<style>
</style>