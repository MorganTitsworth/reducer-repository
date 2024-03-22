In the CartContext.js file, the cartReducer modifies the state shape based on the different actions. 

This allows for organized state management.

When the ADD_ITEM is dispatched, it adds items to the cartItems array in (ProductList.js).

When the REMOVE_ITEM  is dispatched, the handleRemoveItem is called and removes the item(Cart.js).

The useReducer hook is used in the cartProvider to create state management. It takes the cartReducer function and inital state as arguments then returns the current state and dispatch function to send actionss to the reducer(CartContext.js).