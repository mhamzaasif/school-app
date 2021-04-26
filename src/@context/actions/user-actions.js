import { apis } from "../../@services";
import { SET_LOGIN, SET_LOGOUT } from "../types";

export const loginUser = async ({ dispatch, email, password, history }) => {
	const { data } = await apis.login({ email, password });
	console.log("[user-actions login data]", data);
	sessionStorage.setItem("user", JSON.stringify(data));
	await dispatch({ type: SET_LOGIN, payload: data });
	history.push("/");
};

export const logoutUser = ({ dispatch }) => {
	sessionStorage.removeItem("user");
	return dispatch({ type: SET_LOGOUT });
};
