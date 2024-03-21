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
    const { cartState, cartDispatch } = useAppContext();

    useEffect(() => {
        console.log(cartState);
    }, [cartState]);

    return (
        <div className='app-container'>
            <div className='itemContainer'>
                {items.map((elm) => {
                    return (
                        <>
                            <Item
                                key={elm.id}
                                id={elm.id}
                                name={elm.name}
                                cost={elm.cost}
                            />
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
                        </>
                    );
                })}
            </div>
            <div className='cartContainer'>
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
