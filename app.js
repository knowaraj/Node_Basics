console.log("Hello")
const express = require('express')
const connectToDatabase = require('./database')
const app = express()

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

app.listen(3000, () => {
    console.log('Server running on port 3000');
});