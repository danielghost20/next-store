"use client";
import { Input } from "@/components/ui/Input";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { RiVisaLine } from "react-icons/ri";
import { FcSimCardChip } from "react-icons/fc";
import { usePaymentContext } from "@/context/PaymentContext";
import { CreditCard } from "@/interfaces/payment.interface";
import { useState } from "react";

export default function PaymentCardPage() {
    const [inputValue, setInputValue] = useState<string>("");
    const [inputDate, setInputDate] = useState<string>("");
    const [inputCVV, setInputCVV] = useState<string>("");

    const {
        user_contact: { email, reference_address },
    } = usePaymentContext();

    const onSubmitCard = () => {

    }

    const handleInputNumberCard = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        const numericValue = value.replace(/[^0-9]/g, "");
        const formattedValue = numericValue.substring(0, 16);
        const formattedWithSpaces = formattedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
        setInputValue(formattedWithSpaces);
    };

    const handleInputNumberCVV = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const valorSinEspacios = inputValue.replace(/\s/g, "");
        if (/^\d*$/.test(valorSinEspacios) && valorSinEspacios.length <= 3) {
            setInputCVV(valorSinEspacios);
        }
    };

    const handleInputDateCard = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.replace(/\D/g, ""); // Elimina cualquier carácter no numérico
        let formattedValue = "";
        if (newValue.length <= 4) {
            for (let i = 0; i < newValue.length; i += 2) {
                const chunk = newValue.slice(i, i + 2);

                if (chunk.length === 2) {
                    if (chunk >= "01" && chunk <= "12") {
                        formattedValue += chunk + "/";
                    } else if (chunk >= "23" && chunk <= "29") {
                        formattedValue += chunk;
                    }
                } else {
                    formattedValue += chunk;
                }
            }
        }
        setInputDate(formattedValue);
    };
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
                    <span className="text-gray-500">
                        Pagar con tarjeta de credito o debito
                    </span>
                </div>
            </div>
            <form onSubmit={onSubmitCard} className="w-full p-4 mt-6 border-2 rounded-md bg-foreground">
                <div className="flex items-center justify-between">
                    <FcSimCardChip className="text-5xl text-background" />
                    <RiVisaLine className="text-background text-7xl" />
                </div>
                <div>
                    <label className="text-background" htmlFor="card_number">
                        Numero de trjeta
                    </label>
                    <Input
                        className="my-3 border-2 border-gray-600 bg-foreground text-background"
                        name="card_number"
                        id="card_number"
                        type="text"
                        onChange={handleInputNumberCard}
                        value={inputValue}
                        placeholder="XXXX XXXX XXXX XXXX"
                    />
                </div>
                <div className="flex justify-between">
                    <div>
                        <label className="text-background">
                            Vencimiento (01-12, 24-29)
                        </label>
                        <Input
                            type="text"
                            onChange={handleInputDateCard}
                            value={inputDate}
                            placeholder="XX/XX"
                            className="my-3 border-2 border-gray-600 bg-foreground text-background"
                        />
                    </div>
                    <div>
                        <label className="text-background">CVV (parte trasera)</label>
                        <Input
                            type="text"
                            onChange={handleInputNumberCVV}
                            value={inputCVV}
                            placeholder="XXX"
                            className="my-3 border-2 border-gray-600 bg-foreground text-background"
                        />
                    </div>
                </div>
            </form>
            <Link href="" className={`${buttonVariants()}  w-full my-4`}>
                Pagar Productos
            </Link>
        </main>
    );
}
