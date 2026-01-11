"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma"; // Assuming you have a default prisma instance exported from lib/prisma

// Schema validation
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type FormState = {
  message: string;
  success?: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  fieldValues?: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
};

export async function sendContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = (formData.get("subject") as string) || "New Inquiry";
  const message = formData.get("message") as string;

  // Validate fields
  const validatedFields = schema.safeParse({
    name,
    email,
    subject,
    message,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please check the form for errors.",
      errors: validatedFields.error.flatten().fieldErrors,
      fieldValues: { name, email, subject, message },
    };
  }

  try {
    // 1. Save to Prisma
    await prisma.contactInquiry.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    // 2. Send Email via Nodemailer
    // Revalidate admin pages to show new inquiry immediately
    revalidatePath("/admin");
    revalidatePath("/admin/inquiries");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection config (optional, but good for debugging)
    // await transporter.verify();

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // sender address (often must match auth user)
      replyTo: email,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // receiver
      subject: `New Inquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>New Contact Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <br/>
            <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">
              <p>${message.replace(/\n/g, "<br/>")}</p>
            </div>
          </div>
        `,
    };

    // Only send if credentials are roughly present to avoid crashing if envs are missing
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn(
        "SMTP credentials missing. Email was not sent, but stored in DB."
      );
    }

    return {
      success: true,
      message: "Thank you! Your message has been received.",
      fieldValues: { name: "", email: "", subject: "", message: "" },
    };
  } catch (error) {
    console.error("Failed to send contact form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
      fieldValues: { name, email, subject, message },
    };
  }
}
