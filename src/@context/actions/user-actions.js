import { apis } from "../../@services";
import { SET_LOGIN, SET_LOGOUT } from "../types";

export const loginUser = async ({ dispatch, username, password, history }) => {
    console.log(username, password);
    const { data } = await apis.login({ username, password });
    await dispatch({ type: SET_LOGIN, payload: data });
    history.push("/");
};

export const logoutUser = ({ dispatch }) => {
    return dispatch({ type: SET_LOGOUT });
};