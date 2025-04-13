const cartService =  require("../services/cartService")

const findUserCart = async (req, res ) =>{
 
  const userId = req.userId; 
  try{
   const cart = await  cartService.findUserCart(userId)
   return res.status(200).send(cart)

 }catch(error){
   return res.status(500).send({error:error.message})
 }
}

const addItemToCart = async (req, res ) =>{
 
  const userId = req.userId; 
    try{
      const cartItem =  await cartService.addCartItem(userId , req.body)
      return res.status(200).send(cartItem)
   
    }catch(error){
      return res.status(500).send({error:error.message})
    }
}

module.exports =  {
    findUserCart,  addItemToCart 
}