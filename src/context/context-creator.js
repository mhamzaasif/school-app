// TODO
// implement DRY principal for creating context

import React from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
    return <Context.Provider>
        {children}
    </Context.Provider>;
};