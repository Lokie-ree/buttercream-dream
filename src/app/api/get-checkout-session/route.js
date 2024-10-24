import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return Response(JSON.stringify({ error: "Session ID is required" }));
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });
    return new Response(JSON.stringify(session), { status: 200 });
  } catch (errror) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
