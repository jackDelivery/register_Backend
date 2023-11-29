require("dotenv").config({});
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const cloudinary = require('cloudinary');

const Personal = require("./routes/PersonalRoute")
const Payment = require("./routes/PaymentRoute");
const education = require("./routes/EducationRoute");

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.Cloud_Name,
    api_key: process.env.API_Key,
    api_secret: process.env.API_Secret
});






// middleware calling
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));  //new line of code
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors("*"))




app.use(Personal)
app.use(Payment)
app.use(education)

// routes calling here

app.get("/", (req, res) => {
    let message = "Hello"
    res.send(message);
})


app.use(("*"), (req, res, next) => {
    res.status(404).send("404 Page Not Found!")
})




// Database Connected
mongoose.connect(process.env.DATABASE).then(() => {
    console.log(`Database Connected`)
}).catch(err => console.log(err))




// server listing
app.listen(PORT, () => console.log(`Your Server is running on ${PORT}`));




