"use client";

import { Cart } from "@/interfaces/cart.interface";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import React from "react";

type CartContextType = {
    items: Cart[];
    cartState: boolean;
    features: {
        addProductToCart: (prod: Cart) => void;
        handleShowCart: () => void;
        totalProducts: () => number;
        removeProduct: (id: number) => void;
        incrementProductAmount: (id: number) => void;
        decrementProductAmount: (id: number) => void;
    };
};

const cartContext = createContext<CartContextType>({
    items: [],
    cartState: false,
    features: {
        addProductToCart(prod) { },
        handleShowCart() { },
        totalProducts() {
            return 0;
        },
        removeProduct() { },
        decrementProductAmount(id) { },
        incrementProductAmount(id) { },
    },
});

export const useCartContext = () => {
    return useContext(cartContext)
}

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [showCart, setShowCart] = useState<boolean>(false);
    const [cartItems, setCartItems] = useLocalStorage("cart", []) as [
        Cart[],
        Dispatch<SetStateAction<Cart[]>>
    ];

    const totalProducts = () => {
        const productsPrice = cartItems.map((item) => item.price);
        const productsAmount = cartItems.map(item => item.amount)
        const cartProductsTotal = productsPrice.reduce((arr, cur) => arr + cur, 0);
        const cartAmountTotal = productsAmount.reduce((arr, cur) => arr + cur, 0)
        const total = cartAmountTotal * cartProductsTotal
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
