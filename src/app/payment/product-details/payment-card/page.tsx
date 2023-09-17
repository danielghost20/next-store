import { buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default async function PaymentCardPage() {
    return (
        <main className="w-full max-w-xl m-auto">
            <div className="w-full p-2 border-2 rounded-md">
                <div className="flex items-center justify-between w-full py-2">
                    <span>Contact</span>
                    <span>danielramos13@gmail.com</span>
                    <span>Cambiar</span>
                </div>
                <div className="flex items-center justify-between w-full py-2 border-t-2">
                    <span>Contact</span>
                    <span>danielramos13@gmail.com</span>
                    <span>Cambiar</span>
                </div>
            </div>
            <h2 className="py-4 text-lg">Metodo de pago</h2>
            <div className="w-full">
                <div className="flex items-start justify-start gap-2 p-3 border-2 rounded-md">
                    <Checkbox className="mt-1" />
                    <div className="flex flex-col gap-3">
                        <span>Tarjeta BBVA</span>
                        <span className="text-gray-500">Pagar con tarjeta de credito o debito</span>
                    </div>
                </div>
            </div>
            <Link href='' className={`${buttonVariants()}  w-full my-4`}>
                Pagar Productos
            </Link>
        </main>
    )
}