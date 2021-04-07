import React, { useReducer } from "react";

const initialState = {
    id: null,
    email: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, ...action.paylaod };
        case "LOGOUT":
            return { ...state, id: null, email: null };
        default:
            return state;
    }
};

export const userContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    const loginUser = ({ ...props }) => {
        console.log("Login User", props);
        dispatch({ type: "LOGIN", paylaod: { ...props } });
    };

    const logoutUser = () => {
        dispatch({ type: "LOGOUT" });
    };
    return <userContext.Provider value={{ user: state, loginUser, logoutUser }}>
        {children}
    </userContext.Provider >;
};
