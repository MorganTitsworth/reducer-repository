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

    function handleAdd(id, name, cost) {
        let contains = false;
        cartState.items.forEach((item) => {
            if (item.id === id) contains = true;
        });

        if (contains) {
            cartDispatch({
                type: "ADD_ANOTHER",
                id: id,
            });
        } else {
            cartDispatch({
                type: "ADD_ITEM",
                id: id,
                name: name,
                cost: cost,
            });
        }
    }

    return (
        <div className='app-container'>
            <div className='itemContainer'>
                {items.map((elm) => {
                    return (
                        <>
                            <Item id={elm.id} name={elm.name} cost={elm.cost} />
                            <button
                                onClick={handleAdd(elm.id, elm.name, elm.cost)}
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
