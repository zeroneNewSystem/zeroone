import Api from "./Api";

export default {
    create() {
        return Api.get("/stock_takes/create");
    },
    store(stock_take) {
        return Api.post("/stock_takes", stock_take);
    },
    update(stock_take) {
        return Api.put("/stock_takes", stock_take);
    },
    postCreate(stock_take) {
        return Api.post("/stock_takes/create", stock_take);
    },
    get(params) {
        return Api.get("/stock_takes/", { params: params });
    },

    search(params) {
        return Api.get("/stock_takes/search", { params: params });
    },

    purchaseBarcodeSearch(params) {
        return Api.get("/extra/purchase/barcode/" + params.barcode);
    },
    invoiceBarcodeSearch(params) {
        return Api.get("/extra/invoice/barcode/" + params.barcode);
    },

    delete(params) {
        return Api.delete("/stock_takes/", { params: params });
    }

};