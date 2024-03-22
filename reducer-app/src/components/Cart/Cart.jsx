import React from "react";
import { useAppContext } from "../../AppContext";
import "./cart.css";

export default function Cart() {
    const { cartState, cartDispatch } = useAppContext();

    return (
        <>
            <div className='itemsInCart'>
                {cartState.items.map((item) => {
                    return (
                        <div className='item'>
                            <p>{item.name}</p>
                            <p>${item.cost}</p>
                            <p>X {item.count}</p>
                        </div>
                    );
                })}
            </div>
            <div className='totalCost'>{cartState.totalCost}</div>
        </>
    );
}
