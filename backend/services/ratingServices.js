

const Ratings =  require("../models/RatingModle")
const productServices=  require("../services/productServices")
const userServices=  require("../services/userServices")


async function createRating(req ,userId){
    const product = await productServices.findProductById(req.productId);
        if (!product) {
            throw new Error("Product not found");
        }
    
        const user = await userServices.findUserById(userId); 
        if (!user) {
            throw new Error("User not found");
        }
    

    const ratings = new Ratings({
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
