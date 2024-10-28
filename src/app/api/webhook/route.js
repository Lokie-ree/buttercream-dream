import { buffer } from "raw-body";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-09-30",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const sig = req.headers.get["stripe-signature"];

  let event;

  try {
    const rawBody = await buffer(req);
    event = stripe.webhooks.constructEvent(
      rawBody.toString(),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error(`⚠️ Webhook signature verification failed: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle specific events
  switch (event.type) {
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object;
      await handlePaymentSuccess(paymentIntent);
      break;
    }
    case "charge.refunded": {
      const charge = event.data.object;
      await handleRefund(charge);
      break;
    }
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return new Response(JSON.stringify({ received: true }, { status: 200 }));
}

async function handlePaymentSuccess(paymentIntent) {
  const customerEmail = paymentIntent.receipt_email;
  await sendReceiptEmail(customerEmail, paymentIntent);
}

async function handleRefund(charge) {
  const customerEmail = charge.billing_details.email;
  await sendRefundEmail(customerEmail, charge);
}

async function sendReceiptEmail(email, paymentIntent) {
  // Logic to send the email receipt
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      subject: "Your Payment Receipt",
      text: `Thanks you for your purchase! Your payment of $${paymentIntent.amount / 100} was successful.`,
    }),
  });

  if (!response.ok) {
    console.error();
  }
}

async function sendRefundEmail(email, charge) {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      subject: "Your Refund Processed",
      text: `Your refund of $${charge.amount_refunded / 100} has been processed successfully.`,
    }),
  });

  if (!response.ok) {
    console.error(`Failed to send refund email`);
  }
}
