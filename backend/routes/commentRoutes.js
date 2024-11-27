import express from "express";
import mongoose from "mongoose";
import Comment from "../models/Comment.js"
import cors from "cors";
import Reply from "../models/Comment.js"

const router=express.Router();


router.get("/comments/:blogTitle",async(req,res) => {
    try {
    const comments = await Comment.find({blogTitle:req.params.blogTitle}).sort({date: -1}).limit(1); //Get only the latest commit
    res.json(comments);


    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
})

//only latest comment

router.post("/comments/:blogTitle",async(req,res) => {
    const {author,email,text}=req.body;

    if(!author || !email || !text) {
        return res.status(400).json({error:"All fields are required"})
    }

    try {
        const newComment=new Comment({blogTitle:req.params.blogTitle,author,email,text});
        const savedComment=await newComment.save();
        res.status(201).json(savedComment)
    } catch (error) {
        console.error("Error saving comment: ",error)
        res.status(500).json({message:error.message})
    }
})

router.delete("/comments/:blogTitle/:commentId",async(req, res) => {
    const {commentId} = req.params;

    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if(deletedComment){
            res.status(200).json({success:true,message:"Comment deleted successfully"});
        }else{
            res.status(404).json({success:false,message:"Comment not found"})
        }
        
    } catch (error) {
        console.error("error deleting comment: ",error)
        res.status(500).json({success:false,message:"Internal server error"})
    }
})


//Route to add a reply to a comment
router.post("/comments/:blogTitle/:commentId/reply",async(req,res)=>{
    const {commentId} = req.params;
    const {author,email,text}=req.body;

    try {
        const comment=await Comment.findById(commentId);
        if(!comment){
            return res.status(404).json({message:"Comment not found"});
        }

        //Add the new reply to the replies array
        const newReply={
            author,
            email,
            text,
            date:new Date(),

        };

        comment.replies.push(newReply);
        await comment.save();
        res.status(201).json(newReply)
    } catch (error) {
        console.error("Error submitting reply:",)
        res.status(500).json({message:"Failed to add reply",error});
    }
});

router.delete("/comments/:blogTitle/:commentId/reply/:replyId",async(req,res)=>{
    const {commentId,replyId}=req.params;
try {
    const comment =await Comment.findById(commentId)
    if(!comment){
        return res.status(404).json({message:"Comment not found"})

    }
    const replyExists=comment.replies.some(reply=>reply._id.toString()===replyId)
    if(!replyExists){
        return res.status(404).json({message:"Reply not found"})
    }
    comment.replies=comment.replies.filter(reply=>reply._id.toString()!==replyId)
    await comment.save();
   res.status(200).json({message:"Reply deleted successfully"})
} catch (error) {
    console.error("Error deleting reply:",error);
    res.status(500).json({message:"Failed to delete reply"})
}
})


export default router;