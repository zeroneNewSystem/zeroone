/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue").default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import Vuelidate from "vuelidate";
Vue.use(Vuelidate)

import vuetify from "./vuetify";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import store from "./vuex";

/*------------------ test -----------------*/

import Drawer from "./components/main/components/Drawer.vue";
import Vue from "vue";

/*----------------end test ----------------*/

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    i18n,
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount("#app");