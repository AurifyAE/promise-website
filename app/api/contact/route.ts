import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,      // your Gmail address
        pass: process.env.GMAIL_APP_PASS,  // Gmail App Password (not your login password)
      },
    });

    await transporter.sendMail({
      from: `"Promise Gold Refinery" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVE_EMAIL,       // where you want to receive emails
      replyTo: email,                      // reply goes directly to the sender
      subject: `New Inquiry [${subject}] from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e5e5e5; border-radius: 8px;">
          <h2 style="color: #294734; margin-bottom: 4px;">New Contact Form Submission</h2>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin-bottom: 20px;" />

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #294734;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Phone</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Subject</td>
              <td style="padding: 8px 0; text-transform: capitalize;">${subject}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />

          <p style="color: #666; font-size: 13px; margin-bottom: 8px;">Message</p>
          <p style="font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mail error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}