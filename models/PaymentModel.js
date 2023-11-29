const mongoose = require("mongoose");
const { Schema } = mongoose;



const PaymentSchema = new Schema({
    referenceid: {
        type: String,
        required: true,
        trim: true
    }
},
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    }

)


const PaymentModel = mongoose.model("PAYMENT", PaymentSchema);
module.exports = { PaymentModel }