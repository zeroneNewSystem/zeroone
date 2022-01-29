<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="receipts"
      :options.sync="options"
      :server-items-length="receipts_total"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-btn
            elevation
            color="primary"
            to="/receipt"
            link
            >سند جديد</v-btn
          >
        </v-toolbar>

        <v-row>
          <v-col cols="12" lg="2">
            <v-text-field
              v-model="search.company_name"
              label="اسم المورد"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="2">
            <v-text-field
              v-model="search.receipt_reference"
              label="رقم المرجع"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="2">
            <v-autocomplete
              class="receipt-info"
              autocomplete="off"
              v-model="search.type_id"
              :items="types"
              item-text="ar_name"
              item-value="id"
              label="النوع"
              @blur="checkExicting()"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" lg="2">
            <v-autocomplete
              v-model="search.status_id"
              :items="statuses"
              item-text="ar_name"
              item-value="id"
              label="الحالة"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" lg="2">
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

          <v-col cols="12" lg="2">
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

          <v-col cols="12" lg="6">
            <v-row>
              <v-col cols="2">
                <v-btn elevation color="primary" @click="getReceipts"
                  >البحث</v-btn
                >
              </v-col>
              <v-col cols="2">
                <v-btn elevation color="primary" @click.stop="searchReset"
                  >إعادة تعيين</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </template>

      <template v-slot:item.type="{ item }">
        {{ types.find((elem) => elem.id == item.type_id).ar_name }}
      </template>
      <template v-slot:item.status="{ item }">
        {{ statuses.find((elem) => elem.id == item.status_id).ar_name }}
      </template>
      <template v-slot:item.account="{ item }">
        {{ item.account_code }} - {{ item.ar_name }}
      </template>
      <template v-slot:item.date="{ item }">
        <div style="white-space: nowrap">
          {{ item.date.split(" ")[0] }}
        </div>
      </template>
      <template v-slot:item.unused="{ item }">
        {{ item.amount - item.spentAmount }}
      </template>
      <template v-slot:item.actions="{ item }">
        <router-link :to="'receipts/' + item.id"
          ><v-icon small>mdi-pencil</v-icon></router-link
        > 

        <v-btn icon @click.stop="deleteReceipt(item, 'update')">
          <v-icon small class="outlined font-size-12">mdi-delete</v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>no data!</template>
    </v-data-table>
  </div>
</template>

<script>
import Receipt from "../../../apis/Receipt";
export default {
  data() {
    return {
      menu1: false,
      menu2: false,
      types: [
        { id: 1, ar_name: "صرف" },
        { id: 2, ar_name: "استلام" },
      ],

      statuses: [
        { id: 1, ar_name: "غير مستعمل" },
        { id: 2, ar_name: "مستعمل" },
        { id: 3, ar_name: "مستعمل جزئيا" },
      ],
      search: {
        company_name: "",
        receipt_reference: "",
        type_id: "",
        status_id: "",
        date_from: "",
        date_to: "",
      },
      receipts_total: 10,
      options: "",
      receipts: [],
      headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        { text: "اسم المورد", align: "center", value: "company_name" },
        {
          text: "المرجع",
          align: "center",
          sortable: false,
          value: "receipt_reference",
        },
        { text: "النوع", align: "center", value: "type" },
        { text: "الحساب", align: "center", value: "account" },
        { text: "الوصف", align: "center", value: "description" },
        { text: "التاريخ", align: "center", value: "date" },
        { text: "المبلغ ", align: "center", value: "amount" },
        { text: "المبلغ غير المستخدم ", align: "center", value: "unused" },
        { text: "الحالة ", align: "center", value: "status" },
        { text: "التحكم ", align: "center", value: "actions" },
      ],
    };
  },
  methods: {
    addUpdateReceipt(){

    },
    deleteReceipt(receipt) {
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      Receipt.delete({
        receipt_id: receipt.id,
        page,
        itemsPerPage,
        search: this.search,
      }).then((response) => {
        this.receipts = response.data.data;
        this.receipts_total = response.data.total;
      });
    },
    getReceipts() {
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      Receipt.getAll({
        page,
        itemsPerPage,
        search: this.search,
      }).then((response) => {
        this.receipts = response.data.data;
        this.receipts_total = response.data.total;
      });
    },
    searchReset() {},
  },

  computed: {
    params(nv) {
      return {
        ...this.options,
      };
    },
  },
  watch: {
    params: {
      handler() {
        this.getReceipts();
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>