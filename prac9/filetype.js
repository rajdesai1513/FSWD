const express=require("express")
const fs=require("fs")
const app=express()
app.get("/",function(req,res){
    
    fs.readFile("file.txt","utf-8",(err,data)=>{
        if(err){
            res.send("error")
        }else{
            res.json(data)
        }
    })
})
app.listen(3001)