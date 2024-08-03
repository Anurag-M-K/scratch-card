import { Request, Response } from "express";
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export const sendScratchCardLink = async (req: Request, res: Response) => {
  try {
    const { mobileNumber , message} = req.body;
console.log("req.bodhy ",req.body)
   // Send SMS using Twilio
   const twilioMessage = await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER, // Twilio phone number from your account
    to: mobileNumber.startsWith('+') ? mobileNumber : `+${mobileNumber}`, // Ensure the phone number is in the correct format
  });

  console.log("Twilio Message Sent:", twilioMessage);

  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
