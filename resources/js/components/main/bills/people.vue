 <template>
  <div>
    <add-update-person
      :dialog="add_update_person_dialog"
      :person="passed_person"
      :operation="operation"
      :cities="cities"
      @AddUpdatePerson="addpersonToList"
      @changeCountry="loadCities"
    ></add-update-person>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">تنبيه!</span>
        </v-card-title>
        <v-card-text class="text--primary">
          لايمكن حذف هذا المورد لوجود تعاملات مالية معه
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            إلغاء
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-data-table
      :headers="headers"
      :items="people"
      :options.sync="options"
      :server-items-length="people_total"
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
            @click.stop="AddUpdatePerson('', 'add')"
            >إضافة مورد</v-btn
          >
        </v-toolbar>

        <v-row>
          <v-col cols="12" lg="3">
            <v-text-field
              v-model="search.company_name"
              label="اسم الشركة"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="3">
            <v-text-field
              v-model="search.name"
              label="جهة الاتصال"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="3">
            <v-text-field
              v-model="search.phone"
              label="رقم الاتصال"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="3">
            <v-autocomplete
              v-model="search.is_person_active"
              :items="person_status"
              item-text="status"
              item-value="is_person_active"
              label="الحالة"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" lg="6">
            <v-row>
              <v-col cols="2">
                <v-btn elevation color="primary" @click="findpeople"
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
      <template v-slot:item.name="{ item }">
        {{ item.name }}
      </template>
      
      <template v-slot:item.balance="{ item }">
        {{ (item.credit - item.debit).toFixed(2) }}
      </template>
      <template v-slot:item.status="{ item }">
        {{ item.is_active ? "نشط" : "غير نشط" }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn icon @click.stop="AddUpdatePerson(item, 'update')">
          <v-icon small class="outlined font-size-12">mdi-pencil</v-icon>
        </v-btn>
        <router-link :to="'people/' + item.id"
          ><v-icon small>mdi-eye</v-icon></router-link
        >

        <v-btn icon @click.stop="deleteperson(item, 'update')">
          <v-icon small class="outlined font-size-12">mdi-delete</v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>no data!</template>
    </v-data-table>
  </div>
</template>

<script>
import person from "../../../apis/Person";
import Country from "../../../apis/Country";
import personInfo from "./person-info.vue";
import AddUpdatePerson from "./AddUpdatePerson.vue";
export default {
  components: {
    personInfo,
    AddUpdatePerson,
  },
  data() {
    return {
      route: window.location.pathname.replace(/^\/([^\/]*).*$/, "$1"),
      type_id: 1, //1 person
      loading: false,
      dialog: false,
      person_status: [
        { is_person_active: 0, status: "نشط" },
        { is_person_active: 1, status: "غير نشط" },
      ],
      cities: [],
      //-------etched data-----------------f
      operation: "add",
      people: [],
      add_update_person_dialog: false,
      passed_person: "",

      //-----------------------------------//
      person_info_person: "",
      person_info_dialog: false,

      search: {
        company_name: "",
        name: "",
        phone: "",
        is_person_active: "",
      },
      options: {},
      status: "salam",

      title: "إدارة الموردين",
      //---
      people_total: 20,
      loading: true,

      headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        { text: "اسم الشركة", align: "center", value: "company_name" },
        {
          text: "جهة الاتصال",
          align: "center",
          sortable: false,
          value: "name",
        },
        { text: "الرصيد", align: "center", value: "balance" },
        { text: "متأخرات", align: "center", value: "arrears" },
        { text: "الحالة ", align: "center", value: "status" },
        { text: "لتحكم ", align: "center", value: "actions" },
      ],
    };
  },
  computed: {
    params(nv) {
      return {
        ...this.options,
        //query: this.search,
      };
    },
  },
  watch: {
    params: {
      handler() {
        this.getDataFromApi().then((response) => {
          let data = response.data.people.data;
          let helper = [];
          let elper = [];
          let arrears01 = [];
          let arrears02 = [];
          //let balance = [];

          if (data) {
            data.forEach((element) => {
              element.arrears = 0;
              //amount null -> 0
              if (!element.supdoc_id) element.amount = 0;
              if (!element.bill_id) {
                element.bill_paid_amount = 0;
                element.bill_total_amount = 0;
              }

              // no transactions yet!
              if (!element.trans_id) {
                element.debit = 0;
                element.credit = 0;
                element.deletable = true;
                elper.push(element);
                return;
              }

              //الغاء التكرار
              if (element.bill_id && element.supdoc_id) {
                if (
                  !elper.find(
                    (elem) =>
                      // element.id +
                      //   " " +
                      element.bill_id + " " + element.trans_id ==
                      //elem.id + " " +
                      elem.bill_id + " " + elem.trans_id
                  )
                ) {
                  console.log("nibsoc");
                  elper.push(element);
                } else {
                  elper[
                    elper.findIndex(
                      (elem) =>
                        // element.id +
                        //   " " +
                        element.bill_id + " " + element.trans_id ==
                        //elem.id + " " +
                        elem.bill_id + " " + elem.trans_id
                    )
                  ].amount += element.amount;
                }

                return;
              }
              elper.push(element);
            });

            console.log("elper", elper);
            //تجميع الفواتير

            console.log("arrears01", arrears01);
            console.log("arrears02", arrears02);

            elper.forEach((element) => {
              if (!element.trans_id) {
                helper.push(element);
                return;
              }
              if (!helper.find((elem) => element.id == elem.id)) {
                helper.push(element);
                return;
              }
              let index = helper.findIndex((elem) => elem.id == element.id);
              if (element.debit != -1) helper[index].debit += element.debit;
              helper[index].credit += element.credit;
              helper[index].bill_total_amount += element.bill_total_amount;
              helper[index].bill_paid_amount += element.bill_paid_amount;
              helper[index].arrears = helper[index].bill_total_amount - helper[index].bill_paid_amount -  element.amount

              
            });
          }

          this.people = helper;
          console.log("helper", helper);

          this.people_total = response.data.people.data.total;
          this.person_info_person = response.data.people.data[0];
          console.log(this.people_total);
        });
      },
      deep: true,
    },
  },
  // mounted() {
  //   this.getDataFromApi().then((data) => {
  //     this.people = data.response;
  //   });
  // },

  methods: {
    findpeople() {
      this.getDataFromApi().then((response) => {
        let data = response.data.people.data;
        let helper = [];
        let elper = [];
        let arrears01 = [];
        let arrears02 = [];
        //let balance = [];

        if (data) {
          data.forEach((element) => {
            //amount null -> 0
            if (element.amount == null) element.amount = 0;

            // no transactions yet!
            if (!element.trans_id) {
              element.deletable = true;
              elper.push(element);
              return;
            }
            //الغاء التكرار
            if (element.bill_id && element.supdoc_id) {
              console.log("nibfir");
              if (
                !elper.find(
                  (elem) =>
                    // element.id +
                    //   " " +
                    element.bill_id + " " + element.trans_id ==
                    //elem.id + " " +
                    elem.bill_id + " " + elem.trans_id
                )
              ) {
                console.log("nibsoc");
                elper.push(element);
              } else {
                elper[
                  elper.findIndex(
                    (elem) =>
                      // element.id +
                      //   " " +
                      element.bill_id + " " + element.trans_id ==
                      //elem.id + " " +
                      elem.bill_id + " " + elem.trans_id
                  )
                ].amount += element.amount;
              }

              return;
            }
            elper.push(element);
          });

          console.log("elper", elper);
          //تجميع الفواتير

          console.log("arrears01", arrears01);
          console.log("arrears02", arrears02);

          elper.forEach((element) => {
            if (!element.trans_id) {
              helper.push(element);
              return;
            }
            if (!helper.find((elem) => element.id == elem.id)) {
              helper.push(element);
              return;
            }
            let index = helper.findIndex((elem) => elem.id == element.id);
            if (element.debit != -1) helper[index].debit += element.debit;
            helper[index].credit += element.credit;
          });
        }

        this.people = helper;
        console.log("helper", helper.amount);

        this.people_total = response.data.people.data.total;
        this.person_info_person = response.data.people.data[0];
        console.log(this.people_total);
      });
    },
    searchReset() {
      (this.search = {
        company_name: "",
        name: "",
        phone: "",
        is_person_active: "",
      }),
        this.getDataFromApi().then((response) => {
          let data = response.data.people.data;
          let helper = [];
          let elper = [];
          let arrears01 = [];
          let arrears02 = [];
          //let balance = [];

          if (data) {
            data.forEach((element) => {
              //amount null -> 0
              if (element.amount == null) element.amount = 0;

              // no transactions yet!
              if (!element.trans_id) {
                element.deletable = true;
                elper.push(element);
                return;
              }
              //الغاء التكرار
              if (element.bill_id && element.supdoc_id) {
                console.log("nibfir");
                if (
                  !elper.find(
                    (elem) =>
                      // element.id +
                      //   " " +
                      element.bill_id + " " + element.trans_id ==
                      //elem.id + " " +
                      elem.bill_id + " " + elem.trans_id
                  )
                ) {
                  console.log("nibsoc");
                  elper.push(element);
                } else {
                  elper[
                    elper.findIndex(
                      (elem) =>
                        // element.id +
                        //   " " +
                        element.bill_id + " " + element.trans_id ==
                        //elem.id + " " +
                        elem.bill_id + " " + elem.trans_id
                    )
                  ].amount += element.amount;
                }

                return;
              }
              elper.push(element);
            });

            console.log("elper", elper);
            //تجميع الفواتير

            console.log("arrears01", arrears01);
            console.log("arrears02", arrears02);

            elper.forEach((element) => {
              if (!element.trans_id) {
                helper.push(element);
                return;
              }
              if (!helper.find((elem) => element.id == elem.id)) {
                helper.push(element);
                return;
              }
              let index = helper.findIndex((elem) => elem.id == element.id);
              if (element.debit != -1) helper[index].debit += element.debit;
              helper[index].credit += element.credit;
            });
          }

          this.people = helper;
          console.log("helper", helper.amount);

          this.people_total = response.data.people.data.total;
          this.person_info_person = response.data.people.data[0];
          console.log(this.people_total);
        });
    },
    loadCities(country_id) {
      this.cities = [];
      Country.loadCities(country_id).then(
        (response) => (this.cities = response.data.cities)
      );
    },

    addpersonToList(person) {
      console.log("person");
      if (this.operation == "add") this.people.push(person);
      else if (this.operation == "update") {
        this.people.splice(
          this.people.indexOf((elem) => elem.id == person.id),
          1,
          person
        );
      }
    },
    AddUpdatePerson(item, operation) {
      this.operation = operation;
      if (operation == "add") {
        this.passed_person = {
          parent_id: "",
          type_id: "",
          name: "",
          account_code: "",
          description: "",
        };
      }
      if (operation == "update") {
        this.loadCities(item.country_id);

        this.passed_person = item;
        console.log("item", item);
        console.log("item", this.cities);
      }

      this.add_update_person_dialog = true;
    },

    show_person_dialog(item) {
      this.person_info_dialog = true;
      console.log(item);
      this.person_info_person = item;
    },
    deleteperson(item) {
      if (!item.deletable) {
        this.dialog = true;
        return;
      }

      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      //let search = this.search.trim().toLowerCase();
      let person_id = item.id;
      person
        .delete({
          person_id,
          page,
          itemsPerPage,
          search: this.search,
        })
        .then((response) => {
          this.loading = false;
          let data = response.data.people.data;
          let helper = [];
          let elper = [];
          let arrears01 = [];
          let arrears02 = [];
          //let balance = [];

          if (data) {
            data.forEach((element) => {
              //amount null --> make it  0
              if (element.amount == null) element.amount = 0;

              // no transactions yet!
              if (!element.trans_id) {
                element.deletable = true;
                elper.push(element);
                return;
              }
              //الغاء التكرار
              if (element.bill_id && element.supdoc_id) {
                console.log("nibfir");
                if (
                  !elper.find(
                    (elem) =>
                      // element.id +
                      //   " " +
                      element.bill_id + " " + element.trans_id ==
                      //elem.id + " " +
                      elem.bill_id + " " + elem.trans_id
                  )
                ) {
                  console.log("nibsoc");
                  elper.push(element);
                } else {
                  elper[
                    elper.findIndex(
                      (elem) =>
                        // element.id +
                        //   " " +
                        element.bill_id + " " + element.trans_id ==
                        //elem.id + " " +
                        elem.bill_id + " " + elem.trans_id
                    )
                  ].amount += element.amount;
                }

                return;
              }
              elper.push(element);
            });

            console.log("elper", elper);
            //تجميع الفواتير

            console.log("arrears01", arrears01);
            console.log("arrears02", arrears02);

            elper.forEach((element) => {
              if (!element.trans_id) {
                helper.push(element);
                return;
              }
              if (!helper.find((elem) => element.id == elem.id)) {
                helper.push(element);
                return;
              }
              let index = helper.findIndex((elem) => elem.id == element.id);
              if (element.debit != -1) helper[index].debit += element.debit;
              helper[index].credit += element.credit;
            });
          }

          this.people = helper;
          console.log("helper", helper.amount);

          this.people_total = response.data.people.data.total;
          this.person_info_person = response.data.people.data[0];
          console.log(this.people_total);
        });
    },
    getDataFromApi() {
      this.loading = true;
      return new Promise((resolve, reject) => {
        const { sortBy, sortDesc, page, itemsPerPage } = this.options;
        // let search = this.search.trim().toLowerCase();

        person
          .get(
            {
              type_id: this.type_id,
              page,
              itemsPerPage,
              search: this.search,
            },
            this.route
          )
          .then((response) => {
            this.loading = false;
            resolve(response);
          });
      });
    },
  },
  created() {
    console.log(this.$route);
    console.log(this.route);
    console.log("patho");
    console.log(this.route.split("/"));

    if (this.route == "person") {
      this.type_id = 1;
      /* 
        1- suppplier
        2- customer
        3 - user
        */
    }
  },
};
</script>