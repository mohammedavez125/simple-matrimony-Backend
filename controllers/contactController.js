const Contact = require("../models/contact");
const validator = require("validator");

const contact= async (req, res) => {
  const { name, email, message } = req.body;

  if (!validator.isEmail(email)) {
    return res.json({
      success: false,
      message: "Enter valid Email",
    });
  }
  const contact = new Contact({
    name: name,
    email: email,
    message: message,
  });

  const savedContact = await contact.save();

  res.json({
    success: true,
    message: "message sent successfully",
    data: savedContact,
  });
};

const viewmessage= async (req, res) => {
  const contact = await Contact.find();

  res.json({
    success: true,
    message: "Contact fetch successfully",
    data: contact,
  });
};

// const sendmail= async (req, res) => {
//   const { mailId } = req.body;
//   async function main() {
//     const otp = Math.floor(Math.random() * 9000) + 1000;

//     let testAccount = await nodemailer.createTestAccount();

//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: "yashbomble2003@gmail.com", // generated ethereal user
//         pass: "process.env.MAIL_KEY ", //generated ethereal password
//       },
//     });

//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: '"GYM" yashbomble@.com', // sender address
//       to: mailId, //list of receivers
//       subject: "GYM System✔", // Subject line
//       text: " ", // plain text body
//       html:
//         "<h1>" +
//         "<h1>" +
//         "<b>Dear User <br /> &nbsp;&nbsp;&nbsp;Dear User , You have Successfully Register for Gym.</b>" +
//         "<br />", // html body
//     });

//     if (info) {
//       return res.json({
//         success: true,
//         message: "mail sent",
//         data: otp,
//       });
//     } else {
//       return res.json({
//         success: false,
//         message: "Error",
//       });
//     }
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//     // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//   }

  // main().catch(console.error);
// };

module.exports= {
  contact,
  viewmessage 
};