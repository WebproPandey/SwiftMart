const userService =  require("../services/userServices")

const getUserProfile = async (req, res) => {
    try {
        const userId = req.userId; 
        const user = await userService.findUserById(userId);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const getAllUsers = async (req, res) =>{
    try{
      const users = await userService.getAllUsers()
      return res.status(200).send(users)
    }
    catch(error){
        return res.status(500).send({error:error.message})

    }
}

module.exports ={getUserProfile , getAllUsers}