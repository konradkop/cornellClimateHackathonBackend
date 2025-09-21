const AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES();

ses.getSendQuota((err, data) => {
  if (err) {
    console.error("AWS credentials not working:", err);
  } else {
    console.log("AWS credentials are valid. Send quota info:", data);
  }
});
