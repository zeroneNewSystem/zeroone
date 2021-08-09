import Vue from 'vue'
import Router from 'vue-router'
//import { defaultLocale } from '../config/i18n'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
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

        /*  {
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
          {
              path: '/login',
              name: 'login',
              component: () =>
                  import ('../components/auth/login')
          },*/
    ]
})