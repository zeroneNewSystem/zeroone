<template>
  <v-dialog v-model="dialog" max-width="800px" persistent>
    <v-card :loading="isloading">
      <v-card-title>
        <v-row>
          <v-col> {{ title }}</v-col>
          <v-col style="text-align: end">
            <v-btn color="blue darken-1" text @click="closeDialog()">
              إلغاء
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveCustomer()">
              حفظ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" lg="6">
              <v-text-field
                label="اسم العميل *"
                v-model="customer.name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="customer.company_name"
                label="اسم الشركة*"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" lg="6">
              <v-autocomplete
                v-model="customer.country_id"
                :items="countries"
                item-text="en_name"
                item-value="id"
                prefix="البلد |"
                autocomplete="off"
                @change="loadCities"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" lg="6">
              <v-autocomplete
                v-model="customer.city_id"
                :items="cities"
                item-text="en_name"
                item-value="id"
                prefix="المدينة |"
                autocomplete="off"
              ></v-autocomplete>
            </v-col>

            <v-col cols="12">
              <v-textarea
                rows="2"
                v-model="customer.address"
                label="العنوان"
                required
              ></v-textarea>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="customer.phone01"
                label="رقم الاتصال الأساسي"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" lg="6">
              <v-text-field
                v-model="customer.phone02"
                label="رقم الاتصال الثانوي"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="customer.email"
                label="البريد الالكتروني"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="customer.website"
                label="الموقع الالكتروني"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="customer.tax_number"
                label="الرقم الضريبي"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-row>
                
                <v-col style="text-align: end">
                  <v-btn color="blue darken-1" text @click="closeDialog()">
                    إلغاء
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="saveCustomer()">
                    حفظ
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import Customer from "../../../apis/Customer";
import Country from "../../../apis/Country";
export default {
  props: ["dialog", "customer", "cities", "operation"],
  data: () => ({
    isloading: false,
    title: "إضافة عميل جديد",
    countries: [],

    customer_div_update: 0,
  }),

  created() {
    Country.loadCountries().then(
      (response) => (this.countries = response.data.countries)
    );
  },
  computed: {},
  methods: {
    loadCities() {
      this.$emit("changeCountry", this.customer.country_id);
    },
    closeDialog() {
      this.$parent.$data.add_update_customer_dialog = false;
    },
    saveCustomer() {
      console.log(this.operation);
      this.isloading = "blue";
      if (this.operation == "add") {
        Customer.store(this.customer).then((response) => {
          this.customer["id"] = response.data;
          this.$parent.$data.add_update_customer_dialog = false;
          this.isloading = false;
          this.$emit("addUpdateCustomer", this.customer);
        });
        return;
      }
      if (this.operation == "update") {
        Customer.update(this.customer).then((response) => {
          this.$parent.$data.add_update_customer_dialog = false;
          this.isloading = false;
          this.$emit("addUpdateCustomer", this.customer);
        });
        return;
      }
    },
    onParentChange() {
      let parent = this.$store.state.customers.find(
        (elem) => elem.id == this.customer.parent_id
      );

      console.log(parent.type_id);
      let parent_type_code = this.$store.state.customer_types.find(
        (elem) => elem.id == parent.type_id
      ).type_code;
      console.log(parent_type_code);

      this.customer.level = parseInt(parent.level + 1);

      this.customer_types = this.$store.state.customer_types.filter((elem) => {
        let length = 2;

        if (parent.level >= 2) {
          length = 4;
        }
        //alert(length);
        return (
          elem.type_code.toString().startsWith(parent_type_code.toString()) &&
          elem.type_code.toString().length == length
        );
      });
    },

    bgblue(item) {
      if (Math.ceil(Math.log10(item.customer_code + 1)) <= 2) {
        $("#nib" + item.customer_code)
          .parent()
          .addClass("first-level");
      } else if (Math.ceil(Math.log10(item.customer_code + 1)) <= 3) {
        $("#nib" + item.customer_code)
          .parent()
          .addClass("second-level");
      }
      if (this.customer_div_update == 0) this.customer_div_update += 1;
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