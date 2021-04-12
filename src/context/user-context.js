// import React, { useReducer } from "react";
import CreateAppContext from "./context-creator";
const initialState = {
    id: null,
    email: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, ...action.payload };
        case "LOGOUT":
            return { ...state, id: null, email: null };
        default:
            return state;
    }
};

const loginUser = (dispatch) => ({ ...props }) => {
    dispatch({ type: "LOGIN", payload: { ...props } });
};

const logoutUser = dispatch => () => {
    dispatch({ type: "LOGOUT" });
};
// export const userContext = React.createContext();

// export const UserProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(userReducer, initialState);
//     const loginUser = ({ ...props }) => {
//         console.log("Login User", props);
//         dispatch({ type: "LOGIN", paylaod: { ...props } });
//     };


//     return <userContext.Provider value={{ user: state, loginUser, logoutUser }}>
//         {children}
//     </userContext.Provider >;
// };


export const { Context: userContext, Provider: UserProvider } = CreateAppContext(
    userReducer,
    {
        loginUser,
        logoutUser
    },
    initialState
);