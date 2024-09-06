//imports
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const postRoutes = require("./routes/posts")
const imageRoutes = require("./routes/images")
require("dotenv").config()
//express app
const app = express()
//log request in console
app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()   
})

//check if non-GET requests have a valid API key
app.use((req,res,next) => {
    if(req.method !== 'GET') { //if the incoming request is anything other than a GET
        const apiKey = req.headers['api-key']
        const realApiKey = process.env.APIKEY
        if (apiKey && apiKey === realApiKey) next()
        else res.status(403).json({error: 'Invalid API key'})
    }
    else next()
})

app.use(express.json()) //invoke express
app.use(cors()) //invoke cors
app.use('/public',express.static(path.join(__dirname,'public')))

//mongoose connection
mongoose.connect(process.env.MONGOKEY)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is connected to database & running on port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})

//routes
app.use("/api/posts",postRoutes)
app.use("/public/images",imageRoutes)

