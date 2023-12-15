"use client"

import Product from "@/components/Product";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { getProducts } from "@/services/firebase/products.service";

export default function ProductsPage() {

    const [products, setProducts] = useState<DocumentData[] | undefined>(undefined)


    useEffect(() => {
        getProducts()
        .then(res => setProducts(res))
        .catch(err => console.log(err))
    }, [])

    if (!products) return <div>loading....</div>


    return (
        <>
            <header className="fixed z-10 top-0 w-full h-20 border-b-2 bg-background">
                <Navbar search={true} />
            </header>

            <main className=" w-full pt-20">
                <div className="flex flex-wrap justify-center w-full gap-5 mt-2">
                    {
                        products.map((product) => (
                            <Product
                                id={product.id}
                                description={product.description}
                                cardStyles="w-96 rounded-md border-2 h-96 p-3"
                                image={product.image}
                                price={product.price}
                                productName={product.title}
                                key={product.id}
                                category={product.category.name}
                            />
                        ))
                    }
                </div>
            </main>
        </>
    );
}
