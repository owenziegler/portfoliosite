const express = require('express')
const {
    listFolders,
    listImages,
    newFolder,
    deleteFolder,
    uploadImage,
    deleteImage
} = require('../controllers/imageController.js')
const router = express.Router()

router.get('/', listFolders)

router.get('/:id', listImages)

router.post('/', newFolder)

router.delete('/:id', deleteFolder)

router.post('/:id', uploadImage)

router.delete('/:id/:imageName', deleteImage)

module.exports = router