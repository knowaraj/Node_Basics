const mongoose = require("mongoose")

const phoneSchema = new mongoose.Schema({
    phoneName : {
        type : String,
        unique : true
    },
    phonePrice : {
        type : String
    },
    imeiNumber : {
        type : Number
    },
    phoneCompany : {
        type : String
    }
})

const Phone = mongoose.model('Phone' , phoneSchema)