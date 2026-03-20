export const runtime = 'edge';
import { NextResponse } from "next/server";

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
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Server configuration error: Missing API Key" }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    const { name, email, service, message } = body;

    // Check for missing fields
    if (!name || !email || !service || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validation
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Sanitize inputs for the HTML template
    const sanitizedName = escapeHtml(name);
    const sanitizedService = escapeHtml(service);
    const sanitizedMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    const resResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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
      `
      })
    });

    const responseData = await resResponse.json();

    if (!resResponse.ok) {
      console.error("Resend API full error object:", JSON.stringify(responseData, null, 2));
      return NextResponse.json({ error: responseData.message || "Email sending failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: responseData });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
