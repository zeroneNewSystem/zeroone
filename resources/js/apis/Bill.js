import Api from "./Api";

export default {
    store(bill, route) {
        console.log("bill", bill);
        return Api.post("/" + route, bill);
    },
    get(id, route, document_type_id) {
        return Api.get("/" + route + "/" + id, { params: { document_type_id: document_type_id } });
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