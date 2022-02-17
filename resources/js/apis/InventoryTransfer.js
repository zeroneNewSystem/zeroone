import Api from "./Api";

export default {
    create() {
        return Api.get("/inventory_transfers/create");
    },
    store(inventory_transfer) {
        return Api.post("/inventory_transfers", inventory_transfer);
    },
    update(inventory_transfer) {
        return Api.put("/inventory_transfers", inventory_transfer);
    },
    postCreate(inventory_transfer) {
        return Api.post("/inventory_transfers/create", inventory_transfer);
    },
    get(params) {
        return Api.get("/inventory_transfers/", { params: params });
    },

    search(params) {
        return Api.get("/inventory_transfers/search", { params: params });
    },

    documentBarcodeSearch(params) {
        return Api.get("/extra/document/barcode/" + params.barcode);
    },
    invoiceBarcodeSearch(params) {
        return Api.get("/extra/invoice/barcode/" + params.barcode);
    },

    delete(params) {
        return Api.delete("/inventory_transfers/", { params: params });
    }

};