//imports
const express = require("express")
const Post = require("../models/postModel")
const {
    getPosts,
    getPost,
    createPost,
    deletePost,
    editPost,
} = require("../controllers/postController")

//invoke router
const router = express.Router()

//GET all posts
router.get('/', getPosts)

//GET a post by id
router.get('/:id', getPost)

//POST a new post
router.post('/', createPost)

//DELETE a post
router.delete('/:id', deletePost)

router.patch('/:id', editPost)

module.exports = router