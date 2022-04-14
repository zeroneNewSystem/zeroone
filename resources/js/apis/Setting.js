import Api from "./Api";

export default {
    store(settings) {
        return Api.post("/settings", settings);
    },

    productSettingsSave(settings) {
        return Api.post("/settings/product_settings/store", settings);
    },
    companySettingsSave(settings) {
        return Api.post("/settings/company_settings/store", settings);
    },

    isExist(product) {
        return Api.get(
            "/extra/product/exists/" +
            product.type +
            "/" +
            product.what_to_search
        );
    },
    create() {
        return Api.get("/settings/create");
    },

    update(product) {
        return Api.put("/settings", product);
    },
    postCreate(product) {
        return Api.post("/settings/create", product);
    },
    get() {
        return Api.get("/settings");
    },

    search(params) {
        return Api.get("/settings/search", { params: params });
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
        return Api.delete("/settings/", { params: params });
    }
};