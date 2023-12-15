import { stripe } from "@/config/stripe/stripe.config";
import Stripe from "stripe";
import { NextResponse } from "next/server";
import { Cart } from "@/interfaces/cart.interface";
import { postOrder } from "@/services/firebase/payment.service";




const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
}

export async function OPTIONS() {
  console.log("OPTIONS endpoint called");
  console.log("corsHeaders:", corsHeaders);
  return NextResponse.json({ message: "2dd" }, { headers: corsHeaders })
}

export async function POST(req: Request) {

  try {
    const { products, user_data } = await req.json()

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    products.map((item: Cart) => {
      line_items.push({
        quantity: item.amount,
        price_data: {
          currency: 'USD',
          product_data: {
            name: item.name,
            images: [item.image]
          },
          unit_amount: item.price
        }
      })
    })

    const postId = await postOrder(user_data.id, user_data.name, user_data.email, products, user_data.total)


    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true
      },
      success_url: `${process.env.NEXT_PUBLIC_URL}/payment/payment-resume?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/payment/checkout?canceled=1`,
      metadata: {
        orderId: postId,
        userId: user_data.id
      }
    })
    return NextResponse.json({ url: session.url }, { headers: corsHeaders })

  } catch (error) {
    return NextResponse.json({ message: "error", error })
  }
}





