const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const url = "mongodb://localhost:27017/ecom"

const port = 8080

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(url)
.then(()=>{
    console.log("çonnected")
})
.catch((error)=>{
    console.log('not connected',error)
})

const userData = new mongoose.Schema({
    data:mongoose.Schema.Types.Mixed
})

const user = mongoose.model('products',userData)

app.get("/user", async(req,res)=>{
    const result = await user.find();
    res.status(200).json(result)
})
app.get("/user/:id", async(req,res)=>{
    const {id} = req.params
    const result = await user.findById(id)
    res.status(200).json(result)
})

app.listen(port,()=>{
    console.log('port is running')
})