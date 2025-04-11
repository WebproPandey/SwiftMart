

const Ratings =  require("../models/RatingModle")
const productServices=  require("../services/productServices")


async function createRating(req ,user){
    const product = await productServices.findProductById(req.productId);

    const retings = new Ratings({
        user:user._id,
        product:product._id,
        ratings:req.ratings,
        createdAt:new Date(),
    })

    return await ratings.save();

} 

async function getProductRating(productId){
    return await Reviews.find({product:productId})

}

module.exports =  {
    createRating ,getProductRating
}
