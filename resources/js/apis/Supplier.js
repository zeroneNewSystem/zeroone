import Api from "./Api";

export default {
    create() {
        return Api.get("/suppliers/create");
    },
    store(supplier) {
        return Api.post("/suppliers/", supplier);
    },
    update(supplier) {
        return Api.put("/suppliers/", supplier);
    },
    postCreate(supplier) {
        return Api.post("/suppliers/create", supplier);
    },
    get(params) {
        return Api.get("/suppliers/", { params: params });
    },

    search(params) {
        return Api.get("/suppliers/search", { params: params });
    },

    barcodeSearch(params) {
        return Api.get("/router/" + params.barcode);
    },

    delete(params) {
        return Api.delete("/suppliers/", { params: params });
    }
};