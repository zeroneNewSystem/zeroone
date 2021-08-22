import Api from "./Api";

export default {
    get() {
        return Api.get("/accounts/");
    },
    types() {
        return Api.get("/accounts/types");
    },
    delete(id) {
        return Api.delete("/accounts/" + id);
    },
    archive(id) {
        return Api.post("/accounts/archive/" + id);
    },

    create(account) {
        return Api.post("/accounts/", account);
    },
    update(account) {
        return Api.put("/accounts/", account);
    },
    showAccountsByType(type) {
        return Api.get("/accounts/type/" + type);
    },
    postCreate(product) {
        return Api.post("/products/create", product);
    }
};