import React, { useState } from "react";
import { Prompt, matchPath } from "react-router-dom";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import * as Yup from "yup";

import {rentProducts} from '../Data/TransactionApi'


const CONTAINER = styled.div`
  background: #f7f9fa;
  height: auto;
  width: 90%;
  margin: 2em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media (min-width: 786px) {
    width: 60%;
  }
  label {
    color: #24b9b6;
    font-size: 1.2em;
    font-weight: 400;
  }

  h1 {
    color: #24b9b6;
    padding-top: 0.5em;
  }

  .form-group {
    margin-bottom: 2.5em;
  }
  .error {
    border: 2px solid #ff6565;
  }

  .error-message {
    color: #ff6565;
    padding: 0.5em 0.2em;
    height: 1em;
    position: absolute;
    font-size: 0.8em;
  }
`;

const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;
  @media (min-width: 786px) {
    width: 50%;
  }
`;

const BUTTON = styled(Button)`
  background: #1863ab;
  border: none;
  font-size: 1.2em;
  font-weight: 400;

  &:hover {
    background: #1d3461;
  }
`;

// form to collect data of item to be given on rent
let values = {};
const initialValues = {
  Customer_id: "",
 Product_id: "",
  quantity: "",
  type: ""
 
};

const validationSchema = Yup.object({
  Customer_id: Yup.string().required("Name is required"),

 Product_id: Yup.string().required("No password provided."),

  quantity: Yup.number().required("Required"),
  type: Yup.string().required("Required")
  
});

function RentItems() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = (value, onSubmitProps) => {
    values = {
      Customer_id: value.Customer_id,
     Product_id: value.Product_id,
      quantity: value.quantity,
      type: value.type,
     
    };
   
    rentProducts(values)
    
    setIsSubmitted(true);
    onSubmitProps.resetForm();
  };

  return (
    <div style={{ marginTop: 50 }}>
      <br />
      <h3 style={{ textAlign: "center" }}>Rent Items from Inventory</h3>
      <Prompt
        when={!isSubmitted}
        message={({ pathname }) => {
          return matchPath(pathname, { path: "/transactions/rent" })
            ? true
            : "Are you sure you want to navigate away?";
        }}
      />
      <CONTAINER>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <MYFORM onSubmit={handleSubmit} className="mx-auto">
              <Form.Group controlId="Customer_id">
                <Form.Label>Customer Id :</Form.Label>
                <Form.Control
                  type="text"
                  name="Customer_id"
                  placeholder="Customer_id"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Customer_id}
                  className={
                    touched.Customer_id && errors.Customer_id ? "error" : null
                  }
                />
                {touched.Customer_id && errors.Customer_id ? (
                  <div className="error-message">{errors.Customer_id}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="Product_id">
                <Form.Label>Product Id:</Form.Label>
                <Form.Control
                  type="text"
                  name="Product_id"
                  placeholder="Product_id"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Product_id}
                  className={
                    touched.Product_id && errors.Product_id
                      ? "error"
                      : null
                  }
                />

                {touched.Product_id && errors.Product_id ? (
                  <div className="error-message">
                    {errors.Product_id}
                  </div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="quantity">
                <Form.Label>Quantity :</Form.Label>
                <Form.Control
                  type="text"
                  name="quantity"
                  placeholder="quantity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.quantity}
                  className={
                    touched.quantity && errors.quantity ? "error" : null
                  }
                />
                {touched.quantity && errors.quantity ? (
                  <div className="error-message">{errors.quantity}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="type">
                <Form.Label>Transaction type:</Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  placeholder="type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type}
                  className={touched.type && errors.type ? "error" : null}
                />
                {touched.type && errors.type ? (
                  <div className="error-message">{errors.type}</div>
                ) : null}
              </Form.Group>
             

              <BUTTON
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                style={{ marginRight: 15 }}
              >
                Rent Item
              </BUTTON>
              <BUTTON variant="primary" type="reset">
                Cancel
              </BUTTON>
            </MYFORM>
          )}
        </Formik>
      </CONTAINER>
    </div>
  );
}
export default RentItems;
