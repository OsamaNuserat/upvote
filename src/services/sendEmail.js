import nodemailer from "nodemailer";

export async function sendEmail(to,subject,html) {
const transporter = nodemailer.createTransport({
   service: 'gmail',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    }
  });

// async..await is not allowed in global scope, must use a wrapper

  const info = await transporter.sendMail({
    from: `Osama Nuserat" <${process.env.EMAIL}>`, // sender address
    to , // list of receivers
    subject , // Subject line
    html , // html body
  })
}


