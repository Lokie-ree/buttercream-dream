import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, text } = await req.json();

    const msg = {
      to: email,
      from: "blee73011@gmail.com",
      subject: subject,
      text: text,
    };

    await sendgrid.send(msg);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(`Error sending email: ${error}`);

    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
