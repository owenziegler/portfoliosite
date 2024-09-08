/*
documents.js

Description:
Route definitions for documents.
*/
const express = require('express')
const {
    listDocuments,
    sendDocument
} = require('../controllers/documentController.js')

//invoke router
const router = express.Router()

//GET a list of all documents
router.get('/', listDocuments)

//GET a specific document
router.get('/:docName', sendDocument)