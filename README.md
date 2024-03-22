If any user types anything in the field and click send, the send will do a handleclick event which will use the dispatch function to layout message. in the dispatch I will have a case that which user is click submit to complete the task and have a 


A hook folder is created that has a javascript file that export ToDoContext. It creates a createContext named "TodoContext". It is being called as as function of useToDo to change in useContext. It have a function that declare what data will connect through different files under the App file. It is declaring a useReducer to load the messages and two useStates to store each message.

UseState are in both of the users, it is connecting through the useToDo information as a useContext. 

The textarea is where you write the messsage, and when you click the send button, it will return an object payload which has the id, message, and user. That information will go to the useReducer to store the message.