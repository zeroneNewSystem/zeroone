import Api from "./Api";

export default {

    store(customer) {

        return Api.post("/customers", customer);
    },
    update(customer) {
        return Api.put("/customers", customer);
    },
    postCreate(customer) {
        return Api.post("/customers/create", customer);
    },
    get(params) {
        return Api.get("/customers", { params: params });
    },

    search(params) {
        return Api.get("/customers/search", { params: params });
    },

    barcodeSearch(params) {
        return Api.get("/router/" + params.barcode);
    },

    delete(params) {
        return Api.delete("/customers/", { params: params });
    }
};