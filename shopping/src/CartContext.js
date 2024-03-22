import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: [],
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    case 'UPDATE_TOTAL':
      const total = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return {
        ...state,
        total,
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'UPDATE_TOTAL' });
  }, [state.cartItems]);

  const handleAddToCart = product => {
    const existingItem = state.cartItems.find(item => item.id === product.id);

    if (existingItem) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: existingItem.id, quantity: existingItem.quantity + 1 } });
    } else {
      dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
    }

    dispatch({ type: 'UPDATE_TOTAL' });
  };

  const handleRemoveFromCart = item => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
    dispatch({ type: 'UPDATE_TOTAL' });
  };

  const contextValue = {
    state,
    dispatch,
    handleAddToCart,
    handleRemoveFromCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
