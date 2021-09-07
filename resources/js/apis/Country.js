import Api from "./Api";

export default {
    loadCountries(params) {
        return Api.get("/countries/", { params: params });
    },

    loadCities(country_id) {
        return Api.get("/countries/" + country_id);
    }
};