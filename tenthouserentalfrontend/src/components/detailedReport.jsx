import React,{useState,useEffect} from 'react';
import {getDetailedReport} from "../Data/ReportApi"
import {Table,Container} from "react-bootstrap"
import TableView from "./tabledata"

const DetailedReport = () => {

    const [data,setData]=useState([]);
       useEffect(()=>{getDetailedReport(handleData) },[])
       const handleData=(userdata)=>{ setData(userdata)}

       console.log("detailed",data)
      
    let tabledata=data.map((detail,index)=>{ return <TableView info={detail} key={index} num={index} type="detailed" />})


    return (
        <div style={{marginTop:80}}>
            <h4>Detailed Report</h4>
            <Container style={{marginTop:50}}>
            <Table striped bordered hover size='sm'>
  <thead>
    <tr>
      <th>Sr No</th>
      <th>ProductId</th>
      <th>Type</th>
      <th>Date</th>
      </tr>
  </thead>
  <tbody>
    {tabledata}
  </tbody>
</Table>
</Container>

        </div>
    );
};

export default DetailedReport;