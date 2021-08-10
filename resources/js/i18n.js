import ar from "./locales/ar.json";
import en from "./locales/en.json";

import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default new VueI18n({
    locale: localStorage.getItem("lang") || "ar",
    messages: {
        en: en,
        ar: ar
    }
});