import { stripe } from "@/stripe";
import Stripe from "stripe";
import { NextResponse } from "next/server";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
}

export async function OPTIONS() {
    return NextResponse.json({}, {headers: corsHeaders})
}

export async function POST(req: Request) {
    const {products} = await req.json()

    if (!products || products.lenght == 0) {
        return new NextResponse("product are required", {status: 400})
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    products.forEach((prod: any) => {
        line_items.push(
            {
                quantity: prod.amount,
                price_data: {
                    currency: "MNX",
                    product_data: {
                        name: prod.name
                    },
                    unit_amount: prod.price
                }
            }
        )
    });


    const session = stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        billing_address_collection: "required",
        phone_number_collection: {
            enabled: true
        },
        
    })
}