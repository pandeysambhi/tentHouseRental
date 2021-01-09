const mongoose=require("mongoose");

const ProductSchema=new mongoose.Schema({
    Product_title:{
        type:String,
        required:true
    },

    Quantity_total:{
        type:Number,
        default:0
    },

    Quantity_booked:{
        type:Number,
        required:true
      },
   
      price:{
          type:Number,
          required:true
      },
        Product_id:{
        type: String,
        required:true,
        unique:true
    }
})

module.exports=Product=mongoose.model('product', ProductSchema)