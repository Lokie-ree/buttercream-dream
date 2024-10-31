import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing session ID" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "customer_details"],
    });

    console.log("Session retrieved:", session);
    return NextResponse.json(session, { status: 200 });
  } catch (error) {
    console.error("Error retrieving checkout session: ", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
