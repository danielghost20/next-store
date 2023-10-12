"use client";
import { Button, buttonVariants } from "./ui/button";
import { Cart } from "@/interfaces/cart.interface";
import { FaMoneyCheckAlt } from "react-icons/fa";
import Link from "next/link";
import CartContext from "@/context/CartContext";
import { useContext, useState, useCallback, useEffect } from "react";

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
    const [isProductInCart, setIsProductInCart] = useState<boolean>(false);
    const {
        features: { addProductToCart },
        items,
    } = useContext(CartContext);

    useEffect(() => {
        setIsProductInCart(items.some((prod) => item.id === prod.id));
    }, [items])

    const handleCart = useCallback(() => {
        addProductToCart(item);
    }, [addProductToCart, item]);

    return isProductInCart ? (
        <div className="flex items-center justify-center px-3 py-1 border-2 rounded-md cursor-not-allowed max-w-max opacity-40 ">
            Agregado
        </div>
    ) : (
        <Button className="flex gap-2 max-w-max" onClick={handleCart}>
            {children}
        </Button>
    );
}

export default function ButtonBuy(item: Cart) {
    const [isProductInCart, setIsProductInCart] = useState<boolean>(false);
    const { items } = useContext(CartContext);

    useEffect(() => {
        setIsProductInCart(items.some((prod) => item.id === prod.id));
    }, [items])
    return isProductInCart ? (
        <div className="flex items-center justify-center px-3 py-1 border-2 rounded-md cursor-not-allowed max-w-max opacity-40">
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
