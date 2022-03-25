import Api from "./Api";

export default {
    store(bill) {
        console.log("bill", bill);
        return Api.post("/bills", bill);
    },
    get(id, document_type_id) {
        return Api.get("/bills" + "/" + id, { params: { document_type_id: document_type_id } });
    },

    getAll(params) {
        return Api.get("/bills" + "/all", { params: params });
    },

    update(bill) {
        return Api.put("/bills", bill);
    },
    delete(params) {
        return Api.delete("/bills", { params: params });
    },
    getNewReference(params) {
        return Api.get("/bills/new", { params: params });

    }
};