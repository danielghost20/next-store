"use client"
import { FiShoppingBag, FiSearch, FiGithub } from "react-icons/fi";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Input } from "@/components/ui/Input";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { openCart } from "@/redux/slices/cartSlice";


export default function ProductNabvar() {
    const dispatch = useDispatch()
    const handleOpenCart = () => {
        dispatch(openCart(true))
    }

    return (
        <header className="w-full h-20">
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
                    <a className="flex items-center p-2 border-2 rounded-md cursor-pointer">
                        <FiGithub className="text-xl" />
                    </a>
                    <span className="flex items-center p-1 border-2 rounded-md cursor-pointer">
                        <LiaShoppingCartSolid onClick={handleOpenCart} className="text-3xl" />
                    </span>
                    <ModeToggle />
                </div>
            </nav>
        </header>
    )
}