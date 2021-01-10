import React, { useState } from "react";
import { Prompt, matchPath } from "react-router-dom";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import * as Yup from "yup";


const CONTAINER = styled.div`
  background: #f7f9fa;
  height: auto;
  width: 90%;
  margin: 5em auto;
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
const initialValues = {
  productName: "",
  productDescription: "",
  manufacturer: "",
  price: "",
  quantity: "",
};

const validationSchema = Yup.object({
  productName: Yup.string().required("Name is required"),

  productDescription: Yup.string().required("No password provided."),

  manufacturer: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  quantity: Yup.number().required("Required"),
});

function AddCustomer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = (value, onSubmitProps) => {
    values = {
      ProductName: value.productName,
      ProductDescription: value.productDescription,
      Manufacturer: value.manufacturer,
      Price: value.price,
      Quantity: value.quantity,
    };
    let views = 0;
    // ProductAPI.saveData(values);
    // ViewDataAPI.saveViewData(views);
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
          return matchPath(pathname, { path: "/AddCustomer" })
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
              <Form.Group controlId="productName">
                <Form.Label>Product Name :</Form.Label>
                <Form.Control
                  type="text"
                  name="productName"
                  placeholder="productName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.productName}
                  className={
                    touched.productName && errors.productName ? "error" : null
                  }
                />
                {touched.productName && errors.productName ? (
                  <div className="error-message">{errors.productName}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="productDescription">
                <Form.Label>Product Description:</Form.Label>
                <Form.Control
                  type="text"
                  name="productDescription"
                  placeholder="productDescription"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.productDescription}
                  className={
                    touched.productDescription && errors.productDescription
                      ? "error"
                      : null
                  }
                />

                {touched.productDescription && errors.productDescription ? (
                  <div className="error-message">
                    {errors.productDescription}
                  </div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="manufacturer">
                <Form.Label>Manufacturer :</Form.Label>
                <Form.Control
                  type="text"
                  name="manufacturer"
                  placeholder="manufacturer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.manufacturer}
                  className={
                    touched.manufacturer && errors.manufacturer ? "error" : null
                  }
                />
                {touched.manufacturer && errors.manufacturer ? (
                  <div className="error-message">{errors.manufacturer}</div>
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
              <Form.Group controlId="quantity">
                <Form.Label>Quantity:</Form.Label>
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

              <BUTTON
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                style={{ marginRight: 15 }}
              >
                Submit
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
export default AddCustomer;
