"use client";

import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Cart } from "@/interfaces/cart.interface";
import CartProduct from "./CartProduct";
import { AiOutlineShopping } from "react-icons/ai";
import { useContext } from "react";
import CartContext from "@/context/CartContext";

export default function CartProducts() {
    const { cartState, items, features: { handleShowCart, totalProducts } } = useContext(CartContext)

    const handleCart = () => {
        if (cartState) {
            handleShowCart()
        }
    };



    return (
        <div
            className={`fixed ${cartState ? "right-0" : "-right-full"
                } duration-500 top-0 z-10 flex flex-col justify-between w-full h-screen max-w-xs px-2 overflow-y-scroll border-l-2  bg-background `}
        >
            <AiOutlineCloseCircle
                onClick={handleShowCart}
                className="absolute text-lg cursor-pointer right-2 top-2 text-foreground"
            />
            <div className="flex justify-between w-full mt-12">
                <span>Mi carro ({items.length})</span>
                <Link href="/">Ver todo</Link>
            </div>
            {items.length !== 0 ? (
                <div className="w-full h-full py-3 overflow-y-auto ">
                    {items.map((prod: Cart) => (
                        <CartProduct
                            key={prod.id}
                            category={prod.category}
                            image={prod.image}
                            price={prod.price}
                            name={prod.name}
                            id={prod.id}
                            amount={prod.amount}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-lg font-semibold text-center">
                        No tienes productos seleccionados
                    </p>
                    <AiOutlineShopping className="text-5xl" />
                </div>
            )}

            <div className="flex flex-col w-full h-56 border-t-2 justify-evenly">
                <div className="flex justify-between w-full">
                    <span>Total de productos</span>
                    <span>$ {totalProducts()}</span>
                </div>
                <div className="flex justify-between w-full">
                    <span>Con envio</span>
                    <span>$00.00</span>
                </div>
                <div className="flex justify-between w-full">
                    <span>Total</span>
                    <span>$ {totalProducts()}</span>
                </div>
                {
                    items.length > 0 ?
                        <Link
                            href='/payment/product-details'
                            onClick={handleCart}
                            className={`${buttonVariants()} w-full`}
                        >
                            Pagar
                        </Link>
                        :
                        <span className={`${buttonVariants()} opacity-30 w-full cursor-not-allowed`}>Pagar</span>
                }

            </div>
        </div>
    );
}
