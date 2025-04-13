const reviewServices =  require("../services/reviewServices")

const createReview = async  (req, res) =>{

   const userId = req.userId; 
   try {
    const review  =   await  reviewServices.createReview(req.body , userId)
    return res.status(201).send(review)
 } catch (error) {
    return res.status(500).send({error:error.message})    
}
}

const getAllReview = async  (req, res) =>{
   const userId = req.userId; 
    const productId =  req.params.productId
     try {
        const reviews  =   await  reviewServices.getAllReview(productId)
        return res.status(201).send(reviews)
     } catch (error) {
        return res.status(500).send({error:error.message})    
    }
}

module.exports =  {createReview ,getAllReview }