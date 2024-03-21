import React from "react";
import { useAppContext } from "../../AppContext";
import "./cart.css";

export default function Cart() {
    const { cartState, cartDispatch } = useAppContext();

    return (
        <>
            <div className='cost'></div>
            <div className='itemsInCart'></div>
            <div className='totalCost'></div>
        </>
    );
}
