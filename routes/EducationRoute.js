const express = require("express");
const router = express.Router();
const { createEducation } = require("../controller/EducationController");
const { profilePhotoResize, profilePhotoUpload } = require("../middleware/Upload")


router.route("/createEducation").post(profilePhotoUpload.single("image"), profilePhotoResize, createEducation);







module.exports = router

