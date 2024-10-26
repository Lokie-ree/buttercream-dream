const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_SECRET_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error(`⚠️ Webhook signature verification failed.`, err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle event based on its type
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const customerEmail = session.customer_details.email;

      await sendEmailReceipt(customerEmail, session);

      console.log(`Payment succeeded for email: ${customerEmail}`);
    }

    res.status(200).end();
  } else {
    res.setHeader("ALLOW", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

async function sendEmailReceipt(email, session) {
  console.log(
    `Sending receipt to ${email} for order # ${session.id.slice(-8)}`
  );
}
