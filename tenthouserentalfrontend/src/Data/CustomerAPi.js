import axios from 'axios'
export const getAllCustomers=async(handleData)=>{

   
  await axios
    .get("http://localhost:5000/Customers")
    .then(res=>handleData(res.data))
    .catch((err)=>{throw err});
   

 
}

export const addNewCustomer=async (props)=>{

  let params={
    Customer_id:props.Customer_id,
    name:props.name
    
  }

  const jsonToken=await localStorage.getItem("jsonToken")
   await axios
    .post("http://localhost:5000/Customers/Add",params,{
        headers: {
          "x-auth-token": jsonToken,
        },
    })
    .then(res=>console.log(res.data))
    .catch((err)=>{throw err});
    
}