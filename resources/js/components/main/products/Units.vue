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
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="unit.ar_name"
                    label="اسم الوحدة العربي"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="unit.ar_unit_representation"
                    label="الاختصار العربي"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="unit.en_name"
                    label="اسم الوحدة بالانجليزي"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="unit.en_unit_representation"
                    label="الاختصار  بالانجليزي"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              الغاء
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveUnit">
              حفظ
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
        <v-toolbar flat color="white">
          <v-toolbar-title>إدارة الوحدات</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-btn primary @click.stop="showDialog()"> إضافة وحدة </v-btn>
          <v-spacer></v-spacer>
        </v-toolbar>
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
      operation: "add",
      dialog: false,
      search: "",
      unit: "",
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
    saveUnit() {
      if (this.operation == "add") {
        Unit.create(this.unit).then((response) => {
          this.dialog = false;
          this.units = response.data.units;
        });
        return;
      }
      if (this.operation == "update") {
        Unit.update(this.unit).then((response) => {
          this.dialog = false;
          this.units = response.data.units;
        });
        return;
      }
    },
    showDialog(item) {
      this.dialog = true;
      if (item) {
        this.operation = "update";
        this.unit = { ...item };
      } else {
        this.operation = "add";
        this.unit = {
          ar_name: "",
          ar_unit_representation: "",
          company_id: "",
          created_at: "",
          deleted_at: "",
          en_name: "",
          en_unit_representation: "",
        };
      }
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