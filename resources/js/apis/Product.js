import Api from "./Api";

export default {
    create() {
        return Api.get("/products/create");
    },
    store(product) {
        return Api.post("/products", product);
    },
    update(product) {
        return Api.put("/products", product);
    },
    postCreate(product) {
        return Api.post("/products/create", product);
    },
    get(params) {
        return Api.get("/products/", { params: params });
    },

    search(params) {
        return Api.get("/products/search", { params: params });
    },

    purchaseBarcodeSearch(params) {
        return Api.get("/extra/purchase/barcode/" + params.barcode);
    },
    invoiceBarcodeSearch(params) {
        return Api.get("/extra/invoice/barcode/" + params.barcode);
    },

    delete(params) {
        return Api.delete("/products/", { params: params });
    }
};