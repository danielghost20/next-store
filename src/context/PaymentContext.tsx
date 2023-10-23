"use client" // La pagina se renderiza del lado del cliente

import useLocalStorage from "@/hooks/useLocalStorage"; // Este custom hook guarda y obtiene informacion del localstorage
import { CreditCard, UserContact } from "@/interfaces/payment.interface"; // So interfaces que se utilizan para tipar la tarjeta de credito y la direccion del usuario
import React, { Dispatch, SetStateAction, createContext, useContext } from "react"; // Dispatch es un tipo de dato que hace referencia para despachar acciones o un cambio de estado, SetStateAction es un tipo que hace referencia al valor o funcion que se pasa como argumento ala funcion del estado
import { PaymentContext } from "@/interfaces/context.interface"; // Interface para tipar el estado inicial del context


// Esta constante crea un contexto con valores iniciales, en este caso guarda informacion de una tarjeta de credito, y informacion de la direccion de un usuario

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

//Esta constante se crea para poder exportarla y usar los datos y funciones que tiene el contexto, de esta manera no se necesita importar useContext en todos lados

export const usePaymentContext = () => {
    return useContext(paymentContext)
}

// Esta funcion se crea para poder englobal a nuestra app para poder usar el contexto en diferentes partes

export function PaymentProvider({ children }: { children: React.ReactNode }) {

    // Para guardar la informacion de la direccion del usuario y la tarjeta de credito, usamos el custom hook useLocalStorage el cual retorna una funcion para cambiar el estado, y el valor
    //De esta manera cada que se monta el componente donde se use el estado, este hook traera la data que este en el localstorage

    const [userAddress, setUserAddress] = useLocalStorage('address', {}) as [UserContact, Dispatch<SetStateAction<UserContact>>];
    const [userCreditCard, setUserCreditCard] = useLocalStorage('card', {}) as [CreditCard, Dispatch<SetStateAction<CreditCard>>]

    /**
     * 
     * @name addUserAddress 
     * @param data 
     * @description Esta funcion agrega la direccion del ususario para almacenarla en el localstorage
     */

    const addUserAddress = (data: UserContact) => {
        setUserAddress(data);
    };

    /**
     * @name addUserCard
     * @param data 
     * @description Agrega la tarjeta del usuario en el localstorage
     */

    const addUserCard = (data: CreditCard) => {
        setUserCreditCard({
            CVV: data.CVV,
            expiration_date: data.expiration_date,
            number_credit_card: data.number_credit_card,
        });
    };



    return (

        //Se crea el provider para usarlo en el root de la app
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
