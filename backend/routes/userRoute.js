const express =  require("express")
const router = express.Router()
const  userController =  require("../controller/userController")

router.get("/" ,userController.getAllUsers)
router.get("/profile" ,userController.getUserProfile)

module.exports =  router 
