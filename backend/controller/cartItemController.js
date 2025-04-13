const cartItemsService =  require("../services/cartItemsService")

const updateCartItem = async  (req, res) =>{
   const userId = req.userId; 
 
 try {
    const updateCartItem =  await cartItemsService.updateCartItem(userId , req.params.id , req.body);
    return res.status(200).send(updateCartItem)
 } catch (error) {
    return res.status(500).send({error:error.message}) 
 } 
}


const removeCartItem = async  (req, res) =>{
   const userId = req.userId; 

    console.log("cart item id :" ,req.params.id)
   
   try {
      await cartItemsService.removeCartItem(userId , req.params.id );
      return res.status(200).send({message:"cart item remove successfully"})
   } catch (error) {
      return res.status(500).send({error:error.message}) 
   } 
}

module.exports  = {updateCartItem,removeCartItem}