import Api from "./Api";

export default {

    store(purchase) {
        return Api.post("/purchases", purchase);
    },
    get(id) {
        return Api.get("/purchases/" + id);
    },

    update(purchase) {
        return Api.put("/purchases", purchase);
    },
    delete(params) {
        return Api.delete("/purchases/", { params: params });
    }
};