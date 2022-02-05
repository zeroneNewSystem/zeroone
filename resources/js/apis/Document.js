import Api from "./Api";

export default {

    store(purchase) {
        console.log('purchase', purchase)
        return Api.post("/purchases", purchase);
    },
    get(id) {
        return Api.get("/purchases/" + id);
    },

    getAll(params) {
        return Api.get("/purchases/all", { params: params });
    },

    update(purchase) {
        return Api.put("/purchases", purchase);
    },
    delete(params) {
        return Api.delete("/purchases", { params: params });
    }
};