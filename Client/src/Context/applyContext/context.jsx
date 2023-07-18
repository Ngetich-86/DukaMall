import { createContext,useEffect,useReducer } from "react";
import Reducer from "./Reducer";

//INITIAL STATE
const INITIAL_STATE = {
    ui: JSON.parse(localStorage.getItem("ui")) || null,

};

//CREATE CONTEXT
export const Context = createContext(INITIAL_STATE);

//CONTEXT PROVIDER
export const UIContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("ui", JSON.stringify(state.ui));
    }, [state.ui]);//state.user is the dependency

    return (
        <Context.Provider
            value={{
                ui: state.ui,
                dispatch
            }}
        >
            {children}
        </Context.Provider>
    );
};



// Path: Client\src\Components\context\applyContext\context.jsx