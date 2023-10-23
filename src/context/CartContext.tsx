"use client"; // Al usar hooks es necesario renderizar el componente del lado del cliente

import { Cart } from "@/interfaces/cart.interface"; // Es una interface que cotiene los tipos de datos que contiene un elemento del carrito
import { CartContextType } from "@/interfaces/context.interface";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"; // Dispatch es un tipo de dato que hace referencia para despachar acciones o un cambio de estado, SetStateAction es un tipo que hace referencia al valor o funcion que se pasa como argumento ala funcion del estado
import useLocalStorage from "@/hooks/useLocalStorage"; // Este es un custom hook el cual almacena data en el localstorage 
import React from "react"; // React es la libreria


const cartContext = createContext<CartContextType>({
  items: [],
  cartState: false,
  features: {
    addProductToCart(prod) {},
    handleShowCart() {},
    totalProducts() {
      return 0;
    },
    removeProduct() {},
    decrementProductAmount(id) {},
    incrementProductAmount(id) {},
  },
});

export const useCartContext = () => {
  return useContext(cartContext);
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useLocalStorage("cart", []) as [
    Cart[],
    Dispatch<SetStateAction<Cart[]>>
  ];

  const totalProducts = () => {
    const productsPrice = cartItems.map((item) => item.price);
    const productsAmount = cartItems.map((item) => item.amount);
    const cartProductsTotal = productsPrice.reduce((arr, cur) => arr + cur, 0);
    const cartAmountTotal = productsAmount.reduce((arr, cur) => arr + cur, 0);
    const total = cartAmountTotal * cartProductsTotal;
    return Number(total.toFixed(2));
  };

  const addProductToCart = (prod: Cart) => {
    setCartItems((prevCartItems) => [...prevCartItems, prod]);
  };

  const removeProduct = (id: number) => {
    const newItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newItems);
  };

  const incrementProductAmount = (id: number) => {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index >= 0) {
      const newCart = structuredClone(cartItems);
      newCart[index].amount += 1;
      setCartItems(newCart);
    }
  };

  const decrementProductAmount = (id: number) => {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index >= 0) {
      const newCart = structuredClone(cartItems);
      newCart[index].amount -= 1;
      setCartItems(newCart);
    }
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <cartContext.Provider
      value={{
        items: cartItems,
        cartState: showCart,
        features: {
          addProductToCart,
          handleShowCart,
          totalProducts,
          removeProduct,
          decrementProductAmount,
          incrementProductAmount,
        },
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;
