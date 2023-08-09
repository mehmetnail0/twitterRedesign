const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
    {
        author: {type: String, require: true},
        content: { type: String, require: true },
        likes: Array,
        category: { type: String, require: true }, 
        comments: Array,
    },
    {timestamps: true}
)

const Post = mongoose.model("post", PostSchema);
module.exports=Post