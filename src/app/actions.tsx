"use server";
import sgMail from "@sendgrid/mail";

async function sendEmail(
  sender: string,
  from: string,
  subject: string,
  body: string,
) {
  const toEmail = process.env.TO_EMAIL;
  const authorizedSender = process.env.AUTHORIZED_SENDER;
  const apiKey = process.env.SENDGRID_API_KEY
  if (apiKey && toEmail && authorizedSender) {
    sgMail.setApiKey(apiKey);
    const msg = {
      to: toEmail,
      from: authorizedSender,
      subject: subject,
      text: body,
      reply_to: {
        email: from,
        name: sender,
      },
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent on behalf of " + sender + " (" + from + ")");
      })
      .catch((error) => {
        console.error(error.response.body);
      });
  } else {
    let var_name;
    if (!apiKey) {
      var_name = "SENDGRID_API_KEY"
    } else if (!authorizedSender) {
      var_name = "AUTHORIZED_SENDER"
    } else if (!toEmail) {
      var_name = "TO_EMAIL"
    }
    console.log("Email not sent, missing ENV variable " + var_name)
  }
}

export { sendEmail };
