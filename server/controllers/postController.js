/*
postController.js

description:
Controller file for post-related requests.
*/
const Post = require ("../models/postModel")
const mongoose = require("mongoose")
//get all posts
//inputs: none
//outputs: array of all posts, sorted in descending order of creation
const getPosts = async(req, res) => {
    try {
        const posts = await Post.find({}).sort({createdAt: -1}) //GET all posts, in descending order of creation
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}
//get a single post
//inputs: id of post to be retrieved
//outputs: data of specified post
const getPost = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) { //if the id is invalid
        return res.status(400).json({error:"Invalid ID"})
    }
    const post = await Post.findById(id)
    if (!post) { //if no post with the given id exists
        return res.status(404).json({error: "No post with that ID found"})
    }
    res.status(200).json(post)
}
//create a new post
//inputs: title, author, body of post
//outputs: none
const createPost = async(req,res) => {
    const {title, author, body} = req.body
    try {
        const post = await Post.create({title, author, body})
        res.status(200).json(post) //send back OK
    } catch (error) { //if it fails
        res.status(400).json({error: error.message})
    }
}
//delete a post
//inputs: id of post to be deleted
//outputs: none
const deletePost = async(req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"No post with that ID found"})
    }
    const post = await post.findOneAndDelete({_id:id})
    if(!post) {
        return res.status(404).json({error:"No post with that ID found"})
    }
    res.status(200).json(post)
}
//edit a post
//inputs: id of post to be edited, edited title, author, and body of post
//outputs: none
const editPost = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"No post with that ID found"})
    }
    const post = await Post.findOneAndUpdate({_id:id}, {
        ...req.body
    })
    if (!post) {
        return res.status(400).json({error: "No post with that ID found"})
    }
    res.status(200).json(post)
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    deletePost,
    editPost,
}