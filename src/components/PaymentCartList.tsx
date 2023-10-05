"use client"
import CartContext from "@/context/CartContext"
import { useContext } from "react"
import { LiaShippingFastSolid } from 'react-icons/lia'
import Image from "next/image"

export default function PaymentCartList() {
    const { items } = useContext(CartContext)
    return (
        <>
            {
                items.map((item) => (
                    <div key={item.id} className="flex w-full gap-3 p-4 mt-4 border-2 rounded-md ">
                        <Image
                            src={item.image}
                            className="object-cover w-16 h-16"
                            width={50}
                            height={50}
                            alt={item.image}
                        />
                        <div className="flex flex-col gap-4">
                            <h2>{item.name}</h2>
                            <span className="text-sm">Categoria: {item.category}</span>
                            <span className="flex items-center gap-2 p-1 text-xs border-2 rounded-lg text-foreground max-w-max">
                                <LiaShippingFastSolid className="text-base" /> Envio gratis
                            </span>
                            <div className="flex items-center justify-between w-full mt-1">
                                <span>$ {item.price}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}