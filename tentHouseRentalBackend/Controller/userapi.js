const express=require('express');
const { check, validationResult } = require('express-validator');
const User=require("../models/User")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const config=require('config')


const router=express.Router();

router.post('/',[

    check('name','name is Required').not().isEmpty(),
    check('email','Please enter a valid Email').isEmail(),
    check('password','Password mut be 6 or more characters long').isLength({min:6})


],

 async (req,res)=>
{

    const errors=validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(400).json({error: errors.array() })
    }
    const {name,email,password}=req.body
  
    try
    {
        let user=await User.findOne({email})
        if(user)
        {
           return res.status(400).json({errors:[{msg:'user already exists'}]})
        }

     
        user=new User({
            name,
            email,
           password
        })

        const salt= await bcrypt.genSalt(10)
        user.password= await bcrypt.hash(password,salt)
        user.save()

        const payload={
            user:{
                id:user.id
            }
        }

        jwt.sign(payload,
            config.get('jwtSecret'),
           { expiresIn:3600},
           (err,token)=>
           {
               if(err) throw error
               res.json({token})

            })
    }
    catch(err)
    {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
    } )
   


module.exports=router;