import React from "react";
import "./item.css";

export default function Item({ id, name, cost }) {
    return (
        <>
            <div key={id} className='itemContainer'>
                <div className='name'>{name}</div>
                <div className='itemCost'>${cost}</div>
            </div>
        </>
    );
}
