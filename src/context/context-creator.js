// TODO
// implement DRY principal for creating context
import { useReducer, createContext } from "react";


const CreateAppContext = (reducer, actions, defaultValues) => {
    const Context = createContext();
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValues);
        const boundedActions = Object.keys(actions).reduce((acc, action) => {
            const fn = actions[action](dispatch);
            return { ...acc, [action]: fn };
        }, {});
        return <Context.Provider value={{ state, ...boundedActions }}>
            {children}
        </Context.Provider>;
    };
    return { Context, Provider };

};

export default CreateAppContext;