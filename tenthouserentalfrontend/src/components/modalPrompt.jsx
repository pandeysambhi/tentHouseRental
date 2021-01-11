import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalPrompt(props) {
  const [show, setShow] = useState(true);
let path="";
if(props.from==='products')
path="/Products"
else
path="/Customer"
  const handleClose = () => {
    setShow(false);
    props.history.push(path);
  };
  const goToSignIn = () => {
    setShow(false);
    props.history.push("/Login");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login First.............................</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have to Login to complete the operation.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={goToSignIn}>
           Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalPrompt;
