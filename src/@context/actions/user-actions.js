import { useApis } from "../../@services";
import { SET_LOGIN, SET_LOGOUT } from "../types";

export const loginUser = async ({ dispatch, email, password, history }) => {
	const { login } = useApis();
	const { data } = await login({ email, password });
	await dispatch({ type: SET_LOGIN, payload: data });
	history.push("/");
};

export const logoutUser = ({ dispatch }) => {
	return dispatch({ type: SET_LOGOUT });
};
