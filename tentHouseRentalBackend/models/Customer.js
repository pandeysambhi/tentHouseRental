const mongoose=require("mongoose")

const customerSchema=new mongoose.Schema({
     name:
    {
        type: String,
        required:true
    },
    Customer_id:{
        type: String,
        required:true,
        unique:true
    }
   
})

module.exports=Customer=mongoose.model('customer', customerSchema)