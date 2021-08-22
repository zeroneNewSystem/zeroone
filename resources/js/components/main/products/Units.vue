<template>
  <div>
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="اسم الوحدة العربي"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="الاختصار العربي"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="اسم الوحدة بالانجليزي"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="الاختصار  بالانجليزي"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="اسم الوحدة بالانجليزي"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="الاختصار  بالانجليزي"></v-text-field>
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

    <v-data-table
      :headers="units_header"
      :items="units"
      item-key="id"
      :search="search"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="ادخل معلومات الوحدة"
          class="mx-4"
        ></v-text-field>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-if="canBeDeleted(item)" @click="deleteUnit(item)">
              <v-icon v-bind="attrs" v-on="on" class="outlined font-size-12"
                >mdi-delete</v-icon
              >
            </v-btn>
          </template>
          <span style="font-size: 10px">إضافة حساب فرعي</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              @click.stop="showDialog(item)"
              v-if="canBeModefied(item)"
            >
              <v-icon v-bind="attrs" v-on="on" class="outlined font-size-12"
                >mdi-pencil</v-icon
              ></v-btn
            >
          </template>
          <span style="font-size: 10px">تعديل الحساب</span>
        </v-tooltip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Unit from "../../../apis/Unit";
export default {
  data() {
    return {
      dialog:false,
      search: "",
      units: [],
      units_header: [
        {
          text: " الاسم العربي ",
          align: "center",
          sortable: false,
          value: "ar_name",
        },

        {
          text: "الاسم الانجليزي ",
          align: "center",
          sortable: false,
          value: "en_name",
        },

        {
          text: "الخيارات",
          align: "center",
          sortable: false,
          value: "actions",
          width: 110,
        },
      ],
    };
  },
  methods: {
    showDialog(item){
      this.dialog = true
    },
    UpdateUnit() {
      Unit.update(item.id).then((response) => {
        this.units = response.data.units;
      });
    },
    canBeModefied(item) {
      return true;
    },
    canBeDeleted(item) {
      return true;
    },
    deleteUnit(item) {
      Unit.delete(item.id).then((response) => {
        this.units = response.data.units;
      });
    },
  },

  created() {
    Unit.getAll().then((response) => {
      this.units = response.data.units;
    });
  },
};
</script>

<style>
</style>