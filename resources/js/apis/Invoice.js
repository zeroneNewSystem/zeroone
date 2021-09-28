import Api from "./Api";

export default {

    store(invoice) {
        return Api.post("/invoices", invoice);
    },
    get(id) {
        return Api.get("/invoices/" + id);
    },

    update(invoice) {
        return Api.put("/invoices", invoice);
    },
    delete(params) {
        return Api.delete("/invoices/", { params: params });
    }
};