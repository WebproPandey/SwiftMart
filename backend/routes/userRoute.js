const express =  require("express")
const router = express.Router()
const  userController =  require("../controller/userController")
const authenticate = require("../middleware/authMiddleware");

router.get("/" ,userController.getAllUsers)
router.get("/profile", authenticate, userController.getUserProfile);

module.exports =  router 
