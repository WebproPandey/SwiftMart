const User = require("../models/UserModel");
const OrderService =  require("../services/OrderServices")

const createOrder = async(req, res) =>{
    try {
        const user = await User.findById(req.userId);
    
        if (!user) {
          return res.status(404).send({ error: "User not found" });
        }
    
        let createdOrder = await OrderService.createOrder(user,  req.body)
        return res.status(201).send(createdOrder)
    } catch (error) {
        return  res.status(500).send({error:error.message})
    }
}

const findOrderById = async(req, res) =>{
    const user =  await req.user
    try {
        let createdOrder = await OrderService.findOrderById(req.params.id)
        return res.status(201).send(createdOrder)
    } catch (error) {
        return  res.status(500).send({error:error.message})
    }
}

const userOrderHistroy = async(req, res) =>{
    const user =  await req.user
    try {
        let createdOrder = await OrderService.userOrderHistroy(user_.id)
        return res.status(201).send(createdOrder)
    } catch (error) {
        return  res.status(500).send({error:error.message})
    }
}


module.exports =  {createOrder , findOrderById , userOrderHistroy}