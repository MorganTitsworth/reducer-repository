import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            state.totalCost += action.cost;
            return [
                ...state.items,
                {
                    id: action.id,
                    name: action.name,
                    cost: action.cost,
                    count: 1,
                },
            ];
        case "ADD_ANOTHER":
            return state.items.map((item) => {
                if (item.id === action.id) item.count++;
                return item;
            });
        case "REMOVE_ITEM":
            state.totalCost -= action.cost;
            return state.items.map((item) => {
                if (item.id === action.id) {
                    if (item.count > 1) item.count--;
                    else {
                        state.items.splice(state.items.indexOf(item), 1);
                        return state;
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
