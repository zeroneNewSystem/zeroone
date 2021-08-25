import Api from "./Api";

export default {
    getAll() {
        return Api.get("/forms/");
    },

    create(form) {
        return Api.post("/forms/", form);
    },

    delete(id) {
        return Api.delete("/forms/" + id);
    },
    update(form) {
        return Api.put("/forms/", form);
    }
};