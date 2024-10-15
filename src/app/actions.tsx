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
  if (process.env.SENDGRID_API_KEY && toEmail && authorizedSender) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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
  }
}

export { sendEmail };
