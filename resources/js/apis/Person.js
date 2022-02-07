import Api from "./Api";

export default {
    store(supplier, route) {
        return Api.post("/" + route, supplier);
    },
    update(supplier, route) {
        return Api.put("/" + route, supplier);
    },
    postCreate(supplier, route) {
        return Api.post("/" + route + "/create", supplier);
    },
    getOne(params, route) {
        return Api.get("/" + route + "/getOne", { params: params });
    },
    get(params, route) {

        return Api.get("/" + route, { params: params });
    },
    getByProductID(id, route) {
        return Api.get("/" + route + "/product/" + id);
    },

    search(params, route) {
        return Api.get("/" + route + "/search", { params: params });
    },

    barcodeSearch(params, route) {
        return Api.get("/router/" + params.barcode);
    },

    delete(params, route) {
        return Api.delete("/" + route + "/", { params: params });
    }
};