const express =  require("express")
const router = express.Router()
const adminOrdercontroller =  require("../controller/adminOrdercontroller")
const authenticate = require("../middleware/authMiddleware");



router.get("/" ,authenticate ,adminOrdercontroller.getAllOrders)
router.get("/:orderId/confirmed" ,authenticate ,adminOrdercontroller.confirmedOrders)
router.get("/:orderId/ship" ,authenticate ,adminOrdercontroller.shippOrders)
router.get("/:orderId/deliver" ,authenticate ,adminOrdercontroller.deliverOrders)
router.get("/:orderId/cancel" ,authenticate ,adminOrdercontroller.cancelledOrders)
router.get("/:orderId/delete" ,authenticate ,adminOrdercontroller.deleteOrders)


module.exports = router