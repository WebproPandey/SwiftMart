const mongoose =  require("mongoose")

const CartItemsSchema =  mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cart",
        required:true
    },
    product:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true,
    }],
    size:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    },
    price:{
        type:Number,
        default:0
    },
    discountedPrice:{
        type:Number,
        required:true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
         ref:"user",
         required:true
    }
  
})

const cartItems =  mongoose.model("cartItems" , CartItemsSchema)

module.exports =  cartItems