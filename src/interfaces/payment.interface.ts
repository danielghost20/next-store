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
    number_credit_card: number | null,
    CVV: number | null,
    expiration_date: number | null
}