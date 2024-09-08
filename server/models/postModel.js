/*
postModel.js

description:
Schema definition for posts in the mongoDB database.
*/
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const postSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    author: {
        type:String,
        required:true,
    },
    body: {
        type:String,
        required:true,
    },
    category: {
        type:String,
        required:true,
    }
}, {timestamps: true})

module.exports = mongoose.model("Post", postSchema)