const mongoose = require("mongoose");
const { Schema } = mongoose;


const PersonalSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    fathername: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    mobile: {
        type: Number,
        trim: true,
        required: true,
    },
    aadharnumber: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }
}, {
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
    timestamps: true,
})

const PersonalModel = mongoose.model("PERSONAL", PersonalSchema);


module.exports = { PersonalModel };