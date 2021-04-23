import { SET_LOGIN, SET_LOGOUT } from "../types";

export const initialState = {
	email: null,
	name: null,
	token: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_LOGIN:
			return { ...state, ...payload };
		case SET_LOGOUT:
			return { ...state, id: null, email: null };
		default:
			return state;
	}
};
