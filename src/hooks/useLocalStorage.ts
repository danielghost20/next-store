"use client";
import { Cart } from "@/interfaces/cart.interface";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getItems } from "@/redux/slices/cartSlice";

export default function useLocalStorage({
  key,
  initialState,
}: {
  key: string;
  initialState: [];
}) {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState<Cart[]>(initialState);

  useEffect(() => {
    const items = localStorage.getItem(key);
    if (items !== null) {
      const cart = JSON.parse(items)
      setCartItems(cart);
        dispatch(getItems(cart));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem(key, JSON.stringify(cartItems));
        dispatch(getItems(cartItems));
    }
  }, [cartItems]);

  const addItemToCart = (prod: Cart) => {
    const updatedCart = [...cartItems, prod];
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch(getItems(updatedCart))
  };

  const removeItemFromCart = (id: number) => {
    if (cartItems) {
      const updatedCart = cartItems.filter((item: Cart) => item.id !== id);
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      dispatch(getItems(updatedCart))
    }
  };
  return { addItemToCart, removeItemFromCart, cartItems };
}
