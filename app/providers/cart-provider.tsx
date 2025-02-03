// app/providers/cart-provider.tsx
'use client';

import { createContext, useContext } from 'react';
import { useCart } from '../actions/actions';

type CartContextType = ReturnType<typeof useCart>;

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const cart = useCart();
  return (
    <CartContext.Provider value={cart}>
        {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);