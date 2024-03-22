import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            state.totalCost += action.cost;
            let contains = false;
            state.items.map((item) => {
                if (item.id === action.id) contains = true;
            });
            if (!contains) {
                return {
                    items: [
                        ...state.items,
                        {
                            id: action.id,
                            name: action.name,
                            cost: action.cost,
                            count: 1,
                        },
                    ],
                    totalCost: state.totalCost,
                };
            } else {
                state.items.map((item) => {
                    item.id === action.id
                        ? (item = {
                              id: item.id,
                              name: item.name,
                              cost: item.cost,
                              count: (item.count += 1),
                          })
                        : item;
                });
            }
            break;
        case "REMOVE_ITEM":
            state.totalCost -= action.cost;
            state.items.map((item) => {
                if (item.id === action.id) {
                    if (item.count > 1) item.count--;
                    else {
                        let deleteItem = state.items.indexOf(item);
                        state.items.splice(deleteItem, 1);
                    }
                }
                return item;
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
