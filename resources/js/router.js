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
                    meta: { requiresAuth: true },
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
                    path: "/receipt",
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
                    path: "/purchase",
                    name: "purchase",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/purchases/purchase"),
                        mainView: () =>
                            import ("./components/main/purchases/purchase")
                    }
                },
                {
                    path: "/purchases",
                    name: "purchases",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/purchases/purchases"),
                        mainView: () =>
                            import ("./components/main/purchases/purchases")
                    }
                },
                {
                    path: "/purchase/:id",
                    name: "purchase",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/purchases/purchase"),
                        mainView: () =>
                            import ("./components/main/purchases/purchase")
                    }
                },
                {
                    path: "/invoice",
                    name: "invoice",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/invoices/invoice"),
                        mainView: () =>
                            import ("./components/main/invoices/invoice")
                    }
                },
                {
                    path: "/invoice/:id",
                    name: "invoice",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/invoices/invoice"),
                        mainView: () =>
                            import ("./components/main/invoices/invoice")
                    }
                },

                {
                    path: "/suppliers",
                    name: "suppliers",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/purchases/suppliers"),
                        mainView: () =>
                            import ("./components/main/purchases/suppliers")
                    }
                },
                {
                    path: "/suppliers/:id",
                    name: "suppliers_with_id",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/purchases/supplier-info"),
                        mainView: () =>
                            import ("./components/main/purchases/supplier-info")
                    }
                },
                {
                    path: "/customers",
                    name: "customers",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/invoices/customers"),
                        mainView: () =>
                            import ("./components/main/invoices/customers")
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
                            import ("./components/main/products/inventory_transfers"),
                        mainView: () =>
                            import ("./components/main/products/inventory_transfers")
                    }
                },
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
            next();
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