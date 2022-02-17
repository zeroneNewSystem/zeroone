import Api from "./Api";

export default {

    store(document_return) {
        console.log('document_return', document_return)
        return Api.post("/document_returns", document_return);
    },
    get(id) {
        return Api.get("/document_returns/" + id);
    },

    getAll(params) {
        return Api.get("/document_returns/all", { params: params });
    },

    update(document_return) {
        return Api.put("/document_returns", document_return);
    },
    delete(params) {
        return Api.delete("/document_returns", { params: params });
    }
};