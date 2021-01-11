import React,{useState,useEffect} from 'react';
import CardView from './cardview'
import {CardDeck,Form,FormControl,Button} from 'react-bootstrap'
import {getAllCustomers} from "../Data/CustomerAPi"
import { render } from "@testing-library/react";
import PromptModal from './modalPrompt'

const Customer = (props) => {
    //----------------------------Retrieval and storage of user data---------------------------------------------------------------------
     const [data,setData]=useState([]);
       const[filter,setFilter]=useState("")
     useEffect(()=>{getAllCustomers(handleData) },[])
     let message="";
    // let view=[];
     const handleData=(userdata)=>{ setData(userdata);}
    
    //----------------------------------------------------------------------------------------------------------------------------

   
   
    // To filter results according to search string and set message according to the results---------------------------------------------------
    
    //  let filteredResults=data.filter(                                          
    //   (detail)=>detail.name.substring(0,filter.length)
    //   .toUpperCase()===filter.toUpperCase())
   
   
    //   if(filteredResults.length===0)
    //     message=`No Results Found for ${filter}`
    //     else
    //     message=`Candidates with name ${filter}`
      
    //  -------------------------------------------------------------------------------------------------------------------------------------------------
     
    // ----------------Set the value of display component based on filter keyword(if provided) or otherwise---------------------------------------------------
    //  if(filter.length!==0)
    //     {
    //        view = filteredResults.map((detail) => {
    //        return  <CardView info={detail} key={detail.id}/>})
    //      }
     
    //      else
    //      {
    //         message="Candidate List"
    //         view = data.map((detail) => {
    //         return  <CardView info={detail} key={detail.id}/>})
    //      }
        //  -------------------------------------------------------------------------------------------------------------------------------
        //


        let imgsrc="http://www.gravatar.com/avatar/?d=mp"
         let view = data.map((detail,index) => {
             return  <CardView info={detail} key={index} imgsrc={imgsrc} type="customer" />})

      
      
const handleClick=()=>{
    const token=localStorage.getItem('jsonToken')
  let val=(token==null)
  if(val)
   render(<PromptModal history={props.history} from="customer"/>);
    
   else
   props.history.push('/Customer/Add')
}

    return(
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
            Add New Customer
          </Button>
        <h3 >{message}</h3>  
          <Form style={{width:"20rem",marginRight:'65px'}} className="ml-auto">
      <FormControl type="text" placeholder="Search Customer name"  onInput={(event)=>setFilter(event.target.value)} />
      
    </Form>
        </div>
          
           <CardDeck  className="col-12" style={{marginTop:50,marginLeft:'15px'}}>{view}</CardDeck>
           
           <br/>
           <br/>
      </div> 
    )
};

export default Customer;