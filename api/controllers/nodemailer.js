const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config()

const { user, pass } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: user, // generated ethereal user
    pass: pass, // generated ethereal password
  },
});

transporter.verify().then(()=> console.log("ready for send emails"));

module.exports = transporter;


