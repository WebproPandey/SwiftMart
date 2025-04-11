const Reviews  = require("../models/ReviewModel")
const productServices=  require("../services/productServices")

async function createReview(reqData,user){
    const product = await productServices.findProductById(reqData.productId);

    const reviews = new Reviews({
        user:user._id,
        product:product._id,
        review:reqData.review,
        createdAt:new Date(),
    })

    await product.save();
    return await reviews.save();

} 

async function getAllReview(productId){
    const product  = await productServices.findProductById(reqData.productId);
    return await Reviews.find({product:productId}).populate("user");

}

module.exports =  {
    createReview ,getAllReview
}