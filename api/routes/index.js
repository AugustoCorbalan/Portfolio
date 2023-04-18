const { Router } = require("express");
const  transporter  = require("../controllers/nodemailer");

const router = Router();

router.post("/send", async (req, res)=>{
    const { name, email, asunto, mensaje } = req.body;
    const content = `<p>${mensaje}</p></br></br><p> Nombre: ${name},  email: ${email} </p>`
    try {
        await transporter.sendMail({
            from: '"Portfolio" <auguscorbi@gmail.com>',
            to: "auguscorbi@gmail.com",
            subject: asunto,
            html: content,
          });
        res.status(200).send("El email se envió correctamente")
        
    } catch (error) {
        res.status(400).send(error.message)
    }
})


module.exports = router;