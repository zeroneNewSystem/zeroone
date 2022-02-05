import Api from "./Api";

export default {
    store(supplier) {
        return Api.post("/suppliers", supplier);
    },
    update(supplier) {
        return Api.put("/suppliers", supplier);
    },
    postCreate(supplier) {
        return Api.post("/suppliers/create", supplier);
    },
    getOne(params) {
        return Api.get("/suppliers/getOne", { params: params });
    },
    get(params) {
        return Api.get("/suppliers", { params: params });
    },
    getByProductID(id) {
        return Api.get("/suppliers/product/" + id);
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