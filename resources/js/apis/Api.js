import axios from "axios";
let getUrl = window.location;

let Api = axios.create({
    baseURL: getUrl.protocol + "//" + getUrl.host + "/api",
    headers: {
        'Content-Type': 'application/json',
        'Accept-Language': localStorage.getItem('token') || 'ar'
    },
});
Api.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export default Api;