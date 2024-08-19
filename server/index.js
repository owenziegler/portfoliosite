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
//middleware
app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()   
})
app.use(express.json())
app.use(cors())
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

//routing
app.use("/api/posts",postRoutes)
app.use("/public/images",imageRoutes)

