const mongoose=require("mongoose")

const ProductSchema=new mongoose.Schema({
     name:
    {
        type: String,
        required:true
    },
   
})

module.exports=Customer=mongoose.model('customer', customerSchema)