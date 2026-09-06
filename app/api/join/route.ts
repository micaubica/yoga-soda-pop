export const runtime = "edge";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!EMAIL_PATTERN.test(email)) {
      return Response.json({ ok: false, error: "Invalid email address" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.POP_CLUB_FROM_EMAIL || "Yoga Soda Pop <hello@yogasodapop.com>";
    const toEmail = process.env.POP_CLUB_TO_EMAIL || "yogasodapop@gmail.com";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return Response.json({ ok: false, error: "Email service is not configured" }, { status: 500 });
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: "New Yoga Soda Pop Club signup ✨",
        html: `
          <div style="font-family:Arial,sans-serif;color:#101522;line-height:1.5">
            <h2 style="color:#ff2f86">New Pop Club member 💖</h2>
            <p>Someone just joined the Yoga Soda Pop Club.</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p style="color:#667085">You can reply directly to this message to contact them.</p>
          </div>
        `,
        text: `New Yoga Soda Pop Club signup\n\nEmail: ${email}`,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend error:", errorText);
      return Response.json({ ok: false, error: "Could not send signup email" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Pop Club signup error:", error);
    return Response.json({ ok: false, error: "Unexpected error" }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#039;",
      '"': "&quot;",
    };
    return entities[character];
  });
}
