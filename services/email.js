const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

const orgEmail = process.env.ORG_EMAIL_ADDRESS;

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

function sendEmail(name, email, subject, message) {
  let optionOrganization = {
    from: orgEmail,
    to: orgEmail,
    subject: subject,
    html: `
            <h3>Customer Name: ${name}<h3>
            <p>Email address: ${email}</p>
            <p>Subject: ${subject}</p>
            <p>Message: ${message}</p>
          `,
  };

  let optionCustomer = {
    from: orgEmail,
    to: email,
    subject: subject,
    html: `
            <h3>Thank you for contacting us, ${name}! We will get back to you soon on this regard: <h3>
            <p>Subject: ${subject}</p>
            <p>Message: ${message}</p>
          `,
  };
  return new Promise((resolve, reject) => {
    send(optionOrganization, optionCustomer)
      .then((result) => {
        console.log("Email sent successfully:", result);
        resolve({ success: true });
      })
      .catch((error) => {
        console.error("Error sending email: ", error.message);
        reject({ success: false });
      });
  });
}

async function send(optionOrganization, optionCustomer) {
  try {
    const toOrg = await transporter.sendMail(optionOrganization);
    console.log("Email send to Organization: " + toOrg.envelope);
    const toCustomer = await transporter.sendMail(optionCustomer);
    console.log("Email send to Organization: " + toCustomer.envelope);
    return toOrg;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send email: " + error.message);
  }
}

module.exports = { sendEmail };
