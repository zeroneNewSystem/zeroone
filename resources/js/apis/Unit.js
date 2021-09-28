import Api from "./Api";

export default {
    getAll() {
        return Api.get("/units/");
    },

    create(unit) {
        return Api.post("/units", unit);
    },

    delete(id) {
        return Api.delete("/units/" + id);
    },
    update(unit) {
        return Api.put("/units", unit);
    }
};