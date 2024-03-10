import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const { body } = await readBody(event);

  console.log(body);
  const transporter = nodemailer.createTransport({
    host: body.host,
    port: body.port,
    secure: body.secure, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: body.user,
      pass: body.password,
    },
  });

  await transporter.sendMail({
    from: body.user, // sender address
    to: body.reciver, // list of receivers
    subject: body.subject, // Subject line
    text: body.message, // plain text body
  });
});
