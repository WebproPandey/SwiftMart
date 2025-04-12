const express =  require("express")
const router = express.Router()
const orderController =  require("../controller/orderController")
const authenticate = require("../middleware/authMiddleware")


router.post("/" ,authenticate ,orderController.createOrder)
router.get("/user" ,authenticate ,orderController.userOrderHistroy)
router.get("/:id" ,authenticate ,orderController.findOrderById)



module.exports =  router