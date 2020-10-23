const generateOtp = () => {
    return Math.floor((Math.random() * 89999) + 10000);
}

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const fromNumber = process.env.FROM_NUMBER
const client = require('twilio')(accountSid, authToken);

const dispatchOtp = (phoneNumber, otp) => {
    client.messages
    .create({
       body: '<#> Your verification code is' +otp+ 'RIWGK2Y/1vW',
       from: '+19706993993',
       to: phoneNumber
     })
    .then(message => console.log(message.sid));
}

module.exports = {generateOtp, dispatchOtp}