import Api from "./Api";

export default {
    register(form) {
        return Api.post('/register', form);
    },
    login(form) {
        return Api.post('/login', form);
    },
    getUser() {
        return Api.get('/user');
    },
    logout() {
        return Api.post('/logout', form);
    },


}