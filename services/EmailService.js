var nodemailer = require('nodemailer');
const email = 'pusp94@gmail.com';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: 'Pandey@123'
  }
}); 

const sendMail = (message) => {
    var mailOptions = {
        from: 'pusp94@gmail.com',
        to: 'pusp94@gmail.com',
        subject: 'STYC QUERY',
        html: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log('MAIL ERROR',error);
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