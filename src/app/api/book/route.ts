import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, service, pickupDate, message, address, suburb } = body;

    if (!name || !phone || !service || !pickupDate) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Phone, Service, Pickup Date)." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL || emailUser || "sky@joyskylaundromat.co.za";

    // Demo Mode Fallback: ONLY active if EMAIL_USER/EMAIL_PASS are NOT configured in .env
    if (!emailUser || !emailPass) {
      console.log("ℹ️ [Joy Sky Laundry Demo Mode] EMAIL_USER credentials not set in environment.");
      console.log("Booking Details Logged:", {
        name,
        phone,
        service,
        pickupDate,
        message,
        address,
        suburb,
      });

      return NextResponse.json({
        success: true,
        demoMode: true,
        message: "Booking received successfully! (Demo mode: EMAIL_USER credentials not configured in environment)",
      });
    }

    // Production Email Dispatch via Nodemailer (Real mode - no demo fallback when EMAIL_USER is present)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"Joy Sky Laundry" <${emailUser}>`,
      to: receiverEmail,
      replyTo: emailUser,
      subject: `🧺 New Booking: ${name} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #0284c7;">
            <h2 style="color: #0284c7; margin: 0;">Joy Sky Laundry</h2>
            <p style="color: #64748b; font-size: 14px; margin: 4px 0 0 0;">E2A Arcade, 76 Main Road, Mowbray, Cape Town</p>
          </div>
          
          <div style="padding: 20px 0;">
            <h3 style="color: #0f172a; margin-top: 0;">New Online Pickup Request</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #475569; font-weight: bold; width: 140px;">Customer Name:</td>
                <td style="padding: 8px 0; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #475569; font-weight: bold;">Phone / WhatsApp:</td>
                <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #0284c7; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #475569; font-weight: bold;">Selected Service:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #475569; font-weight: bold;">Pickup Date:</td>
                <td style="padding: 8px 0; color: #0f172a;">${pickupDate}</td>
              </tr>
              ${
                address || suburb
                  ? `<tr>
                      <td style="padding: 8px 0; color: #475569; font-weight: bold;">Pickup Address:</td>
                      <td style="padding: 8px 0; color: #0f172a;">${address || ""} ${suburb ? `(${suburb})` : ""}</td>
                    </tr>`
                  : ""
              }
              ${
                message
                  ? `<tr>
                      <td style="padding: 8px 0; color: #475569; font-weight: bold; vertical-align: top;">Notes / Special Care:</td>
                      <td style="padding: 8px 0; color: #334155;">${message}</td>
                    </tr>`
                  : ""
              }
            </table>
          </div>

          <div style="background-color: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
            Order received via website booking system • Joy Sky Laundry • +27 73 696 9918
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      demoMode: false,
      message: "Your booking request has been dispatched via email successfully!",
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal server error";
    console.error("Booking API Error:", err);
    return NextResponse.json(
      { error: `Failed to process booking: ${errorMsg}` },
      { status: 500 }
    );
  }
}
