const nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport')
const sendEmail = async options => {
  const transporter = nodemailer.createTransport({
    service : 'SendGrid',
    auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD
    }
  });

  const message = {
    from: `rishabh171659.cse@chitkara.edu.in`,
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  const info = await transporter.sendMail(message);
  console.log(info)
  console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;
