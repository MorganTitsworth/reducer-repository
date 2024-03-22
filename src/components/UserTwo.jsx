/* first created the layout of the design with information provided and coded after
HTML"
            <div className="message-board">
                <div className="userOne userContent left-side 1">
                    <p>Hello lcecnwnoiiscnsiocnesincies nciecnseicneinscoenscisncosecinicenoincioco</p>
                </div>
                <div className="userTwo userContent right-side 2">
                     <p>Hello lcecnwnoiiscnsiocnesincies nciecnseicneinscoenscisncosecinicenoincioco</p>
                </div>
            </div>

CSS: 
.userOne {
  background-color: blueviolet;
}

.userTwo {
  background-color: blue;
}

.userContent {
  width:47%;
  word-wrap:break-word;
  margin:2% 0;
  text-align: start;
  position: relative;

}

.left-side {
  border-radius: 0 10px 10px 0;
}

.right-side {
  border-radius: 10px 0 0 10px;
  left:100%;
  translate: -100%
}
*/

import React from 'react';
import {useToDo} from "../hooks/ToDoContext";

export function UserTwo (){
    const {state, dispatch} = useToDo(); //calling useToDo from ToDoContext as useContext
    const {userTwoMessage, setUserTwoMessage} = useToDo();
    const handleChange = (event) => {
        setUserTwoMessage(event.target.value);
      };
    return (
        <>
            <div className="user-board">
                <h1 className="user-one-header">User Two</h1>
                <div className="message-board">
                    {state.messages.map((message) => (
                              
                            <div key= {message.id} className= { `userContent ${message.user === "userTwo" ? 'userTwo  right-side': 'userOne left-side'}` }> {/*since I am combining a value with a string, I had to create it with {} */}
                                <p>{`${message.user === "userTwo" ? message.userTwoMessage: message.userOneMessage}`}</p>
                            </div>
                    ))}            
                </div>
                <textarea 
                    type="text" 
                    className="userTwoInput"
                    value={userTwoMessage}
                     onChange={handleChange}>
                </textarea>
                <button className="userTwoButton"
                    onClick = {() => {
                        dispatch ({
                            type:"USER", 
                            payload:{ 
                                id: Date.now(), 
                                userTwoMessage, 
                                user:"userTwo"
                            } 
                        });
                    setUserTwoMessage("") 
                    }}> {/*since I create payload as an object of two, it will return me as an object */} 
                    Send
                </button>
            </div>
        </>
    )
}