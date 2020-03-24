import React, { useState } from "react";
import { Container, Row, Form } from "react-bootstrap";
import WingsLogo from '../assets/images/logos/bmore-wings-logo-large.png'
import API from "../utils/API";

function LogIn() {
  const[formObj, setFormObj] = useState({
    username: "",
    password: ""
  });

   // Handles updating component state when the user types into the input field
   function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObj({...formObj, [name]: value})
  };

  function handleSubmit(event) {
    event.preventDefault();
    
    API.login(formObj.username, formObj.password)
    .then(console.log('foo'))
    .catch(err => console.log(err));

  }

  return (
    <Container className="bWingBorder mt-5 pb-5" style={{width:"600px", backgroundColor:"white"}}>
      <Row className="justify-content-center">
      <img className="img-fluid hero-image" src={WingsLogo} alt="BMore Wings Logo" />
      </Row>
      <Row className="justify-content-center">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name="username" placeholder="Enter Email" onChange={handleInputChange}></Form.Control>
          <Form.Text className="text-muted">
            We will never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="pb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" onChange={handleInputChange}></Form.Control>
        </Form.Group>
        <button className="bWingButton" onClick={handleSubmit}>Submit</button>       
      </Form>      
      </Row>
    </Container>
  );
}

export default LogIn;
