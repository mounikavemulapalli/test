import mongoose  from "mongoose";
const Schema=mongoose.Schema;

const replySchema=new Schema({
    author:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:new Date
    },
})

const commentSchema=new Schema({
    blogTitle:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    replies:[replySchema], //Array of reply objects
})

const commentModel=mongoose.model("Comment",commentSchema);

export default commentModel;