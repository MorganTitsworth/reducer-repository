import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            state.totalCost += action.cost;
            let contains = false;
            state.items.map((item) => {
                if (item.id === id) contains = true;
            });
            if (!contains) {
                return [
                    ...state.items,
                    {
                        id: action.id,
                        name: action.name,
                        cost: action.cost,
                        count: 1,
                    },
                ];
            } else {
                state = state.items.map((item) => {
                    if (item.id === action.id) item.count++;
                    return item;
                });
            }
        case "REMOVE_ITEM":
            state.totalCost -= action.cost;
            return state.items.map((item) => {
                if (item.id === action.id) {
                    if (item.count > 1) item.count--;
                    else {
                        let deleteItem = state.items.indexOf(item);
                        state.items.splice(deleteItem, 1);
                    }
                } else return item;
            });
    }
};

export const AppProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        items: [],
        totalCost: 0,
    });

    return (
        <AppContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
