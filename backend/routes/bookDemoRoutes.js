import express from "express";
const router = express.Router();
import BookDemo from "../models/demo.js";
// import twilio from "twilio";

import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// const accountSid = "" //generate yours in twilio;
// const authToken = ""; //generate your auth token in twilio
// const twilioClient = twilio(accountSid, authToken);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: "tech@entrepreneurshipnetwork.net", // Replace with your email
    pass: "ulzo ueut cueu vlpv",
  },
});

router.post("/book-demo", async (req, res) => {
  const { fullName, email, mobile, mobileCode, babyAge } = req.body;

  try {
    const newBooking = new BookDemo({
      fullName,
      email,
      mobile,
      mobileCode,
      babyAge,
    });
    await newBooking.save();

    // Send email notification
    const mailOptions = {
      from: "tech@entrepreneurshipnetwork.net",
      to: email,
      subject: "Demo Session Booking Confirmation",
      html: `<div style={{display:flex;flex-direction:column}}> <h1>Dear ${fullName}, your demo session has been successfully booked. Our team will contact you soon!</h1> <br /><h3>This is what you have filled:</h3> <ul> <li>FullName:${fullName}</li><li>Email:${email}</li> <li>Mobile Code:${mobileCode}</li><li>Mobile:${mobile} <li>Child Age: ${babyAge}</li></ul></div> `,
    };
    await transporter.sendMail(mailOptions);

    // const sendWhatsAppMessage = async (recipient, message) => {
    //   try {
    //     const whatsappMessage = await twilioClient.messages.create({
    //       body: message,
    //       from: "whatsapp:+14155238886",
    //       to: `whatsapp:${mobileCode}${mobile}`,
    //     });
    //     console.log("whatsapp message sent:", whatsappMessage.sid);
    //   } catch (error) {
    //     console.error("Error sending whatsapp message with Twilio:", error);
    //   }
    // };
    // const whatsappMessage = `Dear ${fullName}, your demo session is booked. Our team will contact you soon!.This is what you have filled: FullName:${fullName}  Email:${email}  MobileCode: ${mobileCode}  mobile: ${mobile} ChildAge: ${babyAge}`;
    // const recipientNumber = `${mobileCode}${mobile}`; // e.g., "1234567890" (with country code)
    // await sendWhatsAppMessage(recipientNumber, whatsappMessage);

    // Respond back to frontend
    res.status(200).json({ message: "Booking successful!" });
  } catch (error) {
    console.error("Error booking demo session:", error);
    res.status(500).json({ message: "Server error, try again later" });
  }
});

export default router;
