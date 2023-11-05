"use client"

import Product from "@/components/Product";
import { getSimilarProductsByCategory } from "@/services/productsPage.services";
import Navbar from "@/components/Navbar";
import SelectItems from "@/components/SelectItems";
import { getCategories } from "@/services/productsPage.services";
import { useEffect, useState } from "react";
import { Category, Products } from "@/interfaces/product.interface";

export default function ProductsPage() {

    const [categories, setCategories] = useState<Category[]>([])
    const [products, setProducts] = useState<Products[]>([])
    const [category, setCategory] = useState<number>(0)


    useEffect(() => {
        getCategories()
        .then(res => setCategories(res))
        .catch(err => console.log('ocurrio un error: ', err))
    }, [])

    useEffect(() => {
        getSimilarProductsByCategory(category)
        .then(res => setProducts(res))
        .catch(err => console.log('ocurrio un error: ', err))
    }, [category])



    return (
        <>
            <header className="fixed z-10 top-0 w-full h-20 border-b-2 bg-background">
                <Navbar search={true} />
            </header>

            <main className=" w-full pt-20">
                <div className="w-full px-5 flex justify-between items-center">
                    <span>Catalogo de productos</span>
                    <SelectItems categories={categories} setCategory={setCategory} />
                </div>
                <div className="flex flex-wrap justify-center w-full gap-5 mt-2">
                    {
                        products.map((product) => (
                            <Product
                                id={product.id}
                                description={product.description}
                                cardStyles="w-96 rounded-md border-2 h-96 p-3"
                                image={product.images[0]}
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
