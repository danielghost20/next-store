"use client"
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "./ui/Input";
import { FiSearch } from "react-icons/fi";
import { getProductsBySearch } from "@/services/productsPage.services";
import { Products } from "@/interfaces/product.interface";
import Link from "next/link";




export default function InputSearch() {

    const [inputText, setInputText] = useState<string>("");
    const [productsBySearch, setProductsBySearch] = useState<Products[]>([]);
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        getProductsBySearch()
            .then(res => setProducts(res))
            .catch(err => console.log('error', err))
    }, []);


    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
        const productsFilter = products.filter((item) =>
            item.title.toLowerCase().includes(inputText.toLowerCase())
        );

        if (productsFilter.length !== 0) {
            setProductsBySearch(productsFilter);
        } else {
            setProductsBySearch([]);
        }
    };

    return (
        <div className="relative flex items-center gap-3 px-2 border-2 rounded-md max-w-ax">
            <Input
                onChange={handleSearch}
                type="search"
                placeholder="Buscar"
                className="border-none outline-none bg-transparent w-96"
            />
            <FiSearch className="text-xl" />
            <div
                className={`absolute flex flex-col gap-3 w-full bg-background z-20  top-full left-0  rounded-md border-2 ${inputText === "" || productsBySearch.length <= 0
                    ? "h-0 hidden"
                    : "h-52 overflow-y-scroll"
                    }`}
            >
                {productsBySearch.length >= 1 && inputText !== ""
                    ? productsBySearch?.map((prod) => (
                        <Link
                            href={`/products/${prod.id}`}
                            className="h-full p-2 text-lg font-medium border-b-2 hover:bg-gray-300 dark:hover:bg-gray-800 "
                            key={prod.images[1]}
                        >
                            {prod.title}
                        </Link>
                    ))
                    : ""}
            </div>
        </div>
    );
}
