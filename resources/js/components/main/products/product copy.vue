<template>
  <div>
    <v-container fluid>
      <v-form @submit.prevent ref="form">
        <v-row>
          <v-row>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="product.ar_name"
                autocomplete="off"
                label="الاسم العربي"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                color="success"
                v-model="product.en_name"
                autocomplete="off"
                label="الاسم الانجليزي"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                autocomplete="off"
                append-icon="mdi-alpha-g-circle"
                @click:append="toggleMarker"
                v-model="product.serial_number"
                label=" الرقم التسلسلي (اضغط على G لتوليد رقم عشوائي)"
                :rules="vld_minlingth.concat(isunique)"
                @blur="
                  checkExicting({
                    barcode: drugclass.barcode,
                    flag: 'checkdrugclasses',
                  })
                "
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-autocomplete
                v-model="product.groupIDs"
                :disabled="isUpdating"
                :items="groups"
                item-text="name"
                item-value="id"
                label=" مجموعات الصنف اختيار متعدد  "
                multiple
              >
                <template v-slot:selection="data">
                  <v-chip
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="
                      removeSelectedItem(product.selectedGroups, data.item.name)
                    "
                    >{{ data.item.name }}</v-chip
                  >
                </template>
                <template v-slot:item="data">
                  <template v-if="typeof data.item !== 'object'">
                    <v-list-item-content
                      v-text="data.item"
                    ></v-list-item-content>
                  </template>
                  <template v-else>
                    <v-list-item-content>
                      <v-list-item-title
                        v-html="data.item.name"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </template>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /*-----------------------product---------------------------*/
      product: {
        company_id: "",
        ar_name: "",
        en_name: "",
        serial_number: "",
        groupIDs: [],
      },

      /*-------------------------groups---------------------------*/
      isUpdating: false,
      groups: [],

      /*-------------------------units---------------------------*/
      units: [],

      /*-------------------------forms---------------------------*/
      forms: [],

      /*-------------------------validators---------------------------*/
      isunique: [],
      vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
      vld_minlingth: [(v) => v.length >= 2 || "أدخل قيمة"],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],
    };
  },
  methods: {
    toggleMarker() {
      this.product.serial_number = this.generate(12);
    },
    generate(n) {
      var add = 1,
        max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

      if (n > max) {
        return this.generate(max) + this.generate(n - max);
      }

      max = Math.pow(10, n + add);
      var min = max / 10; // Math.pow(10, n) basically
      var number = Math.floor(Math.random() * (max - min + 1)) + min;

      return ("" + number).substring(add);
    },
  },
};
</script>

<style>
</style>