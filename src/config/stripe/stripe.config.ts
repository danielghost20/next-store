import Stripe from 'stripe'
import { env } from '../env'

export const stripe = new Stripe(env.stripe.STRIPE_PRIVATE_KEY, {
    apiVersion: "2023-10-16",
    typescript: true
})