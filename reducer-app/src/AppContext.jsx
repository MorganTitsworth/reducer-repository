import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
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
                };
            } else {
                return {
                    items: state.items.map((item) =>
                        item.id === action.id
                            ? {
                                  id: item.id,
                                  name: item.name,
                                  cost: item.cost,
                                  count: item.count++,
                              }
                            : item
                    ),
                };
            }
        case "REMOVE_ITEM":
            let desired_item = state.items.filter(
                (item) => item.id === action.id
            )[0];

            if (desired_item.count - 1 == 0) {
                return {
                    items: state.items.filter((item) => item.id !== action.id),
                };
            } else {
                return {
                    items: state.items.map((item) =>
                        item.id !== action.id
                            ? item
                            : { ...desired_item, count: desired_item.count - 1 }
                    ),
                };
            }
    }
};

export const AppProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        items: [],
    });

    return (
        <AppContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
