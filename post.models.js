const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title:{type:String, required:true},
        body:{type:String, required:true},
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"students",
            required:"true"
        }
    },
    {
    timestamps:true
}
);
const Post = mongoose.model("post",postSchema);
module.exports = Post;