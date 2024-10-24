import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { items } = await req.json();

    // Transform cart items into Stripe's line items format
    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          variant: item.variant,
        },
        unit_amount: item.price * 100, // Stripe requires amount in cents
      },
      quantity: item.quantity,
    }));

    // Create the checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,

      // Enable shipping address collection
      shipping_address_collection: {
        allowed_countries: ["US"], // You can add more countries here if needed
      },

      // Enable billing address collection
      billing_address_collection: "auto", // Make sure this is correctly spelled and in quotes
    });

    console.log("Checkout session created successfully:", session);

    // Return the session URL as JSON
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error.message);

    // Return an error response
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
