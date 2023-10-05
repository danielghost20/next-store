"use client"
import CartContext from "@/context/CartContext"
import { useContext } from "react"

export default function Counter({ id, amount }: { id: number, amount: number }) {
    const { features: { decrementProductAmount, incrementProductAmount } } = useContext(CartContext)
    return (
        <div className="flex items-center justify-between w-20 px-2 py-1 border-2 rounded-md">
            <button onClick={() => decrementProductAmount(id)} className="text-sm">-</button>
            <span className="text-sm">{amount}</span>
            <button onClick={() => incrementProductAmount(id)} className="text-sm">+</button>
        </div>
    )
}