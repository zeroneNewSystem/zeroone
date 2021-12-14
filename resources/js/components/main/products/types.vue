<template>
  <div style="margin-top: 20px">
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card :loading="isloading">
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="type.ar_name"
                    label="اسم النوع العربي"
                    :rules="is_exists"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="type.ar_type_representation"
                    label="الاختصار العربي"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="type.en_name"
                    label="اسم النوع بالانجليزي"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="type.en_type_representation"
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
            <v-btn color="blue darken-1" text @click="saveType"> حفظ </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-data-table
      :headers="types_header"
      :items="types"
      item-key="id"
      :search="search"
      :loading="table_loading"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>إدارة الأنواع</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-btn primary @click.stop="showDialog()"> إضافة نوع </v-btn>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-text-field
          v-model="search"
          label="ادخل معلومات النوع"
          class="mx-4"
        ></v-text-field>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-if="canBeDeleted(item)" @click="deleteType(item)">
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
import Type from "../../../apis/Type";
export default {
  data() {
    return {
      /*-------------------validators---------------------------*/
      vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
      vld_selected: [(v) => v > 0 || "أدخل قيمة"],
      required: [(value) => !!value || "الحقل مطلوب."],
      isunique: [],
      is_exists: [],
      is_valid_date: [],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],
      vld_match: [true],

      table_loading: false,
      isloading: false,
      operation: "add",
      dialog: false,
      search: "",
      type: { ar_name: "" },
      types: [],
      types_header: [
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
    saveType() {
      // check if its exists

      if (
        this.types.findIndex(
          (elem) => elem.ar_name == this.type.ar_name.trim()
        ) >= 0
      ) {
        this.is_exists = ["اسم النوع موجود مسبقا"];

        return;
      }

      this.is_exists = [];
      this.isloading = true;
      if (this.operation == "add") {
        Type.create(this.type).then((response) => {
          this.isloading = false;
          this.dialog = false;
          this.types = response.data.types;
        });
        return;
      }
      if (this.operation == "update") {
        Type.update(this.type).then((response) => {
          this.dialog = false;
          this.isloading = false;

          this.types = response.data.types;
        });
        return;
      }
    },
    showDialog(item) {
      this.dialog = true;
      if (item) {
        this.operation = "update";
        this.type = { ...item };
      } else {
        this.operation = "add";
        this.type = {
          ar_name: "",
          ar_type_representation: "",
          company_id: "",
          created_at: "",
          deleted_at: "",
          en_name: "",
          en_type_representation: "",
        };
      }
    },

    canBeModefied(item) {
      return true;
    },
    canBeDeleted(item) {
      return true;
    },
    deleteType(item) {
      this.table_loading = true
      Type.delete(item.id).then((response) => {
        this.table_loading = false
        this.types = response.data.types;
      });
    },
  },

  created() {
    this.table_loading = true;
    Type.getAll().then((response) => {
      this.table_loading = false;
      this.types = response.data.types;
    });
  },
};
</script>

<style>
</style>