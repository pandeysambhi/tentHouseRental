import axios from 'axios'

export const getDetailedReport=async (handleData)=>{

      
  await axios
    .get("http://localhost:5000/report/detailed")
    .then(res=>handleData(res.data))
    .catch((err)=>{throw err});

}

export const getSummaryReport=async (handleData)=>{

      
  await axios
    .get("http://localhost:5000/report/summary")
    .then(res=>handleData(res.data))
    .catch((err)=>{throw err});

}