const nodemailer = require('nodemailer');
var sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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');
const sendEmail = async options => {

  const message = {
    from: `rishabh171659.cse@chitkara.edu.in`,
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  await sgMail.send(message);

  
};

module.exports = sendEmail;
