//core modules
const path=require("path")
//External modules
const express=require("express")

//apppp
const app=express();
app.use("/",(req,res,next)=>{
    console.log("hi");
   res.send("<h1>fahad</h1>")
    
})

app.listen(4500,()=>{
    console.log("server is running on port 4000");
    
})