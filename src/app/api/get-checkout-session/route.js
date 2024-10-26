import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      console.error("Session ID is missing");
      return new Response(JSON.stringify({ error: "Session ID is required" }), {
        status: 400,
      });
    }

    console.log("Retrieving session for ID:", sessionId);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });

    console.log("Session data retrieved:", session);

    if (session.payment_status !== "paid") {
      return new Response(JSON.stringify({ error: "Payment not completed" }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify(session), { status: 200 });
  } catch (error) {
    console.error("Error retrieving Stripe session:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
      {
        status: 500,
      }
    );
  }
}
