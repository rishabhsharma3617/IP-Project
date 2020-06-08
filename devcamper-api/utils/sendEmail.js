const nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport')
const sendEmail = async options => {
  const transporter = nodemailer.createTransport(sgTransport({
   
    auth: {
      api_user: process.env.SMTP_EMAIL,
      api_key: process.env.SMTP_PASSWORD
    }
  }));

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  const info = await transporter.sendMail(message);
  console.log(info)
  console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;
