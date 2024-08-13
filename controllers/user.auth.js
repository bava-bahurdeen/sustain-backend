import User from "../models/uer.model.js";


export const UserdetailIndex = async (req,res) => {

  try {
    const user=await User.find()
    return res.json(user)
    
} catch (error) {
    res.status(500).json({message:error.message})
    
    
}

  };

export const Userdetail = async (req,res) => {

  // create a user
  const user=new User(req.body)
 
 
  try {

  const newusers=  await user.save()

  res.status(201).json(newusers+"Successfully saved")

 
  
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message:"not saved"})
    
  }
  
};



