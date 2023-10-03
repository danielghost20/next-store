"use client";

import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useSelector } from "react-redux";
import { Cart } from "@/interfaces/cart.interface";
import { closeCart } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import CartProduct from "./CartProduct";
import { AiOutlineShopping } from "react-icons/ai";
import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";

type StateProps = {
    cart: {
        cart: Cart[];
        showCart: boolean;
    };
};

export default function CartProducts() {
    const router = useRouter();
    const dispatch = useDispatch();
    const cartValue = useSelector((state: StateProps) => state.cart.showCart);
    const { cartItems } = useLocalStorage({ key: 'cart', initialState: [] })
    const handleRedirect = () => {
        router.push("/payment");
    };

    return (
        <div
            className={`fixed ${cartValue ? "right-0" : "-right-full"
                } duration-500 top-0 z-10 flex flex-col justify-between w-full h-screen max-w-xs px-2 overflow-y-scroll border-l-2  bg-background `}
        >
            <AiOutlineCloseCircle
                onClick={() => dispatch(closeCart(false))}
                className="absolute text-lg cursor-pointer right-2 top-2 text-foreground"
            />
            <div className="flex justify-between w-full mt-12">
                <span>Mi carro ({cartItems.length})</span>
                <Link href="/">Ver todo</Link>
            </div>
            {cartItems.length !== 0 && cartItems.length > 0 ?
                <div className="w-full h-full py-3 overflow-y-auto ">
                    {cartItems.map((prod) => (
                        <CartProduct
                            key={prod.id}
                            category={prod.category}
                            image={prod.image}
                            price={prod.price}
                            name={prod.name}
                            id={prod.id}
                            amount={prod.amount}
                        />
                    ))}
                </div>

                :
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-lg font-semibold text-center">
                        No tienes productos seleccionados
                    </p>
                    <AiOutlineShopping className="text-5xl" />
                </div>
            }

            <div className="flex flex-col w-full h-56 border-t-2 justify-evenly">
                <div className="flex justify-between w-full">
                    <span>Total de productos</span>
                    <span>$00.00</span>
                </div>
                <div className="flex justify-between w-full">
                    <span>Con envio</span>
                    <span>$00.00</span>
                </div>
                <div className="flex justify-between w-full">
                    <span>Total</span>
                    <span>$00.00</span>
                </div>
                <button
                    onClick={handleRedirect}
                    disabled={cartItems.length !== 0 ? false : true}
                    className={`${buttonVariants()} w-full`}
                >
                    Pagar
                </button>
            </div>
        </div>
    );
}
