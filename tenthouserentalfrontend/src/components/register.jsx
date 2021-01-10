import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
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
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  locations: "",
  mobile: "",
};

// Schema for yup
const validationSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),

  locations: Yup.string().required("Required"),
  mobile: Yup.number().required("Required"),
});

const Register = () => {
  const onSubmit = (value, onSubmitProps) => {
    console.log(value.name);

    values = {
      Email: value.email,
      Password: value.password,
      Firstname: value.firstname,
      Lastname: value.lastname,
      Locations: value.location,
      Mobile: value.mobile,
    };

    // /UserAPI.saveData(values);

    onSubmitProps.resetForm();
  };

  return (
    <div style={{ marginTop: 50 }}>
      <br />
      <h4 style={{ textAlign: "center", margin: "auto" }}>
        Sign Up to Explore
      </h4>
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
              <Form.Group controlId="email">
                <Form.Label>Email :</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.email && errors.email ? "error" : null}
                />
                {touched.email && errors.email ? (
                  <div className="error-message">{errors.email}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password :</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={touched.name && errors.name ? "error" : null}
                />

                {touched.name && errors.name ? (
                  <div className="error-message">{errors.name}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="firstname">
                <Form.Label>First Name :</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  placeholder="firstname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                  className={touched.email && errors.email ? "error" : null}
                />
                {touched.email && errors.email ? (
                  <div className="error-message">{errors.email}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="lastname">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  placeholder="lastname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                  className={touched.email && errors.email ? "error" : null}
                />
                {touched.email && errors.email ? (
                  <div className="error-message">{errors.email}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="locations">
                <Form.Label>Location:</Form.Label>
                <Form.Control
                  type="text"
                  name="locations"
                  placeholder="locations"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.locations}
                  className={touched.email && errors.email ? "error" : null}
                />
                {touched.email && errors.email ? (
                  <div className="error-message">{errors.email}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="mobile">
                <Form.Label>Mobile :</Form.Label>
                <Form.Control
                  type="number"
                  name="mobile"
                  placeholder="mobile"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobile}
                  className={touched.email && errors.email ? "error" : null}
                />
                {touched.email && errors.email ? (
                  <div className="error-message">{errors.email}</div>
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
};

export default Register;
