const express = require("express");
const user = require("../models/user.models");
const app = express();


app.post("",async(req,res)=>{
    try{
        const user1 = await user.create(req.body);
        return res.send({"user":user1})
    }
    catch{
        
        return res.send("something went wrong");
    }
   })
   
   
   
   app.get("",async(req,res) =>{
   
       const User = await user.find().lean().exec()
       return res.send({"users":User})
   
   
   })

   module.exports = app;