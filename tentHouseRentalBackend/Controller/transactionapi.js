const express=require("express");
const router=express.Router();
const Customer=require('../models/Customer')
const Product=require("../models/Product")
const Transaction=require("../models/Transaction")
const auth=require('../middleware/auth')

router.post('/rent',auth,async (req,res)=>{
    const {Customer_id,Product_id,quantity,type}=req.body;
    const customer=Customer.findById(Customer_id);
    if(customer)
    {
        const product=Product.findById(Product_id)
        if(product)
        {   
            // if(product.Quantity_total>=quantity)
            // {
                try{

                    const transaction=new Transaction({
                        Customer_id,Product_id,quantity,type

                    })

                   await Product.updateOne({Product_id},{
                        $inc: {"Quantity_booked":quantity,"Quantity_total":-quantity

                    }})
                    await transaction.save()
                    res.send(transaction)



                }catch(err){
                     console.error(err.message)
                      res.status(500).send('Server Error')

                }
            // }
            // else{
            //      res.status(400).json({errors:[{msg:'Insufficient Product Quantity'}]})
            // }
        }else{
                 res.status(400).json({errors:[{msg:'Product not available'}]})
            }
    }else{
                 res.status(400).json({errors:[{msg:'Customer not available'}]})
            }

})








router.post('/return',auth,async (req,res)=>{
    const {Customer_id,Product_id,quantity,type}=req.body;
    const customer=Customer.findById(Customer_id);
    if(customer)
    {
        const product=Product.findById(Product_id)
        if(product)
        {
           const parent_transaction=await Transaction.findOne({Product_id,Customer_id,quantity},{_id:1})
                    
           if(parent_transaction){
               const transaction_parentId=parent_transaction;
               try{
                    const transaction=new Transaction({
                        Customer_id,Product_id,quantity,type,transaction_parentId

                    })

                     const num=product.Quantity_total+quantity
                     console.log(typeof num)

                   await Product.updateOne({Product_id},{
                        $inc: {"Quantity_total":quantity,"Quantity_booked":-quantity

                    }})
                    await transaction.save()
                     res.send(transaction)




                }catch(err){
                     console.error(err.message)
                      res.status(500).send('Server Error')

                }
            }
        }
           
        else{
                 res.status(400).json({errors:[{msg:'Product not available'}]})
            }
    }else{
                 res.status(400).json({errors:[{msg:'Customer not available'}]})
            }

})



module.exports=router