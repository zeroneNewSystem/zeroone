import Api from "./Api";

export default {
    get() {
        return Api.get("/accounts/");
    },
    types() {
        return Api.get("/accounts/types");
    },

    showAccountsByType(type) {
        return Api.get("/accounts/type/" + type);
    },
    postCreate(product) {
        return Api.post("/products/create", product);
    }
};