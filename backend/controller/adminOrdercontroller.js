const OrderService =  require("../services/OrderServices")

const getAllOrders = async (req, res) =>{
    try {
        const orders = await OrderService.getAllOrders();
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}


const confirmedOrders = async (req, res) =>{
    const orderId = req.params.orderId
    try {
        const orders = await OrderService.confirmedOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const shippOrders = async (req, res) =>{
    const orderId = req.params.orderId
    try {
        const orders = await OrderService.shipOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}


const deliverOrders = async (req, res) =>{
    const orderId = req.params.orderId
    try {
        const orders = await OrderService.deliverOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}


const cancelledOrders = async (req, res) =>{
    const orderId = req.params.orderId
    try {
        const orders = await OrderService.cancelledOrders(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const deleteOrders = async (req, res) =>{
    const orderId = req.params.orderId
    try {
        const orders = await OrderService.deleteOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}


module.exports =  {getAllOrders , confirmedOrders , cancelledOrders , shippOrders, deliverOrders, deleteOrders}