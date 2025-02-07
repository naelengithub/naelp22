// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message }: FormData = req.body;

    // Use environment variables to securely access SMTP credentials
    const smtpUser = process.env.SMTP_USER; // The email address for SMTP
    const smtpPass = process.env.SMTP_PASS; // The password for your email account
    const smtpHost = process.env.SMTP_HOST; // SMTP server (mail.privateemail.com)
    const smtpPort = parseInt(process.env.SMTP_PORT || "465"); // SMTP port (465 for SSL)

    if (!smtpUser || !smtpPass || !smtpHost) {
      return res.status(500).json({ message: "SMTP credentials are missing" });
    }

    // Create the transport using SMTP settings from environment variables
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // If the port is 465, use SSL
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      // Adding custom "HELO" command
      hello: "anaelisavargas.com",
    });

    const mailOptions = {
      from: smtpUser, // Use the email defined in the SMTP_USER env variable
      to: smtpUser, // Recipient email address
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
      html: `<p>You have a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
