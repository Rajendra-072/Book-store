import User from "../Model/User.model.js";
import bcryptjs from 'bcryptjs';

export const signup =async(req,res)=>{
  try{
    const{fullname,email,password}=req.body;
    const user = await User.findOne({email});
    if(user){
      return res.status(400).json({message:"user already exist"});
    }
    const hashPassword = await bcryptjs.hash(password,10);
    const creatUser= new User({
      fullname,email,password:hashPassword
    });
   await creatUser.save();
return res.status(201).json({message:"user created successfuly",user:{
      _id:creatUser._id,
      fullname:creatUser.fullname,
      email:creatUser.email
     }});
  }catch(error){
    console.log("Error",error.message);
    res.status(500).json({message:"internal server error"});

  }
}




export const login =async(req,res)=>{
  try{
    const{email,password}=req.body;
    const user = await User.findOne({email});
    const isMatch= await bcryptjs.compare(password,user.password)
    if(!isMatch || !user){
      return res.status(400).json({message:"Invalid username and password"});
    }else{
     res.status(200).json({message:"Login successfuly",user:{
      _id:user._id,
      fullname:user.fullname,
      email:user.email
     }});
    }
 
  }catch(error){
    console.log("Error",error.message);
    res.status(500).json({message:"internal server error"});

  }
}