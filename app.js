console.log("Hello")
const express = require('express')
const connectToDatabase = require('./database')
const Phone = require('./model/phoneModel')
const app = express()

app.use(express.json())

connectToDatabase()
app.get("/",(req,res) => {
    res.send("Hello Response")
})

// app.get("/check", (req,res) => {
//     res.status(200).json({
//         "name" : "araj",
//         "age" : 19
//     })
// })

app.post("/phone", (req,res) =>{
    const {phoneName,phonePrice,imeiNumber,phoneCompany} = req.body
    Phone.create({
        phoneName,
        phonePrice,
        imeiNumber,
        phoneCompany
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});