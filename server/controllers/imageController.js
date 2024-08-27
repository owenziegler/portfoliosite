const path = require("path")
const fs = require("fs").promises

const basePath = path.join(__dirname, "../public/images")

//lists all folders in public/images
//inputs: none
//outputs: array of strings listing folder names
const listFolders = async (req, res) => {
    try {
        const files = await fs.readdir(basePath, {withFileTypes:true}) //grab all files within public/images
        const folders = files
            .filter(file => file.isDirectory()) //filter to only directories
            .map(file => file.name) //only write names of directories
        res.status(200).json(folders); //return directory names
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

//lists all image names in a given folder with their file extensions
//inputs: id of user whose folder is to be accessed
//outputs: array of strings, listing file names with extensions
const listImages = async(req,res) => {
    const folderPath = path.join(basePath, req.params.id)
    try {
        const files = await fs.readdir(folderPath) //grab all filenames within the folder
        const images = files.filter(file => /\.(png|jpg)$/i.test(file)) //filter to only .png and .jpg files
        res.status(200).json(images); //return filenames
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

//creates a new folder in public/images
//inputs: id of new user whose folder is to be created
//outputs: none
const newFolder = async (req,res) => {
    const folderPath = path.join(basePath, req.body.id) //specify path of folder to be created
    try {
        await fs.mkdir(folderPath, {recursive: true}) //make the new folder
        res.status(200).json(`/public/images/${req.body.id} created successfully`)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

//deletes a folder in public/images
//inputs: id of user whose folder is to be deleted
//outputs: none
const deleteFolder = async(req,res) => {
    const folderPath = path.join(basePath, req.params.id) //specify path of folder to be created
    try {
        await fs.rm(folderPath, {recursive: true}) //delete the folder and all files within
        res.status(200).json(`/public/images/${req.params.id} deleted successfully`)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

//uploads an image to a folder in public/images
//inputs: id of user whose folder is to be accessed, image file to be uploaded
//outputs: none
const uploadImages = async (req, res) => {
    const folderPath = path.join(basePath, req.params.id) //specify path of folder to insert images
    if(!(await fs.stat(folderPath).catch(() => false))) { //if folder does not exist
        return res.status(404).json({error: "folder not found"})
    }
    const multer = require('multer') //initialize multer
    const upload = multer({dest: 'temp/'}) //specify temp folder

    upload.array('images')(req,res, async(err) => { //upload image from 'image' key in formdata to temp folder
        if (err) {
            return res.status(500).json({error: "server error"})
        }
        try {
            //iterate through images
            const promises = req.files.map(async (image) => {
                //current path of image
                console.log("test")
                const tempPath = image.path
                //desination path of image
                console.log("test")
                const targetPath = path.join(folderPath, image.originalname)
                //moving image
                console.log("test")
                await fs.rename(tempPath, targetPath)
            })
            //wait for all image transfers to finish
            await Promise.all(promises)
            res.status(201).json({message: 'upload successful'})
        }
        catch(err) {
            res.status(500).json({error: 'server error'})
        }
    })
}

//deletes a specific image from a given folder 
//inputs: id of user whose folder is to be accessed, name of image to be deleted
//outputs: none
const deleteImage = async(req, res) => {
    const imagePath = path.join(basePath, req.params.id, req.params.imageName) //specify image to be deleted
    try {
        await fs.unlink(imagePath) //delete image
        res.status(200).json(`/public/images/${req.params.id}/${req.params.imageName} deleted successfully`)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    listFolders,
    listImages,
    newFolder,
    deleteFolder,
    uploadImages,
    deleteImage
}