// AppContext.js
import React, { createContext, useContext, useReducer, useState } from "react";

const AppContext = createContext();

const initialState = {
  ideas: [],
  categories: ["Work", "Personal", "Study"],
  filter: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_IDEA":
      return {
        ...state,
        ideas: [...state.ideas, { ...action.payload, completed: false }],
      };
    case "TOGGLE_IDEA":
      return {
        ...state,
        ideas: state.ideas.map((idea, index) =>
          index === action.payload
            ? { ...idea, completed: !idea.completed }
            : idea
        ),
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        ideas: state.ideas.map((idea, index) =>
          index === action.payload
            ? { ...idea, decoration: !idea.decoration }
            : idea
        ),
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filter, setFilter] = useState(null);

  return (
    <AppContext.Provider value={{ state, dispatch, filter, setFilter }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
