"use client";
import { Input } from "@/components/ui/Input";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { RiVisaLine } from "react-icons/ri";
import { FcSimCardChip } from "react-icons/fc";
import { usePaymentContext } from "@/context/PaymentContext";
import { FormEvent, useEffect, useState } from "react";
import {
    handleInputDateCard,
    handleInputNumberCard,
    handleInputNumberCVV,
    regex,
} from "@/utils/RegularExpressions";
import { useRouter } from "next/navigation";

export default function PaymentCardPage() {
    const [inputCardNumber, setInputCardNumber] = useState<string>("");
    const [inputDate, setInputDate] = useState<string>("");
    const [inputCVV, setInputCVV] = useState<string>("");
    const [regexValidate, setRegexValidate] = useState({
        numberCard: false,
        CVV: false,
        dateCard: false,
    });

    const router = useRouter()

    const {
        user_contact: { email, reference_address },
        features: { addUserCard },
    } = usePaymentContext();

    const onSubmitCard = (e: FormEvent) => {
        e.preventDefault()
        if (
            regex.cardNumberRegex.test(inputCardNumber) &&
            regex.cvvRegex.test(inputCVV) &&
            regex.dateRegex.test(inputDate)
        ) {
            addUserCard({
                CVV: inputCVV,
                expiration_date: inputDate,
                number_credit_card: inputCardNumber,
            });
            console.log(' se envio ')
            router.push('/payment/product-details/payment-card/payment-confirm')
        }
    };

    useEffect(() => {
        if (
            regex.cardNumberRegex.test(inputCardNumber) &&
            regex.cvvRegex.test(inputCVV) &&
            regex.dateRegex.test(inputDate)
        ) {
            setRegexValidate({
                CVV: true,
                dateCard: true,
                numberCard: true,
            });
        } else {
            setRegexValidate({
                CVV: false,
                dateCard: false,
                numberCard: false,
            });
        }
    }, [inputCVV, inputCardNumber, inputDate]);

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
            <form onSubmit={onSubmitCard}>
                <div className="w-full p-4 mt-6 border-2 rounded-md bg-foreground">
                    <div className="flex items-center justify-between">
                        <FcSimCardChip className="text-5xl text-background" />
                        <RiVisaLine className="text-background text-7xl" />
                    </div>
                    <div>
                        <label className="text-background" htmlFor="card_number">
                            Numero de tarjeta
                        </label>
                        <Input
                            className="my-3 border-2 border-gray-600 bg-foreground text-background"
                            name="card_number"
                            id="card_number"
                            type="text"
                            onChange={(e) => handleInputNumberCard(e, setInputCardNumber)}
                            value={inputCardNumber}
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
                                onChange={(e) => handleInputDateCard(e, setInputDate)}
                                value={inputDate}
                                placeholder="XX/XX"
                                className="my-3 border-2 border-gray-600 bg-foreground text-background"
                            />
                        </div>
                        <div>
                            <label className="text-background">CVV (parte trasera)</label>
                            <Input
                                type="text"
                                onChange={(e) => handleInputNumberCVV(e, setInputCVV)}
                                value={inputCVV}
                                placeholder="XXX"
                                className="my-3 border-2 border-gray-600 bg-foreground text-background"
                            />
                        </div>
                    </div>
                </div>
                {regexValidate.CVV &&
                    regexValidate.dateCard &&
                    regexValidate.numberCard ? (
                    <button type="submit" className={`${buttonVariants()}  w-full my-4`}>
                        Agregar tarjeta
                    </button>
                ) : (
                    <div
                        className={`${buttonVariants()} my-4 w-full opacity-40 cursor-not-allowed`}
                    >
                        Agregar tarjeta
                    </div>
                )}
            </form>
        </main>
    );
}
