// app/actions/actions.ts
'use client';

import { iProduct } from "../types/productType"; // Update import path
import { useState, useEffect } from "react";

export interface CartItem extends iProduct {
  quantity: number;
}

interface Cart {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  total: number;
}

// Local storage key
const CART_STORAGE_KEY = 'ecom_cart';

// Get initial cart from local storage
const getInitialCart = (): Cart => {
  if (typeof window === 'undefined') return DEFAULT_CART;
  const storedCart = localStorage.getItem(CART_STORAGE_KEY);
  return storedCart ? JSON.parse(storedCart) : DEFAULT_CART;
};

const DEFAULT_CART: Cart = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  total: 0,
};

// Calculate cart totals
const calculateTotals = (items: CartItem[]): Omit<Cart, 'items'> => {
  const subtotal = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    const discount = item.discountPercentage || 0;
    return sum + (price - (price * discount) / 100) * item.quantity;
  }, 0);

  return {
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal,
    total: subtotal, // Add shipping/tax calculations here if needed
  };
};

// Save to local storage and return updated cart
const updateCart = (items: CartItem[]): Cart => {
  const totals = calculateTotals(items);
  const newCart = { items, ...totals };
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
  return newCart;
};

// Cart actions
export const cartActions = {
  getCart: (): Cart => {
    return getInitialCart();
  },

  addToCart: (product: iProduct, quantity: number = 1): Cart => {
    const currentCart = getInitialCart();
    const existingItem = currentCart.items.find(item => item.name === product.name);

    // Stock validation
    if (product.stockLevel !== undefined && 
      (existingItem?.quantity || 0) + quantity > product.stockLevel) {
      return currentCart;
    }

    const newItems = existingItem
      ? currentCart.items.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      : [...currentCart.items, { ...product, quantity }];

    return updateCart(newItems);
  },

  removeFromCart: (productName: string): Cart => {
    const currentCart = getInitialCart();
    const newItems = currentCart.items.filter(item => item.name !== productName);
    return updateCart(newItems);
  },

  updateQuantity: (productName: string, newQuantity: number): Cart => {
    const currentCart = getInitialCart();
    const newItems = currentCart.items.map(item => {
      if (item.name === productName) {
        // Stock validation
        const maxQuantity = item.stockLevel !== undefined ? item.stockLevel : Infinity;
        return { ...item, quantity: Math.min(newQuantity, maxQuantity) };
      }
      return item;
    }).filter(item => item.quantity > 0); // Remove if quantity becomes 0

    return updateCart(newItems);
  },

  clearCart: (): Cart => {
    return updateCart([]);
  },
};

// Custom hook for cart state management
export const useCart = () => {
  const [cart, setCart] = useState<Cart>(DEFAULT_CART);

  useEffect(() => {
    setCart(getInitialCart());
  }, []);

  const syncCart = () => setCart(getInitialCart());

  return {
    ...cart,
    ...cartActions,
    syncCart,
  };
};