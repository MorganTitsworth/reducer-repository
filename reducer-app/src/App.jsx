import { AppProvider, useAppContext } from "./AppContext";
import "./App.css";
import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";
import { useEffect } from "react";

const items = [
    { id: 1, name: "Laptop", cost: 1000 },
    { id: 2, name: "Smartphone", cost: 800 },
    { id: 3, name: "Headphones", cost: 100 },
    { id: 4, name: "Mouse", cost: 50 },
    { id: 5, name: "Keyboard", cost: 80 },
];

const Main = () => {
    const { cartDispatch } = useAppContext();

    return (
        <div className='app-container'>
            <div className='items'>
                <h2>Items</h2>
                {items.map((elm) => {
                    return (
                        <div key={elm.id} className='item'>
                            <Item id={elm.id} name={elm.name} cost={elm.cost} />
                            <button
                                onClick={() =>
                                    cartDispatch({
                                        type: "ADD_ITEM",
                                        id: elm.id,
                                        name: elm.name,
                                        cost: elm.cost,
                                    })
                                }
                            >
                                Add to Cart
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className='cartContainer'>
                <h2>Cart</h2>
                <Cart />
            </div>
        </div>
    );
};

function App() {
    return (
        <AppProvider>
            <Main />
        </AppProvider>
    );
}

export default App;
