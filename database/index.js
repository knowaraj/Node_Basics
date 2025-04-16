const mongoose = require('mongoose')

const connectionString = "mongodb+srv://knowaraj:123@cluster0.cqdthg3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
async function connectToDatabase(){
    await mongoose.connect(connectionString)
    console.log("DB connected successfully !")
}
module.exports = connectToDatabase