import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { items } = await req.json();
    console.log("Items received:", items); // Log received items

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // Stripe requires amount in cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      billing_address_collection: "auto",
    });

    console.log("Checkout session created:", session); // Log session details if successful
    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error.message); // Log the error message
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
