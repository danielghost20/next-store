"use client";
import { Button, buttonVariants } from "./ui/button";
import { Cart } from "@/interfaces/cart.interface";
import { useSelector } from "react-redux";
import { FaMoneyCheckAlt } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

type StateProps = {
    cart: {
        cart: Cart[];
        showCart: boolean;
    };
};

export function ButtonClient({ text }: { text: string }) {
    return <Button>{text}</Button>;
}

export function ButtonAdd({
    children,
    item,
}: {
    children: React.ReactNode;
    item: Cart;
}) {
    const productsInCart = useSelector((state: StateProps) => state.cart.cart);
    let isProductInCart: boolean = false;
    if (productsInCart.length !== 0 && productsInCart.length > 0) {
        isProductInCart = productsInCart.some((prod) => item.id === prod.id);
    }
    const { addItemToCart } = useLocalStorage({ key: "cart", initialState: [] });

    const handleCart = (e: React.MouseEvent<HTMLButtonElement>, prod: Cart) => {
        addItemToCart(prod);
        const button = e.currentTarget;
        button.disabled = true;
    };

    return isProductInCart ? (
        <div className="max-w-max rounded-md border-2 flex items-center justify-center px-3 py-1 opacity-40 cursor-not-allowed ">
            Agregado
        </div>
    ) : (
        <Button
            className="flex gap-2 max-w-max"
            onClick={(e) => handleCart(e, item)}
        >
            {isProductInCart ? "Agregado" : children}
        </Button>
    );
}

export default function ButtonBuy(item: Cart) {
    let isProductInCart: boolean = false;
    const productsInCart = useSelector((state: StateProps) => state.cart.cart);
    if (productsInCart.length !== 0 && productsInCart.length > 0) {
        isProductInCart = productsInCart.some((prod) => item.id === prod.id);
    }
    return isProductInCart ? (
        <div className="max-w-max rounded-md border-2 flex items-center justify-center px-3 py-1 opacity-40 cursor-not-allowed">
            Disponible en carro
        </div>
    ) : (
        <Link
            href="/"
            className={`${buttonVariants()} bg-background flex gap-2 text-foreground`}
        >
            Comprar <FaMoneyCheckAlt className="text-lg" />
        </Link>
    );
}
