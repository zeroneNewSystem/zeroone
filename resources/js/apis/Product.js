import Api from "./Api";

export default {
    isExist(product) {

        return Api.get(
            "/extra/product/exists/" + product.type + "/" + product.what_to_search
        );
    },
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

    billBarcodeSearch(params, route) {
        return Api.get("/extra/" + route + "/barcode/" + params.barcode);
    },
    invoiceBarcodeSearch(params) {

        return Api.get(
            "/extra/invoice/barcode/" +
            params.barcode +
            "/inventory_id/" +
            params.inventory_id
        );

    },
    stockTakeBarcodeSearch(params) {
        return Api.get(
            "/extra/stock_take/barcode/" +
            params.barcode +
            "/inventory_id/" +
            params.inventory_id
        );
    },

    delete(params) {
        return Api.delete("/products/", { params: params });
    }
};