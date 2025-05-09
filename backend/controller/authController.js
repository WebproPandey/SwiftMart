const userService =  require("../services/userServices")
const jwtProvider =  require("../config/jwtProvider")
const cartService =  require("../services/cartService")

const bcrypt =  require("bcrypt")

const register =  async(req, res) => {
   try {
      console.log("User Data:", req.body);
     const user  = await userService.createUser(req.body);
     const jwt  = jwtProvider.generateToken(user._id)
     await cartService.createCart(user)
     return  res.status(200).send({jwt,message:"register success"})

   } catch (error) {
      console.error("Register Error:", error); 
     return res.status(500).send({error:error.message})
    
   }
}

const login = async (req,res) =>{

    const {password, email} = req.body;
    try{
     const user  =  await  userService.getUserByEmail(email)
     if(!user) {
        return res.status(404).send({message: `User not found with email: ${email}`})
     }
     const isPasswordVaild = await bcrypt.compare(password,user.password)
     if(!isPasswordVaild) {
        return res.status(401).send({message:"Invaild Password..."})
     }
     const jwt = jwtProvider.generateToken(user._id);
     return res.status(200).send({jwt,message:"login success"})
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }
}

module.exports = {register ,login}