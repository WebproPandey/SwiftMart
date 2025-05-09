const { required } = require('joi')
const mongoose =  require('mongoose')

const userSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"CUSTOMER"
    },
    mobile:{
        type:String,
    },
    address:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"addresses"
        }
    ],
    paymentInformation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"payment_information"
    },
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            red:"ratings"
        }
    ],
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            red:"reviews"
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const User =  mongoose.model("users", userSchema)

module.exports = User;