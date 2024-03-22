import {createContext, useReducer, useContext, useState, useEffect} from "react";

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
       
        default:
            return state;
    }
};

export const ToDoProvider = ({children}) => {
    const [state, dispatch] = useReducer(messageReducer, initialState);
    const [userOneMessage, setUserOneMessage] = useState("")
    const [userTwoMessage, setUserTwoMessage] = useState("")

    console.log(state);

    useEffect(() => {
        const contextMenuHandler = function(e) {
            if (e.target.tagName === "P" && e.target.querySelectorAll(".delete-button").length === 0) {
                //e.target.querySelectorAll(".delete-button").length === 0 prevent multiple actions such as multiple delete buttons

                // Prevent the default context menu behavior
            e.preventDefault();
            
             // Create a delete button
            var deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button'; // Add a class for easier identification to only allow one button declared in the if statement
            deleteButton.innerText = 'Delete';

            deleteButton.onclick = function() {
                 // Remove the paragraph when the delete button is clicked
              e.target.remove();
            };

            // Append the delete button to the paragraph
            e.target.appendChild(deleteButton);
          }
        };
    
        document.addEventListener('contextmenu', contextMenuHandler);
    
        return () => {
          document.removeEventListener('contextmenu', contextMenuHandler);
        };
      }, []); // Empty dependency array ensures this effect runs only once

    return (
        <ToDoContext.Provider 
            value = {{state, dispatch,userOneMessage, setUserOneMessage,userTwoMessage, setUserTwoMessage}}>  {/*passing the context of state,dispatch*/}
            {children}
        </ToDoContext.Provider>
    )
};

export const useToDo = () => useContext(ToDoContext)