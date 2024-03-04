import {createContext, useState} from "react";

const Context = createContext<any | null>(null);

const ContextProvider = ({ children }: any) => {
    const state = useState<any | null>('dark');
    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };