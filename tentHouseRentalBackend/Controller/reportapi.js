const express=require("express");
const router=express.Router();
const Product=require('../models/Product');
const Transaction = require("../models/Transaction");

router.get('/summary',async(req,res)=>{
    
    const summary=await Product.find().select({Product_title:1, Quantity_total:1});
    res.send(summary)
})

router.get('/detailed',async(req,res)=>{
    const detailed=await Transaction.find().select({Product_id:1,type:1,date:1})
    res.send(detailed)
})


module.exports=router