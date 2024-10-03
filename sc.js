const nodemailer = require('nodemailer');

// Create transporter object using your SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other email services as well
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Set up email data
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email using nodemailer!'
};

// Send email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
