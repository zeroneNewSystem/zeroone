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
            <v-btn color="blue darken-1" text @click="saveSupplier()">
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
                label="اسم المورد *"
                v-model="supplier.name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="supplier.company_name"
                label="اسم الشركة*"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" lg="6">
              <v-autocomplete
                v-model="supplier.country_id"
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
                v-model="supplier.city_id"
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
                v-model="supplier.address"
                label="العنوان"
                required
              ></v-textarea>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="supplier.phone01"
                label="رقم الاتصال الأساسي"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" lg="6">
              <v-text-field
                v-model="supplier.phone02"
                label="رقم الاتصال الثانوي"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="supplier.email"
                label="البريد الالكتروني"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="supplier.website"
                label="الموقع الالكتروني"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="supplier.tax_number"
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
                  <v-btn color="blue darken-1" text @click="saveSupplier()">
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
import Supplier from "../../../apis/Supplier";
import Country from "../../../apis/Country";
export default {
  props: ["dialog", "supplier", "cities", "operation"],
  data: () => ({
    isloading: false,
    title: "إضافة مورد جديد",
    countries: [],

    supplier_div_update: 0,
  }),

  created() {
    Country.loadCountries().then(
      (response) => (this.countries = response.data.countries)
    );
  },
  computed: {},
  methods: {
    loadCities() {
      this.$emit("changeCountry", this.supplier.country_id);
    },
    closeDialog() {
      this.$parent.$data.add_update_supplier_dialog = false;
    },
    saveSupplier() {
      console.log(this.operation);
      this.isloading = "blue";
      if (this.operation == "add") {
        Supplier.store(this.supplier).then((response) => {
          this.supplier["id"] = response.data;
          this.$parent.$data.add_update_supplier_dialog = false;
          this.isloading = false;
          this.$emit("AddUpdatePerson", this.supplier);
        });
        return;
      }
      if (this.operation == "update") {
        Supplier.update(this.supplier).then((response) => {
          this.$parent.$data.add_update_supplier_dialog = false;
          this.isloading = false;
          this.$emit("AddUpdatePerson", this.supplier);
        });
        return;
      }
    },
    onParentChange() {
      let parent = this.$store.state.suppliers.find(
        (elem) => elem.id == this.supplier.parent_id
      );

      console.log(parent.type_id);
      let parent_type_code = this.$store.state.supplier_types.find(
        (elem) => elem.id == parent.type_id
      ).type_code;
      console.log(parent_type_code);

      this.supplier.level = parseInt(parent.level + 1);

      this.supplier_types = this.$store.state.supplier_types.filter((elem) => {
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
      if (Math.ceil(Math.log10(item.supplier_code + 1)) <= 2) {
        $("#nib" + item.supplier_code)
          .parent()
          .addClass("first-level");
      } else if (Math.ceil(Math.log10(item.supplier_code + 1)) <= 3) {
        $("#nib" + item.supplier_code)
          .parent()
          .addClass("second-level");
      }
      if (this.supplier_div_update == 0) this.supplier_div_update += 1;
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