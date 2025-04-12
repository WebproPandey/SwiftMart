const express =  require("express")
const router = express.Router()
const reviewController =  require("../controller/reviewController")
const authenticate = require("../middleware/authMiddleware")



router.post("/create" ,authenticate, reviewController.createReview )
router.post("/product/:productId" ,authenticate, reviewController.getAllReview )



module.exports =  router