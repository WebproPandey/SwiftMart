const Cart =  require("../models/CartModel")
const CartItems =  require("../models/CartItemModel")

const Product  =  require("../models/ProductModel")

async function createCart(user){
    try{
        const cart = new Cart({user})
        const createdCart = await cart.save();
    
        return createdCart
    }
    catch(error){
      throw  new  Error(error.message)
    }
 
}

async function findUserCart (userId){
 try {
  if (!userId) throw new Error("User ID is missing");

  let cart = await Cart.findOne({ user: userId })
  
  if (!cart) throw new Error("Cart not found for this user");

  let cartItems =  await CartItems.find({cart:cart._id}).populate("product");
  cart.cartItems =  cartItems;

  let totalPrice =  0 ;
  let totalDiscountPrice = 0 ;
  let totalItem =  0

  for(let cartItem of cart.cartItems){
    totalPrice+= cartItem.price;
    totalDiscountPrice+= cartItem.discountedPrice;
    totalItem+= cartItem.quantity;
    
  }
  cart.totalPrice =totalPrice
  cart.totalItem = totalItem
  cart.discounte = totalPrice - totalDiscountPrice 

  return  cart


 } catch (error) {
   throw new Error(error.message)  
 }
}

async function addCartItem  (userId , req){
  try {
    const cart =  await cart.findOne({user:user._id});
    const product = await Product.findById(req.productId);

    const isPresent =  await CartItems.findOne({cart:cart._id , product:product._id, userId})

    if(!isPresent) {
      const cartItem =  new CartItems({
        product:product._id,
        cart:cart._id,
        quantity:1,
        userId,
        price:product.price,
        size:req.size,
        discountedPrice:product.discountedPrice
        
      })

      const createdCartItem = await cartItem.sace();
      cart.cartItem.push(createdCartItem)
      await cart.save()
      return "Item added  to cart"
    }


  } catch (error) { 
    throw new Error(error.message)
  }
}

module.exports = {createCart , findUserCart,addCartItem }