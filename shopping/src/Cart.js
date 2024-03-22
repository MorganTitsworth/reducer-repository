import React from 'react';
import CartItem from './CartItem';
import { useCart } from './CartContext';
import ProductList from './ProductList'; 

const Cart = () => {
  const { state, dispatch } = useCart();

  //removes items from cart
  const handleRemoveItem = item => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {state.cartItems.map(item => (
          <CartItem key={item.id} item={item} onRemove={handleRemoveItem} />
        ))}
      </div>
      <div className="total">Total: ${state.total}</div>
      <ProductList />
    </div>
  );
};

export default Cart;
