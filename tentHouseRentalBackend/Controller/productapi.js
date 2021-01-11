const express=require("express");
const router=express.Router();
const auth=require('../middleware/auth')
const Product=require('../models/Product')
const _=require('lodash')

router.get("/",async (req,res)=>{

    const products= await Product.find()

     if(products)
     res.send(products)

     else
     console.log("no products found")

})

router.post("/Add",auth,async (req,res)=>{
   
  let product = await Product.findOne({ Product_title: req.body.Product_title });
  if (product) return res.status(400).json({ error: "Product already present." });

  try {
      product = new Product(_.pick(req.body, ["Product_title", "Quantity_total", "Quantity_booked","price","Product_id"]));
      await product.save();
      res.json({ message: "Successfully Registered!!" });
}
   catch(err){
       res.status(500).send("Server Error")
   }

})


module.exports=router