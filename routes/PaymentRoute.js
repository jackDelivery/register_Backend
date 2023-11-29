const express = require("express");
const router = express.Router();
const { Payment } = require("../controller/PaymentController");






// create payment
router.route("/createpayment").post(Payment);






module.exports = router