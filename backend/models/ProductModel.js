const mongoose =  require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    discountedPrice:{
        type:Number,

    },
    discountedPersent:{
        type:Number,
    },
    quantity:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
    },
    color:{
        type:String,
    },
    sizes:[{
        name:{type:String},
        quantity:{type:String}
    }],
    imageUrl:{
        type:String,
    },
    ratings:[{
        type:mongoose.Schema.ObjectId,
        ref:"ratings",
    }],
    reviews:[{
        type:mongoose.Schema.ObjectId,
        ref:"reviews",
    }],
    numRatings:{
        type:Number,
        default:0,
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"categories",
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
   
})

const product =  mongoose.model("products" , ProductSchema)

module.exports =  product