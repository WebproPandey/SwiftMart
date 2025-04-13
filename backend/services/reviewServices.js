const Reviews  = require("../models/ReviewModel")
const productServices=  require("../services/productServices")
const userServices=  require("../services/userServices")

async function createReview(reqData, userId) {

    const product = await productServices.findProductById(reqData.productId);
    if (!product) {
        throw new Error("Product not found");
    }

    const user = await userServices.findUserById(userId); 
    if (!user) {
        throw new Error("User not found");
    }


    const reviews = new Reviews({
        user: user._id,
        product: product._id,
        reviews: reqData.reviews,
        createdAt: new Date(),
    });

    return await reviews.save();
}

async function getAllReview(productId){
    const product  = await productServices.findProductById(reqData.productId);
    return await Reviews.find({product:productId}).populate("user");

}

module.exports =  {
    createReview ,getAllReview
}