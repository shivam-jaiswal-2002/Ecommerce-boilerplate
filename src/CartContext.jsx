// CartContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
  favorites: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProductIndex = state.cart.findIndex((item) => item.id === action.payload.id);

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case 'REMOVE_FROM_CART':
      const updatedCart = state.cart.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        cart: updatedCart,
      };

    case 'INCREMENT_QUANTITY':
      const incrementedCart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      return {
        ...state,
        cart: incrementedCart,
      };

    case 'DECREMENT_QUANTITY':
      const decrementedCart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
      );

      return {
        ...state,
        cart: decrementedCart,
      };

    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case 'REMOVE_FROM_FAVORITES':
      const updatedFavorites = state.favorites.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        favorites: updatedFavorites,
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const incrementQuantity = (productId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: productId } });
  };

  const decrementQuantity = (productId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: productId } });
  };

  const addToFavorites = (product) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
  };

  const removeFromFavorites = (product) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
