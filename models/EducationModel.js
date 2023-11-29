const mongoose = require("mongoose");
const { Schema } = mongoose;



const EducationSchema = new Schema({
    highestqualification: {
        type: String,
        required: true,
        trim: true
    },
    otherqualification: {
        type: String,
        required: true,
        trim: true
    },
    joblevel: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
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





const EducationModel = mongoose.model("EDUCATION", EducationSchema);



module.exports = { EducationModel }