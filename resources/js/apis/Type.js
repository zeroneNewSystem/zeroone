import Api from "./Api";

export default {
    getAll() {
        return Api.get("/types");
    },

    create(type) {
        return Api.post("/types", type);
    },

    delete(id) {
        return Api.delete("/types/" + id);
    },
    update(type) {
        return Api.put("/types", type);
    }
};