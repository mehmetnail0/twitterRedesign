const Post = require("../models/Post");
const express = require("express");
const router = express.Router();

// get all Post
router.get("/get-all", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create
router.post("/add-post", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(200).json("Post added successfully.");
  } catch (error) {
    res.status(500).json(error);
  }
});

 // update
 router.put("/update-post", async (req, res) => {
   try {
     await Post.findOneAndUpdate({ _id: req.body.postId }, req.body);
     res.status(200).json("Post updated successfully.");
   } catch (error) {
     res.status(500).json(error);
   }
 });

 // delete
 router.delete("/delete-post", async (req, res) => {
   try {
     await Post.findOneAndDelete({ _id: req.body.postId });
     res.status(200).json("Post deleted successfully.");
   } catch (error) {
     res.status(500).json(error);
   }
 });

 module.exports = router;
