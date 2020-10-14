require('dotenv').config();
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
    auth: {
        api_key: 'f23767c0adf65cf910fcec053b1d9314-2fbe671d-f58e862f',
        domain: 'sandboxcc87f435ac874c0381b8ec6e17c8c9fd.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) =>{
    const mailOptions = {
        from: 'Aquarium4noobs@gmail.com',
        to: email,
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, function(err, data){
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}
module.exports = sendMail