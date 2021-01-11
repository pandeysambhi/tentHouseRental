import React,{useState,useEffect} from 'react';
import {getSummaryReport} from "../Data/ReportApi"
import {Table,Container,Button} from "react-bootstrap"
import TableView from "./tabledata"

const SummaryReport = (props) => {

    const [data,setData]=useState([]);
       useEffect(()=>{getSummaryReport(handleData) },[])
       const handleData=(userdata)=>{ setData(userdata)}

       const handleClick=()=>{
              props.history.push("/report/detailed")
       }

    let tabledata=data.map((detail,index)=>{ return <TableView info={detail} key={index} num={index} type="summary" />})


    return (
        <div style={{marginTop:30,marginBotom:50}}>
         <div
          style={{
            display: "flex",
            marginLeft:'55px',
            marginTop: 50,
          }}
        >
          <Button
            variant="success"
            size="md"
            onClick={handleClick}
            style={{ marginRight: 15, fontWeight: 600, marginLeft: 15 }}
          >
            View detailed Report
          </Button>
          
          </div>
          <h3>Summary Report</h3>
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