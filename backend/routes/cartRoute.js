const express =  require("express")
const router = express.Router()
const cartController =  require("../controller/cartController")
const authenticate = require("../middleware/authMiddleware")


router.get("/",authenticate , cartController.findUserCart)
router.put("/add",authenticate , cartController.addItemToCart)

module.exports =  router