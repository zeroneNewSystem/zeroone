import Api from "./Api";

export default {

    store(purchase_return) {
        console.log('purchase_return', purchase_return)
        return Api.post("/purchase_returns", purchase_return);
    },
    get(id) {
        return Api.get("/purchase_returns/" + id);
    },

    getAll(params) {
        return Api.get("/purchase_returns/all", { params: params });
    },

    update(purchase_return) {
        return Api.put("/purchase_returns", purchase_return);
    },
    delete(params) {
        return Api.delete("/purchase_returns", { params: params });
    }
};