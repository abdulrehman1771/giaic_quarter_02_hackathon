// app/actions/actions.ts
'use client';

import { iProduct } from "../types/productType"; // Update import path as needed
import { useState, useEffect } from "react";

// Define an extended interface in case product has these extra properties
interface ExtendedProduct extends iProduct {
//   id: number;
  color?: string;
  size?: string;
}

export interface CartItem extends iProduct {
  // id is assumed to be provided by iProduct or ExtendedProduct
  quantity: number;
  color: string;
  size: string;
}

interface Cart {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  total: number;
}

// Local storage key
const CART_STORAGE_KEY = 'ecom_cart';

// Default cart structure
const DEFAULT_CART: Cart = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  total: 0,
};

// Get initial cart from local storage
const getInitialCart = (): Cart => {
  if (typeof window === 'undefined') return DEFAULT_CART;
  const storedCart = localStorage.getItem(CART_STORAGE_KEY);
  return storedCart ? JSON.parse(storedCart) : DEFAULT_CART;
};

// Calculate cart totals based on items
const calculateTotals = (items: CartItem[]): Omit<Cart, 'items'> => {
  const subtotal = items.reduce((sum, item) => {
    // Ensure price is a number by stripping non-numeric characters
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    const discount = item.discountPercentage || 0;
    return sum + (price - (price * discount) / 100) * item.quantity;
  }, 0);

  return {
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal,
    total: subtotal, // Update with shipping/tax if needed
  };
};

// Save updated items to local storage and return the new cart
const updateCart = (items: CartItem[]): Cart => {
    // console.log("Updating cart with items:", items); // Debug log
    const totals = calculateTotals(items);
    const newCart = { items, ...totals };
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
    return newCart;
  };

// Cart actions for managing cart state
export const cartActions = {
  getCart: (): Cart => {
    return getInitialCart();
  },

  addToCart: (product: iProduct, quantity: number = 1): Cart => {
    const currentCart = getInitialCart();
    const existingItem = currentCart.items.find(item => item.name === product.name);

    // Stock validation: prevent adding beyond available stock
    if (product.stockLevel !== undefined &&
        (existingItem?.quantity || 0) + quantity > product.stockLevel) {
      return currentCart;
    }

    // Cast product to ExtendedProduct so we can access color and size
    const extendedProduct = product as ExtendedProduct;

    // When adding a new product, ensure all required fields are provided.
    const newProduct: CartItem = existingItem
      ? { ...existingItem } // For existing items, we'll update quantity below.
      : {
          ...product,
          quantity,
          // Assuming product has an id (if not, you'll need to generate one)
          // Provide default values if color or size are not available.
          color: extendedProduct.color || "defaultColor",
          size: extendedProduct.size || "defaultSize",
        };

    const newItems = existingItem
      ? currentCart.items.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      : [...currentCart.items, newProduct];

    return updateCart(newItems);
  },

  removeFromCart: (productId: string): Cart => {
    const currentCart = getInitialCart();
    // console.log("Before Removal:", currentCart.items); // Debug log
    
    // ✅ Ensure that only the selected item is removed
    const newItems = currentCart.items.filter(item => item._id !== productId);
    
    // console.log("After Removal:", newItems); // Debug log
    
    return updateCart(newItems);
  },
  
  

  updateQuantity: (productName: string, newQuantity: number): Cart => {
    const currentCart = getInitialCart();
    const newItems = currentCart.items
      .map(item => {
        if (item.name === productName) {
          const maxQuantity = item.stockLevel !== undefined ? item.stockLevel : Infinity;
          return { ...item, quantity: Math.min(newQuantity, maxQuantity) };
        }
        return item;
      })
      .filter(item => item.quantity > 0); // Remove items if quantity becomes 0

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
    // Rename 'items' to 'cartItems' so components can access cart items as cartItems
    cartItems: cart.items,
    totalItems: cart.totalItems,
    subtotal: cart.subtotal,
    total: cart.total,
    ...cartActions,
    syncCart,
  };
};
