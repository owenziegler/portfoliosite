const express = require('express')
const {
    listFolders,
    listImages,
    newFolder,
    deleteFolder,
    uploadImages,
    deleteImage
} = require('../controllers/imageController.js')
const router = express.Router()

router.get('/', listFolders)

router.get('/:id', listImages)

router.post('/', newFolder)

router.delete('/:id', deleteFolder)

router.post('/:id', uploadImages)

router.delete('/:id/:imageName', deleteImage)

module.exports = router