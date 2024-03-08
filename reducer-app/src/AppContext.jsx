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
                {
                    id: state.length + 1,
                    title: action.title,
                    done: false,
                    editing: false,
                },
            ];
        case "MARK_DONE":
            return state.map((elm) =>
                elm.id === action.id
                    ? {
                          id: elm.id,
                          title: elm.title,
                          done: !elm.done,
                          editing: elm.editing,
                      }
                    : elm
            );
        case "DELETE_TODO":
            return state.map((elm) => {
                if (elm.id === action.id) {
                    let deleteTodo = state.indexOf(elm);
                    state.splice(deleteTodo, 1);
                }
                return elm;
            });
        case "EDIT_TODO":
            return state.map((elm) =>
                elm.id === action.id
                    ? {
                          id: elm.id,
                          title: elm.title,
                          editing: !elm.editing,
                          done: elm.done,
                      }
                    : elm
            );
        case "UPDATE_TODO":
            return state.map((elm) =>
                elm.id === action.id
                    ? {
                          id: elm.id,
                          title: action.title,
                          editing: !elm.editing,
                          done: elm.done,
                      }
                    : elm
            );
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
