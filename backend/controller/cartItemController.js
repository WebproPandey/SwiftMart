const cartItemsService =  require("../services/cartItemsService")

const updateCartItem = async  (req, res) =>{
  const user=  req.user
 
 try {
    const updateCartItem =  await cartItemsService.updateCartItem(user._id , req.params.id , req.body);
    return res.status(200).send(updateCartItem)
 } catch (error) {
    return res.status(500).send({error:error.message}) 
 } 
}


const removeCartItem = async  (req, res) =>{
    const user=  req.user
   
   try {
      await cartItemsService.removeCartItem(user._id , req.params.id );
      return res.status(200).send({message:"cart item remove successfully"})
   } catch (error) {
      return res.status(500).send({error:error.message}) 
   } 
}

module.exports  = {updateCartItem,removeCartItem}