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
    const fromEmail = process.env.POP_CLUB_FROM_EMAIL || "Yoga Soda Pop <contact@yogasodapop.com>";
    const toEmail = process.env.POP_CLUB_TO_EMAIL || "yogasodapop@gmail.com";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return Response.json({ ok: false, error: "Email service is not configured" }, { status: 500 });
    }

    const sendEmail = (payload: Record<string, unknown>) => fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const [ownerResponse, welcomeResponse] = await Promise.all([
      sendEmail({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: "New Yoga Soda Pop Club signup ✨",
        html: `<div style="font-family:Arial,sans-serif;color:#101522;line-height:1.5"><h2 style="color:#ff2f86">New Pop Club member 💖</h2><p>Someone just joined the Yoga Soda Pop Club.</p><p><strong>Email:</strong> ${escapeHtml(email)}</p></div>`,
        text: `New Yoga Soda Pop Club signup\n\nEmail: ${email}`,
      }),
      sendEmail({
        from: fromEmail,
        to: [email],
        reply_to: toEmail,
        subject: "Welcome to the Yoga Soda Pop Club 💖",
        html: `<div style="font-family:Arial,sans-serif;color:#101522;line-height:1.6;max-width:560px;margin:auto"><h1 style="color:#ff2f86">You’re in! ✨</h1><p>Thanks for joining the <strong>Yoga Soda Pop Club</strong>.</p><p>You’ll be the first to hear about new drops, music releases and happy pop vibes.</p><p style="margin-top:28px">Welcome to the family! 💖</p><p><strong>Yoga Soda Pop</strong></p></div>`,
        text: "You’re in! Thanks for joining the Yoga Soda Pop Club. You’ll be the first to hear about new drops, music releases and happy pop vibes. Welcome to the family! 💖",
      }),
    ]);

    if (!ownerResponse.ok || !welcomeResponse.ok) {
      const ownerError = ownerResponse.ok ? "" : await ownerResponse.text();
      const welcomeError = welcomeResponse.ok ? "" : await welcomeResponse.text();
      console.error("Resend error:", ownerError, welcomeError);
      return Response.json({ ok: false, error: "Could not complete signup" }, { status: 502 });
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
