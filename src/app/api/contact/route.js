import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "E-O Samson & Partners Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "info@eosamsonandpartners.com",
      subject: `New Case Consultation Enquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; background-color: #ffffff; color: #333333;">
          <h2 style="color: #0b1c3a; border-bottom: 2px solid #c5a880; padding-bottom: 12px; margin-bottom: 20px; font-family: 'Playfair Display', serif;">
            E-O Samson & Partners &mdash; Web Consultation Request
          </h2>
          <div style="margin-bottom: 15px;">
            <p style="margin: 4px 0;"><strong>Client Name:</strong> ${name}</p>
            <p style="margin: 4px 0;"><strong>Client Email:</strong> <a href="mailto:${email}" style="color: #0b1c3a; text-decoration: underline;">${email}</a></p>
            <p style="margin: 4px 0;"><strong>Phone Number:</strong> ${phone || "Not provided"}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-weight: bold; color: #0b1c3a; margin-bottom: 8px;">Case Details / Enquiry Summary:</p>
          <div style="background-color: #f7fafc; padding: 16px; border-left: 4px solid #c5a880; font-style: italic; line-height: 1.6; border-radius: 4px; color: #2d3748;">
            ${message.replace(/\n/g, "<br />")}
          </div>
          <p style="font-size: 11px; color: #a0aec0; margin-top: 24px; text-align: center; border-t: 1px solid #edf2f7; padding-top: 12px;">
            This email was sent dynamically via the consultation booking form on the E-O Samson & Partners website.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to process consultation request" },
      { status: 500 }
    );
  }
}
