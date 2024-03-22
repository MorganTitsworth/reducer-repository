import React from "react";
import { useAppContext } from "../../AppContext";
import "./cart.css";
import Item from "../Item/Item";

export default function Cart() {
    const { cartState, cartDispatch } = useAppContext();

    return (
        <div className='cart'>
            <div className='itemsInCart'>
                {cartState.items.map((elm) => {
                    return (
                        <div key={elm.id}>
                            <Item id={elm.id} name={elm.name} cost={elm.cost} />
                            <p>{elm.count}</p>
                            <button
                                onClick={() =>
                                    cartDispatch({
                                        type: "REMOVE_ITEM",
                                        id: elm.id,
                                    })
                                }
                            >
                                Remove
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className='totalCost'>
                $
                {cartState.items
                    .reduce((acc, item) => acc + item.cost * item.count, 0)
                    .toFixed(2)}
            </div>
        </div>
    );
}
