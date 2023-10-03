"use client"
import Image from "next/image"
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BiTrashAlt } from 'react-icons/bi'
import { useState } from "react"
import { Cart } from "@/interfaces/cart.interface"
import useLocalStorage from "@/hooks/useLocalStorage"

export default function CartProduct({ category, image, price, name, id }: Cart) {

    const [amount, setAmount] = useState<number>(1)
    const { removeItemFromCart } = useLocalStorage({ key: 'cart', initialState: [] })


    const handleDeleteProduct = (id: number) => {
        removeItemFromCart(id)
    }

    return (
        <div className="flex w-full p-4 gap-3 mt-4 border-2 rounded-md ">
            <Image
                src={image}
                className="object-cover w-16 h-16"
                width={50}
                height={50}
                alt={image}
            />
            <div className="flex flex-col gap-4">
                <h2>{name}</h2>
                <span className="text-sm">Categoria: {category}</span>
                <span className="flex items-center gap-2 p-1 text-xs text-foreground border-2 rounded-lg max-w-max">
                    <LiaShippingFastSolid className="text-base" /> Envio gratis
                </span>
                <div className="flex items-center justify-between w-full mt-1">
                    <div className="p-1 px-2 border-2 rounded-md max-w-max">
                        <span>- {amount} +</span>
                    </div>
                    <span>$ {price}</span>
                </div>
                <span className="flex items-center gap-2 ml-auto text-sm text-gray-500">
                    Remover producto | <BiTrashAlt onClick={() => handleDeleteProduct(id)} />
                </span>
            </div>

        </div>
    )
}