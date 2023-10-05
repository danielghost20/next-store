"use client"

import { Cart } from "@/interfaces/cart.interface";
import { useState, useEffect } from "react";

export default function useLocalStorage(key: string, initialState: Cart[]) {
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  useEffect(() => {
    const items = localStorage.getItem(key);
    if (items) {
      setCartItems(JSON.parse(items));
    }
  }, []);


  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem(key, JSON.stringify(cartItems));
    }
  }, [cartItems])

  return [cartItems, setCartItems];

}
