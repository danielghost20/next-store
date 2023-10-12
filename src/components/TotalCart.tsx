"use client";
import CartContext from "@/context/CartContext";
import { buttonVariants } from "./ui/button";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { CreditCard } from "@/interfaces/payment.interface";
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function TotalCart() {
    const [activePaymentButton, setActivePaymentButton] = useState(false)
    const {
        items,
        features: { totalProducts },
    } = useContext(CartContext);
    const [userCreditCard, setUserCreditCard] = useLocalStorage('card', {}) as [CreditCard, Dispatch<SetStateAction<CreditCard>>]
    const path = usePathname()

    useEffect(() => {
        if (path.endsWith('payment-confirm')) {
            setActivePaymentButton(true)
        } else {
            setActivePaymentButton(false)
        }
    }, [path])


    return (
        <div className="w-full p-3 mt-5 border-2 border-t-8 rounded-md border-t-green-200 dark:border-t-[#C6DE41] ">
            <h2 className="py-2 text-xl font-semibold">Total de productos</h2>
            <div className="flex flex-col p-3 border-2 rounded-md">
                <h3 className="text-sm text-gray-600">Fecha de compra</h3>
                <span className="text-xl font-semibold">12 ago 23</span>
                <div className="flex items-center justify-between w-full py-3">
                    <h3 className="text-sm text-gray-600">Total de productos</h3>
                    <span>{items.length}</span>
                </div>
                <div>
                    <h3 className="my-2 text-xl font-semibold">Suma total</h3>
                    <div className="flex justify-between w-full py-1">
                        <span>Productos</span>
                        <span>$ {totalProducts()}</span>
                    </div>
                    <div className="flex justify-between w-full py-1">
                        <span>Cargo de envio</span>
                        <span>$ 00.00</span>
                    </div>
                    <div className="flex justify-between w-full py-1">
                        <span className="text-xl font-semibold text-green-700 dark:text-[#C6DE41]">
                            Total
                        </span>
                        <span className="text-xl font-semibold text-green-700 dark:text-[#C6DE41]">
                            $ {totalProducts()}
                        </span>
                    </div>
                </div>
                {activePaymentButton ? (
                    <Link href='/payment/payment-success' className={`${buttonVariants()} my-3`}>Comprar</Link>
                ) : (
                    <div className={`${buttonVariants()} my-3 opacity-40 cursor-not-allowed`}>Comprar</div>
                )}
                <span className="m-auto text-sm text-gray-500">
                    Hecho por <span className="font-semibold">Daniel Ramos</span>
                </span>
            </div>
        </div>
    );
}
