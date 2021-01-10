import React,{useState,useEffect} from 'react';
import {getSummaryReport} from "../Data/ReportApi"
import {Table,Container} from "react-bootstrap"
import TableView from "./tabledata"

const SummaryReport = () => {

    const [data,setData]=useState([]);
       useEffect(()=>{getSummaryReport(handleData) },[])
       const handleData=(userdata)=>{ setData(userdata)}

       console.log("summary",data)

    let tabledata=data.map((detail,index)=>{ return <TableView info={detail} key={index} type="summary" />})


    return (
        <div style={{marginTop:80}}>
            <h4>Summary Report</h4>
            <Container>
            <Table striped bordered hover size='sm'>
  <thead>
    <tr>
      <th>Sr No</th>
      <th>Product</th>
      <th>Total Quantity</th>
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

export default SummaryReport;