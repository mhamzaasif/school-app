import React, { createContext, useReducer } from "react";
import { loginUser, logoutUser, setTheme } from "./actions";
import {
	userReducer,
	initialState as userRedcuerinitialState,
	themeReducer,
	initialState as themeRedcuerinitialState,
} from "./reducers";

export const rootContext = createContext();

export const RootContext = ({ children }) => {
	const [userState, userDispatch] = useReducer(
		userReducer,
		userRedcuerinitialState
	);
	const [themeState, themeDispatch] = useReducer(
		themeReducer,
		themeRedcuerinitialState
	);
	const _loginUser = (props) => loginUser({ ...props, dispatch: userDispatch });
	const _logoutUser = () => logoutUser({ dispatch: userDispatch });
	const _setTheme = (theme) => setTheme({ dispatch: themeDispatch, theme });

	return (
		<rootContext.Provider
			value={{
				// USER STATE
				user: userState,
				loginUser: _loginUser,
				logoutUser: _logoutUser,

				// THEME STATE
				theme: themeState,
				setTheme: _setTheme,
			}}
		>
			{children}
		</rootContext.Provider>
	);
};
