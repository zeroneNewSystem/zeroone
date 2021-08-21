import Api from "./Api";

export default {
    get() {
        return Api.get("/accounts/");
    },
    types() {
        return Api.get("/accounts/types");
    },

    saveNewAccount(account) {
        return Api.post("/accounts/", account);
    },
    showAccountsByType(type) {
        return Api.get("/accounts/type/" + type);
    },
    postCreate(product) {
        return Api.post("/products/create", product);
    }
};