

const cartItems = require("../models/CartItemModel")
const userServices =  require("../services/userServices")

async function updateCartItem(userId,cartItemId, cartItemData){
  try{
  const item = await findCartItemById(cartItemId)
  if(!item){
    throw new Error ("cart item is not found :" ,cartItemId)
  }
  const user  = await  userServices.findUserById(item.userId)
  
  if(!user){
    throw new Error ("user not Found :" , userId) 
  }

  if(user._id.toString() ===  userId.toString()){
    
    item.quantity= cartItemData.quantity;
    item.price =  item.quantity* item.product.price;
    item.discountedPrice =  item.quantity* item.product.discountedPrice
    
   const updatedCartItem =  await  item.save()
   return  updatedCartItem
  }

  else{
    throw new Error ("you can't update this cart item")
  }
  
  }catch(error){
     throw new Error(error.message)
  }
}

async function removeCartItem  (userId, cartItemId){
    const cartItem =  await findCartItemById(cartItemId)
    const user =  await userServices.findUserById(userId)

    if(user._id.toString() ===  cartItem.userId.toString()){
      return await cartItems.findByIdAndDelete(cartItem._id)
    }
    else{
        throw new Error ("You cant remove another user's item")
    }
}

async function findCartItemById(cartItemId){
    const cartItem =  await cartItems.findById(cartItemId).populate("product")

    if(cartItem){
        return cartItem
    }
    else{
      throw new Error("cartItem not found with id", + cartItemId)
    }

}

module.exports =  {removeCartItem,updateCartItem, findCartItemById}