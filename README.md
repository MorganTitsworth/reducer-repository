# reducer-repository

## useReducer

I created two seperate useReducer functions. One handles the theme state, which allows the user to change the background of the todo app to a random photo that corresponds to the color they choose. 

The second useReducer function handles the todo list state. Allows the user to add, mark done, and delete tasks. I plan to impliment editing a task as a functionality late, as I plan to make this a full flushed out personal project. 

## useContext

I used useContext to create an AppContext which passes both reducer functions and state values down the component tree. Allowing all children components to access whichever state/dispatch function they may need.

## useEffect

I used useEffect to make an axios call to the Unsplash API. I combined the theme state from my reducer, to make custom API calls everytime a user clicks on a different theme button. Since the theme state is within the dependancy array in the useEffect function, every time the state is updated, new api call is made to retrieve a new background photo based on the state, and the background image re-rendered. 