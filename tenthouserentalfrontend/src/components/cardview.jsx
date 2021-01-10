import React from 'react';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const style={ width: '25rem',borderRadius:'15px' ,fontSize:'20px',color:'white',backgroundColor:"seagreen"}

const Cardview = ({info,imgsrc}) => {

    // if(type=="customer")
    // {
    //   const  card=<Card variant="secondary" style={style} >
    //             <Card.Img   variant="top" style={{height:250, borderRadius:'15px'}} src={imgsrc} />
    //             <Card.Footer >{info.name}</Card.Footer>
    //             </Card>
    // }
    // else{
//        const card=<Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//   </Card.Body>
//   <ListGroup className="list-group-flush">
//     <ListGroupItem>Cras justo odio</ListGroupItem>
//     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//     <ListGroupItem>Vestibulum at eros</ListGroupItem>
//   </ListGroup>
//   <Card.Body>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body>
// </Card>
    
const text=(info.name)?info.name:info.Product_title
 
     return (
          <div >
                <Card variant="secondary" style={style} >
                <Card.Img   variant="top" style={{height:250, borderRadius:'15px'}} src={imgsrc} />
                <Card.Footer >{text}</Card.Footer>
                </Card>
                   <br/>
                   <br/>
            
        </div>

      
    );
};

export default Cardview;