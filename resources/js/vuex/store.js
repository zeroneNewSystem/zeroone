import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import incomeitemsModule from "./incomeitems"
import outcomeitemsModule from "./outcomeitems"
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        incomeitemsModule,
        outcomeitemsModule,
    },
    state: {



        invoicesState: {
            isDirty: true,
            invoices: [] // flag for no compitiality form local and server!
        },
        invoices: [],
        invoicesDrugsHeaders: [],
        invoicesManagmentHeaders: [],

        billingHeaderItems: [{
                text: "الباركود",
                align: "center",
                value: "barcode",
                sortable: false,
            },
            {
                text: "اسم الصنف",
                align: "center",
                sortable: false,
                value: "name",
            },
            { text: "الوحدة", align: "center", value: "unit", sortable: false },
            {
                text: "سعر البيع",
                align: "center",
                value: "selling_price",
                sortable: false,
            },
            {
                text: "الكمية",
                align: "center",
                value: "demandquantity",
                sortable: false,
            },
            {
                text: "الخصم %",
                align: "center",
                value: "selling_discount",
                sortable: false,
            },
            { text: "المجموع", align: "center", value: "total", sortable: false },
        ],
        purchases: [],
        companies: [],
        companiesManagmentHeaders: [],

        customers: [],
        customersManagmentHeaders: [],

        drugs: [],
        drugclasses: [],
        drugsManagmentHeaders: [],

        units: [],
        unitsManagmentHeaders: [],

        drugsunits: [],


        categories: [],


        selecteddrugheader: [{
                text: "الباركود",
                align: "center",
                value: "barcode",
                sortable: false,
            },
            {
                text: "اسم الصنف",
                align: "center",
                sortable: false,
                value: "name",
            },
            { text: "الوحدة", align: "center", value: "unit", sortable: false },
            {
                text: "الصلاحية",
                align: "center",
                value: "expired",
                sortable: false,
            },
            {
                text: "سعر الشراء",
                align: "center",
                value: "purchasingprice",
                sortable: false,
            },
            {
                text: "سعر البيع",
                align: "center",
                value: "selling_price",
                sortable: false,
            },
            {
                text: "الكمية",
                align: "center",
                value: "demandquantity",
                sortable: false,
            },
            {
                text: "الكمية المتاحة",
                align: "center",
                value: "currentQuan",
                sortable: false,
            },
            {
                text: "الحد الأدنى",
                align: "center",
                value: "alert_quantity",
                sortable: false,
            },
            { text: "العمليات", align: "center", value: "action", sortable: false },
            {
                text: "الخصم %",
                align: "center",
                value: "selling_discount",
                sortable: false,
            },
            { text: "المجموع", align: "center", value: "total", sortable: false },
        ],
        invManagHeader: [],

    },
    mutations: {

        //invoices
        load_invoices: (state, payload) => {
            state.invoices = []
            for (var k in payload) {
                state.invoices.unshift(payload[k]);
            }
        },
        add_invoices: (state, payload) => {


            console.log('added invoice localy', payload);
            payload.sold_drugs.forEach(p => { p.unit = p.drugUnit });

            console.log('saved inovice locl', payload);
            state.invoices.unshift(payload); //one invoice
        },

        add_invoices: (state, payload) => {


            console.log('added invoice localy', payload);
            payload.sold_drugs.forEach(p => { p.unit = p.drugUnit });

            console.log('saved inovice locl', payload);
            state.invoices.unshift(payload); //one invoice
        },
        update_invoices: (state, payload) => { // one invoice
            //removeinvoice
            payload.sold_drugs.forEach(p => { p.unit = p.drugUnit });
            var index = state.invoices.findIndex(elem => elem.invoiceid !== payload.invoiceid);
            state.invoices.splice(index, 1);
            state.invoices.unshift();



        },
        remove_invoices: (state, payload) => {
            state.invoices.splice(state.invoices.indexOf(payload), 1);
        },
        suspend_invoice: (state, payload) => {
            // نحذفها اذا هي موجودة مسبقا
            console.log('suspemd', payload)
            var index = state.invoices.findIndex(p => p.invoiceid == payload.invoiceid);
            state.invoices.splice(index, 1);

            state.invoices.unshift(payload); //one invoice
        },
        //companies
        load_companies: (state, payload) => {
            state.companies = []
            for (var k in payload) {
                state.companies.unshift(payload[k]);
            }
        },
        add_companies: (state, payload) => {
            state.companies.unshift(payload); //one invoice
        },
        update_companies: (state, payload) => { // one company to update
            state.companies.splice( // splice used to cut and add!
                state.companies.findIndex(el => el.id === payload.id), 1, payload);
        },
        remove_companies: (state, payload) => {
            console.log('wantremove!')
            state.companies.splice(state.companies.indexOf(payload), 1);
        },
        //customers
        load_customers: (state, payload) => {
            state.customers = []
            for (var k in payload) {
                state.customers.unshift(payload[k]);
            }
        },
        add_customers: (state, payload) => {
            console.log(payload)
            state.customers.unshift(payload); //one invoice
        },
        update_customers: (state, payload) => { // one customer
            state.customers.splice(
                state.customers.findIndex(el => el.id === payload.id), 1, payload);
        },
        remove_customers: (state, payload) => {
            state.customers.splice(state.customers.indexOf(payload), 1);
        },
        //medicines
        load_drugs: (state, payload) => {
            state.drugs = []
            for (var k in payload) {
                state.drugs.unshift(payload[k]);
            }
        },
        add_drugs: (state, payload) => {
            //console.log('hi',payload)
            state.drugs.unshift(payload); //one invoice
        },
        update_drugs: (state, payload) => { // one invoice


            state.drugs.splice(
                state.drugs.findIndex(el => el.id === payload.id), 1, payload);
        },
        remove_drugs: (state, payload) => {
            state.drugs.splice(state.drugs.indexOf(payload), 1);
        },
        //drugclasses
        load_drugclasses: (state, payload) => {
            for (var k in payload) {
                state.drugclasses.unshift(payload[k]);
            }
        },
        add_drugclasses: (state, payload) => {
            console.log('hi', payload)
            state.drugclasses.unshift(payload); //one invoice
        },
        update_drugclasses: (state, payload) => { // one invoice


            state.drugclasses.splice(
                state.drugclasses.findIndex(el => el.id === payload.id), 1, payload);
        },
        remove_drugclasses: (state, payload) => {
            state.drugclasses.splice(state.drugclasses.indexOf(payload), 1);
        },


        //units
        load_units: (state, payload) => {
            state.units = []
            for (var k in payload) {
                state.units.unshift(payload[k]);
            }
        },
        add_units: (state, payload) => {
            state.units.unshift(payload); //one invoice
        },
        update_units: (state, payload) => { // one invoice
            state.units.splice(
                state.units.findIndex(el => el.id === payload.id), 1, payload);
        },
        remove_units: (state, payload) => {
            state.units.splice(state.units.indexOf(payload), 1);
        },
        //categories
        load_categories: (state, payload) => {
            state.categories = []
            for (var k in payload) {
                state.categories.unshift(payload[k]);
            }
        },
        add_categories: (state, payload) => {
            state.categories.unshift(payload); //one invoice
        },
        update_categories: (state, payload) => { // one invoice
            state.categories.splice(
                state.categories.findIndex(el => el.id === payload.id), 1, payload);
        },
        remove_categories: (state, payload) => {
            state.categories.splice(state.categories.indexOf(payload), 1);
        },
        //purchacing
        load_purchases: (state, payload) => {
            state.purchases = [];
            for (var k in payload) {
                state.purchases.unshift(payload[k]);
            }
        },
        add_purchases: (state, payload) => {

            console.log('toaddhereinclient', payload)


            state.drugs.unshift(JSON.parse(JSON.stringify(payload.purcheddrugs))[0]); //to drugs

            console.log('state.drugs', state.drugs)
            state.purchases.unshift(payload); //one invoice

        },
        update_purchases: (state, payload) => { // one invoice
            //removeinvoice
            var arr;
            arr = state.purchases.filter(elem => elem.purchases !== payload.purchases)
            arr.unshift(payload);
            state.purchases = arr;
            //unshiftinvoivce
            //one invoice
        },
        remove_purchases: (state, payload) => {
            state.purchases.splice(state.purchases.indexOf(payload), 1);
        },
        //COMMIT LOADDED TABLES TO VUEX
    },
    getters: {
        allcostumers(state) {
            return state.customers;
        },
        allinvoices(state) {
            return state.invoices;
        },
        invoicebyid: (state) => (id) => {
            return state.invoices.filter(elem => elem.invoiceid == id)
        }
    },
    actions: {

        add_invoice: () => {
            /*make isdirty = true before 
            make post request then 
            if ok add to status
            then make isdirty = false
            */

            axios.post('api/addinvoices', payload).
            then(
                response => {
                    cxt.commit('add_invoice', payload)
                }
            )
        },

        //invoice!
        load_invoices: (cxt) => {
            axios.post("api/getinvoices")
                .then(response => {
                    cxt.commit('load_invoices', response.data)
                });
        },
        add_invoices: (cxt, payload) => {
            cxt.commit('add_invoices', payload)
            axios.post('api/addinvoices', payload).
            then(
                response => {}
            )
        },
        update_invoices: (cxt, payload) => {
            cxt.commit('update_invoices', payload)
            axios.post('api/updateinvoices', payload).
            then(
                response => {}
            )
        },
        remove_invoices: (cxt, payload) => {
            cxt.commit('remove_invoices', payload)
            axios.post('api/removeinvoices', payload).
            then(
                response => {
                    payload = response.data;
                }
            )
        },
        suspend_invoice: (cxt, payload) => {
            cxt.commit('suspend_invoice', payload)
        },
        //companies
        load_companies: (cxt) => {
            axios.post("api/getcompanies")
                .then(response => {
                    cxt.commit('load_companies', response.data)
                });
        },
        add_companies: (cxt, payload) => {
            axios.post('api/addcompanies', payload).
            then(
                response => {
                    payload = response.data;
                    cxt.commit('add_companies', payload)
                }
            )
        },
        update_companies: (cxt, payload) => {
            cxt.commit('update_companies', payload)
            axios.post('api/updatecompanies', payload).
            then(
                response => {}
            )
        },
        remove_companies: (cxt, payload) => {
            cxt.commit('remove_companies', payload)
            axios.post('api/removecompanies', payload).
            then(
                response => {
                    payload = response.data;
                }
            )
        },
        //customers
        load_customers: (cxt) => {
            axios.post("api/getcustomers")
                .then(response => {
                    cxt.commit('load_customers', response.data)
                });
        },
        add_customers: (cxt, payload) => {
            axios.post('api/addcustomers', payload).
            then(
                response => {
                    payload = response.data;
                    cxt.commit('add_customers', payload)
                }
            )
        },
        update_customers: (cxt, payload) => {
            cxt.commit('update_customers', payload)
            axios.post('api/updatecustomers', payload).
            then(
                response => {}
            )
        },
        remove_customers: (cxt, payload) => {
            cxt.commit('remove_customers', payload)
            axios.post('api/removecustomers', payload).
            then(
                response => {
                    payload = response.data;
                }
            )
        },
        //medicines
        load_drugs: (cxt) => {
            axios.post("api/getdrugs")
                .then(response => {
                    cxt.commit('load_drugs', response.data)
                });
        },
        add_drugs: (cxt, payload) => {
            axios.post('api/adddrugs', payload).
            then(
                response => {
                    payload = response.data;
                    cxt.commit('add_drugs', payload)
                }
            )
        },
        update_drugs: (cxt, payload) => {
            cxt.commit('update_drugs', payload)
            axios.post('api/updatedrugs', payload).
            then(
                response => {}
            )
        },
        remove_drugs: (cxt, payload) => {
            cxt.commit('remove_drugs', payload)
            axios.post('api/removedrugs', payload).
            then(
                response => {
                    payload = response.data;
                }
            )
        },
        //drugclasses
        load_drugclasses: (cxt) => {
            axios.post("api/getdrugclasses")
                .then(response => {
                    cxt.commit('load_drugclasses', response.data)
                });
        },
        add_drugclasses: (cxt, payload) => {
            console.log(payload)
            axios.post('api/adddrugclasses', payload).
            then(
                response => {

                    cxt.commit('add_drugclasses', response.data)
                }
            )
        },
        update_drugclasses: (cxt, payload) => {
            cxt.commit('update_drugclasses', payload)
            axios.post('api/updatedrugclasses', payload).
            then(
                response => {}
            )
        },
        remove_drugclasses: (cxt, payload) => {
            cxt.commit('remove_drugclasses', payload)
            axios.post('api/removedrugclasses', payload).
            then(
                response => {
                    payload = response.data;
                }
            )
        },
        //units
        load_units: (cxt) => {
            axios.post("api/getunits")
                .then(response => {
                    cxt.commit('load_units', response.data)
                });
        },
        add_units: (cxt, payload) => {
            axios.post('api/addunits', payload).
            then(
                response => {
                    payload = response.data;
                    cxt.commit('add_units', payload)
                }
            )
        },
        update_units: (cxt, payload) => {
            cxt.commit('update_units', payload)
            axios.post('api/updateunits', payload).
            then(
                response => {}
            )
        },
        remove_units: (cxt, payload) => {
            cxt.commit('remove_units', payload)
            axios.post('api/removeunits', payload).
            then(
                response => {
                    payload = response.data;
                }
            )
        },
        //categories
        load_categories: (cxt) => {
            axios.post("api/getcategories")
                .then(response => {
                    cxt.commit('load_categories', response.data)
                });
        },
        add_categories: (cxt, payload) => {
            axios.post('api/addcategories', payload).
            then(
                response => {
                    payload = response.data;
                    cxt.commit('add_categories', payload)
                }
            )
        },
        update_categories: (cxt, payload) => {
            cxt.commit('update_categories', payload)
            axios.post('api/updatecategories', payload).
            then(
                response => {}
            )
        },
        remove_categories: (cxt, payload) => {
            cxt.commit('remove_categories', payload)
            axios.post('api/removecategories', payload).
            then(
                response => {
                    payload = response.data;
                }
            )
        },
        //purchacing
        load_purchases: (cxt) => {
            axios.post("api/getpurchases")
                .then(response => {
                    cxt.commit('load_purchases', response.data)
                });
        },
        add_purchases: (cxt, payload) => {
            console.log('toaddtoserver', payload)
            axios.post('api/addpurchases', payload).
            then(
                response => {

                    cxt.commit('add_purchases', response.data)

                }
            )
        },
        update_purchases: (cxt, payload) => {
            cxt.commit('update_purchases', payload)
            axios.post('api/updatepurchases', payload).
            then(
                response => {}
            )
        },
        remove_purchases: (cxt, payload) => {
            cxt.commit('remove_purchases', payload)
            axios.post('api/removepurchases', payload).
            then(
                response => {
                    payload = response.data;
                }
            )
        },
    },
})