import Api from "./Api";

export default {
    store(purchase, route) {
        console.log("purchase", purchase);
        return Api.post("/" + route, purchase);
    },
    get(id, route) {
        return Api.get("/" + route + "/" + id);
    },

    getAll(params, route) {
        return Api.get("/" + route + "/all", { params: params });
    },

    update(purchase, route) {
        return Api.put("/" + route, purchase);
    },
    delete(params, route) {
        return Api.delete("/" + route, { params: params });
    }
};