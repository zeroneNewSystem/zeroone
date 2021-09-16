import Api from "./Api";

export default {

    store(purchase) {
        return Api.post("/purchases", purchase);
    },
    get(params) {
        return Api.get("/purchases/", { params: params });
    },

    update(purchase) {
        return Api.put("/purchases", purchase);
    },
    delete(params) {
        return Api.delete("/purchases/", { params: params });
    }
};