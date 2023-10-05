import { CreditCard, UserContact } from "@/interfaces/payment.interface";
import React, { createContext } from "react";


type PaymentContext = {
    user_contact: UserContact,
    credit_card: CreditCard
}

const paymentContext = createContext<PaymentContext>({
    credit_card: {
        CVV: null,
        expiration_date: null,
        number_credit_card: null
    },
    user_contact: {
        city: "",
        country: "",
        email: "",
        last_name: "",
        name: "",
        postal_code: "",
        reference_address: ""
    }
})

export function PaymentProvider({ children }: { children: React.ReactNode }) {
    const data = {
        credit_card: {
            CVV: null,
            expiration_date: null,
            number_credit_card: null
        },
        user_contact: {
            city: "",
            country: "",
            email: "",
            last_name: "",
            name: "",
            postal_code: "",
            reference_address: ""
        }
    }
    return (
        <paymentContext.Provider value={data}>
            {children}
        </paymentContext.Provider>
    )
}