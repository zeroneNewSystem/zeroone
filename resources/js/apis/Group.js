import Api from "./Api";

export default {
    getAll() {
        return Api.get("/groups/");
    },

    create(group) {
        return Api.post("/groups", group);
    },

    delete(id) {
        return Api.delete("/groups/" + id);
    },
    update(group) {
        return Api.put("/groups", group);
    }
};