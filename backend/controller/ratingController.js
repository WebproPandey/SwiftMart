const ratingServices =  require("../services/ratingServices")

const createRating = async  (req, res) =>{
const user = req.user

 try {
    const rating  =   await  ratingServices.createRating(req.body , user)
    return res.status(201).send(rating)
 } catch (error) {
    return res.status(500).send({error:error.message})    
}
}

const getAllRating = async  (req, res) =>{
    const user = req.user
    const productId =  req.params.productId
     try {
        const ratings  =   await  ratingServices.getAllRating(productId)
        return res.status(201).send(ratings)
     } catch (error) {
        return res.status(500).send({error:error.message})    
    }
}

module.exports = {createRating ,getAllRating }