const Post = require("../models/postSchema")
const db = require("../db/connectionsDb");

db.on('error', console.error.bind(console.error, 'MongoDB connection error:'))

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const getPost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findbyId(id)
    if (post) {
      return res.json(post)
    }
    res.status(404).json({message: "Post not found"})
  }
  catch (error) {
    res.status(500).json({error: error.message})
  }
}

const createPost = async (req, res) => {
  try {
    const newPost = await new Post(req.body)
    await newPost.save()
    req.status(201).json(newPost)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const updatePost = async (req, res) => {
  const { id } = req.params
  await Post.findByIdAndUpdate(id, req.body, { new: true }, (error, post) => {
    if (error) {
      return res.status(500).json({error: error.message})
    }
    if (!post) {
      return res.status(404).json({message: "Post not found"})
    }
    res.status(201).json(post)
  })
}

const deletePost = async (req, res) =>{
  try {
    const { id } = req.params;
  const deletePost = await Post.findByIdandDelete(id)
  if (deletePost) {
    return res.status(200).send("Post deleted")
  }
  throw new Error("Post not found")
  }
  catch (error) {
   res.status(500).json({error: error.message})
  }
}

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
}
