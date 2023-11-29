const asyncHandler = require("express-async-handler");
const { EducationModel } = require("../models/EducationModel");
const CloudinaryCloud = require("../controller/utils/CloudinaryCloud");


const createEducation = asyncHandler(async (req, res) => {
    const { highestqualification, otherqualification, joblevel } = req.body;
    try {
        const localPath = `public/images/profile/${req.file.filename}`;
        console.log(localPath);
        let imgUploaded = await CloudinaryCloud(localPath);


        const data = EducationModel({
            highestqualification: highestqualification,
            otherqualification: otherqualification,
            joblevel: joblevel,
            image: imgUploaded?.url
        })

        await data.save();

        res.status(201).send(data);
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = { createEducation }