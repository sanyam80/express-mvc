
const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    firstName :{type:String, required:true},
    lastName :{type:String, required:false},
    email :{type:String, required:true, unique:false},
    password:{type:String, required:true}
   });
const user = mongoose.model("students", userSchema)

module.exports = user;
