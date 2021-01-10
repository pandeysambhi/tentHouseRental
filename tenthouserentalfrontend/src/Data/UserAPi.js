import axios from 'axios';
 
export const loginUser=async (props)=>{
    let params={
        email:props.email,
        password:props.password
    }

     await axios
    .post("http://localhost:5000/Login",params)
    .then(res=>localStorage.setItem("jsonToken",res.data.token))
    .catch((err)=>{throw err});

   
}

export const addNewUser=async (props)=>{
    let params={
        name:props.name,
        email:props.email,
        password:props.password
    }
console.log("in api")
     await axios
    .post("http://localhost:5000/register",params)
    .then(res=>localStorage.setItem("jsonToken",res.data.token))
    .catch((err)=>{throw err});

   
}

//localStorage.setItem("jsonToken",res.data.token)