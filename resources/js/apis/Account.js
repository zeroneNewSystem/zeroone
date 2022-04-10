import Api from "./Api";

export default {
    cashAndBanks() {
        return Api.get("/accounts/cashAndBanks");
    },
    get() {
        return Api.get("/accounts/");
    },
    types() {
        return Api.get("/accounts/types");
    },
    delete(id) {
        return Api.delete("/accounts/" + id);
    },
    archive(id) {
        return Api.post("/accounts/archive/" + id);
    },

    create(account) {
        return Api.post("/accounts/", account);
    },
    update(account) {
        return Api.put("/accounts/", account);
    },
    showAccountsByType(type) {
        return Api.get("/accounts/type/" + type);
    },
    postCreate(product) {
        return Api.post("/products/create", product);
    },

    moneyMoveCreate(acount_types) {
        return Api.get("/money_moves/create", { params: acount_types });
    },
    moneyMoveStore(money_move) {
        return Api.post("/money_moves", money_move);
    },
    moneyMoveUpdate(money_move) {
        return Api.put("/money_moves", money_move);
    },
    getMoneyMoves() {
        return Api.get("/money_moves");
    },
    moneyMoveDelete(id) {
        return Api.delete("/money_moves/" + id);
    },
    getJurnalEntries() {
        return Api.get("/journal_entries");
    },
    getGeneralLedgers(params) {
        return Api.get("/general_ledgers", { params: params });
    }
};