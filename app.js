console.log("Hello")
const express = require('express')
const fs = require('fs')
const connectToDatabase = require('./database')
const Phone = require('./model/phoneModel')
const { storage , multer } = require('./middleware/multerConfig')
const app = express()
const upload = multer({storage : storage})
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

app.post("/phone",upload.single("image"), async(req,res) =>{
    // console.log(req.body)
    // console.log(req.file)
    const {phoneName,phonePrice,imeiNumber,phoneCompany,specs} = req.body
    const filename = "http://localhost:3000/" + req.file.filename
    // if(req.file.size>100000){
    //     return
    // }
    await Phone.create({
        phoneName,
        phonePrice,
        imeiNumber,
        phoneCompany,
        specs,
        imageUrl:filename
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

app.patch("/phone/:id",upload.single('image'), async (req,res) => {
    const id = req.params.id
    const {phoneName,phonePrice,imeiNumber,phoneCompany,specs} = req.body
    const oldData = await Phone.findById(id)
    let filename;
    if(!req.file){
        const oldImg = oldData.imageUrl
        const oldUrllengts = "http://localhost/".length
        const oldUrlNew = oldImg.slice(oldUrllengts)
        fs.unlink(`storage/${oldUrlNew}`,(err) =>{
            if(err){
                console.log(err)
            }
            else{
                console.log(success);
            }
        })
        filename = "http://localhost/" + req.file.filename
    }
    await Phone.findByIdAndUpdate(id,{
        phoneName,
        phonePrice,
        imeiNumber,
        phoneCompany,
        specs,
        imageUrl : filename
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

app.use(express.static("./storage"))

app.listen(3000, () => {
    console.log('Server running on port 3000');
});