const mongoose =  require("mongoose")

const OrderItemsSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.ObjectId,
        ref:"products",
        required:true,

    },
    size:{
        type:String,
    },
    quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    discountePrice:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
        required:true
    },
  
})

const orderItem =  mongoose.model("orderItems" , OrderItemsSchema)

module.exports =  orderItem