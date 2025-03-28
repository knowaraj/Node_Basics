console.log("Hello")
const app = require('express')()

app.get(3000,(req,res) => {
    res.send("Hello Response")
})