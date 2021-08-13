import Api from "./Api";

export default {
    getCreate() {
        return Api.get("/products/create");
    },
    postCreate(product) {
        return Api.post("/products/create", product);
    }
};