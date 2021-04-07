import endpoints from "./endpoints";
import api from "./api";

export const apis = {
    login: (data) => api(endpoints.login, data)
};