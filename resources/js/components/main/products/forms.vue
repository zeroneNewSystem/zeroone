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
                    v-model="form.ar_name"
                    label="اسم الوحدة العربي"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="form.ar_form_representation"
                    label="الاختصار العربي"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="form.en_name"
                    label="اسم الوحدة بالانجليزي"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="form.en_form_representation"
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
            <v-btn color="blue darken-1" text @click="saveForm">
              حفظ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-data-table
      :headers="forms_header"
      :items="forms"
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
            <v-btn icon v-if="canBeDeleted(item)" @click="deleteForm(item)">
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
import Form from "../../../apis/Form";
export default {
  data() {
    return {
      operation: "add",
      dialog: false,
      search: "",
      form: "",
      forms: [],
      forms_header: [
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
    saveForm() {
      if (this.operation == "add") {
        Form.create(this.form).then((response) => {
          this.dialog = false;
          this.forms = response.data.forms;
        });
        return;
      }
      if (this.operation == "update") {
        Form.update(this.form).then((response) => {
          this.dialog = false;
          this.forms = response.data.forms;
        });
        return;
      }
    },
    showDialog(item) {
      this.dialog = true;
      if (item) {
        this.operation = "update";
        this.form = { ...item };
      } else {
        this.operation = "add";
        this.form = {
          ar_name: "",
          ar_form_representation: "",
          company_id: "",
          created_at: "",
          deleted_at: "",
          en_name: "",
          en_form_representation: "",
        };
      }
    },

    canBeModefied(item) {
      return true;
    },
    canBeDeleted(item) {
      return true;
    },
    deleteForm(item) {
      Form.delete(item.id).then((response) => {
        this.forms = response.data.forms;
      });
    },
  },

  created() {
    Form.getAll().then((response) => {
      this.forms = response.data.forms;
    });
  },
};
</script>

<style>
</style>