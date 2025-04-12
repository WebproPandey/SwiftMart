const express =  require("express")
const router = express.Router()
const ratingController =  require("../controller/ratingController")
const authenticate = require("../middleware/authMiddleware")


router.post("/create" ,authenticate, ratingController.createRating )
router.post("/product/:productId" ,authenticate, ratingController.getAllRating )






module.exports =  router