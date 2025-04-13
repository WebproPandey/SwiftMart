const jwtProvider = require("../config/jwtProvider")
const userServices =  require("../services/userServices")

const authenticate =  async (req, res, next) => {
   try {
       const token = req.headers.authorization?.split(" ")[1];

       if(!token){
        return res.status(404).send({error:"token not found ... "})
       }

       const userId = jwtProvider.getUserIdFromToken(token);

        if (!userId) {
            return res.status(403).send({ error: "Invalid or expired token." });
        }

        req.userId = userId;
        next();
    
   } catch (error) {
        return  res.status(500).send({error:error.message})
   }




  
};

module.exports = authenticate
