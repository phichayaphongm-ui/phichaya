import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = 'edge';

// Basic HTML escaping helper to prevent injection
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Basic email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { error: "Server configuration error: Missing API Key" },
        { status: 500 }
      );
    }

    const { name, email, service, message } = await req.json();

    // Check for missing fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validation
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long (max 5000 characters)" },
        { status: 400 }
      );
    }

    // Sanitize inputs for the HTML template
    const sanitizedName = escapeHtml(name);
    const sanitizedService = escapeHtml(service);
    const sanitizedMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    const { data, error } = await resend.emails.send({
      from: "Phichaya HR Solutions <onboarding@resend.dev>",
      to: ["phichayaphong.m@gmail.com"],
      subject: `New Contact Inquiry from ${sanitizedName}`,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">New Website Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #eee;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${sanitizedName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #eee;">Requested Service:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${sanitizedService}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <p style="font-weight: bold;">Message:</p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic;">
              ${sanitizedMessage}
            </div>
          </div>

          <p style="margin-top: 40px; font-size: 12px; color: #888; text-align: center;">
            This email was sent from the contact form on <a href="https://phichaya.com">phichaya.com</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API full error object:", JSON.stringify(error, null, 2));
      return NextResponse.json({ error: error.message || "Email sending failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
