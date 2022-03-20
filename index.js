const express = require("express");
const mongoose = require("mongoose");

const connect = require("./configs/db");

const usercontroller = require("./controllers/user.controllers");
const postcontroller = require("./controllers/post.controllers");
const commentcontroller = require("./controllers/comment.controllers");

const app = express();
app.use(express.json());

app.use("/students", usercontroller);
app.use("/Posts", postcontroller);
app.use("/Comment",commentcontroller);





app.listen(5500,async()=>{
    try{
        await connectDB();
    }
    catch{
        console.log("something went wrong")
    }
    console.log("Listening on port 5500")
})