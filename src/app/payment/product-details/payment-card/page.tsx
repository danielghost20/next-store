"use client"
import { Input } from "@/components/ui/Input";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { RiVisaLine } from 'react-icons/ri'
import { FcSimCardChip } from 'react-icons/fc'
import { usePaymentContext } from "@/context/PaymentContext";
import { useForm, SubmitHandler } from 'react-hook-form'
import { CreditCard } from "@/interfaces/payment.interface";

export default function PaymentCardPage() {
    const { user_contact: { email, reference_address } } = usePaymentContext()
    const { register, handleSubmit, formState: { errors } } = useForm<CreditCard>()

    return (
        <main className="w-full max-w-xl m-auto">
            <div className="w-full p-2 border-2 rounded-md">
                <div className="flex items-center justify-between w-full py-2 border-b-2">
                    <span>Contacto</span>
                    <span>{email}</span>
                    <span>Cambiar</span>
                </div>
                <h3>Direccion</h3>
                <p>{reference_address}</p>
            </div>
            <h2 className="py-4 text-lg">Metodo de pago</h2>
            <div className="w-full">
                <div className="flex flex-col w-full gap-3 p-2 border-2 rounded-md">
                    <span>Tarjeta BBVA</span>
                    <span className="text-gray-500">Pagar con tarjeta de credito o debito</span>
                </div>
            </div>
            <form className="w-full p-4 mt-6 border-2 rounded-md bg-foreground">
                <div className="flex items-center justify-between">
                    <FcSimCardChip className="text-5xl text-background" />
                    <RiVisaLine className="text-background text-7xl" />
                </div>
                <div>
                    <label className="text-background" htmlFor="card_number">Numero de trjeta</label>
                    <Input {...register('number_credit_card', { required: true, maxLength: { value: 16, message: "maximo 16 caracteres" }, minLength: { value: 16, message: "minimo 16 caracteres" } })} className="my-3 border-2 border-gray-600 bg-foreground" name="card_number" id="card_number" type="text" />
                </div>
                <div className="flex justify-between">
                    <div>
                        <label className="text-background">Fecha de vencimiento</label>
                        <Input {...register('expiration_date', { required: true, maxLength: { value: 4, message: "maximo 4 caracteres" }, minLength: { value: 4, message: "minimo 4 caracteres" } })} className="my-3 border-2 border-gray-600 bg-foreground" />
                    </div>
                    <div>
                        <label className="text-background">CVV (parte trasera)</label>
                        <Input {...register('CVV', { required: true, maxLength: { value: 3, message: "maximo 3 caracteres" }, minLength: { value: 3, message: "minimo 3 caracteres" } })} className="my-3 border-2 border-gray-600 bg-foreground" />
                    </div>
                </div>
            </form>
            <Link href='' className={`${buttonVariants()} opacity-30 w-full my-4`}>
                Pagar Productos
            </Link>
        </main>
    )
}