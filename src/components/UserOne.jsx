import React from 'react';
import {useToDo} from "../hooks/ToDoContext";

export function UserOne (){
    const {state, dispatch} = useToDo(); //calling useToDo from ToDoContext as useContext
    const {userOneMessage, setUserOneMessage} = useToDo();
    
    const handleChange = (event) => {
        setUserOneMessage(event.target.value);
      };

    return (
        <>
            <div className="user-board">
                <h1 className="user-one-header">User One</h1>
                <div className="message-board">
                {state.messages.map((message) => (     
                        <div key= {message.id} className= { `userContent ${message.user === "userOne" ? 'userOne  right-side': 'userTwo left-side'}` }> {/*since I am combining a value with a string, I had to create it with {} */}
                            <p>{`${message.user === "userOne" ? message.userOneMessage: message.userTwoMessage}`}</p>
                        </div>
                      ))}            
                  </div>
                  <textarea 
                      type="text" 
                      className="userOneInput"
                      value={userOneMessage}
                       onChange={handleChange}>
                  </textarea>
                  <button className="userOneButton"
                      onClick = {() => {
                          dispatch ({
                              type:"USER", 
                              payload:{ 
                                  id: Date.now(), 
                                  userOneMessage, 
                                  user:"userOne"
                              } 
                          });
                      setUserOneMessage("") 
                      }}> {/*since I create payload as an object of two, it will return me as an object */} 
                      Send
                  </button>
            </div>
        </>
    )
}