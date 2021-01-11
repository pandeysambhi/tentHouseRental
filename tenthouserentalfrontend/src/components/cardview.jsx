import React from 'react';
import {Card,Modal,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const style={ width: '25rem',borderRadius:'15px' ,fontSize:'20px',color:'white',fontWeight:500,backgroundColor:"seagreen"}


const Cardview = ({info,imgsrc,type,history}) => {
    const [modalShow, setModalShow] = React.useState(false);
let card={};
    if(type=="customer")
    {
        card=<Card style={style} >
                <Card.Img   variant="top" style={{height:250, borderRadius:'15px'}} src={imgsrc} />
                <Card.Footer >{info.name}</Card.Footer>
                </Card>
    }
    else{
        card=<Card style={style} onClick={() => setModalShow(true)}>
        <Card.Img   variant="top" style={{height:250, borderRadius:'15px'}} src={imgsrc} />
        <Card.Footer>{info.Product_title}</Card.Footer>
        </Card>
    } 

 
     return (
          <div >
                {card}
                 <MyVerticallyCenteredModal
        show={modalShow}
        rhistory={history}
        detail={info}
        onHide={() => setModalShow(false)}
      />
                 <br/>  
            
        </div>

      
    );
};

export default Cardview;


function MyVerticallyCenteredModal(props) {

    const handleRentClick=()=>{
        props.rhistory.push('/transaction/rent')
    }
    const handleReturnClick=()=>{
        props.rhistory.push('/transaction/rent')
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.detail.Product_title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{`Quantity in Store : ${props.detail.Quantity_total}`}</h4>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleRentClick}>Rent</Button>
        <Button onClick={handleReturnClick}>Return</Button>
      </Modal.Footer>
    </Modal>
  );
}

