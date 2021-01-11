import React from "react";
import { Card, Button } from "react-bootstrap";

const LandingPage = (props) => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: '5rem auto' }}>
        Welcome to Tent House Rental Management
      </h2>
     
      <Card className="text-center">
        <Card.Header as="h5">TRM</Card.Header>
        <Card.Body>
          <Card.Title>What is TRM??</Card.Title>
          <Card.Text>
            TRM or Tent House Rental Management is one stop destination to
            manage your product inventory. It offers effective mangement of your
            products and hasslefree experience.
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => props.history.push("/register")}
          >
            Become a Member
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Manage your Inventory with TRM
        </Card.Footer>
      </Card>
    </>
  );
};

export default LandingPage;
