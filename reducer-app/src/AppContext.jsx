import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
    }
};

export const AppProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, []);

    return (
        <AppContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
