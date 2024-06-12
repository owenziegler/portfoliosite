//imports
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const postRoutes = require("./routes/posts")
require("dotenv").config()
//express app
const app = express()
//uses
app.use(express.json())
app.use(cors())

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

//middleware
app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})

//routing
app.use("/api/posts",postRoutes)

