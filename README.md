## useContext

useContext is used to pass down context as props using createContext(). GroceryListContext is created and the context is used to pass down the state to the GroceryList components.

## useEffect

within the clock component, useffect is used here to update the time every second by using setInterval. The useEffect mounts the component, renders and it clears the interval and the unmounts. (component life cycle)

## useReducer

useReducer is to manage the state of the incomplete grocery items, the user is able to used different actions such as 'addItem' to add an item to a list and 'complete'. these functions dispatch a specific action.type into the reducer function and it handles the code according to the case in the switch statement.
