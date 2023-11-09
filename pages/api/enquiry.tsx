//...existing imports
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // ... (existing transporter setup and mailData)
  // Validate the reCAPTCHA token on the server-side
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=6Ld9AQcpAAAAABq1HJv-A8ugkEAqzjDwgXSxYoN3&response=${req.body.captchaToken}`
    );
    if (response.data.success) {
      res.status(200).end();
    } else {
      // reCAPTCHA verification failed
      res.status(400).send("reCAPTCHA verification failed.");
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}
