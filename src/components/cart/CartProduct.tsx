"use client"
import Image from "next/image"
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BiTrashAlt } from 'react-icons/bi'
import { useState } from "react"
import { Cart } from "@/interfaces/cart.interface"
import { useContext } from "react"
import CartContext from "@/context/CartContext"
import Counter from "../Counter"

export default function CartProduct({ category, image, price, name, id, amount }: Cart) {

    const { features: { removeProduct } } = useContext(CartContext)

    return (
        <div className="flex w-full gap-3 p-4 mt-4 border-2 rounded-md ">
            <Image
                src={image}
                className="object-cover w-16 h-16"
                width={50}
                height={50}
                alt={image}
            />
            <div className="flex flex-col gap-4">
                <h2>{name}</h2>
                <span className="text-sm">Categoria: {category.name}</span>
                <span className="flex items-center gap-2 p-1 text-xs border-2 rounded-lg text-foreground max-w-max">
                    <LiaShippingFastSolid className="text-base" /> Envio gratis
                </span>
                <div className="flex items-center justify-between w-full mt-1">
                    <Counter amount={amount} id={id} />
                    <span>$ {price}</span>
                </div>
                <span className="flex items-center gap-2 ml-auto text-sm text-gray-500">
                    Remover producto | <BiTrashAlt className="text-red-700 cursor-pointer " onClick={() => removeProduct(id)} />
                </span>
            </div>

        </div>
    )
}