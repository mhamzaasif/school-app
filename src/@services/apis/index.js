import Axios from "axios";
import endpoints from "./endpoints";
import api from "./api";

export const apis = {
	login: (data) => api(endpoints.login, data),
	getAllStudents: () => api(endpoints.getAllStudents),
	getAllTeachers: () => api(endpoints.getAllTeachers),
	getAllAdmins: () => api(endpoints.getAllAdmins),
};

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
