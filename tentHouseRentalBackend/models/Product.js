const mongoose=require("mongoose");

const ProductSchema=new mongoose.Schema({
    product_title:{
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
          typr:Number,
          required:true
      }
})

module.exports=Product=mongoose.model('product', ProductSchema)