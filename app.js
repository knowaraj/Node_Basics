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

app.post("/phone", async(req,res) =>{
    console.log(req.body)
    const {phoneName,phonePrice,imeiNumber,phoneCompany,specs} = req.body
    await Phone.create({
        phoneName,
        phonePrice,
        imeiNumber,
        phoneCompany,
        specs
    })
    res.status(201).json({
        message : "Successfully"
    })
})
app.get("/phone", async (req,res) => {
    const phones = await Phone.find()//returns array
    res.status(201).json({
        message : "Phone view successful",
        data : phones
    })
})
app.get("/phone/:id",async(req,res) => {
    try{
        const {id} = req.params
        const phone = await Phone.findById(id)//returns object
        // Phone.findOneAndDelete({_id : id})
    res.status(201).json({
        message : "Successful",
        data : phone
    })
    }
    catch(error){
        res.status(500).json({
            message : "Something went wrong"
        })
    }
})

app.patch("/phone/:id", async (req,res) => {
    const id = req.params.id
    const {phoneName,phonePrice,imeiNumber,phoneCompany,specs} = req.body
    await Phone.findByIdAndUpdate(id,{
        phoneName,
        phonePrice,
        imeiNumber,
        phoneCompany,
        specs
    })
    res.status(201).json({
        message : "Upadate successful"
    })
})

app.delete("/phone/:id", async (req,res) =>{
    const id = req.params.id
    await Phone.findByIdAndDelete(id)
    res.status(201).json({
        message : " Deleted"
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});