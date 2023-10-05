"use client";
import { FiShoppingBag, FiSearch, FiGithub } from "react-icons/fi";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Input } from "@/components/ui/Input";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { getProductsBySearch } from "@/services/productsPage.services";
import { useContext, useEffect, useState } from "react";
import { Products } from "@/interfaces/product.interface";
import CartContext from "@/context/CartContext";

export default function ProductNabvar() {
    const [products, setProducts] = useState<Products[]>([]);
    const [productsBySearch, setProductsBySearch] = useState<Products[]>([])
    const [inputText, setInputText] = useState<string>("");

    useEffect(() => {
        getProductsBySearch()
            .then((res) => setProducts(res))
            .catch((err) => console.log("hubo un error"));
    }, []);

    const { features: { handleShowCart } } = useContext(CartContext)



    const handleSearch = (event: any) => {
        const text = event.target.value
        setInputText(text)
        const filterProductsByName = products?.filter((item) => {
            return item.title.toLowerCase().includes(inputText.toLowerCase())
        }
        );
        if (text !== "") {
            setProductsBySearch(filterProductsByName);
            console.log(productsBySearch)
        } else {
            setProductsBySearch([])
            console.log(productsBySearch)
        }
    };

    return (
        <header className="w-full h-20">
            <nav className="flex items-center justify-between w-full h-full px-3 bordder-b-2">
                <Link className="p-2 border-2 rounded-md" href="/">
                    <FiShoppingBag className="text-xl" />
                </Link>
                <div className="relative flex items-center gap-3 px-2 border-2 rounded-md">
                    <Input
                        onChange={handleSearch}
                        type="search"
                        placeholder="Buscar"
                        className="border-none outline-none w-96"
                    />
                    <FiSearch className="text-xl" />
                    <div
                        className={`absolute flex flex-col gap-3 w-full bg-background  top-full left-0  rounded-md border-2 ${inputText === "" || productsBySearch.length <= 0
                            ? "h-0 hidden"
                            : "h-52 overflow-y-scroll"
                            }`}
                    >
                        {
                            productsBySearch.length >= 1 &&
                                inputText !== ""
                                ? productsBySearch?.map((prod) => (
                                    <Link href={`/products/${prod.id}`}
                                        className="h-full p-2 text-lg font-medium border-b-2 hover:bg-gray-300 dark:hover:bg-gray-800 "
                                        key={prod.image}
                                    >
                                        {prod.title}
                                    </Link>
                                ))
                                : ""}
                    </div>
                </div>
                <div className="flex gap-2">
                    <a className="flex items-center p-2 border-2 rounded-md cursor-pointer">
                        <FiGithub className="text-xl" />
                    </a>
                    <span className="flex items-center p-1 border-2 rounded-md cursor-pointer">
                        <LiaShoppingCartSolid
                            onClick={handleShowCart}
                            className="text-3xl"
                        />
                    </span>
                    <ModeToggle />
                </div>
            </nav>
        </header>
    );
}
