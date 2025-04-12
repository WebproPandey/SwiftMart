const express =  require("express")
const router = express.Router()
const productController =  require("../controller/productController")
const authenticate = require("../middleware/authMiddleware")

router.get("/" ,authenticate, productController.getAllProducts)
router.get("/:id/:id" ,authenticate, productController.findProductById)

module.exports =  router