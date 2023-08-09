const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {

        username: {type: String, require: true},
        nameusername: {type: String, require: true},
        profilephoto: String,
        
        email: {type:String, require:true, unique:true},
        password: {type:String, require: true},
        token:String,
        followers: Array,
        following:Array,
        posts: Array



    },
    {timestamps: true}
)

const User = mongoose.model("user", UserSchema);
module.exports=User