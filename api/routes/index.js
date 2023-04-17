const { Router } = require("express");
const  transporter  = require("../controllers/nodemailer");

const router = Router();

router.get("/send", async (req, res)=>{
    try {
        await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "auguscorbi@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          });
        res.status(200).send("El email se envió correctamente")
        
    } catch (error) {
        res.status(400).send(error.message)
    }
})


module.exports = router;