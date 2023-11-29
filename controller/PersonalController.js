const asyncHandler = require("express-async-handler");
const { PersonalModel } = require("../models/PersonalModel");
const CloudinaryCloud = require("./utils/CloudinaryCloud")

// register personal

const createPersonal = asyncHandler(async (req, res) => {
    let { name, fathername, email, mobile, aadharnumber } = req.body
    try {
        if (!name || !fathername || !email || !mobile || !aadharnumber) {
            res.status(400).send("All Fields are Required")
        }

        const localPath = `public/images/profile/${req.file.filename}`;
        console.log(localPath);
        let imgUploaded = await CloudinaryCloud(localPath);


        let data = PersonalModel({
            name: name,
            fathername: fathername,
            email: email,
            mobile: mobile,
            aadharnumber: aadharnumber,
            image: imgUploaded?.url,
        })

        await data.save();

        res.status(201).json({ message: "Submitted", data: data })

    } catch (error) {
        res.status(500).send(error?.message)
    }
})


// get personal

const getAllPersonals = asyncHandler(async (req, res) => {
    try {
        let data = await PersonalModel.find({});

        if (!data) {
            res.status(400).send("No data fount");
        }

        res.status(200).send(data)

    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = { createPersonal,getAllPersonals }