const express = require("express");
const router = express.Router();
const {createPersonal,getAllPersonals} = require("../controller/PersonalController")
const {profilePhotoResize,profilePhotoUpload} = require("../middleware/Upload");


// create personal

router.route("/createPersonal").post(profilePhotoUpload.single("image"),profilePhotoResize,createPersonal);

// get all personals

router.route("/allpersonals").get(getAllPersonals);


module.exports = router