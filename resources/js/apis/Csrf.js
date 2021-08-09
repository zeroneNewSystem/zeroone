import Api from "./Api";

export default {
    getCookie(form) {
        return Api.get('/csrf-cookie');
    }

}