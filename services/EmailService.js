var nodemailer = require('nodemailer');
const email = 'styc484@gmail.com';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,//true
  port: 25,//465
  auth: {
    user: email,
    pass: 'Styc1;1Styc'
  }, tls: {
    rejectUnauthorized: false
  }
}); 

const sendMail = (message) => {
    var mailOptions = {
        from: email,
        to: email,
        subject: 'STYC QUERY',
        html: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          throw error;
        } else {
          console.log('Email sent: ' + info.response);
          return info.response;
        }
      });
}

module.exports = {
    sendMail,
}