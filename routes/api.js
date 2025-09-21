import express from "express";
import { sendEmail } from "../aws-ses.js";

const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { fromEmail, toEmail, subject, message } = req.body;
  console.log("hit");
  if (!fromEmail || !toEmail || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields" });
  }

  try {
    const result = await sendEmail({ fromEmail, toEmail, subject, message });
    res.status(200).json({ success: true, result });
    console.log("sent");
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
    console.log("not sent");
  }
});

export default router;
