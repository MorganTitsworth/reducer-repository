import React, { useState, useReducer, useContext, useEffect } from "react";

// create context to pass down props
const GroceryListContext = React.createContext();

// reducer for item state
function reducer(state, action) {
  switch (action.type) {
    // if dispatched action type 'addItem'
    case "addItem":
      // return current [].concat(new item with timestamp)
      return state.concat({
        name: action.name,
        completed: false,
        timestamp: action.timestamp,
      });
    // if dispatched action type 'complete'
    case "complete":
      // iterate through current []
      return state.map((item, index) => {
        // if index matches item
        if (index === action.index) {
          // return a new item with completed property changed
          return { ...item, completed: !item.completed };
        }
        // return item if nothing matches
        return item;
      });
    // no action.type applies
    default:
      return state;
  }
}

function Clock() {
  let date = new Date();
  const [time, setTime] = useState(date);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Current Time: {time.toLocaleTimeString()}</div>;
}

function App() {
  // use reducer and state hook
  const [state, dispatch] = useReducer(reducer, []);
  const [newItem, setNewItem] = useState("");

  // function to dispatch action type to reducer function
  function addItem() {
    const timestamp = new Date().toLocaleString(); // Generate timestamp
    dispatch({ type: "addItem", name: newItem, timestamp: timestamp });
    setNewItem("");
  }

  // function to dispatch action type to reducer function
  function complete(index) {
    dispatch({ type: "complete", index: index });
  }

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <Clock />
      <div>
        <input
          type="text"
          // value of input = ""
          value={newItem}
          // on change set newItem = current value in input
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add item"
        />
        {/* dispatch action type 'addItem' */}
        <button onClick={addItem}>Add</button>
      </div>
      <div>
        <h2>Incomplete</h2>
        {/* Provider passes in state, complete as props */}
        <GroceryListContext.Provider value={{ state, complete }}>
          {/* item has value of incomplete*/}
          <GroceryList incomplete={true} />
        </GroceryListContext.Provider>
      </div>
    </div>
  );
}

function GroceryList({ incomplete }) {
  // receives
  const { state, complete } = useContext(GroceryListContext);

  return (
    <ul>
      {/* map out state */}
      {state.map((item, index) => {
        // only if the item in state is incomplete
        if (incomplete && !item.completed) {
          return (
            // return a list item
            <li key={index}>
              <span>{item.name}</span>
              <span>Added: {item.timestamp}</span>{" "}
              <button onClick={() => complete(index)}>
                {!item.completed ? "Complete" : ""}
              </button>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}

export default App;
