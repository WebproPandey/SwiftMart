
const Address = require("../models/AddressModel");
const Order = require("../models/OrderModel");
const { populate } = require("../models/ProductModel");
const cartService  =  require("../services/cartService")

async  function createOrder (user, shippAddress) {
 let address;

 if(shippAddress._id){
   let ExistAddress = await Address.findById(shippAddress._id)
   address = ExistAddress
 }
 else{
    address = new Address(shippAddress);
    address.user =  user;
    await  address.save();

    user.addresses.push(address);
    await user.save();
 }

 const cart = await cartService.findUserCart(user._id)
 const orderItems =  []

 for (const item of cart.cartItems){
    const orderItem =  new orderItems({
        price: item.price,
        product:item.product,
        quantity : item.quantity,
        size:item.size,
        userId:item.userId,
        discountedPrice:item.discountedPrice
    })
    const createdOrderItem = await orderItem.save();
    orderItem.push(createdOrderItem)
 }

 const createdOrder =  new orderItems({
    user,
    orderItems,
    totalPrice:cart.totalPrice,
    totalDiscountedPrice:cart.totalDiscountedPrice,
    discounte:cart.discounte,
    totalItem:cart.totalItem,
    shippAddress:address,
 })

 const saveOrder = await  createOrder.save();
 return saveOrder
}


async function placeOrder(orderId){
    const order =   await findOrderById(orderId);
    order.orderStatus = "PLACED",
    order.paymentDetails.status= "COMPLETED";
    return await order.save();
}
async function confirmedOrder(orderId){
    const order =   await findOrderById(orderId);
    order.orderStatus = "CONFIRMED";
    return await order.save();
}
async function shipOrder(orderId){
    const order =   await findOrderById(orderId);
    order.orderStatus = "SHIPPED";
    return await order.save();
}
async function deliverOrder(orderId){
    const order =   await findOrderById(orderId);
    order.orderStatus = "DELIVERED";
    return await order.save();
}
async function deliverOrder(orderId){
    const order =   await findOrderById(orderId);
    order.orderStatus = "CANCELLED";
    return await order.save();
}

async function findOrderById (orderId){
    const order =   await Order.findById(orderId)
    .populate("user")
    .populate({path:"orderItem" , populate:{path:"product"}})
    .populate("shippingAddress")
    return order;
}


async function  userOrderHistory (userId){

    try{
     const orders =  await Order.find({user:userId, orderStatus:"PLACED"})
     .populate({path:"orderItemd",populate:{path:"product"}}).lean()
     return orders
    } 
    catch(error){  
        throw  new Error(error.message)

    }
}

async function  getAllOrders (){

    try{
      return await Order.find()
     .populate({path:"orderItemd",populate:{path:"product"}}).lean()
    } 
    catch(error){  
        throw  new Error(error.message)

    }
}

async function  deleteOrder (orderId){

    try{
        const order =  await Order.findById(orderId)
        await Order.findByIdAndDelete(order._id)
    } 
    catch(error){  
        throw  new Error(error.message)
    }
}
   

module.exports =  {
    createOrder,
    placeOrder,
    confirmedOrder,
    shipOrder,
    deliverOrder,
    deliverOrder,
    findOrderById,
    userOrderHistory,
    getAllOrders,
    deleteOrder
}
   