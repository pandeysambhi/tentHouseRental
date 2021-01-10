import axios from 'axios'
export const rentProducts= async (props)=>{
    
   let params={
    Product_id:props.Product_id,
    Customer_id:props.Customer_id,
    quantity:props.quantity,

    type:props.type
  }
const jsonToken=await localStorage.getItem("jsonToken")
   await axios
    .post("http://localhost:5000/transaction/rent",params,{
        headers: {
          "x-auth-token": jsonToken,
        },
    })
    .then(res=>console.log(res.data))
    .catch((err)=>{throw err});
    
}



export const returnProducts=async (props)=>{
    
   let params={
    Product_id:props.Product_id,
    Customer_id:props.Customer_id,
    quantity:props.quantity,

    type:props.type
  }
const jsonToken=await localStorage.getItem("jsonToken")
   await axios
    .post("http://localhost:5000/transaction/return",params,{
        headers: {
          "x-auth-token": jsonToken,
        },
    })
    .then(res=>console.log(res.data))
    .catch((err)=>{throw err});

}