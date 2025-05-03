const express=require("express")
const app=express()
app.get('/',(req,res)=>
{
    res.send("hello akshay")
}
)
app.get('/login',(req,res)=>{
    res.send("welcome akshay")
})
app.get('/home',(req,res)=>{
    res.send("this is my home")
})
app.listen(3000,()=>{
console.log("server is running");
}
)