const express = require("express")

const app = express()

app.get((req,res)=>{
    res.status(200).send("Server running..")
})
app.listen(8001,(req,res)=>{
    console.log("hi Server is running...")
})


