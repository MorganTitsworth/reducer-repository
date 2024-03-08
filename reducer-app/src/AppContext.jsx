import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHT":
            return "white";
        case "DARK":
            return "dark";
        case "RED":
            return "red";
        case "BLUE":
            return "blue";
        case "GREEN":
            return "green";
        default:
            return state;
    }
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                { id: state.length + 1, title: action.title, done: false },
            ];
        case "MARK_DONE":
            return state.map((elm) =>
                elm.id === action.id
                    ? { id: elm.id, title: elm.title, done: !elm.done }
                    : elm
            );
        case "DELETE_TODO":
            return state.map((elm) => {
                if(elm.id === action.id){
                    let deleteTodo = state.indexOf(elm)
                    console.log(state.splice(deleteTodo, 1))
                    console.log(state);
                }
                return elm;
            })
        default:
            return state;
    }
};

export const AppProvider = ({ children }) => {
    const [theme, themeDispatch] = useReducer(themeReducer, "light");
    const [todos, todoDispatch] = useReducer(todoReducer, []);

    return (
        <AppContext.Provider
            value={{ theme, themeDispatch, todos, todoDispatch }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
