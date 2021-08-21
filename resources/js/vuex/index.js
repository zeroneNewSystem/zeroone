import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Accounts from "../apis/Account";
import incomeitemsModule from "./incomeitems";
import outcomeitemsModule from "./outcomeitems";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        accounts: [],
        account_types: [],
        accountsVDTloading: true
    },
    mutations: {
        load_accounts: (state, payload) => {
            state.accounts = payload;
        },
        load_account_types: (state, payload) => {
            state.account_types = payload;
        },
        change_accountsVDTloading: (state, payload) => {
            state.accountsVDTloading = false;
        }
    },
    getters: {
        accounts(state) {
            return state.accounts;
        },
        account_types(state) {
            return state.account_types;
        },

        invoicebyid: state => id => {
            return state.invoices.filter(elem => elem.invoiceid == id);
        }
    },
    actions: {
        /*----------------------load accounts and types------------------------*/
        load_accounts: cxt => {
            Accounts.get().then(response => {
                cxt.commit("load_accounts", response.data.accounts);
                cxt.commit("change_accountsVDTloading");
            });
        },
        load_account_types: cxt => {
            Accounts.types().then(response => {
                cxt.commit("load_account_types", response.data.account_types);
            });
        },

        //invoice!

        add_invoices: (cxt, payload) => {
            cxt.commit("add_invoices", payload);
            axios.post("api/addinvoices", payload).then(response => {});
        }
    }
});