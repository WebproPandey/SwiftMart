const mongoose =  require("mongoose")

const CategorySchema =  mongoose.Schema({
    Name:{
        type:String,
        required:true,
        maxlength:50

    },
    parentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories",
    },
    level:{
        type:Number,
        required:true,
    }
   
})

const Category =  mongoose.model("categories" , CategorySchema)

module.exports =  Category