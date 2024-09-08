/*
images.js

description:
Route definitions for image-based requests
*/
const express = require('express')
const {
    listFolders,
    listImages,
    newFolder,
    deleteFolder,
    uploadImages,
    deleteImage
} = require('../controllers/imageController.js')

//invoke router
const router = express.Router()

//GET a list of all folders
router.get('/', listFolders)

//GET a list of all images in a given folder
router.get('/:id', listImages)

//POST a new folder
router.post('/', newFolder)

//DELETE a folder
router.delete('/:id', deleteFolder)

//POST an image to a specific folder
router.post('/:id', uploadImages)

//DELETE a specific image from a given folder
router.delete('/:id/:imageName', deleteImage)

module.exports = router