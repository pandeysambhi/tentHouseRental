const mongoose=require('mongoose')

const TransactionSchema=new mongoose.Schema({
    date:{
    type:Date,
    default:Date.now
},
     Customer_id:{
        type: String,
        required:true,
        
    },

       Product_id:
    {
        type: String,
        required:true,
    },
    type:{
        type:String,
        required:true
     },
     transaction_parentId:{
         type:String,
         default:""
     },
     quantity:{
         type:Number,
         required:true
     }

})

module.exports=Transaction=mongoose.model('transaction', TransactionSchema)