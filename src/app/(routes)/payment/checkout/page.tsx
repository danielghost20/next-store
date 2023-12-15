"use client"

import Counter from "@/components/Counter";
import Navbar from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { useCartContext } from "@/context/CartContext";
import axios from "axios";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";
import { useSession } from "next-auth/react";



export default function CheckoutPage () {

    const {items,features: {totalProducts}} = useCartContext()
    const {data: session} = useSession()

    const testApi =  async () => {
        axios.post('http://localhost:3000/api/checkout', {
            products: items,
            user_data: {
                id: session?.user.id,
                user_name: session?.user.name,
                email: session?.user.email,
                total: totalProducts()
            }

        })
        .then(res => window.location = res.data.url)
        .catch(err => console.log(err))
    }
    return (
        <>
            <header>
                <Navbar search={false}/>
            </header>
            <main className="w-full p-3 max-w-screen-2xl m-auto">
                <div className="flex  gap-6">
                    <section className="w-full">
                        <ul className="border-t-2">
                            {
                                items.length !== 0 ?
                                items.map(prod => (
                                    <li key={prod.id}>
                                        <div className="w-full border-b-2 p-2 items-center justify-between h-28 flex">
                                            <div className="flex gap-2 items-center">
                                            <Image src={prod.image} alt="product_image" width={90} height={90} />
                                            <div className="flex flex-col">
                                                <span className="">{prod.category.name}</span>
                                                <span>{prod.name}</span>
                                            <span>$ {prod.price}</span>
                                            </div>
                                            </div>
                                            <Counter amount={prod.amount} id={prod.id}/>
                                            <TiDeleteOutline className="text-xl" />
                                        </div>
                                    </li>
                                ))
                                :
                                <div>No hay productos en carro</div>
                            }
                        </ul>
                    </section>
                    <div className="w-full max-w-sm h-72 rounded-md p-2">
                        <h2 className="text-2xl border-b-2 py-2">Resumen</h2>
                        <div className="flex justify-between mt-4 items-center">
                            <span>Subtotal</span>
                            <span>${totalProducts()} MNX</span>
                        </div>
                        <div className="flex items-center mt-4 justify-between border-b-2 py-2">
                            <span>Importe de envio</span>
                            <span>$ 00.00 MNX</span>
                        </div>
                        <div className="flex items-center mt-4 justify-between">
                            <span className="text-xl"> Total</span>
                            <span className="text-xl">$ {totalProducts()} MNX</span>
                        </div>
                        <button onClick={testApi} className={`${buttonVariants()} w-full mt-5 text-lg`}>Checkout</button>
                    </div>
                </div>
            </main>
        </>
    )
}