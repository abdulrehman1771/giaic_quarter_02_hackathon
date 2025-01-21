"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define the structure of a cart item
interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl:string;
}

// Define the structure of the state
type CartState = CartItem[];

// Define the actions for the reducer
type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } };

// Create the reducer function
const CartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find((item) => item._id === action.payload._id);
      if (existingItem) {
        return state.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item._id !== action.payload);
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item._id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    default:
      // Ensure exhaustive checking
      const _exhaustiveCheck: never = action;
      throw new Error(
        `Unhandled action type: ${JSON.stringify(_exhaustiveCheck)}`
      );
  }
};

// Define the context value type
interface CartContextValue {
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
}

// Create the context with the appropriate type
const CartContext = createContext<CartContextValue | undefined>(undefined);

// Create the provider component
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer<React.Reducer<CartState, CartAction>>(
    CartReducer,
    []
  );

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
