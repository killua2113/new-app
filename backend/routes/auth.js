const express = require('express')
const User=require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs')
var jwt = require('jsonwebtoken');
var fetchuser=require('../middleware/fetchuser')

const router =express.Router();
// create a user using post
router.post('/createuser',[body('name').isLength({ min: 3 }),body('email').isEmail(),body('password').isLength({ min: 4 })],async(req, res) => {
    // if there is some error we it resolved here
    const errors = validationResult(req);
    let success=false;
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    // checking whether email exists or not 
    try
    {
        let user= await User.findOne({email : req.body.email})
        // if this user is exist this if statement will run
    if(user){
        return res.status(400).json({success,error: " enter a valid email"})
    }
    // email doesnt exist so makin a user 
    const salt= await bcrypt.genSalt(10)

    const secPass= await bcrypt.hash(req.body.password,salt)
    user=await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
        gender:req.body.gender,
      })
      const data={
        user:{
            id: user.id
        }
      }
      const authtoken=jwt.sign(data,"abhay578");
      success=true;

    res.json({success,authtoken})
      
    
    } catch(error)
    {
        console.error(error.message) 
        res.status(500).send("some error occured")
    }
 
    
  })

//   making a router to login
  router.post('/login',[body('email','enter a valid email').isEmail(),body('password','passwordcannot be blank').exists(),],async(req,res)=>{
    const errors = validationResult(req);
    let success=false;
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    const {email,password}=req.body;
    try{
        let user =await User.findOne({email});
        if(!user)
        {
          success=false;
            return res.status(400).json({success,error:"email is not registered"})
        }
        const passwordcompare= await(bcrypt.compare(password,user.password))
        if(!passwordcompare)
        {
          success=false;
            return res.status(400).json({success,error:"incorrect password"})

        }
        const data={
            user:{
                id: user.id
            }
          }
          const authtoken=jwt.sign(data,"abhay578");
          success=true;
        res.json({success,authtoken})
    }catch(error){
        console.error(error.message) 
        res.status(500).send("some error occured")

    }
  })
  router.post('/getuser',fetchuser,async(req,res)=>{
try{
userId=req.user.id;
user=await User.findById(userId).select("-password")
res.send(user)
}catch(error){
    console.error(error.message) 
    res.status(500).send("some error occured")
}



  })







module.exports=router ;
