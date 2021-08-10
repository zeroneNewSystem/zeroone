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
                    path: "/accounts",
                    name: "accounts",
                    meta: { requiresAuth: true },
                    components: {
                        default: () =>
                            import ("./components/main/index"),
                        mainView: () =>
                            import ("./components/main/accounts")
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