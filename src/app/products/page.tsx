"use client";

import Link from "next/link";
import { FiGithub, FiShoppingBag, FiSearch } from "react-icons/fi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { ModeToggle } from "../../components/ui/ModeToggle";
import { Input } from "../../components/ui/Input";
import {
    getCategories,
    getProductsByCategoryOrAll,
} from "@/services/productsPage.services";
import ProductOfert from "@/components/ProductOfert";
import AccordionOptions from "@/components/AccordionOptions";
import SliderPrice from "@/components/SliderPrice";
import { buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Categories, Products } from "@/interfaces/product.interface";

export default function Products() {
    const [category, setCategory] = useState<number | null>(null);
    const [categories, setCategories] = useState<Categories[] | null>(null);
    const [products, setProducts] = useState<null | Products[]>(null);

    useEffect(() => {
        getProductsByCategoryOrAll(category)
            .then((res) => setProducts(res))
            .catch((err) => console.log("error no se encontraron productos"));
    }, [category]);

    useEffect(() => {
        getCategories()
            .then((res) => setCategories(res))
            .catch((err) => console.log("ocurrio un error"));
    }, []);

    return (
        <>
            <header className="fixed top-0 w-full h-20 border-b-2 bg-background">
                <nav className="flex items-center justify-between w-full h-full px-3 bordder-b-2">
                    <Link className="p-2 border-2 rounded-md" href="/">
                        <FiShoppingBag className="text-xl" />
                    </Link>
                    <div className="flex items-center gap-3 border-2 rounded-md px-2 pý-5">
                        <Input
                            type="search"
                            placeholder="Buscar"
                            className="border-none outline-none w-96"
                        />
                        <FiSearch className="text-xl" />
                    </div>
                    <div className="flex gap-2">
                        <a className="flex items-center p-2 border-2 rounded-md">
                            <FiGithub className="text-xl" />
                        </a>
                        <span className="flex items-center p-1 border-2 rounded-md">
                            <LiaShoppingCartSolid className="text-3xl" />
                        </span>
                        <ModeToggle />
                    </div>
                </nav>
            </header>

            <main className="flex w-full h-screen pt-20 overflow-hidden">
                <div className="w-full h-full max-w-xs px-3 py-4 mr-2 overflow-y-scroll border-r-2 bg-background">
                    <h2 className="text-xl text-left">Filtrar productos</h2>
                    <AccordionOptions
                        title="Categorias"
                        options={categories}
                        setValue={setCategory}
                    />
                    <SliderPrice defaultValue={[100]} />
                    <button className={`${buttonVariants()} max-w-max ml-auto`}>
                        Aplicar
                    </button>
                </div>
                <div className="flex flex-wrap w-full gap-5 mt-2 overflow-y-scroll">
                    {products?.map((product) => (
                        <ProductOfert
                            id={product.id}
                            description={product.description}
                            cardStyles="w-96 rounded-md border-2 h-96 p-3"
                            image={product.images[0]}
                            price={product.price}
                            productName={product.title}
                            key={product.id}
                            category={product.category.name}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}
