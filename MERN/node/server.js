const express = require("express")
const app = express()
app.get('/',(req,res)=>{
    res.send("hi from server")
})
app.get('/about',(req,res)=>{
    res.send("bye from server")
})
app.get('/contact',(req,res)=>{
    res.send("contact")
})
app.listen(3009,()=>{
    console.log("server is running");
})
