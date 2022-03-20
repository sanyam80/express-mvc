const express = require("express");
const Post = require("../models/post.models");
const app = express();


app.post("",async(req,res)=>{
    try{
        const posts = await Post.create(req.body);
        return res.send({"user":posts})
    }
    catch{
        console.log("something went wrong")
        return res.send("something went wrong");
    }
   })
   
   
   
  app.get("",async(req,res) =>{
   
       const post = await Post.find().populate({path:"userid",select:{firstName:1, _id:0}}).lean().exec()
       return res.send({"users":post})
   
   
    });
    app.patch("/:id",async(req,res) =>{
   
        const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.send({"users":post})
    
    
     });
     module.exports = app;