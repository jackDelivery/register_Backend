const asyncHandler = require("express-async-handler");
const { PaymentModel } = require("../models/PaymentModel");





const Payment = asyncHandler(async (req, res) => {
    let { referenceid } = req.body;
    try {

        if (!referenceid) {
            res.status(400).send("All Fields are required")
        }

        let data = PaymentModel({
            referenceid: referenceid
        })

        await data.save();

        res.status(201).send(data);

    } catch (error) {
        res.status(500).send(error)
    }
})





module.exports = { Payment };