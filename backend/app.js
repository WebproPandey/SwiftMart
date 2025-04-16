const express = require('express');
const cors =  require("cors")
const app = express()

app.use(express.json())
const dotenv = require('dotenv')
dotenv.config()
const {connectDb} =  require("./config/db")

const corsOptions = {
    origin: "http://localhost:5173", 
    credentials: true, 
  };
  
app.use(cors(corsOptions));
  
connectDb ()

const  authRouter =  require("./routes/authRoute")
app.use("/auth",authRouter)

const  userRouter =  require("./routes/userRoute")
app.use("/api/users",userRouter)

const productRouter =   require("./routes/productRoute")
app.use("/api/products" , productRouter)

const adminProductRouter =   require("./routes/adminProductRoute")
app.use("/api/admin/products" , adminProductRouter)

const cartRouter =   require("./routes/cartRoute")
app.use("/api/cart" , cartRouter)

const cartItemRouter =   require("./routes/cartItemsRoute")
app.use("/api/cart_item" , cartItemRouter)

const orderRouter =   require("./routes/orderRoute")
app.use("/api/order" , orderRouter)

const adminOrderRouter =   require("./routes/adminRoute")
app.use("/api/admin/orders" , adminOrderRouter)

const reviewRouter =   require("./routes/reviewRoute")
app.use("/api/reviews" , reviewRouter)

const ratingRouter =   require("./routes/ratingRoute")
app.use("/api/ratings" , ratingRouter)






module.exports = app