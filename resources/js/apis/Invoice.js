import Api from "./Api";

export default {

    store(invoice) {
        console.log('invoice', invoice)
        return Api.post("/invoices", invoice);
    },
    get(id) {
        return Api.get("/invoices/" + id);
    },

    getAll(params) {
        return Api.get("/invoices/all", { params: params });
    },

    update(invoice) {
        return Api.put("/invoices", invoice);
    },
    delete(params) {
        return Api.delete("/invoices/", { params: params });
    }
};