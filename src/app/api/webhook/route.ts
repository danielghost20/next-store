import Stripe from "stripe";
import { headers } from 'next/headers'
import { NextResponse } from "next/server";
import { stripe } from "@/config/stripe/stripe.config";
import { pathOrder } from '@/services/firebase/payment.service'


export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK!
    )
  } catch (error: any) {
    return new NextResponse(`webhook error ${error.message}`, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session
  const address = session.customer_details?.address

  const addressComponents = [
    address?.line1,
    address?.line2,
    address?.city,
    address?.state,
    address?.postal_code,
    address?.country
  ]

  const addressString = addressComponents.filter(c => c !== null).join(', ')

  if (event.type === "checkout.session.completed") {
    await pathOrder(session?.metadata?.userId!, session?.metadata?.orderId!, { isPaid: true })
  }

  return new NextResponse(null, { status: 200 })
}
