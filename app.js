console.log("Hello")
const express = require('express')
const app = express()

app.get("/",(req,res) => {
    res.send("Hello Response")
})
app.get("/check", (req,res) => {
    res.send("Chec")
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});