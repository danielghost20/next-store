"use client"

import useLocalStorage from "@/hooks/useLocalStorage";
import { CreditCard, UserContact } from "@/interfaces/payment.interface";
import React, { Dispatch, SetStateAction, createContext, useContext } from "react";

type PaymentContext = {
    user_contact: UserContact;
    credit_card: CreditCard;
    features: {
        addUserAddress: (data: UserContact) => void;
        addUserCard: (data: CreditCard) => void;
    };
};

const paymentContext = createContext<PaymentContext>({
    credit_card: {
        CVV: "",
        expiration_date: "",
        number_credit_card: "",
    },
    user_contact: {
        city: "",
        country: "",
        email: "",
        last_name: "",
        name: "",
        postal_code: "",
        reference_address: "",
    },
    features: {
        addUserAddress() { },
        addUserCard() { },
    },
});

export const usePaymentContext = () => {
    return useContext(paymentContext)
}


export function PaymentProvider({ children }: { children: React.ReactNode }) {
    const [userAddress, setUserAddress] = useLocalStorage('address', {}) as [UserContact, Dispatch<SetStateAction<UserContact>>];
    const [userCreditCard, setUserCreditCard] = useLocalStorage('card', {}) as [CreditCard, Dispatch<SetStateAction<CreditCard>>]

    const addUserAddress = (data: UserContact) => {
        setUserAddress(data);
        console.log(userAddress)
    };

    const addUserCard = (data: CreditCard) => {
        setUserCreditCard({
            CVV: data.CVV,
            expiration_date: data.expiration_date,
            number_credit_card: data.number_credit_card,
        });
    };



    return (
        <paymentContext.Provider
            value={{
                credit_card: userCreditCard,
                user_contact: userAddress,
                features: { addUserAddress, addUserCard },
            }}
        >
            {children}
        </paymentContext.Provider>
    );
}
