import Api from "./Api";

export default {
    getAll() {
        return Api.get("/units/");
    },

    delete(id) {
        return Api.delete("/units/" + id);
    },
    update(unit) {
        return Api.put("/units/", unit);
    }
};