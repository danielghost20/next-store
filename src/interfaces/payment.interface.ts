import { Cart } from "./cart.interface"

export interface UserContact {
    email: string,
    name: string,
    last_name: string,
    reference_address: string,
    city: string,
    country: string,
    postal_code: string
}

export interface CreditCard {
    number_credit_card: string,
    CVV: string,
    expiration_date: string
}

export interface Purchase {
    credit_card: CreditCard,
    user_address: UserContact
    purchases: Cart[]
}