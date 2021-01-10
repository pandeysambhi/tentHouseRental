import axios from 'axios'

export const getAllProducts=async (handleData)=>{

      
  await axios
    .get("http://localhost:5000/Products")
    .then(res=>handleData(res.data))
    .catch((err)=>{throw err});
   

}

export const addNewProduct=async (props)=>{
    
   let params={
    Product_id:props.Product_id,
    Product_title:props.Product_title,
    Quantity_total:props.Quantity_total,
    Quantity_booked:props.Quantity_booked,
    price:props.price
  }
const jsonToken=await localStorage.getItem("jsonToken")
   await axios
    .post("http://localhost:5000/Products/Add",params,{
        headers: {
          "x-auth-token": jsonToken,
        },
    })
    .then(res=>console.log(res.data))
    .catch((err)=>{throw err});
    
}