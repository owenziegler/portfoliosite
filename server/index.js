const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const password = process.env.PASSWORD
const app = express()
const PORT = 3001

app.use(express.json())
app.use(cors())

mongoose.connect(
    `mongodb+srv://owenziegler:${password}@cluster.iyl5ehj.mongodb.net/portfoliosite?retryWrites=true&w=majority&appName=cluster`
)

app.listen(PORT, () => {
    console.log("SERVER IS RUNNING\n")
})

