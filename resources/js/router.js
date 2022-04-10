import Vue from "vue";
import VueRouter from "vue-router";
//import { defaultLocale } from '../config/i18n'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "main",
            meta: { requiresAuth: true },
            component: () =>
                import ("./components/main/index"),
            children: [{
                    path: "/dashboard",
                    name: "dashboard",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/index"),
                        mainView: () =>
                            import ("./components/main/dashboard")
                    }
                },

                {
                    path: "/settings",
                    name: "settings",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/settings/settings"),
                        mainView: () =>
                            import ("./components/main/settings/settings")
                    }
                },

                {
                    path: "/product",
                    name: "product",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/products/product"),
                        mainView: () =>
                            import ("./components/main/products/product")
                    }
                },
                {
                    path: "/service",
                    name: "service",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/products/service"),
                        mainView: () =>
                            import ("./components/main/products/service")
                    }
                },
                {
                    path: "/accounts",
                    name: "accounts",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/accounts/accounts"),
                        mainView: () =>
                            import ("./components/main/accounts/accounts")
                    }
                },
                {
                    path: "/units",
                    name: "units",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/products/units"),
                        mainView: () =>
                            import ("./components/main/products/units")
                    }
                },
                {
                    path: "/types",
                    name: "types",
                    meta: { requiresAuth: true, onlyAdmin: true },
                    components: {
                        default: () =>
                            import ("./components/main/products/types"),
                        mainView: () =>
                            import ("./components/main/products/types")
                    }
                },
                {
                    path: "/forms",
                    name: "forms",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/products/forms"),
                        mainView: () =>
                            import ("./components/main/products/forms")
                    }
                },
                {
                    path: "/groups",
                    name: "groups",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/products/groups"),
                        mainView: () =>
                            import ("./components/main/products/groups")
                    }
                },
                {
                    path: "/products",
                    name: "products",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/products/products"),
                        mainView: () =>
                            import ("./components/main/products/products")
                    }
                },
                {
                    path: "/receipt/customer",
                    name: "receipt",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/receipts/receipt"),
                        mainView: () =>
                            import ("./components/main/receipts/receipt")
                    }
                },
                {
                    path: "/receipt/supplier",
                    name: "receipt",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/receipts/receipt"),
                        mainView: () =>
                            import ("./components/main/receipts/receipt")
                    }
                },
                {
                    path: "/receipts",
                    name: "receipts",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/receipts/receipts"),
                        mainView: () =>
                            import ("./components/main/receipts/receipts")
                    }
                },
                {
                    path: "/receipts/supplier",
                    name: "receipts",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/receipts/receipts"),
                        mainView: () =>
                            import ("./components/main/receipts/receipts")
                    }
                },
                {
                    path: "/receipts/customer",
                    name: "receipts",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/receipts/receipts"),
                        mainView: () =>
                            import ("./components/main/receipts/receipts")
                    }
                },
                {
                    path: "/receipts/:id",
                    name: "receipts",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/receipts/receipt-info"),
                        mainView: () =>
                            import ("./components/main/receipts/receipt-info")
                    }
                },
                {
                    path: "/bond",
                    name: "bond",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bonds/bond"),
                        mainView: () =>
                            import ("./components/main/bonds/bond")
                    }
                },
                {
                    path: "/bonds",
                    name: "bonds",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bonds/bonds"),
                        mainView: () =>
                            import ("./components/main/bonds/bonds")
                    }
                },

                {
                    path: "/bonds/:id",
                    name: "bonds",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bonds/bond-info"),
                        mainView: () =>
                            import ("./components/main/bonds/bond-info")
                    }
                },
                {
                    path: "/bill",
                    name: "bill",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bills/bill"),
                        mainView: () =>
                            import ("./components/main/bills/bill")
                    }
                },
                {
                    path: "/purchases",
                    name: "purchases",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bills/bills"),
                        mainView: () =>
                            import ("./components/main/bills/bills")
                    }
                },
                {
                    path: "/bill/:id",
                    name: "bill",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bills/bill"),
                        mainView: () =>
                            import ("./components/main/bills/bill")
                    }
                },

                {
                    path: "/invoices",
                    name: "invoices",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bills/bills"),
                        mainView: () =>
                            import ("./components/main/bills/bills")
                    }
                },

                {
                    path: "/invoice/:id",
                    name: "invoice",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bills/bill"),
                        mainView: () =>
                            import ("./components/main/bills/bill")
                    }
                },
                {
                    path: "/purchase/:id",
                    name: "purchase",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bills/bill"),
                        mainView: () =>
                            import ("./components/main/bills/bill")
                    }
                },

                {
                    path: "/suppliers",
                    name: "suppliers",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bills/people"),
                        mainView: () =>
                            import ("./components/main/bills/people")
                    }
                },
                {
                    path: "/suppliers/:id",
                    name: "suppliers_with_id",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bills/person-info"),
                        mainView: () =>
                            import ("./components/main/bills/person-info")
                    }
                },
                {
                    path: "/customers",
                    name: "customers",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bills/people"),
                        mainView: () =>
                            import ("./components/main/bills/people")
                    }
                },
                {
                    path: "/customers/:id",
                    name: "customers_with_id",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bills/person-info"),
                        mainView: () =>
                            import ("./components/main/bills/person-info")
                    }
                },
                {
                    path: "/stock_takes",
                    name: "stock_takes",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/products/stock_takes"),
                        mainView: () =>
                            import ("./components/main/products/stock_takes")
                    }
                },
                {
                    path: "/inventory_transfers",
                    name: "inventory_transfers",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import (
                                "./components/main/products/inventory_transfers"
                            ),
                        mainView: () =>
                            import (
                                "./components/main/products/inventory_transfers"
                            )
                    }
                },
                {
                    path: "/money_move",
                    name: "money_move",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import (
                                "./components/main/accounts/moneyMove"
                            ),
                        mainView: () =>
                            import (
                                "./components/main/accounts/moneyMove"
                            )
                    }
                },

                {
                    path: "/additional_money",
                    name: "additional_money",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import (
                                "./components/main/accounts/moneyMove"
                            ),
                        mainView: () =>
                            import (
                                "./components/main/accounts/moneyMove"
                            )
                    }
                },
                {
                    path: "/fixed_asset_depreciation",
                    name: "fixed_asset_depreciation",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import (
                                "./components/main/accounts/moneyMove"
                            ),
                        mainView: () =>
                            import (
                                "./components/main/accounts/moneyMove"
                            )
                    }
                },
                {
                    path: "/owner_withdraw",
                    name: "owner_withdraw",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import (
                                "./components/main/accounts/moneyMove"
                            ),
                        mainView: () =>
                            import (
                                "./components/main/accounts/moneyMove"
                            )
                    }
                },
                {
                    path: "/distribute_profits",
                    name: "distribute_profits",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import (
                                "./components/main/accounts/moneyMove"
                            ),
                        mainView: () =>
                            import (
                                "./components/main/accounts/moneyMove"
                            )
                    }
                },
                {
                    path: "/money_transactions",
                    name: "money_transactions",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import (
                                "./components/main/accounts/moneyMoves"
                            ),
                        mainView: () =>
                            import (
                                "./components/main/accounts/moneyMoves"
                            )
                    }
                },
                {
                    path: "/income_statement",
                    name: "income_statement",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import (
                                "./components/main/accounts/IncomeStatement"
                            ),
                        mainView: () =>
                            import (
                                "./components/main/accounts/IncomeStatement"
                            )
                    }
                },
                {
                    path: "/journal_entries",
                    name: "journal_entries",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import (
                                "./components/main/accounts/JournalEntries"
                            ),
                        mainView: () =>
                            import (
                                "./components/main/accounts/JournalEntries"
                            )
                    }
                },
                {
                    path: "/general_ledgers",
                    name: "general_ledgers",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import (
                                "./components/main/accounts/GeneralLedgers"
                            ),
                        mainView: () =>
                            import (
                                "./components/main/accounts/GeneralLedgers"
                            )
                    }
                },
                {
                    path: "/:bill",
                    name: "bill",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/bills/bill"),
                        mainView: () =>
                            import ("./components/main/bills/bill")
                    }
                }
            ]
        },

        {
            path: "/login",
            name: "login",
            meta: { guest: true },
            component: () =>
                import ("./components/auth/login")
        },
        {
            path: "/register",
            name: "register",
            meta: { guest: true },
            component: () =>
                import ("./components/auth/register")
        }

        /*  
        {
            path: '/',
            component: Vue.component('alert-box', {
                template: `
                  <div class="demo-alert-box">
                    <strong>Error!</strong>
                    <slot></slot>
                  </div>
                `
            })
        },
        {
              path: '/home',
              name: 'home',
              component: () =>
                  import ('../components/home')
          },
          {
              path: '/register',
              name: 'register',
              component: () =>
                  import ('../components/auth/register')
          },
          */
    ]
});

function loggedIn() {
    return localStorage.getItem("token");
}
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!loggedIn()) {
            next({
                path: "/login",
                query: { redirect: to.fullPath }
            });
        } else {
            if (!to.meta.onlyAdmin) next();
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (loggedIn()) {
            next({
                path: "/dashboard",
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next(); // make sure to always call next()!
    }
});

export default router;