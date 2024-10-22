import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { items } = await request.json();

    console.log("Items received: ", items);

    const amount = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    console.log("Total Amount: ", amount);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd",
      // automatic_tax: { enabled: true },
    });

    console.log("Payment Intent Created: ", paymentIntent);

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating payment intent: ", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
