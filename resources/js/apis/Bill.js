import Api from "./Api";

export default {
    store(bill, route) {
        console.log("bill", bill);
        return Api.post("/" + route, bill);
    },
    get(id, route) {
        return Api.get("/" + route + "/" + id);
    },

    getAll(params, route) {
        return Api.get("/" + route + "/all", { params: params });
    },

    update(bill, route) {
        return Api.put("/" + route, bill);
    },
    delete(params, route) {
        return Api.delete("/" + route, { params: params });
    }
};