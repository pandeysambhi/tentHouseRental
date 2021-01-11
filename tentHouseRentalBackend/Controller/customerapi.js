const express=require('express');
const router=express.Router();
const _=require("lodash")
const auth=require('../middleware/auth')
const Customer=require('../models/Customer')

router.get("/",async (req,res)=>{
    const customers= await Customer.find();
    if(customers)
    res.send(customers)
     
    else{
        res.json({message:"No Customer Found"});
    }
})

router.post("/Add",auth, async (req,res)=>{
     let customer = await Customer.findOne({ name: req.body.name });
  if (customer) return res.status(400).json({ error: "Customer already present." });

  try {
     
      customer = new Customer(_.pick(req.body, ["name","Customer_id"]));
      await customer.save();
      res.json({ message: "Successfully Registered!!" });
}
   catch(err){
       res.status(500).send("Server Error")
   }

})

module.exports=router