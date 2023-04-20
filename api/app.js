const express = require("express");
const router = require("./routes/index.js");
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();

app.use(cors({ origin: ["http://localhost:3000", "https://portfolio-liard-mu-69.vercel.app"] }))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

app.listen("3001", console.log("Listening on port 3001"));