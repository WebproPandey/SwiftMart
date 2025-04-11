const express = require('express');
const cors =  require("cors")
const app = express()

app.use(express.json())
const dotenv = require('dotenv')
dotenv.config()
const {connectDb} =  require("./config/db")
app.use(cors())
connectDb ()

const  authRouter =  require("./routes/authRoute")
const  userRouter =  require("./routes/userRoute")

app.get("/" , (req, res) => {
    res.send("Hello World")
})

app.use("/auth",authRouter)
app.use("/users",userRouter)




module.exports = app