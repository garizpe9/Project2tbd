const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
    auth: {
        api_key: '',
        domain: ''
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

