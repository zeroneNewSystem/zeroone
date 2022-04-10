import Api from "./Api";

export default {
    store(person) {
        return Api.post("people", person);
    },
    update(person) {
        return Api.put("people", person);
    },
    postCreate(person) {
        return Api.post("people" + "/create", person);
    },
    getOne(params) {
        return Api.get("people" + "/getOne", { params: params });
    },
    get(params) {
        return Api.get("people", { params: params });
    },
    getByProductID(id) {
        return Api.get("people" + "/product/" + id);
    },

    search(params) {
        return Api.get("people" + "/search", { params: params });
    },

    barcodeSearch(params) {
        return Api.get("/router/" + params.barcode);
    },

    delete(params) {
        return Api.delete("people" + "/", { params: params });
    }
};