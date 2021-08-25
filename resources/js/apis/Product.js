import Api from "./Api";

export default {

    getCreate() {
        return Api.get("/products/create");
    },
    postCreate(product) {
        return Api.post("/products/create", product);
    },
    get(params) {

        return Api.get("/products/", { params: params });
    },

    delete(params) {
        return Api.delete("/products/", { params: params });
    },


};