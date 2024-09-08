/*
documentController.js

description:
Controller for document requests.
*/
const path = require("path")
const fs = require("fs").promises

const basePath = path.join(__dirname, "../public/documents")

//lists all documents in the documents folder
//inputs: none
//outputs: array of strings listing document names
const listDocuments = async (req, res) => {
    try {
        const files = await fs.readdir(basePath) //get all files in public/documents
        const documents = files.filter(file => /\.(pdf)$/i.test(file)) //filter to only PDFs
        res.status(200).json(documents) //send back response
    }
    catch(error) {
        res.status(500).json({error: error.message}) //send back error message
    }
}

//sends a specified document to client
//inputs: name of document
//outputs: document
const sendDocument = (req, res) => {
    try {
        const docPath = path.join(basePath, req.params.docName) //create document path
        res.status(200).sendFile(docPath) //send back document
    }
    catch(error) {
        res.status(500).json({error: error.message}) //send back error message
    }
}

module.exports = {
    listDocuments,
    sendDocument
}