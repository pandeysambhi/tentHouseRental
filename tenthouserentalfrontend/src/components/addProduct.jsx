import React, { useState } from "react";
import { Prompt, matchPath } from "react-router-dom";
import { Formik } from "formik";
import { Form, Button,Alert } from "react-bootstrap";
import styled from "styled-components";
import * as Yup from "yup";
import {addNewProduct} from '../Data/ProductApi'



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

let values = {};
let success=false;
const initialValues = {
  Product_title: "",
 Product_id: "",
  Quantity_total: "",
  price: "",
  Quantity_booked: "",
};

const validationSchema = Yup.object({
  Product_title: Yup.string().required("Name is required"),

 Product_id: Yup.string().required("No password provided."),

  Quantity_total: Yup.number().required("Required"),
  price: Yup.number().required("Required"),
  Quantity_booked: Yup.number().required("Required"),
});

function AddProduct() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = (value, onSubmitProps) => {
    values = {
      Product_title: value.Product_title,
     Product_id: value.Product_id,
      Quantity_total: value.Quantity_total,
      price: value.price,
      Quantity_booked: value.Quantity_booked,
    };
    <Alert variant='success'> <Alert.Heading>Hey, nice to see you</Alert.Heading></Alert>
   success= addNewProduct(values)
  
   if(success==true)
   {
     <Alert variant='success'> <Alert.Heading>Hey, nice to see you</Alert.Heading></Alert>
   }
    console.log(values)
    setIsSubmitted(true);
    onSubmitProps.resetForm();
  };

  return (
    <div style={{ marginTop: 50 }}>
      <br />
      <h3 style={{ textAlign: "center" }}>Add Product to Inventory</h3>
      <Prompt
        when={!isSubmitted}
        message={({ pathname }) => {
          return matchPath(pathname, { path: "/AddProduct" })
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
              <Form.Group controlId="Product_title">
                <Form.Label>Product Name :</Form.Label>
                <Form.Control
                  type="text"
                  name="Product_title"
                  placeholder="Product_title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Product_title}
                  className={
                    touched.Product_title && errors.Product_title ? "error" : null
                  }
                />
                {touched.Product_title && errors.Product_title ? (
                  <div className="error-message">{errors.Product_title}</div>
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
              <Form.Group controlId="Quantity_total">
                <Form.Label>Total Quantity :</Form.Label>
                <Form.Control
                  type="text"
                  name="Quantity_total"
                  placeholder="Quantity_total"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Quantity_total}
                  className={
                    touched.Quantity_total && errors.Quantity_total ? "error" : null
                  }
                />
                {touched.Quantity_total && errors.Quantity_total ? (
                  <div className="error-message">{errors.Quantity_total}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Label>Price:</Form.Label>
                <Form.Control
                  type="price"
                  name="price"
                  placeholder="price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                  className={touched.price && errors.price ? "error" : null}
                />
                {touched.price && errors.price ? (
                  <div className="error-message">{errors.price}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="Quantity_booked">
                <Form.Label>Quantity booked:</Form.Label>
                <Form.Control
                  type="text"
                  name="Quantity_booked"
                  placeholder="Quantity_booked"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Quantity_booked}
                  className={
                    touched.Quantity_booked && errors.Quantity_booked ? "error" : null
                  }
                />
                {touched.Quantity_booked && errors.Quantity_booked ? (
                  <div className="error-message">{errors.Quantity_booked}</div>
                ) : null}
              </Form.Group>

              <BUTTON
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                style={{ marginRight: 15 }}
              >
               Add Product
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
export default AddProduct;
