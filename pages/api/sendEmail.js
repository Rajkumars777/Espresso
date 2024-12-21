// pages/api/send-booking-email.ts
// import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { 
    name, 
    email, 
    phone, 
    eventDate, 
    partyType, 
    guestCount, 
    ageGroup, 
    theme, 
    cakeType, 
    additionalDetails 
  } = req.body;

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Use your SMTP host
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS  // Your email password or app password
    }
  });

  try {
    // Send email to business
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.BUSINESS_EMAIL, // Your business email
      subject: `New Party Booking Request from ${name}`,
      html: `
        <h1>Party Booking Details</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Party Type:</strong> ${partyType}</p>
        <p><strong>Guest Count:</strong> ${guestCount}</p>
        <p><strong>Age Group:</strong> ${ageGroup}</p>
        <p><strong>Theme:</strong> ${theme}</p>
        <p><strong>Cake Type:</strong> ${cakeType}</p>
        <p><strong>Additional Details:</strong> ${additionalDetails}</p>
      `
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Party Booking Request Received',
      html: `
        <h1>Thank You for Your Booking, ${name}!</h1>
        <p>We have received your party booking request. Our team will review the details and contact you soon.</p>
        <h2>Booking Summary:</h2>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Party Type:</strong> ${partyType}</p>
        <p><strong>Expected Guests:</strong> ${guestCount}</p>
        <p>We look forward to making your event memorable!</p>
      `
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Booking submitted and emails sent successfully' 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send booking emails' 
    });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};