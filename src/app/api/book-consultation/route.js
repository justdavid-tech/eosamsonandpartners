import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { practiceArea, date, time, issue, name, email, phone } = await request.json();

    if (!name || !email || !practiceArea || !date || !time) {
      return NextResponse.json(
        { error: "Required details (name, email, practice area, date, time) are missing." },
        { status: 400 }
      );
    }

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; background-color: #ffffff; color: #333333;">
        <h2 style="color: #0b1c3a; border-bottom: 2px solid #c5a880; padding-bottom: 12px; margin-bottom: 20px; font-family: 'Playfair Display', serif;">
          E-O Samson & Partners &mdash; Consultation Booking
        </h2>
        
        <div style="background-color: #f7fafc; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
          <p style="margin: 4px 0;"><strong>Practice Area:</strong> ${practiceArea}</p>
          <p style="margin: 4px 0;"><strong>Date requested:</strong> ${date}</p>
          <p style="margin: 4px 0;"><strong>Time slot:</strong> ${time}</p>
        </div>

        <div style="margin-bottom: 15px;">
          <p style="margin: 4px 0;"><strong>Client Name:</strong> ${name}</p>
          <p style="margin: 4px 0;"><strong>Client Email:</strong> <a href="mailto:${email}" style="color: #0b1c3a; text-decoration: underline;">${email}</a></p>
          <p style="margin: 4px 0;"><strong>Phone Number:</strong> ${phone || "Not provided"}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="font-weight: bold; color: #0b1c3a; margin-bottom: 8px;">Case / Issue Description:</p>
        <div style="background-color: #f7fafc; padding: 16px; border-left: 4px solid #c5a880; font-style: italic; line-height: 1.6; border-radius: 4px; color: #2d3748;">
          ${issue ? issue.replace(/\n/g, "<br />") : "No description provided."}
        </div>
        
        <p style="font-size: 11px; color: #a0aec0; margin-top: 24px; text-align: center; border-t: 1px solid #edf2f7; padding-top: 12px;">
          This email was sent dynamically via the consultation booking form on the E-O Samson & Partners website.
        </p>
      </div>
    `;

    const apiKey = process.env.ZEPTOMAIL_API_KEY || "";
    const authHeader = apiKey.startsWith("Zoho-encz") ? apiKey : `Zoho-enczapikey ${apiKey}`;

    const payload = {
      from: {
        address: process.env.ZEPTOMAIL_FROM_EMAIL || "info@eosamsonandpartners.com",
        name: process.env.ZEPTOMAIL_FROM_NAME || "E-O Samson & Partners"
      },
      to: [
        {
          email_address: {
            address: process.env.CONTACT_EMAIL || "info@eosamsonandpartners.com",
            name: "E-O Samson & Partners Support"
          }
        }
      ],
      reply_to: [
        {
          address: email,
          name: name
        }
      ],
      subject: `New Consultation Request from ${name}`,
      htmlbody: htmlContent
    };

    const res = await fetch("https://api.zeptomail.com/v1.1/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": authHeader
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`ZeptoMail API returned ${res.status}: ${errorText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("ZeptoMail booking error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process consultation request" },
      { status: 500 }
    );
  }
}