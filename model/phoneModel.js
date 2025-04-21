const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    phoneName : {
        type : String
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