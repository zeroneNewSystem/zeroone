import axios from "axios";
let getUrl = window.location;

let Api = axios.create({
    baseURL: getUrl.protocol + "//" + getUrl.host + "/api",
});

export default Api;