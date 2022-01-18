import Api from "./Api";

export default {

    store(bond) {
        console.log('bond', bond)
        return Api.post("/bonds", bond);
    },
    getOne(id) {
        return Api.get("/bonds/" + id);
    },
    create() {
        return Api.get("/bonds/create");
    },
    update(bond) {
        return Api.put("/bonds", bond);
    },
    delete(params) {
        return Api.delete("/bonds", { params: params });
    },
    deleteSupDoc(params) {
        return Api.delete("/bonds/sup_doc", { params: params });
    },
    getAll(params) {
        return Api.get("/bonds/all", { params: params });
    }
};