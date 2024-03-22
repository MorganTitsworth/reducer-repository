import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <div>{item.name}</div>
      <div>${item.price}</div>
      <button onClick={() => onRemove(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
