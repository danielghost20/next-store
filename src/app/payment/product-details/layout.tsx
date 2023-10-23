import React from "react";
import Link from "next/link"; // Componente nativo de NextJS
import { FiShoppingBag, FiGithub } from 'react-icons/fi' // Iconos de la libreria react-icons
import { ModeToggle } from "@/components/ui/ModeToggle"; // Boton para cambiar el tema de la web
import PaymentCartList from "@/components/PaymentCartList"; // Componente que renderiza todos lo productos en el carrito
import RoutesPayment from "@/components/RoutesPayment"; // Componente que muestra en que ruta se encuentra el usuario (direccion, tarjeta, o pagina de confirmacion)
import TotalCart from "@/components/TotalCart"; // Componente que muestra el total de todo el carrito de compras
import { PaymentProvider } from "@/context/PaymentContext"; // El provider que contiene la informacion de pago del usuario


type ChildrenProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: ChildrenProps) {
    return (
        <>
            <PaymentProvider>
                <header className="fixed top-0 w-full h-20 border-b-2 bg-background">
                    <nav className="flex items-center justify-between w-full h-full px-3 bordder-b-2">
                        <Link className="p-2 border-2 rounded-md" href="/">
                            <FiShoppingBag className="text-xl" />
                        </Link>
                        <div className="flex gap-2">
                            <a className="flex items-center p-2 border-2 rounded-md">
                                <FiGithub className="text-xl" />
                            </a>
                            <ModeToggle />
                        </div>
                    </nav>
                </header>
                <main className="w-full h-screen overflow-hidden">
                    <div className="flex justify-between">
                        <div className="w-full h-screen overflow-y-scroll">
                            <div className="w-full px-4 mt-24 ">
                                <RoutesPayment />
                            </div>
                            <div className="w-full ">{children}</div>
                        </div>
                        <div className="flex flex-col w-full h-screen max-w-md px-3 pt-20 overflow-y-scroll border-l-2">
                            <TotalCart />
                            <PaymentCartList />
                        </div>
                    </div>
                </main>
            </PaymentProvider>
        </>
    );
}
