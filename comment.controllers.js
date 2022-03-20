const express = require("express");
const Comment = require("../models/Comment.models");
const app = express();



app.post("",async(req,res)=>{
    try{
        const posts = await Comment.create(req.body);
        return res.send({"user":posts})
    }
    catch{
        
        return res.send("something went wrong");
    }
   })
   
   
   
  app.get("",async(req,res) =>{
   
       const post = await Comment.find().lean().exec()
       return res.send({"users":post})
   
   
    });

    module.exports = app;