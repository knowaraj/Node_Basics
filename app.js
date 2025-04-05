console.log("Hello")
const express = require('express')
const app = express()

const ConnectionString = "mongodb+srv://knowaraj:know@r@j@cluster0.cqdthg3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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