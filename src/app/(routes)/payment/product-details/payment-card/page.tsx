"use client"; // La pagina se renderiza del lado del cliente

import { Input } from "@/components/ui/Input"; // Input es un componente de la libreria chadcn reutilizable
import { buttonVariants } from "@/components/ui/button"; // Funcion de chadcn que retorna estilos personalizados para un boton
import { RiVisaLine } from "react-icons/ri"; // Icono de visa de la libreria react-cions
import { FcSimCardChip } from "react-icons/fc"; // Icono de card de la libreria  react-icons
import { usePaymentContext } from "@/context/PaymentContext"; // Contexto global que contiene funciones y informacion sobre el usuario  (tarjeta de credito, direccion)
import { FormEvent, useEffect, useState } from "react";
import {
  handleInputDateCard,
  handleInputNumberCard,
  handleInputNumberCVV,
  regex,
} from "@/utils/RegularExpressions"; // Funciones personalizadas que manejan expresiones regulares, para veriicar informacion como numero de tarjeta, fecha de vencimiento y CVV
import { useRouter } from "next/navigation"; // Hook que permite usar y trabajar con las rutas

export default function PaymentCardPage() {

  /**
   * @name state
   * @returns {{value : string | {}, setValue: () => void}} // Estados para guardar informacion sobre la tarjeta de credito del ussuario
   * @
   */

  const [inputCardNumber, setInputCardNumber] = useState<string>(""); // Guarda el numero de tarjeta
  const [inputDate, setInputDate] = useState<string>(""); // Guarda la fecha de vencimiento
  const [inputCVV, setInputCVV] = useState<string>(""); // Guarda los tres numeros de la tarjeta
  const [regexValidate, setRegexValidate] = useState({
    // Valida que todos los datos esten completos en la tarjeta con booleanos
    numberCard: false,
    CVV: false,
    dateCard: false,
  });

  /**
   * @returns {router} // router permite acceder a diferentes funcionalidades para trabajar con rutas
   */

  const router = useRouter();

  /**
   * @name usePaymentContext
   *  @returns {{
   * email: string,
   * reference_address: string,
   * addUserCard: (data: CreditCard) => void
   * }}
   * @description este hook guarda la informacion del usuario como tarjeta de credito y direccion del usuario
   */

  const {
    user_contact: { email, reference_address },
    features: { addUserCard },
  } = usePaymentContext();

  /**
   * @name onSubmitCard
   * @param e // El parametro 'e' es un evento que retorna la funcion onSubmit, sirve para extraer valores, prevenir efectos etc
   * @description Esta funcion realiza una validacion sobre los datos de la tarjeta, valida el formato y la cantidad de digitos para guardar la informacion correcta
   */

  const onSubmitCard = (e: FormEvent) => {
    // Detenemos el reload por defecto cuando hacemos onSubmit al boton evitando perder la informacion
    e.preventDefault();

    //Validamos que se cumplan los test de las expresiones regulares (esta es una segunda validacion, la primera se da en el useEffect)
    if (
      regex.cardNumberRegex.test(inputCardNumber) &&
      regex.cvvRegex.test(inputCVV) &&
      regex.dateRegex.test(inputDate)
    ) {
      // De ser asi se utiliza la funcion addUserCard para guardar los datos y enviar ala siguiente pagina al usuario
      addUserCard({
        CVV: inputCVV,
        expiration_date: inputDate,
        number_credit_card: inputCardNumber,
      });
      router.push("/payment/product-details/payment-card/payment-confirm");
    }
  };

  // Este useEffect cumple la funcion de revisar si todos los datos de la tarjeta son correctos (si es así, renderiza un boton de agregrar la tarjeta, si no lo mantiene en false)

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
