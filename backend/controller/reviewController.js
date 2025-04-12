const reviewServices =  require("../services/reviewServices")

const createReview = async  (req, res) =>{
const user = req.user

 try {
    const review  =   await  reviewServices.createReview(req.body , user)
    return res.status(201).send(review)
 } catch (error) {
    return res.status(500).send({error:error.message})    
}
}

const getAllReview = async  (req, res) =>{
    const user = req.user
    const productId =  req.params.productId
     try {
        const reviews  =   await  reviewServices.getAllReview(productId)
        return res.status(201).send(reviews)
     } catch (error) {
        return res.status(500).send({error:error.message})    
    }
}

module.exports =  {createReview ,getAllReview }