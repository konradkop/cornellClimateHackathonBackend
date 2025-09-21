import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "./libs/sesClient.js";

/**
 * Create SES SendEmailCommand
 */
const createSendEmailCommand = (toAddress, fromAddress, subject, message) => {
  return new SendEmailCommand({
    Destination: {
      ToAddresses: [toAddress],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: message,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: fromAddress,
  });
};

/**
 * Send email via AWS SES
 */
export const sendEmail = async ({ toEmail, fromEmail, subject, message }) => {
  const command = createSendEmailCommand(toEmail, fromEmail, subject, message);

  try {
    const response = await sesClient.send(command);
    console.log("Email sent:", response);
    return response;
  } catch (err) {
    if (err.name === "MessageRejected") {
      console.error("Message rejected by SES:", err.message);
      return err;
    }
    throw err;
  }
};
