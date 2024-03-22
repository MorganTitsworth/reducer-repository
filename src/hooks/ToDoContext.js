import {createContext, useReducer, useContext, useState} from "react";

const ToDoContext = createContext(); //declare a vaiable to create context

const initialState = { //Big Picture
    messages:[]
}

const messageReducer = (state, action) => {
    switch (action.type) {
        case "USER":
            return {
                messages: [...state.messages,action.payload], //state.messages is the original and action is whats added
            };
        case "USER_TWO":
            return {
                messages: [...state.messages,action.payload], //everything that was there ( ...state.todo) and then some(action.payload)
            };
        case "REMOVE_TODO":
            return {
                messages:state.messages.filter((todo) => todo.id !== action.payload.id), //filter out payload.id
            };
        default:
            return state;
    }
};

export const ToDoProvider = ({children}) => {
    const [state, dispatch] = useReducer(messageReducer, initialState);
    const [userOneMessage, setUserOneMessage] = useState("")
    const [userTwoMessage, setUserTwoMessage] = useState("")

    console.log(state, setUserTwoMessage);
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
          alert("You've tried to open context menu"); //here you draw your own menu
          e.preventDefault();
        }, false);
    }
    return (
        <ToDoContext.Provider 
            value = {{state, dispatch,userOneMessage, setUserOneMessage,userTwoMessage, setUserTwoMessage}}>  {/*passing the context of state,dispatch*/}
            {children}
        </ToDoContext.Provider>
    )
};

export const useToDo = () => useContext(ToDoContext)