const express = require("express")
const mongoose=require("mongoose")
const User =require("./model/userSchema")
const cors=require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://ca733:Afsana123@cluster0.eenut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("mongodb is connected")
})
app.post('/signup',async(req,res)=>{
    try{
        const userData=await User.create({name:req.body.name,password:req.body.password})
        if(userData){
            res.status(200).json({message:"user is registered"})
        }else{
            res.status(404).json({message:"something went wrong"})
        }

    }catch(error){
        console.log(error)
    }
})
app.get('/',(req,res)=>{
    res.send("working")
})

app.listen(3077,()=>{
    console.log("server running");
})

app.post('/login',async(req,res)=>{
    try{
        const loginUser = await User.findOne({name:req.body.name})
        if(!loginUser){
            return res.status(400).json({message:"user not found"})
        }
        if(loginUser.password!==req.body.password){
            return res.status(401).json({
                message:"credential mismatch"
            })
        }
        res.status(200).json({message:"login successfully"})
    }catch (error){
        console.log(error);
    }
})
